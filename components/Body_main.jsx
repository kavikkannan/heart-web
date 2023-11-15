'use client';
import React from 'react'
import Header from '@/components/Header_LPage'
import Link from 'next/link'
import { useEffect,useState } from 'react'
export default function Body_main() {
  const [selected, setSelected] = useState('');
  const [description, setTaskName] = useState("");
  const [email, setEmail] = useState("");
  const status = 'on-going';
  const [date, setDeadline] = useState("");

  function handleSubmit(){

  }

  return (
    <div>
        <div><Header/></div>
        <div className=' fixed left-0 w-52 h-screen'>
        <ul className="flex flex-col gap-32">
          <li className='flex'>
          <img
              src="/images/heartD.jpg"
              alt="Blood Pressure Image"
              className="relative top-3 w-8 h-10 mr-2 "
            />
            <div className=" bg-blue-300 rounded-md p-4 text-black">
              <Link href="#bp">Blood Pressure</Link>
            </div>
          </li>
          <li className='flex'>
          <img
              src="/images/heartD.jpg"
              alt="Blood Pressure Image"
              className=" relative top-3 w-8 h-8 mr-2"
            />
            <div className="bg-blue-300 rounded-md p-4 text-black">
              <Link href="#ch">Cholesterol</Link>
            </div>
          </li>
          <li className='flex'>
          <img
              src="/images/heartD.jpg"
              alt="Blood Pressure Image"
              className=" relative top-3 w-8 h-8 mr-2"
            />
            <div className="bg-blue-300 rounded-md p-4 text-black">
              <Link href="#bs">Blood Sugar</Link>
            </div>
          </li>
          <li className='flex'>
          <img
              src="/images/heartD.jpg"
              alt="Blood Pressure Image"
              className=" relative top-3 w-8 h-8 mr-2"
            />
            <div className="bg-blue-300 rounded-md p-4 text-black">
              <Link href="#pd">Personal</Link>
            </div>
          </li>
        </ul>
    </div>






        <div className='absolute bg-black-300  right-0 w-[86.2%] bg-black-200'>
        <section
          id='bp'
          className='w-full min-h-screen  '
        >
            <div className='flex justify-center'>
            <img
              src="/images/pe.jpg"
              alt="Blood Pressure Image"
              className='absolute top-[9vh] '
            /></div>
            <div className='absolute'>
             <h1 className=' text-center text-blue-300 text-2xl'>personal details</h1>
        <form  className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div>
                <label className="block text-blue-200 text-sm font-medium leading-6 ">
                    name
                  </label>
                <div className="mb-4">
                    <input
                    id='d'
                        type="text"
                        placeholder="eg, Kavi"
                        value={description}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="w-full p-2 border rounded-md text-black"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-blue-200 text-sm font-medium leading-6 ">
                    age
                  </label>
                <div className="mb-4">
                    <input
                    id='d'
                        type="number"
                        placeholder="eg:19"
                        value={description}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="w-full p-2 border rounded-md text-black"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-blue-200 text-sm font-medium leading-6 ">
                    height
                  </label>
                <div className="mb-4">
                    <input
                    id='d'
                        type="number"
                        placeholder="eg:160 (cm)"
                        value={description}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="w-full p-2 border rounded-md text-black"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-blue-200 text-sm font-medium leading-6 ">
                    weight
                  </label>
                <div className="mb-4">
                    <input
                    id='d'
                        type="number"
                        placeholder="eg:64 (Kg)"
                        value={description}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="w-full p-2 border rounded-md text-black"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-blue-200 text-sm font-medium leading-6 ">
                    date of birth
                </label> 
                <div className="mb-4">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-3 border rounded-md text-black"
                    required
                />
                </div>
            </div>
            
            <div className="text-right">
              <button type="button" onClick={handleSubmit} className="bg-blue-400 text-white px-4 py-2 rounded-md">
                SAVE
              </button>
            </div>
          </form>
          </div>
            
          
        </section>
            <section id='ch' className=' w-full min-h-screen flex justify-center '>
                <h1>Total Cholestrol</h1>
            </section>
            <section id='bs' className=' w-full min-h-screen flex justify-center '>
                <h1>Fasting Blood Sugar</h1>
            </section>
            <section id='pd' className=' w-full min-h-screen flex justify-center '>
                <h1>personal details</h1>
            </section>
            <section id='wc' className=' w-full min-h-screen flex justify-center '>
                <h1>waist circumstence</h1>
            </section>
        
        </div>
    </div>
    
  );
}
