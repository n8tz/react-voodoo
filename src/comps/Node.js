/*
 *
 * Copyright (C) 2020 Nathanael Braun
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */

import deepEqual from "fast-deep-equal";
import is        from "is";
import React     from 'react';
import shortid   from 'shortid';

import TweenerContext from "./TweenerContext";

import { isFunctionalComponent } from '../utils/react';

function setTarget( anims, target ) {
    return anims.map(
        tween => ( {
            ...tween,
            target
        } )
    )
}

//@todo : rewrite with hooks
export default class Node extends React.Component {
    
    static propTypes = {};
    state            = {};
    __tweenableId    = shortid.generate();
    
    componentWillUnmount() {
        if ( this._tweenAxisObj ) {
            Object.keys(this._tweenAxisObj)
                  .forEach(axe => this._currentTweener.rmScrollableAnim(this._tweenAxisObj[ axe ], axe));
            
        }
        if ( this._currentTweener ) {
            this._currentTweener.rmTweenRef(this.__tweenableId)
            this._currentTweener.setRootRef(undefined);
        }
        delete this._currentTweener;
        delete this._tweenAxisObj;
        delete this._previousScrollable;
    }
    
    render() {
        let {
                children,
                id         = this.__tweenableId,
                style, initial, pos, noRef, reset, tweener,
                isRoot,
                axes,
                refProp    = "nodeRef",
                tweenLines = axes,
                tweenAxis  = tweenLines,
                ...props
            } = this.props;
        return <TweenerContext.Consumer>
            {
                parentTweener => {
                    
                    
                    parentTweener = tweener || parentTweener;
                    
                    if ( !parentTweener ) {
                        console.error("No voodoo tweener found in the context, is there any parent with asTweener ?")
                        return <React.Fragment/>;
                    }
                    //console.warn("render : ", this.__tweenableId, this._currentTweener,
                    // parentTweener, this._currentTweener !== parentTweener)
                    let twRef = parentTweener.tweenRef(id, children.props && children.props.style, style || initial,
                                                       pos, noRef),
                        axisItemsChange;
                    
                    //console.warn("render2 : ", this.__tweenableId,
                    // this._currentTweener, parentTweener, this._currentTweener !==
                    // parentTweener)
                    
                    
                    if ( this._currentTweener !== parentTweener || this._previousScrollable !== tweenAxis ) {
                        axisItemsChange = this._tweenAxis !== tweenAxis && !( this._tweenAxis && deepEqual(tweenAxis, this._tweenAxis) );
                        if ( this._currentTweener && axisItemsChange ) {
                            this._tweenAxisObj && Object.keys(this._tweenAxisObj)
                                                        .forEach(axe => this._currentTweener.rmScrollableAnim(this._tweenAxisObj[ axe ], axe));
                            
                        }
                        //console.log(twRef, axisItemsChange, this._tweenAxis, tweenAxis)
                        if ( this._currentTweener && this._currentTweener !== parentTweener ) {
                            this._currentTweener.rmTweenRef(id);
                        }
                        if ( axisItemsChange ) {
                            this._tweenAxis = tweenAxis;
                            if ( tweenAxis && is.array(tweenAxis) )
                                this._tweenAxisObj = { scrollY: parentTweener.addScrollableAnim(setTarget(tweenAxis, id)) };
                            else
                                this._tweenAxisObj = tweenAxis && Object.keys(tweenAxis)
                                                                        .reduce(( h, axe ) => ( h[ axe ] = parentTweener.addScrollableAnim(setTarget(tweenAxis[ axe ], id), axe), h ), {});
                            twRef = parentTweener.tweenRef(id, children.props && children.props.style, style || initial,
                                                           pos, noRef)
                        }
                        
                        twRef.style = { ...parentTweener._updateTweenRef(id, true) };
                        
                        if ( this.props.hasOwnProperty("isRoot") ) {
                            this._currentTweener && this._currentTweener.setRootRef(undefined);
                            tweener.setRootRef(id);
                        }
                        
                        this._currentTweener     = parentTweener;
                        this._previousScrollable = tweenAxis;
                        
                    }
                    else if ( twRef ) {
                        twRef.style = { ...parentTweener._updateTweenRef(id, true) };
                    }
                    
                    let RefChild = React.Children.only(children);
                    
                    if ( RefChild && React.isValidElement(RefChild) ) {//todo
                        this._lastRef = twRef;
                        
                        if ( isFunctionalComponent(RefChild.type) )
                            return <RefChild.type
                                { ...props }
                                { ...RefChild.props }
                                { ...twRef }
                                ref={ undefined }
                                {
                                    ...{
                                        [ refProp ]: twRef.ref
                                    }
                                }
                            />;
                        
                        return <RefChild.type
                            { ...props }
                            { ...RefChild.props }
                            { ...twRef }/>;
                        
                    }
                    else {
                        console.error("Invalid voodoo Node child : ", id)
                    }
                    return <div>Invalid</div>;
                }
            }
        </TweenerContext.Consumer>;
    }
}

Node.div = ( { children, className, ...props } ) => {
    return <Node { ...props }>
        <div className={ className }>{ children }</div>
    </Node>;
}