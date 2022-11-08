

const path    = require('path'),
      TIMEOUT = 5000;

import { expect }        from 'chai';
import { mount, render } from 'enzyme';
import React             from 'react';

module.exports = function ( Voodoo ) {
    
    describe("Css styles : ", () => {
        
        it('should support Hooks', function () {
            //console.log(':::31: ', Voodoo);
            
            const MyComp = Voodoo.tweener(() => {
                const tweener = Voodoo.useTweener();
                return <div className={ "container" }>
                    <Voodoo.Node id="card"
                                 initial={ {
                                     width: ["50%", "50px"]
                                 } }>
                        <div className={ "card" } style={ { height: '100px' } }>
                            test
                        </div>
                    </Voodoo.Node>
                </div>;
            })
            
            
            const wrapper = render(<MyComp/>);
            expect(wrapper.find('.card')[ 0 ].attribs.style).to.include('width:calc(50% + 50px)');
        });
        
        it('should support multiple css units', function () {
            //console.log(':::31: ', Voodoo);
            @Voodoo.tweener
            class MyComp extends React.Component {
                render() {
                    return <div className={ "container" }>
                        <Voodoo.Node id="card"
                                     initial={ {
                                         width: ["50%", "50px"]
                                     } }>
                            <div className={ "card" } style={ { height: '100px' } }>
                                test
                            </div>
                        </Voodoo.Node>
                    </div>;
                }
            }
            
            const wrapper = render(<MyComp/>);
            expect(wrapper.find('.card')[ 0 ].attribs.style).to.include('width:calc(50% + 50px)');
        });
        it('should support switching styles', function ( done ) {
            this.timeout(TIMEOUT);
            
            @Voodoo.tweener
            class MyComp extends React.Component {
                state = {
                    initial: {
                        width    : "50px",
                        transform: {
                            rotateX: 20
                        }
                    }
                };
                
                componentDidMount() {
                    setTimeout(
                        tm => this.setState({
                                                initial: {
                                                    height   : "50px",
                                                    transform: {
                                                        rotateY: 20
                                                    }
                                                }
                                            }), 10
                    );
                }
                
                render() {
                    return <div className={ "container" }>
                        <Voodoo.Node id="card"
                                     initial={ this.state.initial }>
                            <div className={ "card" }>
                                test
                            </div>
                        </Voodoo.Node>
                    </div>;
                }
            }
            
            const wrapper = mount(<MyComp/>);
            setTimeout(
                tm => {
                    try {
                        //console.log(wrapper.find('.card').html())
                        expect(wrapper.find('.card').getDOMNode(0).style.height).to.equal("50px");
                        expect(wrapper.find('.card').getDOMNode(0).style.transform).to.equal("rotateY(20deg)");
                        expect(wrapper.find('.card').getDOMNode(0).style).to.not.have.any.keys('width');
                        done();
                    } catch ( e ) {
                        done(e)
                    }
                },
                600
            )
        });
        it('should support switching styles 2', function ( done ) {
            this.timeout(TIMEOUT);
            
            @Voodoo.tweener
            class MyComp extends React.Component {
                state = {
                    initial: {
                        width    : "50px",
                        boxShadow: {
                            blurRadius  : 30,
                            color       : "rgba(0, 0, 255, .5)",
                            inset       : false,
                            offsetX     : -20,
                            offsetY     : -20,
                            spreadRadius: 1
                        },
                    }
                };
                
                componentDidMount() {
                    setTimeout(
                        tm => this.setState({
                                                initial: {
                                                    height: "50px",
                                                }
                                            }), 10
                    );
                }
                
                render() {
                    return <div className={ "container" }>
                        <Voodoo.Node id="card"
                                     initial={ this.state.initial }>
                            <div className={ "card" }>
                                test
                            </div>
                        </Voodoo.Node>
                    </div>;
                }
            }
            
            const wrapper = mount(<MyComp/>);
            setTimeout(
                tm => {
                    try {
                        console.log(wrapper.find('.card').html())
                        expect(wrapper.find('.card').getDOMNode(0).style.height).to.equal("50px");
                        //expect(wrapper.find('.card').getDOMNode(0).style.transform).to.equal("rotateY(20deg)");
                        expect(wrapper.find('.card').getDOMNode(0).style).to.not.have.any.keys('box-shadow');
                        done();
                    } catch ( e ) {
                        done(e)
                    }
                },
                600
            )
        });
        it('should support switching styles & anims ', function ( done ) {
            this.timeout(TIMEOUT);
            
            
            @Voodoo.tweener
            class MyComp extends React.Component {
                state = {
                    initial: {
                        width: "50px"
                    },
                    
                    scrollLine: [{
                        apply   : { transform: { translateY: "50px" } },
                        duration: 100,
                        from    : 0,
                        target  : "card"
                    }]
                };
                
                componentDidMount() {
                    setTimeout(
                        tm => this.setState(
                            {
                                initial   : { height: "50px" },
                                scrollLine: [{
                                    duration: 100,
                                    from    : 0,
                                    apply   : { width: "50px" },
                                    target  : "card"
                                }]
                            }), 200
                    );
                }
                
                render() {
                    return <div className={ "container" }>
                        <Voodoo.Axis
                            axe={ "scrollY" }
                            items={ this.state.scrollLine }
                            defaultPosition={ 100 }
                        />
                        <Voodoo.Node id="card"
                                     initial={ this.state.initial }>
                            <div className={ "card" }>
                                test
                            </div>
                        </Voodoo.Node>
                    </div>;
                }
            }
            
            const wrapper = mount(<MyComp/>);
            setTimeout(
                tm => {
                    try {
                        //console.log(wrapper.find('.container').html())
                        expect(wrapper.find('.card').getDOMNode(0).style.height).to.equal("50px");
                        expect(wrapper.find('.card').getDOMNode(0).style.width).to.equal("50px");
                        done();
                    } catch ( e ) {
                        done(e)
                    }
                },
                2000
            )
        });
        it('should support switching scrollAxis', function ( done ) {
            this.timeout(TIMEOUT);
            let redrawTm;
            
            @Voodoo.tweener
            class MyComp extends React.Component {
                state = {
                    initial   : {
                        height: ["100%", "0px", "-16vh"],
                    },
                    scrollLine: [{
                        apply   : {
                            height: ["-100%", "200px", "16vh"]
                        },
                        duration: 100,
                        from    : 0,
                        target  : "card"
                    }]
                };
                
                componentDidMount() {
                    
                    setTimeout(
                        tm => this.setState({
                                                initial   : {
                                                    height: ["100%", "0px", "0vh"],
                                                },
                                                scrollLine: [{
                                                    apply   : {
                                                        height: ["-100%", "100px", "16vh"]
                                                    },
                                                    duration: 100,
                                                    from    : 0,
                                                    target  : "card"
                                                }]
                                            }),
                        50
                    );
                    setTimeout(
                        tm => this.props.tweener.scrollTo(0, 100)
                    );
                }
                
                render() {
                    return <div className={ "container" }>
                        <Voodoo.Axis
                            axe={ "scrollY" }
                            items={ this.state.scrollLine }
                            defaultPosition={ 100 }
                        />
                        <Voodoo.Node id="card"
                                     initial={ this.state.initial }>
                            <div className={ "card" }>
                                { this.props.value }
                            </div>
                        </Voodoo.Node>
                    </div>;
                }
            }
            
            const wrapper = mount(<MyComp/>);
            setTimeout(
                tm => {
                    console.log(wrapper.find('.container').html())
                    //expect(wrapper.find('.card').getDOMNode(0).style.transform).to.equal('translateY(500px)');
                    done();
                },
                600
            )
            
        });
        
    });
    
};