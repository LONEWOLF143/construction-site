import React from 'react';
import Hero from '../components/Hero';
import backgroundImage from '../assets/bg-img.jpg';
import { BsArrowRightShort } from 'react-icons/bs';
import { BiRectangle } from 'react-icons/bi';
import { BiImages } from 'react-icons/bi';
import { BiHourglass } from 'react-icons/bi';
import bannerImage from '../assets/CTA-bg.jpg';
import especialty from '../assets/especialty.jpg';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mx-auto mt-20 max-w-7xl px-4 md:flex md:px-0">
        <div className="mx-auto mb-6 max-w-7xl md:mb-0 md:mr-4 md:w-1/2">
          <div className="py-8">
            <h2 className="balance py-4 text-left text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Welcome to Concrete Constructions
            </h2>
            <div className="mb-6 h-2 w-16 bg-[#ff702d]"></div>
            <h3 className="py-4 text-2xl font-semibold leading-tight md:text-3xl">
              Where We Build Your Visions
            </h3>
            <p className="balance text-base leading-7 md:text-lg md:leading-8 lg:text-xl lg:leading-9">
              Write a warm welcoming message for visitors. You can mention all
              the benefits or services with some real examples. You can also
              state how you emphasize their well-being. This often shows your
              concern and increases the chances of conversion. Tell people a
              little more to attract. You can mention some contact details as
              shown below to get in touch with visitors.
            </p>
            <div className="widgets pt-10">
              <p className="font-semibold tracking-wide">Call Us Today</p>
              <p className="text-2xl font-semibold">91 123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="relative md:ml-4 md:w-1/2">
          <div className="h-auto w-full border-4 border-[#ff702d] md:sticky md:top-12">
            <img
              src={backgroundImage}
              alt="Dolore quia minima vitae"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div
        className="relative bg-fixed"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
        <div className="text-grey  relative mx-auto my-20 max-w-[800px] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-center">
              <div className="mx-auto mb-6 h-2 w-16 bg-[#ff702d] text-center"></div>
              <h2 className="mb-2 text-2xl font-semibold text-white md:mb-4 md:text-3xl">
                Get Your Free Consultation
              </h2>
              <p className="balance mb-4 text-sm text-white md:mb-6 md:text-base">
                You can use these sections to highlight the features of heading.
                Use these paragraphs to focus on the topic you want. Make sure
                you keep it short and attractive.
              </p>
              <button className="my-7 inline-flex items-center bg-[#ff702d] px-[30px] py-[18px] text-white transition-all duration-300 hover:bg-black">
                Book An Appointment <BsArrowRightShort className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* our especialisation */}

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="border-4  border-[#ff702d] md:w-1/2">
            <img src={especialty} alt="Specialist" className="w-full h-full" />
          </div>
          {/* especialisation content */}
          <div className="md:w-1/2 md:pl-12 py-7">
            <h2 className="mb-4 text-3xl font-semibold">Our Specialization</h2>
            <div className="mb-6 h-2 w-16 bg-[#ff702d]"></div>
            <p className="mb-6 text-gray-600 balance">
            You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want.
             Make sure you keep it short and attractive.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
