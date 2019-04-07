/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

import React    from "react";
import is       from "is";
import taskflow from "taskflows";
import utils    from "./utils";
import Inertia  from './helpers/Inertia';

import TweenerContext                    from "./TweenerContext";
import rtween                            from "rtween";
import ReactDom                          from "react-dom";
import {deMuxTween, muxToCss, deMuxLine} from "./helpers";

/**
 * @todo : clean & comments
 */


var isBrowserSide           = (new Function("try {return this===window;}catch(e){ return false;}"))(),
    isArray                 = is.array,
    tweenerCount            = 0,
    _live, lastTm, _running = [];

const SimpleObjectProto = ({}).constructor;

const Runner = {
	run  : function ( tl, ctx, duration, cb ) {
		let apply = ( pos, size ) => tl.go(pos / size, ctx);
		_running.push({ apply, duration, cpos: 0, cb });
		tl.go(0, ctx, true);//reset tl
		
		if ( !_live ) {
			_live  = true;
			lastTm = Date.now();
			// console.log("TL runner On");
			setTimeout(this._tick, 16);
		}
	},
	_tick: function _tick() {
		var i  = 0, o, tm = Date.now(), delta = tm - lastTm;
		lastTm = tm;
		for ( ; i < _running.length; i++ ) {
			_running[i].cpos = Math.min(delta + _running[i].cpos, _running[i].duration);//cpos
			_running[i].apply(
				_running[i].cpos, _running[i].duration
			);
			// console.log("TL runner ",_running[i][3]);
			if ( _running[i].cpos == _running[i].duration ) {
				
				_running[i].cb && setTimeout(_running[i].cb);
				_running.splice(i, 1), i--;
			}
			
		}
		if ( _running.length )
			setTimeout(_tick, 16);
		else {
			// console.log("TL runner Off");
			_live = false;
		}
	},
	
};


/**
 * asTweener decorator
 * @param argz
 * @returns {*}
 */
