import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen relative" style={{backgroundImage: 'url(https://realstate.muhamadun.me/wp-content/uploads/elementor/thumbs/about-img-1-q9gaegqmbxjh31q6y2vs73u9kyzlq0s3k2als3pf6o.jpg)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content md:text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">Broad Vision Honest Service Great Value</h1>
      <p className="mb-5">Our goal then and now is to provide quality on time projects</p>
      <div className='flex space-x-2 md:justify-center'>
      <button className="btn bg-[#ff702d]">Get Free Quote</button>
      <button className="btn bg-transparent text-white">Get In Touch</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero