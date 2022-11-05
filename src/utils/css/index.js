/*
 *   The MIT License (MIT)
 *   Copyright (c) 2020. Nathanael Braun
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */


import {addCss}    from "../tweenTools";
import {
	expandShorthandProperty, isShorthandProperty, isValidDeclaration, props
}                  from "./cssUtils";
import cssDemuxers from "./demux/(*).js";

import primitiveTypes, {int, multi, number, ratio, color, any} from "./demux/typed/(*).js";

const cssDemux = {
	...cssDemuxers,
	height           : number,
	width            : number,
	top              : number,
	left             : number,
	right            : number,
	bottom           : number,
	marginTop        : number,
	marginLeft       : number,
	marginRight      : number,
	marginBottom     : number,
	paddingTop       : number,
	paddingLeft      : number,
	paddingRight     : number,
	paddingBottom    : number,
	borderRadius     : number,
	borderTopColor   : color,
	borderLeftColor  : color,
	borderRightColor : color,
	borderBottomColor: color,
	borderTopWidth   : number,
	borderLeftWidth  : number,
	borderRightWidth : number,
	borderBottomWidth: number,
	transformOrigin  : multi(2),
	zIndex           : int,
	opacity          : ratio,
};


export function getMuxerTypeOfProperty( property ) {
	let type  = props[property],
	    types = type && type.types;
	if ( !types ) {
		return any;
	}
	for ( let i = 0; i < types.length; i++ ) {
		switch ( types[i] ) {
			case "length":
			case "number":
			case "length-percentage-calc":
				return number;
			case "integer":
				return int;
			case "color":
				return color;
		}
	}
	return any;
};

export function clearTweenableValue( cssKey, twKey, tweenableMap, cssMap, dataMap, muxerMap, keepValues ) {
	let path = twKey.split('_'), tmpKey;// not optimal at all
	muxerMap[path[0]]?.release(twKey, tweenableMap, cssMap, dataMap, muxerMap, keepValues)
}

/**
 * Interpolate float/int values to css basing the css prop type
 * @param tweenable {Object} map of tweenable values
 * @param css {Object} map of css value to be push in DOM
 * @param demuxers {Object} map of numeric to css converter
 * @param data {Object} map of converters contexts
 * @param box {Object} xyz of the parent viewbox
 */
export function muxToCss( tweenable, css, demuxers, data, box ) {
	Object.keys(demuxers)
	      .forEach(
		      ( key ) => {
			      demuxers[key].demux(key, tweenable, css, data, box)
		      }
	      )
}

/**
 * Instanciate interpolators & init css/tweenable values basing the tween
 * @param tween
 * @param deMuxedTween
 * @param initials
 * @param data
 * @param demuxers
 * @param noPropLock
 * @param reOrder
 * @returns {{}}
 */
export function deMuxTween( tween, deMuxedTween, initials, data, demuxers, noPropLock, reOrder ) {
	let fTween = {}, excluded = {};
	tween && Object.keys(tween)
	               .forEach(
		               ( key ) => {
			               if ( cssDemux[key] )
				               fTween[key] = tween[key];
			               else if ( isValidDeclaration(key, tween[key]) ) {
				
				               if ( isShorthandProperty(key) ) {
					               expandShorthandProperty(key, tween[key], fTween);
				               }
				               else fTween[key] = tween[key];
			               }
			               else excluded[key] = tween[key];
		               });
	
	fTween && Object.keys(fTween)
	                .forEach(
		                ( key ) => {
			                if ( cssDemux[key] ) {//key, value, target, data, initials
				                (demuxers[key] = cssDemux[key]).mux(key, fTween[key], deMuxedTween, data, initials, noPropLock, reOrder)
			                }
			                else
				                (demuxers[key] = getMuxerTypeOfProperty(key)).mux(key, fTween[key], deMuxedTween, data, initials, noPropLock, reOrder)
		                }
	                );
	return excluded;
}

/**
 * Init/update muxers & initial css values of targets in a tween line / axis
 * @param tweenLine
 * @param initials
 * @param data
 * @param demuxers
 * @param noPropLock
 * @returns {*}
 */
export function deMuxLine( tweenLine, initials, data, demuxers, noPropLock ) {
	noPropLock       = noPropLock && {};
	let allPropsById = {},
	    twAxis       = tweenLine.reduce(
		    ( line, tween ) => {
			    let demuxedTween       = {};
			    demuxers[tween.target] = demuxers[tween.target] || {};
			    initials[tween.target] = initials[tween.target] || {};
			    data[tween.target]     = data[tween.target] || {};
			
			    if ( !tween.type || tween.type === "Tween" ) {
				    !noPropLock && addCss(allPropsById[tween.target] = allPropsById[tween.target] || {}, tween.apply);
				    //console.log("merged", tween.apply)
				    deMuxTween(tween.apply, demuxedTween, initials[tween.target], data[tween.target], demuxers[tween.target], true);
				    line.push(
					    {
						    ...tween,
						    apply: demuxedTween
					    });
			    }
			    else line.push({ ...tween });
			    return line
		    },
		    []
	    );
	!noPropLock && Object.keys(allPropsById)
	                     .forEach(
		                     id => deMuxTween(allPropsById[id], {}, {}, data[id], demuxers[id])
	                     )
	;
	return twAxis;
}