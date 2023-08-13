import React from 'react';
import Hero from '../components/Hero';
import backgroundImage from '../assets/bg-img.jpg';
import { BsArrowRightShort } from 'react-icons/bs'
import bannerImage from '../assets/CTA-bg.jpg';

const Home = () => {
    
  return (
    <div>
      <Hero />
      <div className='max-w-7xl mx-auto md:flex mt-20 px-4 md:px-0'>
        <div className='md:w-1/2 md:mr-4 max-w-7xl mx-auto md:mb-0 mb-6'>
          <div className='py-8'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold py-4 leading-tight text-left'>
              Welcome to Concrete Constructions
            </h2>
            <div className='w-16 h-2 bg-[#ff702d] mb-6'></div>
            <h3 className='text-2xl md:text-3xl font-semibold leading-tight py-4'>
              Where We Build Your Visions
            </h3>
            <p className='text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9'>
              Write a warm welcoming message for visitors. You can mention all
              the benefits or services with some real examples. You can also
              state how you emphasize their well-being. This often shows your
              concern and increases the chances of conversion. Tell people a
              little more to attract. You can mention some contact details as
              shown below to get in touch with visitors.
            </p>
            <div className='widgets pt-10'>
              <p className='font-semibold tracking-wide'>Call Us Today</p>
              <p className='text-2xl font-semibold'>91 123-456-7890</p>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 md:ml-4 relative'>
          <div className='border-4 border-[#ff702d] w-full h-auto md:sticky md:top-12'>
            <img
              src={backgroundImage}
              alt='Dolore quia minima vitae'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
     
{/* CTA SECTION */}
<div  className="relative bg-fixed" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className='overlay absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
<div className='relative  text-grey py-20 my-20 max-w-[800px] mx-auto'  >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto text-center'>
        <div className='w-16 h-2 bg-[#ff702d] text-center mx-auto mb-6'></div>
          <h2 className='text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-white'>
            Get Your Free Consultation
          </h2>
          <p className='text-sm md:text-base mb-4 md:mb-6 text-white'>
            You can use these sections to highlight the features of heading.
            Use these paragraphs to focus on the topic you want. Make sure
            you keep it short and attractive.
          </p>
          <button className='bg-[#ff702d] px-[30px] my-7 transition-all duration-300 text-white py-[18px] hover:bg-black inline-flex items-center'>
            Book An Appointment <BsArrowRightShort className='ml-2' />
          </button>
        </div>
      </div>
    </div>
</div>

{/* our especialisation */}
 
<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <img src={backgroundImage} alt='Specialist' className='w-full' />
        </div>
        <div className='md:w-1/2 md:pl-12'>
          <h2 className='text-3xl font-semibold mb-4'>Our Specialization</h2>
          <p className='text-gray-600 mb-6'>
            We specialize in providing top-notch services in various fields,
            including:
          </p>
          <ul className='list-disc list-inside text-gray-600'>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Graphic Design</li>
          </ul>
          <p className='text-gray-600 mt-6'>
            Our team of experts is dedicated to delivering high-quality and
            innovative solutions for all your business needs.
          </p>
        </div>
      </div>
    </div>
    







    </div>
  );
};

export default Home;
