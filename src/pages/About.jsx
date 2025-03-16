import React, { useState, useRef } from 'react';
import bg from "../img/bg.jpg";
import milliardFlag from "../img/milliardFlag.avif";
import turkey from "../img/turkey.avif";
import uae from "../img/uae.avif";
import maldiv from "../img/maldiv.avif";
import monten from "../img/monten.avif";
import malasiya from "../img/malasiya.avif";
import indonesia from "../img/indonesia.avif";
import greenLogo from "../img/greenLogo.avif";
import web from "../img/web.png";
import members from "../img/members.avif";
import instagram from "../img/instagram.png";
import { img, ins } from 'framer-motion/client';
import dual from "../img/dual.png"
import { ParkingCircle } from 'lucide-react';
import { photos, team } from '../data/data';
import { faqData, contact, logos, member, opinions, trips } from '../data/data'
import enter from "../img/enter.png";
import close from "../img/close.png";
import play from "../img/play.png"
import plus from "../img/plus.png";
import { AnimatePresence, motion } from "framer-motion";
import call from "../img/call.png"
import medal from "../img/medal.avif"
const About = () => {
  const [Array, SetArray] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [selectValue, setSelectValue] = useState("DEFAULT");
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const isFormValid = textValue.trim() !== "" && numberValue.trim() !== "" && selectValue !== "DEFAULT";
  const [openArray, SetopenArray] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [formData, setFormData] = useState({});
  const openModal = (el) => {
    Setshow(true)
  }
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };
  const openVideo = (el) => {
    SetopenArray(true);
    const filteredArray = opinions.filter((op) => op.name == el.name)
    SetArray(filteredArray)
  }
 const [message, setMessage] = useState("");
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
        alert("Form successfully submitted!");
        setTextValue("");
        setNumberValue("");
        setSelectValue("DEFAULT");
        setMessage("");
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };
  const [open, Setopen] = useState(false);
  const [openPhoto, SetopenPhoto] = useState(false);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;

  };
  return (
    <div className="text-white font-Mandrope">
      {/* home  */}
      <section className={`text-center py-64 mt-[-200px]  bg-no-repeat bg-center bg-cover h-screen`} style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black/70 h-[103vh]"></div>
        <div className="container">
          <div className="w-full max-w-[500px] relative z-10 ">
            <h1 className='text-white uppercase text-5xl leading-15 mb-4'>
              about "milliard"<br /> <span className='text-white/40'>bussines club</span>
            </h1>
            <p className='text-xl text-white/50 mb-4'>Bir-biringizga yordam berish va yangi foydali aloqalarni topish orqali baxt va muvaffaqiyatga erishing</p>
            <button onClick={() => Setopen(true)} className=' bg-button backdrop-blur-xl py-4 px-7 uppercase text-white rounded-lg cursor-pointer'>showreel about us</button>
          </div>
        </div>
      </section>
      {/* information  */}
      <section className='py-16'>
        <div className="container">
          <div className="mb-10">
            <h3 className='border inline-block mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>TRIPS</h3>
            <h1 className='uppercase text-white text-5xl'>
              information about <br /><span className='text-white/40'>milliard club</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 " >
            <div className="row-span-5 w-full bg-second border border-border p-7 rounded-xl flex flex-col">
              <img src={milliardFlag} alt="milliardFLag" className='w-full rounded-lg mb-4 ' />
              <h3 className='text-2xl mb-3'>About club</h3>
              <p className='text-white/40 mb-5'>Milliard club is the first international business club in Uzbekistan, which will be officially launched in December 2020. The club includes strong businessmen, entrepreneurs and experts who have achieved success in various fields.</p>
              <button className='cursor-pointer text-white/40 uppercase text-end'>read more</button>
            </div>
            <div className='p-7 bg-second border border-border rounded-lg row-span-4'>
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
            </div>
            <div className="flex order-1  bg-second border-border border rounded-lg p-5 gap-4 col-span-1 row-span-1  items-center">
              <img src={greenLogo} alt="greenLogo" className='w-16' />
              <h3 className='font-bold'>Alisher Isayev's 1-month business treatment course</h3>
              <span className='p-2 bg-white/10 rounded-full'><img src={web} alt="web" className='w-8 opacity-40' /></span>
            </div>
            <div className='p-7 bg-second border-border row-span-3 rounded-lg'>
              <h2 className='text-2xl mb-2'>Expirience networking</h2>
              <p className='text-white/40 text-base mb-5'>Our club hosts Uzbekistan's top entrepreneurs, facilitating valuable networking and knowledge-sharing opportunities.</p>
              <img src={members} alt="members" className='w-50' />
            </div>
            <div className="flex bg-second border border-border rounded-lg row-span-2 justify-between">
              <div className="p-5 ">
                <div className="flex flex-col">
                  <img src={instagram} alt="instagram" className='w-10 mb-7' />
                  <h3 className='text-xl'>Follow us on <br /> instagram</h3>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <img src={dual} alt="dualPhones" className='w-50 h-30' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='text-white/10 mt-16 container' />
      {/* photos  */}
      <section className='py-16'>
        <div className="container">
          <div className="mb-10">
            <h3 className='border inline-block mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>TRIPS</h3>
            <h1 className='uppercase text-white text-5xl'>
              photos from <br /><span className='text-white/40'>the meetings</span>
            </h1>
          </div>
        </div>
        <div className="w-full max-w-screen mx-auto ">
          <ul className='flex flex-col gap-5 text-center mx-auto'>
            <ul className='flex flex-col md:flex-row  gap-5 justify-center md:justify-end'>
              {photos.slice(0, 4).map(function (photo) {
                return (
                  <li onClick={() => SetopenPhoto(true)} className='mx-auto md:mx-0 md:w-auto relative cursor-pointer'>
                    <img src={photo.img} alt="photo" className='w-90 rounded-lg' />
                    <div className="absolute p-5 w-full h-full top-10">
                      <h3 className='absolute bottom-13 text-lg'>Summit name after Omar hali</h3>
                      <img src={enter} alt="" className='absolute top-[-20px] ' />
                    </div>
                  </li>
                )
              })}
            </ul> 
            <ul className='flex flex-col md:flex-row gap-5 justify-center md:justify-start'>
              {photos.slice(4, 8).map(function (photo) {
                return (
                  <li onClick={() => SetopenPhoto(true)} className='mx-auto md:mx-0 md:w-auto relative  cursor-pointer'>
                    <img src={photo.img} alt="photo" className='w-90 rounded-lg' />
                    <div className="absolute p-5 w-full h-full top-10">
                      <h3 className='absolute bottom-13 text-lg'>Summit name after Omar hali</h3>
                      <img src={enter} alt="" className='absolute top-[-20px] ' />
                    </div>
                  </li>
                )
              })}
            </ul>
          </ul>
        </div>
        <hr className='text-white/10 mt-16 container' />
      </section>
      {/* team members  */}
      <section className='py-16'>
        <div className="container">
          <div className="mb-10">
            <h3 className='border inline-block mb-3 border-border bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>TRIPS</h3>
            <h1 className='uppercase text-white text-5xl'>
              meet the team<br /><span className='text-white/40'>members</span>
            </h1>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {
              team.map(function (t) {
                return (
                  <li className='bg-gradient-to-br from-first to-second border border-black  rounded-lg'>
                    <img src={t.img} alt="teamImg" />
                    <div className="p-5">
                      <h3 className='text-2xl mb-4'>{t.name}</h3>
                      <p className='text-lg text-white/40'>{t.job}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <hr className='text-white/10 mt-16 container' />
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
          <ul className='grid grid-cols-1 md:grid-cols-4 gap-1'>
            {opinions.map(function (opinion) {
              return (
                <li onClick={() => openVideo(opinion)} className='cursor-pointer flex flex-col gap-3'>
                  <div className="relative h-[410px] w-full">
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
        <ul className="grid grid-cols-1 mx-auto max-w-[1220px] md:grid-cols-7 md:max-w-full gap-3 w-full ">
            {
              logos.map(function (logo){
                return(
                  <li className="p-5 bg-second border-border border-2 flex items-center justify-center">
                    <img src={logo.img} alt="" className="h-25 w-60 " />
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
                  <div className="flex gap-5 justify-between w-full">
                    <span className="text-xl">{question}</span>
                    <button onClick={() => toggleFAQ(id)} className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-full  bg-white/10'><img src={plus} className={`transition-transform ${openId == id ? "rotate-45"  : ""}`} /></button>
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
      <section className='py-16 text-white'>
        <div className="w-full max-w-[1220px] flex-col md:flex-row  flex gap-10 mx-auto p-8 bg-gradient-to-br from-first to-second border border-border rounded-xl">
          <div className="w-full max-w-[650px]">
            <div className="mb-10">
              <button className='border mb-3 border-black bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>CONTACT</button>
              <h1 className='uppercase text-white text-3xl'>
                Please complete the form <br /> <span className='text-white/40'>to join our  club</span>
              </h1>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
              {
                contact.map(function (cont) {
                  return (
                    <li className='flex  w-full gap-5 items-center '>
                      <img src={call} alt="contact_icon" className='opacity-40 w-8 h-8' />
                      <div className="flex flex-col">
                        <h3>{cont.name}</h3>
                        <p className='text-white/40 max-w-[150px]'>{cont.info}</p>
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
              <textarea name='data[Xabar]' placeholder='Messege...' className='p-3 h-25 bg-input/10 border-white/10 border rounded-lg outline-0 focus: focus:border-yellow1 focus:border-2 w-full'></textarea>
              <input type="submit" value="SEND" disabled={!isFormValid} className={`p-3 bg-white text-black text-center rounded-lg text-xl ${!isFormValid ? "opacity-40" : ""}`} />
            </form>
          </div>
        </div>
      </section>
      {/* Overlays */}
      {
        openPhoto && <div onClick={() => SetopenPhoto(false)} className="z-60  h-screen fixed inset-0  w-full max-w-screen bg-black/50 backdrop-blur-lg flex items-center justify-center text-white text-2xl">
          <div className="p-5 bg-gray-500 rounded-xl relative">
            {photos.slice(0, 1).map(function (photo) {
              return (
                <div className='w-full max-w-[80vh]  '>
                  <button onClick={() => SetopenPhoto(false)} className='cursor-pointer absolute bg-yellow1 p-4 rounded-full right-0 border-border border top-[-50px]'><img src={close} alt="close_btn" className='w-2' /></button>
                  <img src={photo.img} className='w-150 mb-3' />
                  <h3>PhotoGaler</h3>
                </div>
              )
            })}
          </div>
        </div>
      }
      {open && <div onClick={() => Setopen(false)} className="z-60  h-screen fixed inset-0 w-full max-w-screen  bg-black/50 backdrop-blur-lg flex items-center justify-center text-white text-2xl">
        <iframe  src="https://www.youtube.com/embed/uTFursWSzVk" title="Milliard 11-soni | Biznesga 3D nazar bilan qarash | Abdukarim Mirzayev" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-[300px] h-[300px] md:w-[760px] md:h-[439px]" allowfullscreen></iframe>
      </div>}
      
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
    </div>
  )
}

export default About
