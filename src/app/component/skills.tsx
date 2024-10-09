import React from 'react'
import {FaRegCheckCircle} from "react-icons/fa";
const Skills = () => {
  return (
    <div id="skills">
        <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Skills
    </h2>
      {/* TypeScript */}
      <div className="p-4 w-full md:w-1/8">
        
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
              <FaRegCheckCircle  className="text-white text-lg"/>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              TypeScript
            </h2>
            
            </div>
            <div className='w-full h-1 rounded-lg bg-gray-500'>
              <div className='w-[70%] h-1 bg-blue-500 rounded-lg'/>
          </div>
          <h3 className='text-blue-500text-lg text-right font-semibold tracking-tight'>80%</h3>
        </div>
        {/*HTML/CSS  */}
      <div className="p-4 w-full md:w-1/8">
        
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
            <FaRegCheckCircle  className="text-white text-lg"/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            HTML/CSS
          </h2>
          
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[60%] h-1 bg-blue-500 rounded-lg'/>
        </div>
        <h3 className='text-blue-500text-lg text-right font-semibold tracking-tight'>50%</h3>
      </div>
        {/*NextJs & React */}
        <div className="p-4 w-full md:w-1/8">
        
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
            <FaRegCheckCircle  className="text-white text-lg"/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            Next JS & React
          </h2>
          
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[60%] h-1 bg-blue-500 rounded-lg'/>
        </div>
        <h3 className='text-blue-500text-lg text-right font-semibold tracking-tight'>60%</h3>
      </div>
       {/*Accountant*/}
       <div className="p-4 w-full md:w-1/8">
        
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
            <FaRegCheckCircle  className="text-white text-lg"/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            Accountant
          </h2>
          
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[100%] h-1 bg-blue-500 rounded-lg'/>
        </div>
        <h3 className='text-blue-500text-lg text-right font-semibold tracking-tight'>100%</h3>
      </div>
       {/*Taxtation */}
       <div className="p-4 w-full md:w-1/8">
        
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
            <FaRegCheckCircle  className="text-white text-lg"/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            Taxtation
          </h2>
          
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[100%] h-1 bg-blue-500 rounded-lg'/>
        </div>
        <h3 className='text-blue-500text-lg text-right font-semibold tracking-tight'>100%</h3>
      </div>
       {/*Bookkeeping*/}
       <div className="p-4 w-full md:w-1/8">
        
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
            <FaRegCheckCircle  className="text-white text-lg"/>
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            Bookkeeping
          </h2>
          
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[100%] h-1 bg-blue-500 rounded-lg'/>
        </div>
        <h3 className='text-blue-500text-lg text-right font-semibold tracking-tight'>100%</h3>
      </div>
        
      </div>
  )
}

export default Skills