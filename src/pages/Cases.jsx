import { section } from 'framer-motion/client'
import React from 'react'
import { cases } from '../data/data'
import tower from "../img/tower.png"
import t from "../img/t.png"
import play from "../img/play.png"
import enter from "../img/enter.png"



const Cases = () => {
  return (
    <section className='py-16 text-white font-Mandrope'>
      <div className="container">
        <div className="mb-10">
          <h3 className='border inline-block mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>TRIPS</h3>
          <h1 className='uppercase text-white text-5xl'>
            keyslarimiz <span className='text-white/40'>bilan tanishing</span>
          </h1>
        </div>
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-3'>
          {
            cases.map(function (keys) {
              return (
                <li className='group cursor-pointer relative pt-10 pb-7 px-5 bg-gradient-to-br from-first to-second rounded-xl hover:border hover:border-white '>
                  <h3 className='group-hover:opacity-100  text-[12px] mb-3 top-[-20px] absolute bg-first  uppercase opacity-40 rounded-full gap-2 items-center pl-2 pr-4 border border-black py-1 flex'>
                    <span className='py-2 px-2.5 bg-second rounded-full '>{keys.number}</span>KEYS
                  </h3>
                  <h3 className='text-xl mb-4'>{keys.name}</h3>
                  <p className='flex opacity-40 gap-3 items-center mb-2'>
                    <img src={tower} alt="tower" className='h-4' />
                    <span>{keys.bussines}</span>
                  </p>
                  <p className='flex opacity-40 gap-3 items-center mb-5'>
                    <img src={t} alt="tower" className='h-4' />
                    <span>{keys.bussinesType}</span>
                  </p>
                  <div className="flex justify-between items-center">
                    <button className='text-white/40 flex gap-3 items-center'>
                      <span className='bg-white p-3 rounded-full'>
                        <img src={play} alt="" className='brightness-0 w-4' />
                      </span>
                      <p>Videoda ko'rish</p>
                    </button>
                    <button className='cursor-pointer bg-white/10 p-2 rounded-full'>
                      <img src={enter} alt="enter" className='opacity-40' />
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

    </section>
  )
}

export default Cases