export default function asTweener( ...argz ) {
	
	let BaseComponent = (!argz[0] || argz[0].prototype instanceof React.Component || argz[0] === React.Component) && argz.shift(),
	    opts          = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {};
	
	if ( !(BaseComponent && (BaseComponent.prototype instanceof React.Component || BaseComponent === React.Component)) ) {
		return function ( BaseComponent ) {
			return asTweener(BaseComponent, opts)
		}
	}
	
	
	return class TweenableComp extends BaseComponent {
		static displayName = (BaseComponent.displayName || BaseComponent.name) + " (tweener)";
		
		constructor() {
			super(...arguments);
			let _static      = this.constructor;
			this._           = {
				refs       : {},
				muxByTarget: {},
			};
			this._.box       = {
				x: 100,
				y: 100,
				z: 800
			};
			this._._rafLoop  = this._rafLoop.bind(this);
			this.__isTweener = true;
			this.__isFirst   = !tweenerCount;
			tweenerCount++;
			
		}
		
		
		resetTweenable( ...targets ) {
			targets.forEach(
				( t ) => {
					// delete this._.tweenRefs[t];
					// delete this._.tweenRefCSS[t];
					this._.tweenRefMaps[t] = { ...this._.tweenRefOrigin[t] };
				}
			)
			this._updateTweenRefs();
		}
		
		/**
		 * Register tweenable element
		 * return its current style
		 * @param id
		 * @param iStyle
		 * @param iMap
		 * @param pos
		 * @param noref
		 * @param mapReset
		 * @returns {style,ref}
		 */
		tweenRef( id, iStyle, iMap, pos, noref, mapReset ) {// ref initial style
			this.makeTweenable();
			
			let _static       = this.constructor,
			    _             = this._,
			    tweenableMap  = {},
			    tweenableData = {},
			    cState        = _static.motionStates && _static.motionStates[this._.curMotionStateId];
			
			if ( !this._.tweenRefs[id] )
				this._.tweenRefTargets.push(id);
			
			if ( mapReset || !this._.tweenRefs[id] ) {
				mapReset = mapReset || !this._.tweenRefs[id];
				if ( cState && cState.refs && cState.refs[id] ) {
					iStyle = iStyle || { ...cState.refs[id][0] };
					iMap   = iMap || { ...cState.refs[id][1] };
				}
				else {
					iStyle = iStyle || {};
					iMap   = iMap || {};
				}
				
				let initials               = {};
				this._.tweenRefs[id]       = true;
				this._.muxByTarget[id]     = this._.muxByTarget[id] || {};
				this._.muxDataByTarget[id] = this._.muxDataByTarget[id] || {};
				
				
				iStyle = { ...iStyle, ...deMuxTween(iMap, tweenableMap, initials, this._.muxDataByTarget[id], this._.muxByTarget[id], true) };
				//this._.tweenRefUnits[id] = extractUnits(iMap);
				//}
				this._.tweenRefOrigin[id] = tweenableMap;
				this._.tweenRefCSS[id]    = this._.tweenRefCSS[id] || { ...iStyle };
				if ( mapReset )
					Object.assign(this._.tweenRefCSS[id], iStyle);
				this._.tweenRefCSS[id] = iStyle;
				// init / reset or get the tweenable view
				tweenableMap           = this._.tweenRefMaps[id] = !mapReset && this._.tweenRefMaps[id]
					|| Object.assign(this._.tweenRefMaps[id] || {}, initials, tweenableMap || {});
				
				//console.log(tweenableMap, iStyle, initials, this._.muxByTarget[id], this._.muxDataByTarget[id])
				//utils.mapInBoxCSS(iMap, iStyle, this._.box, this._.tweenRefUnits[id]);
				muxToCss(tweenableMap, iStyle, this._.muxByTarget[id], this._.muxDataByTarget[id], this._.box);
				
				
				//this._.refs[id] = this._.refs[id] || React.createRef();
			}
			if ( noref )
				return {
					style: { ...this._.tweenRefCSS[id] }
				};
			else
				return {
					style: { ...this._.tweenRefCSS[id] },
					ref  : node => (this._.refs[id] = node)
					,
					// __tweenMap : this._.tweenRefMaps[id],
					// __tweenCSS : this._.tweenRefCSS[id]
				};
		}
		
		rmTweenRef( id ) {
			if ( this._.tweenRefs[id] ) {
				this._.tweenRefTargets.splice(this._.tweenRefTargets.indexOf(id), 1);
				delete this._.tweenRefs[id];
				delete this._.muxByTarget[id];
				delete this._.muxDataByTarget[id];
				delete this._.tweenRefOrigin[id];
				delete this._.tweenRefCSS[id];
				delete this._.tweenRefMaps[id];
				delete this._.refs[id];
			}
			
		}
		
		// ------------------------------------------------------------
		// -------------------- Pushable anims ------------------------
		// ------------------------------------------------------------
		/**
		 * Push anims
		 * @param anim
		 * @param then
		 * @param skipInit
		 * @returns {rtween}
		 */
		pushAnim( anim, then, skipInit ) {
			var sl, initial, muxed, initials = {};
			if ( isArray(anim) ) {
				sl = anim;
			}
			else {
				sl      = anim.anims;
				initial = anim.initial;
			}
			
			if ( !(sl instanceof rtween) ) {
				// tweenLine, initials, data, demuxers
				sl = deMuxLine(sl, initials, this._.muxDataByTarget, this._.muxByTarget);
				sl = new rtween(sl, this._.tweenRefMaps);
				Object.keys(initials)
				      .forEach(
					      id => (
						      Object.assign(this._.tweenRefMaps[id], {
							      ...initials[id],
							      ...this._.tweenRefMaps[id]
						      })
					      )
				      )
			}
			
			
			// console.warn("Should start anim ", sl);
			this.makeTweenable();
			
			
			!skipInit && initial && Object.keys(initial).map(
				( id ) => this.applyTweenState(id, initial[id], anim.reset)
			);
			
			
			sl.run(this._.tweenRefMaps, () => {
				var i = this._.runningAnims.indexOf(sl);
				if ( i != -1 )
					this._.runningAnims.splice(i, 1);
				
				then && then(sl);
			});//launch
			this._.runningAnims.push(sl);
			
			
			if ( !this._.live ) {
				this._.live = true;
				//console.log("RAF On");
				requestAnimationFrame(this._._rafLoop = this._._rafLoop || this._rafLoop.bind(this));
			}
			return sl;
			
		}
		
		registerPropChangeAnim( propId, propValue, anims ) {
			this._.rtweensByProp                    = this._.rtweensByProp || {};
			this._.rtween                           = this._.rtween || new rtween();
			this._.rtweensByProp[propId]            = this._.rtweensByProp[propId] || {};
			this._.rtweensByProp[propId][propValue] = this._.rtweensByProp[propId][propValue] ||
				new rtween();
			
			this._.rtweensByProp[propId][propValue].mount(anims);
		}
		
		registerStateChangeAnim( propId, propValue, anims ) {
			this._.rtweensByStateProp                    = this._.rtweensByStateProp || {};
			this._.rtween                                = this._.rtween || new rtween();
			this._.rtweensByStateProp[propId]            = this._.rtweensByStateProp[propId] || {};
			this._.rtweensByStateProp[propId][propValue] = this._.rtweensByStateProp[propId][propValue] ||
				new rtween();
			
			this._.rtweensByStateProp[propId][propValue].mount(anims);
		}
		
		makeTweenable() {
			if ( !this._.tweenEnabled ) {
				this._.rtweensByProp       = {};
				this._.rtweensByStateProp  = {};
				this._.tweenRefCSS         = {};
				this._.tweenRefs           = {};
				this._.tweenRefMaps        = {};
				this._.tweenRefInitialData = {};
				this._.tweenEnabled        = true;
				this._.tweenRefOrigin      = {};
				this._.axes                = {};
				this._.muxDataByTarget     = this._.muxDataByTarget || {};
				this._.tweenRefDemuxed     = this._.tweenRefDemuxed || {};
				this._.tweenRefTargets     = this._.tweenRefTargets || [];
				this._.runningAnims        = this._.runningAnims || [];
				
				isBrowserSide && window.addEventListener(
					"resize",
					this._.onResize = () => {//@todo
						this._updateBox();
						this._updateTweenRefs()
					});
			}
		}
		
		// ------------------------------------------------------------
		// ------------------ Scrollable anims ------------------------
		// ------------------------------------------------------------
		
		/**
		 * Tween this tween line to 'to' during 'tm' ms using easing fn
		 * @param to {int}
		 * @param tm {int} duration in ms
		 * @param easing {function} easing fn
		 * @param tick {function} fn called at each tick
		 * @param cb {function} fn called on complete
		 */
		_runScrollGoTo( axe, to, tm, easing = x => x, tick, cb ) {
			let from   = this._.axes[axe].scrollPos,
			    length = to - from;
			
			_running.push(
				{
					apply   : ( pos, max ) => {
						let x = (from + (easing(pos / max)) * length);
						if ( this._.tweenEnabled ) {
							this._.axes[axe].tweenLines.forEach(
								sl => sl.goTo(x)
							);
							tick && tick(x);
						}
					},
					duration: tm,
					cpos    : 0,
					cb
				})
			;
			
			if ( !_live ) {
				_live  = true;
				lastTm = Date.now();
				// console.log("TL runner On");
				setTimeout(Runner._tick, 16);
			}
		}
		
		_getAxis( axe = "scrollY" ) {
			let _ = this._;
			
			_.axes[axe] = _.axes[axe] || {
				tweenLines: [],
				scrollPos : opts.initialScrollPos && opts.initialScrollPos[axe] || 0,
				targetPos : 0,
				inertia   : new Inertia({
					                        value: opts.initialScrollPos && opts.initialScrollPos[axe] || 0,
					                        ...(opts.axes && opts.axes[axe] && opts.axes[axe].inertia || {})
				                        }),
			};
			
			return _.axes[axe];
		}
		
		initAxis( axe, _inertia, scrollableArea = 0, defaultPosition ) {
			this.makeTweenable();
			this.makeScrollable();
			let _         = this._,
			    dim       = _.axes[axe],
			    scrollPos = dim ? dim.scrollPos : defaultPosition || 0,
			    targetPos = dim ? dim.targetPos : scrollPos,
			    inertia   = _inertia !== false && (
				    dim ? dim.inertia : new Inertia({// todo mk pure
					                                    value: scrollPos,
					                                    ...(_inertia || {})
				                                    })),
			    nextDescr = {
				    tweenLines: dim && dim.tweenLines || [],
				    scrollPos,
				    targetPos,
				    inertia,
				    scrollableArea
			    };
			
			dim = this._.axes[axe] = nextDescr;
			(_inertia !== false) && (dim.inertia._.stops = _inertia.stops);
		}
		
		addScrollableAnim( anim, axe = "scrollY", size ) {
			var sl,
			    _        = this._,
			    initials = {},
			    dim      = this._getAxis(axe);
			
			if ( isArray(anim) ) {
				sl = anim;
			}
			else {
				sl   = anim.anims;
				size = anim.length;
			}
			
			if ( !(sl instanceof rtween) ) {
				sl = deMuxLine(sl, initials, this._.muxDataByTarget, this._.muxByTarget);
				sl = new rtween(sl, _.tweenRefMaps);
				Object.keys(initials)
				      .forEach(
					      id => {
						      this._.tweenRefMaps[id] = this._.tweenRefMaps[id] || {},
							      Object.assign(this._.tweenRefMaps[id], {
								      ...initials[id],
								      ...this._.tweenRefMaps[id]
							      })
					      }
				      )
			}
			
			this.makeTweenable();
			this.makeScrollable();
			
			// init scroll
			dim.tweenLines.push(sl);
			dim.scrollPos      = dim.scrollPos || 0;
			dim.scrollableArea = dim.scrollableArea || 0;
			dim.scrollableArea = Math.max(dim.scrollableArea, sl.duration);
			dim.inertia.setBounds(0, dim.scrollableArea);
			sl.goTo(dim.scrollPos, this._.tweenRefMaps);
			this._updateTweenRefs();
			return sl;
		}
		
		rmScrollableAnim( sl, axe = "scrollY" ) {
			var _   = this._, found,
			    dim = this._getAxis(axe);
			let i   = dim.tweenLines.indexOf(sl);
			if ( i != -1 ) {
				dim.tweenLines.splice(i, 1);
				dim.scrollableArea = Math.max(...dim.tweenLines.map(tl => tl.duration), 0);
				dim.inertia.setBounds(0, dim.scrollableArea || 0);
				sl.goTo(0, this._.tweenRefMaps)
				found = true;
			}
			!found && console.warn("TweenAxis not found !")
		}
		
		scrollTo( newPos, ms = 0, axe = "scrollY" ) {
			if ( this._.axes ) {
				let oldPos = this._.axes[axe].targetPos,
				    setPos = pos => {
					
					    this._.axes[axe].scrollPos = pos;
					    this.componentDidScroll && this.componentDidScroll(~~pos);
					    this._updateTweenRefs()
				    }
				;
				
				newPos                     = Math.max(0, newPos);
				newPos                     = Math.min(newPos, this._.axes[axe].scrollableArea || 0);
				this._.axes[axe].targetPos = newPos;
				
				if ( !ms ) {
					this._.axes[axe].tweenLines.forEach(
						sl => sl.goTo(newPos, this._.tweenRefMaps)
					);
					setPos(newPos);
				}
				else {
					this._runScrollGoTo(axe, newPos, ms, undefined, setPos)
				}
				
				if ( !this._.live ) {
					this._.live = true;
					requestAnimationFrame(this._._rafLoop);
				}
				return !(oldPos - newPos);
			}
		}
		
		makeScrollable() {
			if ( !this._.scrollEnabled ) {
				this._.scrollEnabled = true;
				this._.scrollHook    = [];
				this._registerScrollListeners();
			}
		}
		
		
		_registerScrollListeners() {
			if ( this._.rendered ) {
				let rootNode = ReactDom.findDOMNode(this);
				
				this.__isFirst && isBrowserSide && utils.addWheelEvent(
					rootNode,
					this._.onScroll = ( e ) => {//@todo
						
						
						// check if there scrollable stuff in dom targets
						if ( this._shouldDispatch(e.target, e.deltaX * 5, e.deltaY * 5) ) {
							this.dispatchScroll(e.deltaY * 5, "scrollY");
							this.dispatchScroll(e.deltaX * 5, "scrollX");
						}
						//
						//if ( prevent ) {
						//	e.preventDefault();
						//	e.originalEvent.stopPropagation();
						//}
					}
				);
				let lastPos = {};
				isBrowserSide && utils.addEvent(
					rootNode, this._.dragList = {
						'dragstart': ( e, touch, descr ) => {//@todo
							let prevent,
							    x = this._getAxis("scrollX"),
							    y = this._getAxis("scrollY");
							x.inertia.startMove();
							y.inertia.startMove();
							lastPos.x = x.scrollPos;
							lastPos.y = y.scrollPos;
							!x.inertiaFrame && this.applyInertia(x, "scrollX");
							!y.inertiaFrame && this.applyInertia(y, "scrollY");
							
							
						},
						'drag'     : ( e, touch, descr ) => {//@todo
							
							let prevent,
							    x          = this._getAxis("scrollX"),
							    y          = this._getAxis("scrollY"),
							    deltaY     = descr._lastPos.y - descr._startPos.y,
							    deltaX     = descr._lastPos.x - descr._startPos.x,
							    headTarget = e.target, style;
							
							lastPos = lastPos || { ...descr._startPos };
							
							// check if there scrollable stuff in dom targets
							//if ( this.isAxisOut("scrollX", deltaX) )
							x.inertia.hold(lastPos.x + (-(descr._lastPos.x - descr._startPos.x) / this._.box.x) * x.scrollableArea);
							//if ( this.isAxisOut("scrollY", -deltaY) )
							y.inertia.hold(lastPos.y + (-(descr._lastPos.y - descr._startPos.y) / this._.box.y) * y.scrollableArea);
							
							
							//return !prevent;
						},
						'dropped'  : ( e, touch, descr ) => {
							this._getAxis("scrollY").inertia.release();
							this._getAxis("scrollX").inertia.release();
							//lastPos = null;
						}
					}, null,
					opts.enableMouseDrag
				)
			}
			else {
				this._.doRegister = true;
			}
		}
		
		// ------------------------------------------------------------
		// --------------- Inertia & scroll modifiers -----------------
		// ------------------------------------------------------------
		
		
		applyInertia( dim, axe ) {
			if ( dim.inertia.active ) {
				let x = dim.inertia.update();
				
				this.scrollTo(x, 0, axe);
				dim.inertiaFrame = window.requestAnimationFrame(this.applyInertia.bind(this, dim, axe));
			}
			else {
				dim.inertiaFrame = null;
				console.log("complete");
			}
		}
		
		
		dispatchScroll( delta, axe = "scrollY" ) {
			let prevent,
			    dim    = this._.axes[axe],
			    oldPos = dim && dim.scrollPos,
			    newPos = oldPos + delta;
			
			if ( dim && oldPos !== newPos ) {
				
				console.log("dispatch " + delta, this.constructor.displayName);
				dim.inertia.dispatch(delta, 100);
				!dim.inertiaFrame && this.applyInertia(dim, axe);
				
				//if ( this.scrollTo(newPos, 0, axe) )
				//	prevent = !(opts.propagateAxes && opts.propagateAxes[axe]);
				prevent = true;
			}
			
			return prevent;
		}
		
		isAxisOut( axis, v ) {
			let _   = this._,
			    dim = _.axes && _.axes[axis],
			    pos = dim && (dim.scrollPos + v);
			return !dim || (pos <= 0 || pos >= dim.scrollableArea);
		}
		
		_shouldDispatch( target, dx, dy ) {
			let style, Comp, headTarget = target, complete;
			// todo optim
			// check if there scrollable stuff in dom targets
			while ( headTarget ) {
				style = getComputedStyle(headTarget, null)
				
				Comp = utils.findReactComponent(headTarget);
				
				
				if ( Comp && Comp.__isTweener ) {
					if ( !Comp.isAxisOut("scrollX", dx) ) {
						Comp.dispatchScroll(dx, "scrollX");
						dx = 0;
					}
					if ( !Comp.isAxisOut("scrollY", dy) ) {
						Comp.dispatchScroll(dy, "scrollY")
						dy = 0;
					}
					if ( !dx && !dy )
						return;
				}
				if ( /(auto|scroll)/.test(
					style.getPropertyValue("overflow")
					+ style.getPropertyValue("overflow-x")
					+ style.getPropertyValue("overflow-y")
				)
				) {
					if (
						(dy < 0 && headTarget.scrollTop !== 0)
						||
						(dy > 0 && headTarget.scrollTop !== (headTarget.scrollHeight - headTarget.offsetHeight))
					) {
						return;
					} // let the node do this scroll
				}
				
				headTarget = headTarget.parentNode;
				if ( headTarget === document || headTarget === target )
					break;
			}
		}
		
		// ------------------------------------------------------------
		// ------------------ Motion/FSM anims ------------------------
		// ------------------------------------------------------------
		
		applyTweenState( id, map, reset ) {
			let tmap = {}, initials = {};
			deMuxTween(map, tmap, initials, this._.muxDataByTarget[id], this._.muxByTarget[id])
			Object.keys(tmap).map(
				( p ) => this._.tweenRefMaps[id][p] = (!reset && this._.tweenRefMaps[id][p] || initials[p]) + tmap[p]
			);
		}
		
		updateRefStyle( target, style, postPone ) {
			if ( isArray(target) && isArray(style) )
				return target.map(( m, i ) => this.updateRefStyle(m, style[i], postPone));
			if ( isArray(target) )
				return target.map(( m ) => this.updateRefStyle(m, style, postPone));
			
			if ( !this._.tweenRefCSS )
				this.makeTweenable();
			
			if ( !postPone && this.refs[target] ) {
				var node = this.refs[target] instanceof Element
				           ? this.refs[target]
				           : ReactDom.findDOMNode(
						this.refs[target]);
				node && Object.assign(node.style, style);
			}
			this._.tweenRefCSS[target] = this._.tweenRefCSS[target] || {};
			Object.assign(this._.tweenRefCSS[target], style);
		}
		
		//
		//shouldApplyScroll( to, from ) {
		//	return this._.scrollHook.reduce(( r, hook ) => (!r
		//	                                                ? false
		//	                                                : hook(to, from)), true)
		//		|| super.shouldApplyScroll && super.shouldApplyScroll(to, from);
		//}
		
		_updateBox() {
			var node = ReactDom.findDOMNode(this);
			if ( node ) {
				this._.box.inited = true;
				this._.box.x      = node.offsetWidth;
				this._.box.y      = node.offsetHeight;
			}
		}
		
		getTweenableRef( id ) {
			return this._.refs[id] && ReactDom.findDOMNode(this._.refs[id]);
		}
		
		_rafLoop() {
			this._updateTweenRefs();
			if ( this._.runningAnims.length )
				requestAnimationFrame(this._._rafLoop);
			else {
				this._.live = false;
			}
		}
		
		_updateTweenRefs() {
			if ( this._.tweenEnabled ) {
				for ( var i = 0, target, node; i < this._.tweenRefTargets.length; i++ ) {
					target = this._.tweenRefTargets[i];
					muxToCss(this._.tweenRefMaps[target], this._.tweenRefCSS[target], this._.muxByTarget[target], this._.muxDataByTarget[target], this._.box);
					node = this._.tweenEnabled && target == "__root"
					       ? ReactDom.findDOMNode(this)
					       : this.getTweenableRef(target);
					node && Object.assign(node.style, this._.tweenRefCSS[target]);
				}
			}
		}
		
		componentWillUnmount() {
			let node = ReactDom.findDOMNode(this);
			if ( this._.tweenEnabled ) {
				this._.tweenEnabled = false;
				window.removeEventListener("resize", this._.onResize);
			}
			
			if ( this._.scrollEnabled ) {
				this._.scrollEnabled = false;
				//this._.axes          = undefined;
				node && this._.onScroll && utils.rmWheelEvent(
					node,
					this._.onScroll);
				node && this._.dragList && utils.removeEvent(node
					, this._.dragList)
			}
			
			super.componentWillUnmount && super.componentWillUnmount(...arguments);
		}
		
		componentDidMount() {
			let _static = this.constructor;
			
			this._.rendered = true;
			if ( this._.tweenEnabled ) {
				// debugger;
				this._updateBox();
				this._updateTweenRefs();
			}
			if ( this._.delayedMotionTarget ) {
				this.goToMotionStateId(this._.delayedMotionTarget);
				delete this._.delayedMotionTarget;
			}
			if ( _static.scrollableAnim ) {
				if ( is.array(_static.scrollableAnim) )
					this.addScrollableAnim(_static.scrollableAnim);
				else
					Object.keys(_static.scrollableAnim)
					      .forEach(
						      axe => this.addScrollableAnim(_static.scrollableAnim[axe], axe)
					      )
			}
			if ( this._.doRegister || this.__isFirst ) {
				
				this._registerScrollListeners();
				this._.doRegister = false;
			}
			super.componentDidMount && super.componentDidMount(...arguments);
		}
		
		componentDidUpdate( prevProps, prevState ) {
			
			if ( this._.tweenEnabled ) {
				this._updateBox();
				this._updateTweenRefs();
				
				this._.rtweensByProp
				&& Object.keys(prevProps)
				         .forEach(
					         ( k ) =>
						         this._.rtweensByProp[k]
						         && (this.props[k] !== prevProps[k])
						         && this._.rtweensByProp[k][this.props[k]]
						         && this.pushAnim(this._.rtweensByProp[k][this.props[k]]/*get current pos*/),
					         this
				         );
				this._.rtweensByStateProp
				&& prevState
				&& Object.keys(prevState)
				         .forEach(
					         ( k ) =>
						         this._.rtweensByStateProp[k]
						         && (this.state[k] !== prevState[k])
						         && this._.rtweensByStateProp[k][this.state[k]]
						         && this.pushAnim(this._.rtweensByStateProp[k][this.state[k]]/*get current pos*/),
					         this
				         );
			}
			super.componentDidUpdate && super.componentDidUpdate(...arguments);
			// return;
		}
		
		render() {
			//console.log('render', this.constructor.name)
			return <TweenerContext.Provider value={ this }>
				{ super.render() }
			</TweenerContext.Provider>;
		}
	}
}
