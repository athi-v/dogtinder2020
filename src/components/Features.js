import React from 'react'
import { FaCheckCircle, FaBullseye, FaHeart } from "react-icons/fa";

import './Features.css'
const Features = () => {
    return (
        <div className='features'>
                    <div className="container-fluid">

<div className="row">

  <div className="feature-box col-lg-4">
<FaCheckCircle className='icon'/>
    <h3 className="feature-title">Easy to use.</h3>
    <p>So easy to use, even your dog could do it.</p>
  </div>

  <div className="feature-box col-lg-4">
    <FaBullseye className='icon'/>
    <h3 className="feature-title">Elite Clientele</h3>
    <p>We have all the dogs, the greatest dogs.</p>
  </div>

  <div className="feature-box col-lg-4">
   <FaHeart className='icon'/>
    <h3 className="feature-title">Guaranteed to work.</h3>
    <p>Find the love of your dog's life or your money back.</p>
  </div>

</div>
</div> 
        </div>
    )
}

export default Features
