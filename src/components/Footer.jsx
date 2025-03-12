import React from 'react'
import { Link, NavLink } from 'react-router'
import instagram from "../img/instagram.png"
import facebook from "../img/facebook.png"
import telegram from "../img/telegram.png"
import youtube from "../img/youtube.png"


const Footer = () => {
  return (
    <footer className='font-Mandrope w-full max-w-[1320px] mx-auto bg-gradient-to-br from-first to-second py-5 rounded-xl'>
      <div className="container ">
      <div className="flex flex-col md:flex-row  justify-between items-star text-startt md:text-center  md:items-center gap-y-5 md:gap-0">
          <Link to="/" className=' border-gray-500/10 border rounded-lg text-4xl text-yellow-600 bg-gradient-to-br from-first to-second  py-3 px-5 max-w-17 font-Mandrope'>M</Link>
          <nav>
            <ul className='flex gap-5 text-white items-center'>
              <li><Link to="/" className='opacity-40 hover:opacity-100 '>MAIN</Link></li>
              <li><NavLink to="/cases" className='opacity-40 hover:opacity-100'>CASES</NavLink></li>
              <li ><NavLink to="/about" className='opacity-40 hover:opacity-100  '>ABOUT TEAM</NavLink></li>
              <li ><NavLink to="/contact" className='opacity-40 hover:opacity-100  '>CONTACT</NavLink></li>
            </ul>
          </nav>
          <ul className='flex gap-4'>
            <li><a href="https://www.instagram.com/milliard_club_uz/" className='p-3 bg-gradient-to-br from-first to-second inline-flex rounded-lg'><img src={instagram} alt="instagram" /></a></li>
            <li><a href="https://t.me/AlisherIsaev_blogi" className='p-3 bg-gradient-to-br from-first to-second inline-flex rounded-lg'><img src={telegram} alt="telegram" /></a></li>
            <li><a href="https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fmilliardclubuz%2F" className='p-3 bg-gradient-to-br from-first to-second inline-flex rounded-lg'><img src={facebook} alt="facebook" /></a></li>
            <li><a href="https://www.youtube.com/@AlisherIsaev" className='p-3 bg-gradient-to-br from-first to-second inline-flex rounded-lg'><img src={youtube} alt="instagram" /></a></li>
          </ul>
        </div>
        <hr className='mt-6 text-white/10' />
        <div className="flex flex-col md:flex-row justify-between text-white/10 pt-3">
          <p>© 2024 Milliard Club. All rights reserved</p>
          <a href="https://abba.uz/ru" className='hover:text-white'>by Abba Marketing</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
