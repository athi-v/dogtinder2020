import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { Fade as Hamburger } from 'hamburger-react'

import './Navbar.css'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <header>
           <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className='list-logo' to="hero" spy={true} smooth={true} offset={50} duration={500}>Dogtinder</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Hamburger toggled={isOpen} toggle={setOpen} direction='left' color='#fff' /> 
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='list' to="footer" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className='list' to="pricing" spy={true} smooth={true} offset={50} duration={500}>Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className='list' to="cta" spy={true} smooth={true} offset={50} duration={500}>Download</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav> 
        </header>
    )
}

export default Navbar
