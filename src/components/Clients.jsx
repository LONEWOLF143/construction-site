import React from 'react';
import testimonial from '../assets/testimonial-image-1.jpg';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-3/10 relative">
            <img
              src={testimonial}
              alt="Testimonial"
              className="h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0 md:h-auto"
            />
          </div>
          <div className="w-7/10">
            <p className="text-gray-600">
              Distinctive and memorable designs set Construction apart in the
              real estate industry. Their exceptional expertise shines through
              in every project.
            </p>
            <p className="mt-4 font-bold text-gray-900">Matthew Fox</p>
            <p className="text-gray-600">Development Company</p>
          </div>
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
