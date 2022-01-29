import React from 'react'

import { FaFacebookSquare, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

import './footer.css'
const footer = () => {
    return (
    <div className='footer'>
        <footer >
 <div class="container-fluid">

<p>© Copyright 2020 DogTinder</p>

<FaFacebookSquare className='social-icon'/>
<FaTwitter className='social-icon'/>
<FaInstagram className='social-icon' />
<FaEnvelope className='social-icon'/>
</div>
        </footer>           
      </div>
    )
}

export default footer
