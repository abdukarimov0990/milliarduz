import React, { useState } from 'react';
import hamburger from "../img/hamburger.png";
import { NavLink, Link } from 'react-router';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <header className='py-5 font-Mandrope fixed w-full z-50  bg-transparent'>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Link to="/" className='border-gray-500/10 border rounded-lg text-4xl text-white bg-gradient-to-br from-first to-second backdrop-blur-xs py-3 px-5 inline-flex font-Mandrope'>M</Link>
            <nav className='hidden md:inline-flex border-gray-500/10 border rounded-lg text-white bg-gradient-to-br from-first to-second backdrop-blur-xs py-5 px-8 font-Mandrope'>
              <ul className='flex gap-4 items-center text-white'>
                <li><NavLink to="/cases" className='opacity-40 hover:opacity-100'>CASES</NavLink></li>
                <li><NavLink to="/about" className='opacity-40 hover:opacity-100'>ABOUT TEAM</NavLink></li>
                <li><NavLink to="/contact" className='opacity-40 hover:opacity-100'>CONTACT</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="hidden md:inline-flex">
            <Link to="/contact" className='py-5 px-8 bg-gradient-to-br from-yellow1 to-yellow2 rounded-lg border border-yellowBorder text-white'>BECOME A MEMBER</Link>
          </div>
          <div onClick={() => setOpenMenu(!openMenu)} className="p-5 md:hidden bg-gradient-to-br from-first to-second rounded-lg border border-border cursor-pointer">
            <img src={hamburger} alt="hamburger" />
          </div>
        </div>
      </header>
      {
        openMenu &&
        <div className='fixed w-full top-0 left-0 mt-10  bg-opacity-80 flex justify-center items-center z-60'>
          <nav className=' w-full border-gray-500/10 border rounded-lg text-white bg-gradient-to-br from-first to-second backdrop-blur-xs py-5 px-8 flex flex-col items-center'>
            <ul className='flex flex-col gap-4 items-center text-white'>
              <li><Link to="/" className='opacity-40 hover:opacity-100' onClick={() => setOpenMenu(false)}>Home</Link></li>
              <li><NavLink to="/cases" className='opacity-40 hover:opacity-100' onClick={() => setOpenMenu(false)}>CASES</NavLink></li>
              <li><NavLink to="/about" className='opacity-40 hover:opacity-100' onClick={() => setOpenMenu(false)}>ABOUT TEAM</NavLink></li>
              <li><NavLink to="/contact" className='opacity-40 hover:opacity-100' onClick={() => setOpenMenu(false)}>CONTACT</NavLink></li>
              <Link to="/contact" className='py-5 px-8 bg-gradient-to-br from-yellow1 to-yellow2 rounded-lg border border-yellowBorder text-white' onClick={() => setOpenMenu(false)}>BECOME A MEMBER</Link>
            </ul>
          </nav>
        </div>
      }
    </div>
  );
};

export default Header;
