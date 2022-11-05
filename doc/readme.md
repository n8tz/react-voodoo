<h1 align="center">draft react-voodoo doc</h1>

___

<!-- tweener, child, tools, Draggable, Component, Node, context, Axis, dom-->

* Please check the sample for latest API ( https://github.com/react-voodoo/react-voodoo-samples )

## Api


## Concepts & syntax

### Axis

In react-voodoo Tween axis are scrollable / swipeable arrays of relatives tween. <br>
All tween are dynamically composed by [tween-axis](https://github.com/react-voodoo/tween-axis), which make them additive & relative, so they can be applied simultaneously on same values.<br>
react-voodoo manage the multiples tween-axis & theirs application basing on the react bindings & the browser events.<br>

The same way multiple animations can operate on the same node / properties, multiple Axis can update the same node / properties.   

### Units 

Voodoo tweener allow using multiples units simultaneously on the same properties. 

Example : 

```jsx harmony
// ...
    <Voodoo.Node style={
    	{
            // the tweener deal with multiple units 
            // it will use css calc fn if there's more than 1 unit used 
            width : ["50%", "10vw", "-50px", ".2box"],
        }
    }>
    </Voodoo.Node>
// ...
```

Voodoo tweener add 3 client side only units : 
 - (float)box : 1box = (width or height) of the 1st parent with [asTweener](readme.md#astweener);
 - (float)bh : 1bh = height of the 1st parent with [asTweener](readme.md#astweener);
 - (float)bw : 1bw = width of the 1st parent with [asTweener](readme.md#astweener);
<!-- - (float)bz : 1bz = perspective of the 1st parent with [asTweener]();-->

* These units are calculated dynamically & updated when the windows trigger resize events

### Styles syntax

All styles use camelcase css in js syntax except for transform & filter.

```jsx harmony
let style = {
        
        height : "50%",
        
        // the tweener deal with multiple units 
        // it will use css calc fn if there's more than 1 unit used 
        width : ["50%", "10vw", "-50px", ".2box"],

        // transform can use multiple "layers"
        transform: [
            {
                // use rotate(X|Y|Z) & translate(X|Y|Z)
                rotateX:"25deg"
            }, 
            {
                translateZ: "-.2box"
            }
        ],
        filter   : {
            sepia: 100
        },
        
        //boxShadow      : "12px 12cm 2px 1px rgba(0, 0, 255, .2), inset 5px 5px red"
        boxShadow      : {
            blurRadius  : 30,
            color       : "rgba(0, 0, 255, .2)",// default is black
            inset       : false,// only value not relative
            offsetX     : "-20em",
            offsetY     : -20,
            spreadRadius: 1
        },
    
}
```

### tween syntax

```jsx harmony
let anim        = [
	{
		// target tween ref id ( optional if used as tweenAxis on a TweenRef ) 
		target: "someTweenRefId",
		
		// tween start position
		from    : 0,
		
		// tween duration 
		duration: 500,
		
		// function or easing fn id from [d3-ease](https://github.com/d3/d3-ease)
		easeFn  : "easeCircleIn",
		
		// relative css values to be applied  
		apply   : {
			// Same syntax as the styles
			transform: [{}, {
				translateZ: "-.2box"
			}]
		}
	}
];
```


### tween events syntax

```jsx harmony
let anim        = [
	{
	    type:'Event',

		// tween start position
		from    : 0,

		// watched duration
		duration: 500,
		
		// triggered when axis has scrolled in the Event period 
		// delta : [-1,1] is the update inside the Event period
		entering:(delta)=>false,
		
		// triggered when axis has scrolled in the Event period
		// newPos, precPos : [0,1] position inside the Event period
		// delta : [-1,1] is the update inside the Event period
		moveTo:(newPos, precPos, delta)=>false,
		
		// triggered when axis has scrolled out the Event period
		// delta : [-1,1] is the update inside the Event period
		leaving:(delta)=>false
	}
];
```


## React syntax ( using Hooks )

```jsx harmony

import React from "react";
import Voodoo from "react-voodoo";
import {itemTweenAxis, pageTweenAxisWithTargets} from "./somewhere";

const Sample = ( {} ) => {
    const //[parentTweener]      = Voodoo.hook(true),
          [tweener, ViewBox]   = Voodoo.hook();

    React.useEffect(
        e => tweener?.watchAxis("scrollY", (pos)=>doSomething()),
        [tweener]
    )

		return <div>
			<Voodoo.Axis
			    // Tween axis Id
				id={"scrollY"}
				
				// default start position
				defaultPosition={100}
				
				// Global scrollable tween with theirs Node target ids
                items={pageTweenAxisWithTargets}
                
                // size of the scrollable window for drag synchronisation
				scrollableWindow={ 200 }
				
				// optional bounds ( inertia will target them if target pos is out )
				bounds={ { min : 100, max : 900 } }
				 
				// default length of this scrollable axis
				size={ 1000 }
				 
				// inertia cfg ( false to disable it ) 
				inertia={
						{
							// called when inertia is updated
							// should return instantaneous move to do if wanted
							shouldLoop: ( currentPos, delta ) => ( currentPos > 500 ? -500 : null ),

                            // called when inertia know where it will end ( when the user stop dragging )
                            willEnd  : ( targetPos, targetDelta, duration ) => {},
                            
							// called when inertia know where it will snap ( when the user stop dragging )   
							willSnap  : ( currentSnapIndex, targetWayPointObj ) => {},							
							
							// called when inertia end
							onStop  : ( pos, targetWayPointObj ) => {},
							
							// called when inertia end on a snap
							onSnap  : ( snapIndex, targetWayPointObj ) => {},
                            
							// list of waypoints object ( only support auto snap for now ) 
							wayPoints : [{ at: 100 }, { at: 200 }]
						}
					}
			/>
			
            <Voodoo.Node
                id={"testItem"} // optional id
                style={
                	{
                		// css syntax + voodoo tweener units & transform management 
                	}
                }
                // Scrollable tween with no id required ( it will be ignored )
                // * will use scrollY axis as default                 
                axes={
                	{
                		scrollY : itemTweenAxis
                	}
                } 
                onClick={
                	(e, tweener)=>{
                		// start playing an anim
                	    tweener.pushAnim(
                                // make all tween target "testItem"
                                tweenTools.target(pushIn, "testItem")
                            ).then(
                            	(tweenAxis) => {
                                   // doSomething next
                                }
                            );
                    }
                }
            >
                <div>
                    Some content to tween
                </div>
            </Voodoo.Node>
		</div>;
    }
}

```

## Syntax Using decorators
### asTweener

Return a react-voodoo tweener component composing the target React component

The resulting component will have the tweener hooks

```jsx harmony

import React from "react";
import Voodoo from "react-voodoo";

@Voodoo.tweener(
	{
	    // max click tm in ms before a click become a drag
		maxClickTm        : 200,
		// max drag offset in px before a click become a drag
		maxClickOffset    : 100,
		
		// mouse scroll force
		wheelRatio        : 5,
		
		// only apply 1 drag direction  
		dragDirectionLock : false,
		
		// allow dragging with mouse
		enableMouseDrag   : false
	}
)
export default class MyTweenerComp extends React.Component{
	/**
	* Hook to determine if this component should apply a scroll event
	* ( if not, the parent tweener / scrollable node will apply it )
    * @param axisId
    * @param delta
    * return {boolean|undefined}
    */
	componentShouldScroll(axisId, delta){
		
	}
	/**
	* Hook to change the targets order of scroll & drag events
	*
	* The returning array could also contain tween refs id & dom node id
	*
    * @param targets {array} array of node & react elements (default is all parents of the touch/mouse event)
    * return {array}
    */
	hookScrollableTargets( targets ) {
	    return ["myTweenRefId", ...targets];
	}
	/**
	* did scroll event
    * @param pos
    * @param axisId
    */
	componentDidScroll( pos, axisId ) {
	}
	/**
	* did resize event
    * @param pos
    * @param axisId
    */
	windowDidResize( event ) {
	}
}
```

### Voodoo.child

Hoc to use a specified tweener in a component childs ( by default tweenRefs are manager by theirs first tweener parent )

```jsx harmony

import React from "react";
import Voodoo from "react-voodoo";

@Voodoo.child
export default class MyTweenerComp extends React.Component{
	render(){}
}

// use <MyTweenerComp tweener={tweenerComponent}/>
```

## tweenTools

The package expose some tween & css utils

```jsx harmony
/**
 * add any css val with multiple units 
 * @param val1
 * @param val2
 * @returns {Array}
 */
export function cssAdd( val1, val2, ...argz ) {}

/**
 * Multiply any css val with multiple unit
 * @param val1
 * @param val
 * @returns {Array}
 */
export function cssMult( val1, val ) {}

/**
* Apply an offset on all the given tween
* @param items
* @param start
*/
export function offset( items, start = 0 ) {}

/**
* Scale a tween collection to the specified duration 
* @param items
* @param duration
* @param withOffset
* @returns {(T | {duration: number, from: number})[]}
*/
export function scale( items, duration = 0, withOffset ) {}

/**
* Reverse an array of tween ( order & values )
* @param items
* @returns {(T | {apply: (*|string), from: number})[]}
*/
export function reverse( items ) {}

/**
* Add specified target to all tweens
* @param items
* @param target
* @returns {(T | {target: *})[]}
*/
export function target( items, target ) {}


/**
* Shift transforms of the specified tween array
* @param items
* @param shift
*/
export function shiftTransforms( items, shift = 1 ) {}

```

[![*](https://www.google-analytics.com/collect?v=1&tid=UA-82058889-1&cid=555&t=event&ec=project&ea=view&dp=%2Fproject%2Freact-voodoo&dt=doc)](#)