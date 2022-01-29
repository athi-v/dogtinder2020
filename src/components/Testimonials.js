import React from 'react'
import Lady from '../assets/lady-img.jpg'
import Dog from '../assets/dog-img.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials'>
           <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active container-fluid">
    <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
         
      <img class="testimonial-image" src={Lady} alt="Lady" />
      <em>Pebbles, New York</em>
    </div>
    <div className="carousel-item container-fluid">
    <h2 class="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.
    </h2>
         
    <img class="testimonial-image" src={Dog} alt="Dog" />
    <em>Beverly, Illinois</em>
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
</div>
    </div>
        
    )
}

export default Testimonials
