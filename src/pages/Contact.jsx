import React, { useState } from 'react'
import { contact, platforms } from '../data/data';
import call from "../img/call.png"
import medal from "../img/medal.avif"
import { Link } from 'react-router';
const Contact = () => {
  const [openInput, setOpenInput] = useState(false);
  const [selectValue, setSelectValue] = useState("DEFAULT");
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const isFormValid = textValue.trim() !== "" && numberValue.trim() !== "" && selectValue !== "DEFAULT";
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (numberValue.length < 12) {
      e.preventDefault(); // Formani yuborishni to‘xtatish
      alert("Siz telefon raqamni xato kiritdingiz");
      return;
    }  
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setOpenInput(true)
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
    <div className='text-white font-Mandrope'>
      <section className='py-16 text-white'>
        <div className="container">
          <div className="w-full max-w-[650px]">
            <div className="mb-10">
              <button className='border mb-3 border-black bg-gradient-to-br from-first to-second py-1 px-5 uppercase text-white/40 rounded-lg'>CONTACT</button>
              <h1 className='uppercase text-white text-4xl'>
                FILL OUT THE FORM TO <br /> <span className='text-white/40'>SUBSCRIBE TO OUR CLUB</span>
              </h1>
            </div>
          </div>
          <div className="w-full max-w-[1220px] gap-4 mx-auto flex flex-col lg:flex-row mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.2515133443956!2d69.28091531542246!3d41.30561237927025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b472695f6db%3A0xfae2abf20295e158!2sMilliard%20club!5e0!3m2!1sen!2s!4v1649240695478!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=' w-auto lg:w-[2000px] rounded-2xl '>
            </iframe>          <div className="w-full bg-form p-8 rounded-lg ">
              <h2 className='text-2xl mb-4'>Fill out the form</h2>
              <form action="https://sheetdb.io/api/v1/dgi3dg5vywhil" method='POST' onSubmit={handleSubmit} className='flex flex-col gap-4 mb-4'>
                <input type="text" name='data[Ism]' value={textValue} onChange={(e) => setTextValue(e.target.value)} required placeholder='Write your name' className='p-3 bg-input/10 border-white/10 border rounded-lg outline-0 focus: focus:border-yellow1 focus:border-2 w-full' />
                <input type="tel" inputmode="numeric" pattern="[0-9\s]+" maxLength="19" name='data[Telefon]' value={numberValue} onChange={(e) => setNumberValue(e.target.value)} required placeholder='+998 (__) ___-__-__'className='appearance-none no-spinner p-3 bg-input/10 border-white/10 border rounded-lg outline-0 focus: focus:border-yellow1 focus:border-2 w-full' />
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
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
                {
                  contact.slice(2, 4).map(function (cont) {
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
          </div>
          <ul className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
              platforms.map(function (platform) {
                return (
                  <li className='p-7 rounded-xl border border-border  bg-gradient-to-br from-first to-second'>
                    <div className="flex gap-4 items-center mb-4"><img src={platform.img} alt="" className='w-10 opacity-40' /><h3 className='text-base font-bold'>{platform.name}</h3></div>
                    <p className='text-white/40 text-xl'>{platform.info}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
      {
        openInput && <div onClick={() => setOpenInput(false)} className="-z-[-4] fixed inset-0  bg-black/50 backdrop-blur-lg flex items-center justify-center text-white text-2xl">
          <div className="p-5 bg-white rounded-xl flex flex-col items-center text-black">
            <img src={medal} alt="" className='w-32 mb-5' />
            <h3 className='font-bold text-3xl mb-2'>Request sent successfully</h3>
            <p className=' opacity-40 text-base max-w-[328px] text-center mb-6'>Your request has been successfully sent and we will contact you shortly</p>
            <Link to="/contact" className='uppercase text-xl text-white w-full rounded-lg bg-yellow1 text-center p-3'>go back home</Link>
          </div>
        </div>
      }
    </div>
  )
}

export default Contact
