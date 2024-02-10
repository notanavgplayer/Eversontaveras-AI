"use client";

import React from 'react'

const HeroButtons = () => {
  return (
    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
      <div data-aos="fade-up" data-aos-delay="400">
        <a
          className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full mb-4 sm:w-auto sm:mb-0"
          href="#0"
        >
          Start for Free
        </a>
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <a
          className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
          href="#0"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default HeroButtons