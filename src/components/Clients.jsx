import React from 'react';
import testimonial from '../assets/testimonial-image-1.jpg';
// testimonial-image-1.jpg

const Clients = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div className="client-say">
          <div className=" md:pl-12">
            <h2 className="mb-4 text-[2.5rem] font-semibold">
              What Our Clients Say
            </h2>
            <div className="mb-6 h-2 w-16 bg-[#ff702d]"></div>
            <p className="balance mb-6 text-gray-600">
              Our clients seek modern, minimalist designs that reflect their
              brand identity. They prioritize functionality, versatility, and
              the ability to engage their target audience, leaving a lasting
              impression
            </p>
          </div>
        </div>
        {/* testimonial-1 */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={testimonial} alt="testimonial"/>
            </div>
            <div>content</div>

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
