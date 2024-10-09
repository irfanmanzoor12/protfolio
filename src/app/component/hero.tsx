"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    
       <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web Developer',
         'UI/UX Designer',
        'Professional Accountant',
        'Tax advisor',
    ],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[40px] h[500px] bg-blue-100'></div>
      <p className="mb-8 leading-relaxed">
      Hi! I am a skilled website developer with expertise in HTML, CSS, JavaScript, React, and Node.js. I create responsive, user-friendly websites that are optimized for performance and SEO. With a focus on clean, efficient code, I’m ready to bring your ideas to life and help your business thrive online.
      </p>
      
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
      src={"/asset/picture.jpg"}
        // className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"
        width={300}
        height={300}
        
      />
    </div>
  </div>
</section>
 
  )
}

export default Hero