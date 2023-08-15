import React from 'react';
import testimonial from '../assets/mathew.jpg';
import { FaQuoteLeft } from 'react-icons/fa';

const Clients = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div className="client-say md:pl-12">
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold">
            What Our Clients Say
          </h2>
          <div className="mb-6 h-2 w-16 bg-[#ff702d]"></div>
          <p className="mb-6 text-gray-600">
            Our clients seek modern, minimalist designs that reflect their
            brand identity. They prioritize functionality, versatility, and
            the ability to engage their target audience, leaving a lasting
            impression.
          </p>
        </div>
        <div>
            {/* testimonial card one */}
  <section className="mb-32 text-center md:text-left">
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src={testimonial} alt="Trendy Pants and Shoes"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-2 text-3xl font-bold text-[#ff702d] dark:text-primary-400">
            Matthew Fox​
            </h2>
            <p className="mb-4 font-semibold">Development Company</p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                <FaQuoteLeft className='mb-2 text-2xl text-[#ff702d]'/>
            Distinctive and memorable designs set Consruction apart in the real estate industry.
             Their exceptional expertise shines through in every project
            </p>
            <ul className="flex justify-center md:justify-start">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  className="w-5 text-[#ff702d] dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  className="w-5 text-[#ff702d] dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  className="w-5 text-[#ff702d] dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  className="w-5 text-[#ff702d] dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                  className="w-5 text-[#ff702d] dark:text-primary-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>



            
            {/* testimonial card end */}
         </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          laudantium.
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          laudantium.
        </div>
      </div>
    </div>
  );
};

export default Clients;
