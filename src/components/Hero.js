import React from 'react'
import {FaGooglePlay, FaApple } from "react-icons/fa";
import Mockup from '../assets/iphone6.png'

import './Hero.css'
const Hero = () => {
    return (
        <div className='hero'>
          <div className="container-fluid">
         <div class="row">

<div class="col-lg-6">
  <h1 class="big-heading">Meet new and interesting dogs nearby.</h1>
  <button type="button" class="btn btn-dark btn-lg download-button"><FaApple /> Download</button>
  <button type="button" class="btn btn-outline-light btn-lg download-button"><FaGooglePlay /> Download</button>
</div>
<div class="col-lg-6">
  <img class="title-image" src={Mockup} alt="iphone-mockup"/>
</div>

</div>
        </div>
        </div>
    )
}

export default Hero
