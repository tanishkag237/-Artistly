import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <Image
        src="/home/bg5.jpg"
        alt="Hero Image"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply" />
      {/* Center text and buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 font-primary shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <h1 className="text-white lg:text-7xl md:text-5xl text-3xl py-2 font-bold text-center">Artistly</h1>
        <h3 className='text-white py-2 lg:text-2xl md:text-3xl px-2 text-xl font-bold text-center'>Book talented performers for every occasion — fast, easy, and direct.</h3>
        <p className='text-white py-2 lg:text-xl lg:px-35 px-15 text-lg font-medium text-center'>Artistly.com is a platform that connects event planners with talented performers.
Browse verified artist profiles, filter by category or location, and send booking requests in minutes.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/artists"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
           Explore Artists
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold text-white hover:text-gray-100"
          >
            Learn more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};