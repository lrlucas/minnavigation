import React, { Component } from 'react'
import {TweenLite, TweenMax, TimelineLite,Expo} from 'gsap/all'

 class Header extends Component {

    constructor(props){

        super(props);

        this.titulo = null;

    }

    componentDidMount(){
        
        const $ = window.$;
        var ti = new TimelineLite({paused: true});

        this.titulo = new TweenMax
        .from(".titulo h1",2, { delay:2.2,opacity:-0.8,y:20, ease: Expo.easeInOut })

        ti.to(".one",0.8,{
            y:6,
            rotation:45,
            ease: Expo.easeInOut
        });

        ti.to(".two",0.8,{
            y:-6,
            rotation:-45,
            ease: Expo.easeInOut,
            delay:-0.8
        });

        ti.to(".menu", 2,{
            top:"0%",
            ease: Expo.easeInOut,
            delay:-2
        });

        ti.staggerFrom(".menu ul li", 2,{
            x:-200,
            opacity:0,
            ease: Expo.easeOut
        },0.3);

        ti.reverse();

        $(document).on("click", ".toggle-btn", function(){

            ti.reversed(!ti.reversed())
        })

        $(document).on("click", "a", function(){

            ti.reversed(!ti.reversed())
        })


    }

  render() {
    return (
      <div>
       <div className= "titulo">
       <h1> Responsive Navigation</h1>
       </div>

      <div className="toggle-btn">
        <span className="one"></span>
        <span className="two"></span>
      </div>

      <div className="menu">
        <div className="data">
         <ul>
             <li>
                 Navigation
             </li>
             <li><a href="#">Home</a></li>
             <li><a href="#">My Production</a></li>
             <li><a href="#">Services</a></li>
             <li><a href="#">Contacto</a></li>
         </ul>
        </div>
      </div>
        
      </div>
    )
  }
}

export default Header
