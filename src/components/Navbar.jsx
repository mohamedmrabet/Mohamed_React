import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import picture2 from "../assets/picture2.jpg"
import { useTranslation } from 'react-i18next';
import { TfiWorld } from "react-icons/tfi";
import drapeau1 from "../assets/drapeau1.png"
import drapeau2 from "../assets/drapeau2.png"
import drapeau3 from "../assets/drapeau3.png"

const Navbar = () => {

  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleLanguageDropdown = () => setLanguageDropdownOpen((prev) => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageDropdownOpen(false); 
    setMenuOpen(false); 
  };

  return (
    <nav className='mb-8 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={picture2} height={50} width={150} />

        <div className="relative flex items-start justify-between pl-20">
          <button onClick={toggleLanguageDropdown} className="cursor-pointer">
            <TfiWorld size={24} style={{ color: "white" }} />
          </button>
          {languageDropdownOpen && (
            <div className="absolute right-0 mt-6 flex space-x-1 rounded shadow-lg p-3">
              <div
                className="flex items-center space-x-6 cursor-pointer hover:bg-gray-100"
                onClick={() => changeLanguage('en')}
              >
                <img src={drapeau1} alt="English" className="w-7 h-7" />
                <span className="text-lg"></span>
              </div>
              <div
                className="flex items-center space-x-6 cursor-pointer hover:bg-gray-100"
                onClick={() => changeLanguage('fr')}
              >
                <img src={drapeau2} alt="French" className="w-7 h-7" />
                <span className="text-lg"></span>
              </div>
              <div
                className="flex items-center space-x-6 cursor-pointer hover:bg-gray-100"
                onClick={() => changeLanguage('ar')}
              >
                <img src={drapeau3} className="w-7 h-7" />
                <span className="text-lg"></span>
              </div>
            </div>
          )}
        </div>
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

export default Navbar;
