import React from 'react'
import Hero from '../components/Hero'
import backgroundImage from '../assets/bg-img.jpg';

const Home = () => {
  return (
    <div>
        <Hero/>
        <div>
       <div className='max-w-7xl mx-auto flex'>
        <div className='w-1/2'>
            <div className='content'>
            <h2 className='text-[1.8rem]'>Welcome to the Concrete Constructions</h2>
            <div className='w-[64px] h-[12px] bg-[#ff702d] mt-[20px] mb-[20px]'></div>
            <h3 className='text-[1.5rem]'>Where We Build Your Visions</h3>
            <p>Write a warm welcoming message for visitors.You can mention all the benefits or services with some real examples. You can also state how you emphasize on their well being. This often shows your concern and increases the chances of conversion. Tell people a little more to attract.
                You can mention some contact details as shown below to get in touch with visitors.</p>
                <p>Call Us Today</p>
                <p>91 123-456-7890</p>
            </div>
        </div>
        <div className='w-1/2'>
            <div className='relative'>
                <div className='static'>
            Dolore quia minima vitae
                </div>
            </div>
             </div>
       </div>
        </div>
    </div>
  )
}

export default Home