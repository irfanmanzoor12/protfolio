import React from 'react'
import { FaGitSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import Link from "next/link";



const Footer = () => {
  return (
    <div className=' h-[92vh] flex flex-col items-center justify-center'>

      
       {/* Social Media */}
       <div className="mt-2 grid grid-cols-3 gap-10">
      {/* linkined */}
      <div className="mt-2">
        <Link href="https://www.linkedin.com/in/irfan-manzoor-31573b10a/"  target="_blank" className="text-gray-600 hover:text[#0762C8]">
        <FaLinkedin className="text-3xl"/>
        </Link>
        </div>
      {/* YouTube */}
      <div className="mt-2">
        <Link href="https://studio.youtube.com/channel/UCbYGmigDSn9C-CdJ0OAXTZg"  target="_blank" className="text-gray-600 hover:text-[#FF0000]">
        <FaYoutubeSquare className="text-3xl"/>
        </Link>
        </div>
      {/*Github */}
      <div className="mt-2">
        <Link href="https://github.com/irfanmanzoor12/Porfolio"  target="_blank" className="text-gray-600 hover:text-[#4078c0]">
        <FaGitSquare className="text-3xl"/>
        </Link>
        </div>

      {/* Download cv Button
      <Link href={'/asset/cv/cv.pdf'} className="mt-3" w-full target="_blank">
      <Button>
      <FaCloudDownloadAlt className="mr-2 h-4 w-4" />Download
    </Button>
    </Link> */}
</div> 
  </div>
  );
}

export default Footer