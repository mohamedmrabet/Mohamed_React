import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import picture2 from "../assets/picture2.jpg"


const Navbar = () => {
  return (
    <nav className='mb-8 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
             <img src={picture2} height={50} width={150}/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
         <a href="https://www.linkedin.com/in/mohamed-mrabet-939b56265/"><FaLinkedin /></a>   
          <a href="https://github.com/mohamedmrabet"><FaGithub /></a>
           <a href="https://www.instagram.com/mohamed10021995/"><FaInstagram /></a> 
           <a href="https://www.facebook.com/profile.php?id=100085259607180&locale=fr_FR"><FaFacebookSquare /></a>
        </div>
    </nav>
  )
}

export default Navbar