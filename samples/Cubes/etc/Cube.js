/*
 *
 * Copyright (C) 2019 Nathanael Braun
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
 */

import React                            from "react";
import {asTweener, TweenAxis, TweenRef} from "react-voodoo";

import "./Cube.scss"

/**
 * This is an experimental lib & a very alpha demo
 * Probably not the simpler methods
 */

const initialBallStyle = {
	position: "absolute",
	display : "inline-block",
	cursor  : "pointer",
	overflow: "hidden",
	top     : "100%",
	left    : "100%",
	
};

@asTweener({ enableMouseDrag: true })
export default class Cube extends React.Component {
	root = React.createRef();
	
	static defaultProps = {
		defaultPosition: {
			x: .5,
			y: .5
		},
		style          : initialBallStyle,
		color          : "black"
	};
	state               = {};
	nextTarget          = {};
	
	
	static getDerivedStateFromProps( props, state ) {
		let { color, style, defaultPosition } = props;
		return {
			facesStyle: {
				front : {
					position       : "absolute",
					width          : "100%",
					height         : "100%",
					backgroundColor: color,
					opacity        : .5,
					transform      : { rotateY: 0, translateZ: "5vh" }
				},
				right : {
					position       : "absolute",
					width          : "100%",
					height         : "100%",
					backgroundColor: color,
					opacity        : .5,
					transform      : { rotateY: 90, translateZ: "5vh" }
				},
				back  : {
					position       : "absolute",
					width          : "100%",
					height         : "100%",
					backgroundColor: color,
					opacity        : .5,
					transform      : { rotateY: 180, translateZ: "5vh" }
				},
				left  : {
					position       : "absolute",
					width          : "100%",
					height         : "100%",
					backgroundColor: color,
					opacity        : .5,
					transform      : { rotateY: -90, translateZ: "5vh" }
				},
				top   : {
					position       : "absolute",
					width          : "100%",
					height         : "100%",
					backgroundColor: color,
					opacity        : .5,
					transform      : { rotateX: 90, translateZ: "5vh" }
				},
				bottom: {
					position       : "absolute",
					width          : "100%",
					height         : "100%",
					backgroundColor: color,
					opacity        : .5,
					transform      : { rotateX: -90, translateZ: "5vh" }
				}
			},
			cubeStyle : {
				position      : "absolute",
				width         : "10vh",
				height        : "10vh",
				left          : (defaultPosition.x * 100) + "%",
				top           : (defaultPosition.y * 100) + "%",
				transformStyle: "preserve-3d",
				transform     : [
					{
						translateX: "-50%",
						translateY: "-50%",
						rotateX   : "20deg"
					},
				]
			},
			axis      : {
				scrollX: [
					{
						from    : 0,
						duration: 300,
						target  : "root",
						apply   : {
							transform: {
								rotateY: "1080deg"
							},
						}
					}
				],
				scrollY: [
					...['front', 'back', 'left', 'right', 'top', 'bottom'].map(
						target => ({
							from    : 0,
							duration: 100,
							target,
							apply   : {
								transform: [{}, {
									translateZ: "5vh"
								}],
							}
						})
					)
				]
			}
		}
	}
	
	render() {
		let { facesStyle, cubeStyle, axis } = this.state;
		return <TweenRef.div className={"Cube"}
		                     initial={cubeStyle}
		                     id={"root"}>
			<TweenAxis axe={"scrollY"} defaultPosition={13} items={axis.scrollY}/>
			<TweenAxis axe={"scrollX"} defaultPosition={100 + 20}
			           items={axis.scrollX}
			           scrollableWindow={10}
			           inertia={
				           {
					           shouldLoop: (( v, d ) => {
						           if ( d < 0 && ~~(d + v) <= 100 ) {
							           return 100;
						           }
						           if ( d > 0 && ~~(d + v) >= 200 ) {
							           return -100;
						           }
					           }),
				           }
			           }/>
			
			<TweenRef.div id={"front"} initial={facesStyle.front} className={"face"}/>
			<TweenRef.div id={"back"} initial={facesStyle.back} className={"face"}/>
			<TweenRef.div id={"right"} initial={facesStyle.right} className={"face"}/>
			<TweenRef.div id={"left"} initial={facesStyle.left} className={"face"}/>
			<TweenRef.div id={"top"} initial={facesStyle.top} className={"face"}/>
			<TweenRef.div id={"bottom"} initial={facesStyle.bottom} className={"face"}/>
		
		</TweenRef.div>;
	}
}