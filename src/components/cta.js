import React from 'react'
import {FaGooglePlay, FaApple } from "react-icons/fa";

import './cta.css'

const cta = () => {
    return (
        <div className='cta'>
            <div className="container-fluid">

<h3 className="big-heading">Find the True Love of Your Dog's Life Today.</h3>
<button className="btn btn-lg btn-dark download-button" type="button"><FaApple /> Download</button>
<button className="btn btn-lg btn-light download-button" type="button"><FaGooglePlay /> Download</button>
</div>
        </div>
    )
}

export default cta
