import React from 'react'
import Tech from '../assets/TechCrunch.png'
import Tnw from '../assets/tnw.png'
import Mash from '../assets/mashable.png'
import Bizz from '../assets/bizinsider.png'


import './Press.css'

const Press = () => {
    return (
        <div className='press'>
        
            <img class="press-logo" src={Mash} alt="tc-logo"/>
    <img class="press-logo" src={Tech} alt="tnw-logo"/>
    <img class="press-logo" src={Tnw} alt="biz-insider-logo"/>
    <img class="press-logo" src={Bizz} alt="mashable-logo"/>
        </div>
    )
}

export default Press
