import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Projects = () => {
// my projects Here
let projects = [
  {
  name:"Ecommerce Website",
  details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora voluptates ipsam quo dolorem hic recusandae ipsa ipsum aliquid cupiditate, illum quis mollitia! Quisquam, deleniti minus magnam minima cupiditate nisi!",
  link: "#",
  image: "",
 },
 {
  name:"Calculator by Typescript",
  details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora voluptates ipsam quo dolorem hic recusandae ipsa ipsum aliquid cupiditate, illum quis mollitia! Quisquam, deleniti minus magnam minima cupiditate nisi!",
  link: "#",
  image: "../../asset/cal.webp",
 },
 {
  name:"Object Oreinted Pragramming",
  details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora voluptates ipsam quo dolorem hic recusandae ipsa ipsum aliquid cupiditate, illum quis mollitia! Quisquam, deleniti minus magnam minima cupiditate nisi!",
  link: "#",
  image: "opp.webp",
 },
 {
  name:"Todo List",
  details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora voluptates ipsam quo dolorem hic recusandae ipsa ipsum aliquid cupiditate, illum quis mollitia! Quisquam, deleniti minus magnam minima cupiditate nisi!",
  link: "#",
  image: "todo.webp"
 },
 {
  name:"University management system projecT",
  details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora voluptates ipsam quo dolorem hic recusandae ipsa ipsum aliquid cupiditate, illum quis mollitia! Quisquam, deleniti minus magnam minima cupiditate nisi!",
  link: "#",
  image: "ums.jpg"
 },
 {
  name:"Adventure Game",
  details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempora voluptates ipsam quo dolorem hic recusandae ipsa ipsum aliquid cupiditate, illum quis mollitia! Quisquam, deleniti minus magnam minima cupiditate nisi!",
  link: "#",
  image: "av.jpg"
 },
]

  return (
    <div data-aos="zoom-in-down" className='h-[50vh] overflow-y-auto'>
          <div>
            <div className='text-2xl font-semibold tracking-tight uppercase'>Projects</div>
          </div>
          <div className="space-y-2">
           
    <div className="flex flex-wrap -m-4">
      {/* My Project here  */}
      {projects.map((item, i)=>(
      <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
          width={1000}
          height={1000}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={`/asset/${item.image}`}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
            
            <h2 className="text-lg font-semibold tracking-tight">
              {item.name}
            </h2>
            <p className="mt-3 leading-relaxed line-clamp-3">
              {item.details}
            </p>
            <Link href={item.link}
             target='_blank'
              className='text-sm font-mediumtracking-tight
               hover:text-purple-800 hover:underline'>
                <p className='mt-3'>View Projects</p>
               </Link>
          
          </div>
        </div>
      </div>
       ))} 
  </div>
          </div>
          
        </div>
  )
}

export default Projects