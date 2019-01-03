import React, { Component } from 'react'
import {TweenMax,Expo } from 'gsap/all';

 class Load extends Component {

    constructor(props){
        super(props);

        this.represent = null;
        this.present = null;
    }


    componentDidMount(){

        this.represent = new TweenMax
         .to(".overlay h1", 3,{opacity:0, y:-60,ease: Expo.easeInOut})

         this.present = new TweenMax
         .to(".overlay",2, { delay:1,top:"-100%", ease: Expo.easeInOut })
    }

  render() {
    return (
    <div className="overlay">
        <h1>ESCAPE LIFE</h1>
      </div>
    )
  }
}


export default Load;
