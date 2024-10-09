import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0 mx-auto  w-[250px] h-[350px]">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../../asset/picture.jpg")}
        width={200}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/8 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me      
      </h1>
    
      <p className="mb-2 leading-relaxed">
    I am a highly organized and self-driven individual, passionate about developing my career in the field of Web-Developings, Artificial Intelligent, accounting and Taxtation. From current year I am enrolled in PIAIC and I am graduated in Commerce from University of Karachi and enrolled (PIPFA) Pakistan Institute of Public Finance Accountant.
    Possessing more than 10 years of experience of working in diverse financial positions with multiple companies. My key accounting and financial competencies include, but are not limited to, maintaining financial records, managing budgets, WH taxes, Provincial sales taxes, annual returns & quarterly statement, accounts payable, account receivable and follow-ups for outstanding’s, payrolls, reconciliations, Petty cash and skilled in accounting software QuickBooks Desktop and QuickBooks Online.
      </p>
      <div className="flex justify-center">
        <a href="../../asset/cv/myCV.pdf">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About