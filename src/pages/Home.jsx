// import images 
import hero from "../img/hero.avif"
import play from "../img/play.png"
import video from "../img/cutted.mp4"
import joxongir from "../img/joxongirAka.avif"
import founders from "../img/founders.svg"
import img from "../img/founders.avif"
import img1 from "../img/img1.avif"
import img2 from "../img/img2.avif"
import img3 from "../img/im3.avif"
import img4 from "../img/img4.avif"
import img5 from "../img/img5.avif"
import turkey from "../img/turkey.avif"
import uae from "../img/uae.avif"
import maldiv from "../img/maldiv.avif"
import monten from "../img/monten.avif"
import malasiya from "../img/malasiya.avif"
import indonesia from "../img/indonesia.avif"
import members from "../img/members.avif"
import smile from "../img/smile.svg"
import basket from "../img/basket.png"
import enter from "../img/enter.png"
import close from "../img/close.png"
import instagram from "../img/instagram.png"
import facebook from "../img/facebook.png"
import telegram from "../img/telegram.png"
import youtube from "../img/youtube.png"
import plus from "../img/plus.png";
import call from "../img/call.png"
import medal from "../img/medal.avif"
// import data 
import { faqData, contact, logos, member, opinions, trips } from '../data/data'
// import react functions 
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
// import liblary functions 
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Home = () => {
  // variables
  const [open, Setopen] = useState(false);
  const [show, Setshow] = useState(false);
  const [openArray, SetopenArray] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [Array, SetArray] = useState([]);
  const [selectValue, setSelectValue] = useState("DEFAULT");
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [openId, setOpenId] = useState(null);
  const isFormValid = textValue.trim() !== "" && numberValue.trim() !== "" && selectValue !== "DEFAULT";
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };
  const openVideo = (el) => {
    SetopenArray(true);
    const filteredArray = opinions.filter((op) => op.name == el.name)
    SetArray(filteredArray)
  }
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

  };
  // push to sheets
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setOpenInput(true);
        setTextValue("");
        setNumberValue("");
        setSelectValue("DEFAULT");
        setMessage("");
      } else {
        alert("Nmadur xato ketdi");
      }
    } catch (error) {
      console.error("Xato shundan iborat", error);
    }
  };
  return (
    <div className='font-Mondrope flex flex-col'>
      {/* hero */}
      <section className='font-Mandrope py-16'>
        <div className="container">
          <div className="flex gap-40 mb-15 items-center justify-center flex-col text-center md:flex-row md:text-left md:justify-start md:gap-40">
            <div className="w-full max-w-[600px]">
              <h1 className='text-white uppercase text-5xl leading-15 mb-4'>
                network with <br /> <span className='text-white/40'>uzbekistan’s leading</span> entrepreneur
              </h1>
              <p className='text-xl text-white/50 mb-4'>Join Milliard Club to collaborate, innovate, and grow with Uzbekistan’s top entrepreneurs.</p>
              <button onClick={() => Setopen(true)} className='border border-border bg-gradient-to-br from-first to-second py-4 px-7 uppercase text-white rounded-lg cursor-pointer'>showreel about us</button>
            </div>
            <img src={hero} alt="hero-img" className='w-[400px] md:block hidden' />
          </div>
          <ul className="grid grid-cols-2 text-white gap-5 md:grid-cols-5 md:justify-start md:items-start">
            <li className='py-3 border rounded-lg border-border px-6 bg-gradient-to-br from-first to-second w-full flex flex-col gap-5 uppercase text-center md:text-left'><h3 className='text-3xl'>300+</h3> <p className='text-white/20 max-w-auto'>club <br /> members</p></li>
            <li className='py-3 border rounded-lg border-border px-6 bg-gradient-to-br from-first to-second w-full flex flex-col gap-5 uppercase text-center md:text-left'><h3 className='text-3xl'>$6.5 mln</h3> <p className='text-white/20 max-w-auto'>Average Turnover of club members</p></li>
            <li className='py-3 border rounded-lg border-border px-6 bg-gradient-to-br from-first to-second w-full flex flex-col gap-5 uppercase text-center md:text-left'><h3 className='text-3xl'>20+</h3> <p className='text-white/20 max-w-auto'>Business <br /> Spheres</p></li>
            <li className='py-3 border rounded-lg border-border px-6 bg-gradient-to-br from-first to-second w-full flex flex-col gap-5 uppercase text-center md:text-left'><h3 className='text-3xl'>30+</h3> <p className='text-white/20 max-w-auto'>Exported <br /> countries</p></li>
            <li className='py-3 border rounded-lg border-border px-6 bg-gradient-to-br from-first to-second w-full flex flex-col gap-5 uppercase text-center md:text-left'><h3 className='text-3xl'>10+</h3> <p className='text-white/20 max-w-auto'>years <br />of experience</p></li>
          </ul>
        </div>
      </section>
      <section className="pb-16">
        <div className="video_container w-full relative">
          <video src={video} muted loop autoPlay className='w-full' >
          </video>
          <div className="container flex justify-between items-center absolute top-0 bottom-0 left-0 right-0 " >
            <h2 className='text-4xl text-white bold'>Support</h2>
            <button onClick={() => Setopen(true)} className='rounded-full pl-4 pr-3 pt-3 pb-3 cursor-pointer bg-white'><img src={play} alt="play button" /></button>
          </div>
        </div>
        <hr className='text-white/10 mt-16' />

      </section>
      {/* Get know with */}
      <section className='py-16'>
        <div className="container">
          <div className="grid grid-cols-1  md:grid-cols-2 items-center gap-5 md:gap-50 text-white mb-10">
            <div className="w-full max-w-[450px]">
              <button className='border mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>about us</button>
              <h1 className='uppercase text-white text-4xl'>
                get known with <span className='text-white/60'>milliard business club</span>
              </h1>
            </div>
            <div className='text-lg'>
              <p>'Milliard Club' is Uzbekistan's premier international business association, scheduled for official launch in December 2020. <br /> <span className='text-white/40'>It brings together successful businessmen, entrepreneurs,and experts from various fields.</span></p>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
            <li className='md:col-span-2 md:row-span-3'>
              <img src={joxongir} alt="jaxongir ortiqxojayev" className='rounded-lg' />
            </li>
            <li className='row-span-4 p-5 bg-gradient-to-br from-first to-second rounded-lg border border-border h-auto'>
              <h2 className='text-3xl mb-4'>About Founders</h2>
              <img src={founders} alt="founders" className='mb-12' />
              <img src={img} alt="founders_img" className='w-20' />
            </li>
            <li className='inline-flex flex-col hover:scale-90 transition-all ease-in-out'>
              <Link className='rounded-lg p-4 bg-gradient-to-br from-first to-second border border-border text-xl'>
                <h2 className='mb-6'>Read about <span className='text-white/40'>Alisher isayev</span></h2>
                <div className="flex justify-between"><h3 className='text-white/40'>Founder of the "Milliard club"</h3></div>
              </Link>
            </li>
            <li className=' inline-flex flex-col hover:scale-90 transition-all ease-in-out'>
              <Link className='rounded-lg p-4 bg-gradient-to-br from-first to-second border border-border text-xl'>
                <h2 className='mb-6'>Read about <span className='text-white/40'>Jakhongir Artikhhojayev</span></h2>
                <div className="flex justify-between"><h3 className='text-white/40'>Founder of the "AKFA group"</h3></div>
              </Link>
            </li>
            <li className='p-7 bg-gradient-to-br from-first to-second border border-border rounded-lg row-span-3'>
              <h3 className='text-3xl mb-2'>Trip to countries</h3>
              <p className='text-white/40 text-lg mb-3'>The main goal is to exchange ideas, innovate based on new concepts and have fun</p>
              <ul className='flex flex-wrap gap-4'>
                <li className='border border-black rounded-full py-1 px-3 flex gap-2 items-center'>
                  <img src={turkey} alt="turkey" className='w-8 h-8 rounded-full' />
                  <p className='text-white/40'>Turkiye</p>
                </li>
                <li className='border border-black rounded-full py-1 px-3 flex gap-2 items-center'>
                  <img src={maldiv} alt="turkey" className='w-8 h-8 rounded-full' />
                  <p className='text-white/40'>Maldives</p>
                </li>
                <li className='border border-black rounded-full py-1 px-3 flex gap-2 items-center'>
                  <img src={indonesia} alt="turkey" className='w-8 h-8 rounded-full' />
                  <p className='text-white/40'>Insonesia</p>
                </li>
                <li className='border border-black rounded-full py-1 px-3 flex gap-2 items-center'>
                  <img src={uae} alt="turkey" className='w-8 h-8 rounded-full' />
                  <p className='text-white/40'>UAE</p>
                </li>
                <li className='border border-black rounded-full py-1 px-3 flex gap-2 items-center'>
                  <img src={monten} alt="turkey" className='w-8 h-8 rounded-full' />
                  <p className='text-white/40'>Montenerogo</p>
                </li>
                <li className='border border-black rounded-full py-1 px-3 flex gap-2 items-center'>
                  <img src={malasiya} alt="turkey" className='w-8 h-8 rounded-full' />
                  <p className='text-white/40'>Malaysia</p>
                </li>
              </ul>
            </li>
            <li className='row-span-3'>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,

                }}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
              >
                <SwiperSlide className='text-center '><img src={img1} alt="img1" className='rounded-lg h-[350px]' /></SwiperSlide>
                <SwiperSlide className='text-center'><img src={img2} alt="img2" className='rounded-lg h-[350px]' /></SwiperSlide>
                <SwiperSlide className='text-center'><img src={img3} alt="img3" className='rounded-lg h-[350px]' /></SwiperSlide>
                <SwiperSlide className='text-center'><img src={img4} alt="img4" className='rounded-lg h-[350px]' /></SwiperSlide>
                <SwiperSlide className='text-center'><img src={img5} alt="img5" className='rounded-lg h-[350px]' /></SwiperSlide>
                <div className="autoplay-progress hidden" slot="container-end">
                  <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref={progressContent}></span>
                </div>
              </Swiper>
            </li>
            <li className='p-7 bg-gradient-to-br from-first to-second border border-border row-span-2 rounded-lg'>
              <h2 className='text-2xl mb-2'>Expirience networking</h2>
              <p className='text-white/40 text-base mb-5'>Our club hosts Uzbekistan's top entrepreneurs, facilitating valuable networking and knowledge-sharing opportunities.</p>
              <img src={members} alt="members" className='w-50' />
            </li>
          </ul>
          <hr className='text-white/10 mt-16' />
        </div>
      </section>
      {/* What you'll get  */}
      <section className='py-16 text-white'>
        <div className="container">
          <div className="w-full max-w-[400px] mb-20">
            <button className='border mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>about us</button>
            <h1 className='uppercase text-white text-4xl'>
              What You Get with <span className='text-white/40'>the 'milliard club'</span>
            </h1>
          </div>
          <ul className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-12 '>
            <li className='p-6 border border-border rounded-lg relative bg-gradient-to-br from-first to-second w-full'>
              <img src={smile} alt="icon" className='w-20 absolute top-[-40px] ' />
              <h2 className='mt-6 mb-4 text-2xl'>Innovative Insights</h2>
              <p className='text-base text-white/40'>Gain access to cutting-edge ideas and insights through exclusive events, workshops, and discussions.</p>
            </li>
            <li className='p-6 border border-border rounded-lg relative bg-gradient-to-br from-first to-second w-full'>
              <img src={smile} alt="icon" className='w-20 absolute top-[-40px] ' />
              <h2 className='mt-6 mb-4 text-2xl'>Collaborative Projects</h2>
              <p className='text-base text-white/40'>Engage in collaborative projects with fellow members, fostering innovation and business growth.</p>
            </li>
            <li className='p-6 border border-border rounded-lg relative bg-gradient-to-br from-first to-second w-full'>
              <img src={smile} alt="icon" className='w-20 absolute top-[-40px] ' />
              <h2 className='mt-6 mb-4 text-2xl'>Expanded Network</h2>
              <p className='text-base text-white/40'>Connect with influential entrepreneurs and industry leaders, expanding your professional network.</p>
            </li>
            <li className='p-6 border border-border rounded-lg relative bg-gradient-to-br from-first to-second w-full'>
              <img src={smile} alt="icon" className='w-20 absolute top-[-40px] ' />
              <h2 className='mt-6 mb-4 text-2xl'>Personal Growth</h2>
              <p className='text-base text-white/40'>Develop personally and professionally through mentorship, skill-building sessions, and peer support.</p>
            </li>
            <li className='p-6 border border-border rounded-lg relative bg-gradient-to-br from-first to-second w-full'>
              <img src={smile} alt="icon" className='w-20 absolute top-[-40px] ' />
              <h2 className='mt-6 mb-4 text-2xl'>Business Opportunities</h2>
              <p className='text-base text-white/40'>Discover new business opportunities and partnerships within the club's diverse community.</p>
            </li>
            <li className='p-6 border border-border rounded-lg relative bg-gradient-to-br from-first to-second w-full'>
              <h2 className=' mb-4 text-2xl'>Interested in joining the club? Provide your information by clicking below </h2>
              <a href='#1' className='inline-flex w-full py-3 px-4 rounded-lg bg-gradient-to-br from-yellow1 to-yellow2  border-yellowBorder justify-center uppercase hover:opacity-40 transition-all ease-in-out cursor-pointer'>
                join the club
              </a>
            </li>
          </ul>
          <hr className='text-white/10 mt-16' />
        </div>
      </section>
      {/* Members  */}
      <section className='py-16 text-white'>
        <div className=" w-full max-w-[1220px] mx-auto  bg-gradient-to-br from-first tt-second border-border border rounded-xl p-10">
          <div className="mb-10">
            <button className='border mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>BUSINESS TYPES</button>
            <h1 className='uppercase text-white text-3xl md:text-5xl'>
              We have members <br /> <span className='text-white/40'> in these business spheres</span>
            </h1>
          </div>
          <ul className='flex-wrap md:flex gap-x-6 gap-y-7'>
            <li className='flex items-center gap-6 mb-4'>
              <div className="bg-gradient-to-br from-first to-second rounded-lg border-black border p-4 flex items-center h-full gap-6">
                <img src={basket} alt="basket" className='w-8 opacity-40' />
                <span className='w-[1px] h-full bg-white/10'></span>
                <h3 className='text-xl text-white/40'>Manufacturing</h3>
              </div>
              <div className="relative rounded-lg flex items-center justify-center w-15 h-15 bg-yellow1 rotate-20 text-white font-bold text-xl ml-auto">
                <div className="rounded-lg absolute top-0 left-0 w-15 h-15 bg-yellow1 rotate-[135deg]"></div>
                <h3 className='absolute rotate-[-19deg] '>17%</h3>
              </div>
            </li>
            <li className='flex flex-row-reverse w-full md:w-auto md:flex-row items-center gap-6 mb-4'>
              <div className="bg-gradient-to-br from-first to-second rounded-lg border-black border p-4 flex items-center h-full gap-6">
                <img src={basket} alt="basket" className='w-8 opacity-40' />
                <span className='w-[1px] h-full bg-white/10'></span>
                <h3 className='text-xl text-white/40'>Logistics</h3>
              </div>
              <div className="relative rounded-lg flex items-center justify-center w-15 h-15 bg-yellow1 rotate-20 text-white font-bold text-xl ml-auto">
                <div className="rounded-lg absolute top-0 left-0 w-15 h-15 bg-yellow1 rotate-[135deg]"></div>
                <h3 className='absolute rotate-[-19deg] '>15%</h3>
              </div>
            </li>
            <li className='flex items-center gap-6 mb-4'>
              <div className="bg-gradient-to-br from-first to-second rounded-lg border-black border p-4 flex items-center h-full gap-6">
                <img src={basket} alt="basket" className='w-8 opacity-40' />
                <span className='w-[1px] h-full bg-white/10'></span>
                <h3 className='text-xl text-white/40'>Retail and Whosales</h3>
              </div>
              <div className="relative rounded-lg flex items-center justify-center w-15 h-15 bg-yellow1 rotate-20 text-white font-bold text-xl ml-auto">
                <div className="rounded-lg absolute top-0 left-0 w-15 h-15 bg-yellow1 rotate-[135deg]"></div>
                <h3 className='absolute rotate-[-19deg] '>18%</h3>
              </div>
            </li>
          
            <li className='flex items-center flex-row-reverse w-full md:w-auto md:flex-row gap-6 mb-4'>
              <div className="bg-gradient-to-br from-first to-second rounded-lg border-black border p-4 flex items-center h-full gap-6">
                <img src={basket} alt="basket" className='w-8 opacity-40' />
                <span className='w-[1px] h-full bg-white/10'></span>
                <h3 className='text-xl text-white/40'>Services</h3>
              </div>
              <div className="relative rounded-lg flex items-center justify-center w-15 h-15 bg-yellow1 rotate-20 text-white font-bold text-xl ml-auto">
                <div className="rounded-lg absolute top-0 left-0 w-15 h-15 bg-yellow1 rotate-[135deg]"></div>
                <h3 className='absolute rotate-[-19deg] '>10%</h3>
              </div>
            </li>
            <li className='flex items-center mb-4 gap-6'>
              <div className="bg-gradient-to-br from-first to-second rounded-lg border-black border p-4 flex items-center h-full gap-6">
                <img src={basket} alt="basket" className='w-8 opacity-40' />
                <span className='w-[1px] h-full bg-white/10'></span>
                <h3 className='text-xl text-white/40'> Technology and IT</h3>
              </div>
              <div className="relative rounded-lg flex items-center justify-center w-15 h-15 bg-yellow1 rotate-20 text-white font-bold text-xl ml-auto">
                <div className="rounded-lg absolute top-0 left-0 w-15 h-15 bg-yellow1 rotate-[135deg]"></div>
                <h3 className='absolute rotate-[-19deg] '>17%</h3>
              </div>
            </li>
            <li className='flex items-center gap-6 mb-4 flex-row-reverse w-full md:w-auto md:flex-row'>
              <div className="bg-gradient-to-br from-first to-second rounded-lg border-black border p-4 flex items-center h-full gap-6">
                <img src={basket} alt="basket" className='w-8 opacity-40' />
                <span className='w-[1px] h-full bg-white/10'></span>
                <h3 className='text-xl text-white/40'>Construction</h3>
              </div>
              <div className="relative rounded-lg flex items-center justify-center w-15 h-15 bg-yellow1 rotate-20 text-white font-bold text-xl ml-auto">
                <div className="rounded-lg absolute top-0 left-0 w-15 h-15 bg-yellow1 rotate-[135deg]"></div>
                <h3 className='absolute rotate-[-19deg] '>15%</h3>
              </div>
            </li>

            <li className='flex items-center gap-6 mb-4  '>
              <div className="bg-gradient-to-br from-first to-second rounded-lg border-black border p-4 flex items-center h-full gap-6">
                <img src={basket} alt="basket" className='w-8 opacity-40' />
                <span className='w-[1px] h-full bg-white/10'></span>
                <h3 className='text-xl text-white/40'>Food Production</h3>
              </div>
              <div className="relative rounded-lg flex items-center justify-center w-15 h-15 bg-yellow1 rotate-20 text-white font-bold text-xl ml-auto">
                <div className="rounded-lg absolute top-0 left-0 w-15 h-15 bg-yellow1 rotate-[135deg]"></div>
                <h3 className='absolute rotate-[-19deg] '>10%</h3>
              </div>
            </li>
            <li className='flex items-center gap-6 mb-4 flex-row-reverse w-full md:w-auto md:flex-row '>
              <div className="bg-gradient-to-br from-first to-second rounded-lg border-black border p-4 flex items-center h-full gap-6">
                <img src={basket} alt="basket" className='w-8 opacity-40' />
                <span className='w-[1px] h-full bg-white/10'></span>
                <h3 className='text-xl text-white/40'>Pharmaceuticals and</h3>
              </div>
              <div className="relative rounded-lg flex items-center justify-center w-15 h-15 bg-yellow1 rotate-20 text-white font-bold text-xl ml-auto">
                <div className="rounded-lg absolute top-0 left-0 w-15 h-15 bg-yellow1 rotate-[135deg]"></div>
                <h3 className='absolute rotate-[-19deg] '>18%</h3>
              </div>
            </li>
          
            <li className='flex items-center gap-6 mb-4 '>
              <div className="bg-gradient-to-br from-first to-second rounded-lg border-black border p-4 flex items-center h-full gap-6">
                <img src={basket} alt="basket" className='w-8 opacity-40' />
                <span className='w-[1px] h-full bg-white/10'></span>
                <h3 className='text-xl text-white/40'>Others</h3>
              </div>
              <div className="relative rounded-lg flex items-center justify-center w-15 h-15 bg-yellow1 rotate-20 text-white font-bold text-xl ml-auto">
                <div className="rounded-lg absolute top-0 left-0 w-15 h-15 bg-yellow1 rotate-[135deg]"></div>
                <h3 className='absolute rotate-[-19deg] '>10%</h3>
              </div>
            </li>

          </ul>


        </div>
        <hr className=' max-w-[1220px] w-full text-white/10 mt-16 mx-auto' />
      </section>
      {/* Permament members  */}
      <section className='py-16 text-white'>
        <div className="container">
          <div className="mb-10">
            <button className='border mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>SPEAKERS</button>
            <h1 className='uppercase text-white text-5xl'>
              Permanent members  <br /> <span className='text-white/40'>of MILLIARD club</span>
            </h1>
          </div>
          <ul className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
            {member.map(function (mem) {
              return (
                <li className='bg-gradient-to-br from-first to-second p-6 border border-border rounded-lg flex gap-3'>
                  <img src={mem.img} alt="member_img" className='w-20 rounded-lg' />
                  <div className="">
                    <h3 className='text-lg'>{mem.name}</h3>
                    <p className='opacity-40 mb-3'>{mem.job}</p>
                    <span className='text-[12px] px-1 text-black rounded-[2px] bg-gray-500'>i</span>
                  </div>
                </li>
              )
            })}
          </ul>
          <hr className='text-white/10 mt-16' />
        </div>
      </section>
      {/* trips  */}
      <section className='py-16 text-white'>
        <div className="container">
          <div className="mb-10">
            <button className='border mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>TRIPS</button>
            <h1 className='uppercase text-white text-5xl'>
              our trips<br /> <span className='text-white/40'>with club members</span>
            </h1>
          </div>
          <ul>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 50,
                },
              }}
              modules={[]}
              className="mySwiper max-w-screen "
            >
              {
                trips.map(function (trip) {
                  return (
                    <SwiperSlide onClick={(e) => Setshow(true)} className='cursor-pointer even:mt-5 bg-gradient-to-br from-first to-second p-7 border-border border rounded-lg'>
                      <div className="mb-4 flex justify-center"><img src={trip.flag} alt="flag" className='w-12' /></div>
                      <img src={trip.img} alt="flag" className='w-full mb-4 rounded-lg h-[303px]' />
                      <div className="flex justify-between items-end"><p className='text-white/40 text-2xl w-full max-w-[200px]'>{trip.text}</p>
                        <button onClick={(e) => Setshow(true)} className='cursor-pointer bg-white/10 p-2 rounded-full'><img src={enter} alt="enter" className='opacity-40' /></button>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </ul>
        </div>
        <hr className=' max-w-[1220px] w-full text-white/10 mt-16 mx-auto' />
      </section>
      {/* opinions  */}
      <section className='py-16 text-white'>
        <div className="container">
          <div className="mb-10">
            <button className='border mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>MEMBERS REVIEW</button>
            <h1 className='uppercase text-white text-5xl'>
              GET TO KNOW THE OPINIONS<br /> <span className='text-white/40'>OF OUR CLUB MEMBERS</span>
            </h1>
          </div>
          <ul className='grid grid-cols-1 md:grid-cols-4 gap-3'>
            {opinions.map(function (opinion) {
              return (
                <li onClick={() => openVideo(opinion)} className='cursor-pointer flex flex-col gap-3'>
                  <div className="relative h-[410px]">
                    <img src={opinion.img} alt="memeber_img" className='h-[410px] w-full rounded-lg absolute' />
                    <button className='absolute right-3 top-4 py-3 pl-3 pr-2.5 cursor-pointer rounded-full bg-white'><img src={play} alt="play button" /></button>
                    <h2 className='text-lg bg-gradient-to-br from-first to-second absolute bottom-3 left-3 backdrop-blur-md py-2 px-3 border-black border rounded-full  '>{opinion.name}</h2>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-first to-second rounded-lg border-border border">
                    <h3 className='text-lg mb-2'>{opinion.Job}</h3>
                    <p className='text-white/40'>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      {/* partners  */}
      <section className='text-white py-16'>
        <div className="container">
          <div className="mb-10">
            <button className='border mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>partners</button>
            <h1 className='uppercase text-white text-5xl'>
              our<br /> <span className='text-white/40'>partners</span>
            </h1>
          </div>

        </div>
        <ul className="grid grid-cols-1 mx-auto max-w-[1220px] md:grid-cols-7 md:max-w-full gap-6 w-full ">
          {
            logos.map(function (logo) {
              return (
                <li className="p-5 bg-second border-border border-2 flex items-center justify-center">
                  <img src={logo.img} alt="" className="h-30 w-60 " />
                </li>
              )
            })
          }
        </ul>
      </section>
      {/* FAQ  */}
      <section className='py-16 text-white'>
        <div className="container">
          <div className="mb-10">
            <button className='border mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>FAQ</button>
            <h1 className='uppercase text-white text-5xl'>
              frequently<br /> <span className='text-white/40'>asking question</span>
            </h1>
          </div>
          <div className="flex gap-10 items-start">
            <div className="hidden md:block w-[266px] h-[299px] bg-gradient-to-br mt-10 border  rounded-2xl  from-first to-second  border-border"></div>
            <div className="w-full mx-auto mt-8 space-y-3">
              {faqData.map(({ id, question, answer }) => (
                <div className={`w-full flex flex-col items-start p-8 border-border border rounded-2xl bg-gradient-to-br from-first to-second `}>
                  <div className="flex justify-between w-full">
                    <span className="text-base md:text-xl">{question}</span>
                    <button onClick={() => toggleFAQ(id)} className=' w-10 h-10 flex items-center justify-center  cursor-pointer rounded-full  bg-white/10'><img src={plus} className={`transition-transform ${openId == id ? "rotate-45" : ""}`} /></button>
                  </div>
                  <AnimatePresence>
                    {openId === id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4  text-white/40 text-base max-w-[650px] text-start">{answer}</motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <hr className='text-white/10 mt-16' />
        </div>
      </section>
      {/* contact  */}
      <section className='py-16 text-white' id="1">
        <div className=" container flex flex-col md:flex-row gap-10 mx-auto p-8 bg-gradient-to-br from-first to-second border border-border rounded-xl">
          <div className="w-full max-w-[650px]">
            <div className="mb-10">
              <button className='border mb-3 border-black bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>CONTACT</button>
              <h1 className='uppercase text-white text-3xl'>
                Please complete the form <br /> <span className='text-white/40'>to join our  club</span>
              </h1>
            </div>
            <ul className="grid grid-cols-1 gap-y-10 md:grid-cols-2 ">
              {
                contact.map(function (cont) {
                  return (
                    <li className='flex w-full gap-5 items-center '>
                      <img src={call} alt="contact_icon" className='opacity-40 w-8 h-8' />
                      <div className="flex flex-col">
                        <h3>{cont.name}</h3>
                        <p className='text-white/40 max-w-[200px]'>{cont.info}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="w-full bg-form p-8 rounded-lg ">
            <h2 className='text-2xl mb-4'>Fill out the form</h2>
            <form action="https://sheetdb.io/api/v1/dgi3dg5vywhil" method='POST' onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <input type="text" name='data[Ism]' value={textValue} onChange={(e) => setTextValue(e.target.value)} required placeholder='Write your name' className='p-3 bg-input/10 border-white/10 border rounded-lg outline-0 focus: focus:border-yellow1 focus:border-2 w-full' />
              <input type="number" name='data[Telefon]' value={numberValue} onChange={(e) => setNumberValue(e.target.value)} required placeholder='+998' className='appearance-none no-spinner p-3 bg-input/10 border-white/10 border rounded-lg outline-0 focus: focus:border-yellow1 focus:border-2 w-full' />
              <select name='data[Summa]' onChange={(e) => setSelectValue(e.target.value)} value={selectValue} className="p-3 bg-input/10 border-white/10 border rounded-lg outline-0 focus: focus:border-yellow1 focus:border-2 w-full">
                <option value="DEFAULT" disabled >Annual income </option>
                <option value="from 0 to 1000$" className='text-black'>from 0 to 1000$</option>
                <option value="from 1000 to 10 000$" className='text-black'>from 1000 to 10 000$</option>
                <option value="from 10 000 to 50 000$" className='text-black'>from 10 000 to 50 000$</option>
                <option value="from 50 000 to 100 000$" className='text-black'>from 50 000 to 100 000$</option>
                <option value="from 100 000 to 1 000 000$" className='text-black'>from 100 000 to 1 000 000$</option>
                <option value="above 1 000 000$" className='text-black'>above 1 000 000$</option>
              </select>
              <textarea
                name='data[Xabar]'
                placeholder='Message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='p-3 h-25 bg-input/10 border-white/10 border rounded-lg outline-0 focus:border-yellow1 focus:border-2 w-full'
              ></textarea>
              <input type="submit" value="SEND" disabled={!isFormValid} onClick={() => setOpenInput(true)} className={`p-3 bg-white text-black text-center rounded-lg text-xl ${!isFormValid ? "opacity-40" : ""}`} />
            </form>
          </div>
        </div>
      </section>
      {/* Overlays  */}
      {
        Array.map(function (opinion) {
          return (
            openArray &&
            <div onClick={() => SetopenArray(false)} className="z-60 h-screen fixed inset-0 w-full max-w-screen  bg-black/50 backdrop-blur-lg flex items-center justify-center text-white text-2xl">
              <div className="p-5 bg-gray-400 rounded-lg relative">
                <button onClick={() => SetopenArray(false)} className='cursor-pointer absolute bg-yellow1 p-4 rounded-full right-0 border-border border top-[-50px]'><img src={close} alt="close_btn" className='w-2' /></button>
                <iframe
                  className='mb-3 w-[250px] h-[250px] md:w-[580px] md:h-[339px]'
                  src={opinion.iframe}>
                </iframe>
                <h3>{opinion.name}</h3>
              </div>
            </div>
          )
        })}
      {
        openInput && <div onClick={() => setOpenInput(false)} className="z-60 w-full h-screen max-w-screen  fixed inset-0  bg-black/50 backdrop-blur-lg flex items-center justify-center text-white text-2xl">
          <div className="p-5 bg-white rounded-xl flex flex-col items-center text-black">
            <img src={medal} alt="" className='w-32 mb-5' />
            <h3 className='font-bold text-3xl mb-2'>Request sent successfully</h3>
            <p className=' opacity-40 text-base max-w-[328px] text-center mb-6'>Your request has been successfully sent and we will contact you shortly</p>
            <Link to="/" className='uppercase text-xl text-white w-full rounded-lg bg-yellow1 text-center p-3'>go back home</Link>
          </div>
        </div>
      }
      {show && <div onClick={() => Setshow(false)} className="z-60 h-screen max-w-screen  w-full fixed inset-0  bg-black/50 backdrop-blur-lg flex items-center justify-end text-white text-2xl">
        <div className="relative w-[90%] right-0 left-0 md:w-[40%] flex justify-end">
          <button onClick={() => Setshow(false)} className='cursor-pointer absolute bg-[#1b1a1b] p-5 rounded-full border-border border left-15'><img src={close} alt="" /></button>
          <div className="inline p-6 w-[80%] h-screen backdrop-blur-none bg-[#1b1a1b]">
            {trips.slice(0, 1).map(function (trip) {
              return (
                <>
                  <h2 className='py-3 border-b border-white/10'>
                    {`"Milliar club" a'zolar ${trip.name}da`}
                  </h2>
                  <div className="py-3 border-b border-white/10">
                    <img src={trip.img} alt="trip_img" className='w-full rounded-2xl mb-2' />
                    <p className='text-lg text-white/40'>Klub aʼzolari uchun “Milliard Tour” boʼlib oʼtdi. Bu galgi turdan koʼzlangan asosiy maqsad hordiq chiqarish va yangi gʼoyalar asosida, bir-biri bilan fikr almashish boʼldi <br /> <br />Mehmon spiker sifatida esa Аbdukarim Mirzaev tashrif buyurdi va oʼz bilimlari bilan oʼrtoqlashdi. Koʼtarinki ruhda oʼtgan sayohat taassurotlari haqida ushbu video soʼzlaydi. </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className='text-base text-white/40 max-w-[190px]'>Bizni ijtimoiy tarmoqlarda kuzatib boring →</h3>
                    <ul className='flex gap-4'>
                      <li><a href="https://www.instagram.com/milliard_club_uz/" className='p-3 bg-gradient-to-br from-first to-second inline-flex rounded-lg'><img src={instagram} alt="instagram" /></a></li>
                      <li><a href="https://t.me/AlisherIsaev_blogi" className='p-3 bg-gradient-to-br from-first to-second inline-flex rounded-lg'><img src={telegram} alt="telegram" /></a></li>
                      <li><a href="https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fmilliardclubuz%2F" className='p-3 bg-gradient-to-br from-first to-second inline-flex rounded-lg'><img src={facebook} alt="facebook" /></a></li>
                      <li><a href="https://www.youtube.com/@AlisherIsaev" className='p-3 bg-gradient-to-br from-first to-second inline-flex rounded-lg'><img src={youtube} alt="instagram" /></a></li>
                    </ul>

                  </div>
                </>

              )
            })}
          </div>
        </div>
      </div>}
      {open && <div onClick={() => Setopen(false)} className="z-60  h-screen fixed inset-0 w-full max-w-screen  bg-black/50 backdrop-blur-lg flex items-center justify-center text-white text-2xl">
        <iframe src="https://www.youtube.com/embed/uTFursWSzVk" title="Milliard 11-soni | Biznesga 3D nazar bilan qarash | Abdukarim Mirzayev" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-[300px] h-[300px] md:w-[760px] md:h-[439px]" allowfullscreen></iframe>
      </div>}
    </div>

  )
}

export default Home
