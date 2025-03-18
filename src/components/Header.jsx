import React, { useRef, useState} from 'react';
import hamburger from "../img/hamburger.png";
import { NavLink, Link } from 'react-router';
import close from "../img/close.png";

const Header = () => {
  const ref = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div ref={ref}>
      <header className='py-5 font-Mandrope fixed w-screen z-50  bg-transparent'>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Link onClick={scrollToTop} to="/" className='border-gray-500/10 border rounded-lg text-4xl text-white bg-gradient-to-br from-first to-second backdrop-blur-xs py-3 px-5 inline-flex font-Mandrope'>M</Link>
            <nav className='hidden lg:inline-flex border-gray-500/10 border rounded-lg text-white bg-gradient-to-br from-first to-second backdrop-blur-xs py-5 px-8 font-Mandrope'>
              <ul className='flex gap-4 items-center text-white'>
                <li><NavLink onClick={scrollToTop} to="/cases" className='opacity-40 hover:opacity-100'>CASES</NavLink></li>
                <li><NavLink onClick={scrollToTop} to="/about" className='opacity-40 hover:opacity-100'>ABOUT TEAM</NavLink></li>
                <li><NavLink onClick={scrollToTop} to="/contact" className='opacity-40 hover:opacity-100'>CONTACT</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="hidden lg:inline-flex">
            <Link onClick={scrollToTop} to="/contact" className='py-5 px-8 bg-gradient-to-br from-yellow1 to-yellow2 hover:from-yellow2 hover:to-yellow1 ease-in-out duration-500 rounded-lg border border-yellowBorder text-white'>BECOME A MEMBER</Link>
          </div>
          <div onClick={() => setOpenMenu(!openMenu)} className="p-5 lg:hidden bg-gradient-to-br from-first to-second rounded-lg border border-border cursor-pointer">
            <img src={hamburger} alt="hamburger" />
          </div>
        </div>
      </header>
      {
        openMenu &&
        <div className='fixed w-screen h-full top-[-40px] bg-black/90 backdrop-blur-xs  border-gray-500/10 border rounded-lg left-0 mt-10  bg-opacity-80 flex justify-center items-start z-60'>
          <button onClick={()=> setOpenMenu(false)} className=''><img src={close} alt="close" className='absolute z-80  top-5 right-5' /></button>
          <nav className=' w-full text-white  pb-5 pt-15 px-8 flex flex-col items-center'>
            <ul className='flex flex-col gap-4 items-center text-white'>
              <li><NavLink onClick={scrollToTop}to="/" className='opacity-40 hover:opacity-100' >HOME</NavLink></li>
              <li><NavLink onClick={scrollToTop}to="/cases" className='opacity-40 hover:opacity-100' >CASES</NavLink></li>
              <li><NavLink onClick={scrollToTop}to="/about" className='opacity-40 hover:opacity-100' >ABOUT TEAM</NavLink></li>
              <li><NavLink onClick={scrollToTop}to="/contact" className='opacity-40 hover:opacity-100' >CONTACT</NavLink></li>
              <Link onClick={scrollToTop}to="/contact" className='py-5 px-8 bg-gradient-to-br from-yellow1 to-yellow2 rounded-lg border border-yellowBorder text-white'>BECOME A MEMBER</Link>
            </ul>
          </nav>
        </div>
      }
    </div>
  );
};

export default Header;
