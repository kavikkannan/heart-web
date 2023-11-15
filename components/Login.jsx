'use client'
import {useRouter} from "next/navigation"
import Link from "next/link"
import React, { useState } from "react"; 
import Heart from '@/components/Body_LPage';
import { Result } from "postcss";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const router=useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false); 


  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  const Signin = async () => {
    try {

      setLoading(true);
  
      /* const log = await fetch(`http://localhost:9000/api/login`, {
        method: "POST",
        mode:"cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: 'include',
      })
      
        const response = await log.json();
        if(response.message=='success'){
          router.push('#');
          setLoading(false);
        }
        else{
          setLoading(false);
          alert(response.message)
        } */
      router.push('/main')

      
    } catch (error) {
      console.error(error);
    } /* finally {
      setLoading(false);
    } */
    
  };   


    return (
      <>
      {darkMode ? (
          <div
          className={`absolute w-full bg-black flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8`}
        >
          <div className="absolute ">
          <center>
          <img
                className=" text-blue-200 "
                src="/images/heartD.jpg"
        
              /></center>
          </div>
         
          
          <div className="fixed top-4 right-4 z-50">
              <button
                onClick={toggleMode}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <div className=" absolute top-10 right-13 sm:mx-auto sm:w-full sm:max-w-sm">
            <Link href="/"><img
                className=" text-blue-200 mx-auto h-10 w-auto"
                src=""
                alt="Your Company"
              />
              </Link>
            </div>
            
            <div className=" relative bottom-20 sm:mx-auto sm:w-full sm:max-w-sm">
              
              <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-300 ">
                Sign in  account
              </h2>
            </div>
    
            <div className="relative bottom-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-blue-200 text-sm font-medium leading-6 ">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md p-2 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-200 placeholder:text-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-200">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-blue-200 hover:text-blue-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-md p-2 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                
              </form>
              <br/>
              <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={Signin}
                  >
                     sign in
                  </button>
                </div>
              
              <p className="mt-10 text-center text-sm text-blue-500">
                wanna create acc?{' '}
                <a href="signup" className="font-semibold leading-6 text-blue-200 hover:text-blue-500">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
      ) : (
        <div
        className={`absolute w-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8`}
      >
        <div className="absolute ">
          <center>
          <img
                className=" text-black-200 "
                src="/images/heart.jpg"
        
              /></center>
          </div>
        <div className="fixed top-4 right-4 z-50">
            <button
              onClick={toggleMode}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <div className=" absolute top-10 right-13 sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/"><img
              className=" text-blue-200 mx-auto h-10 w-auto"
              src=""
              alt="Your Company"
            />
            </Link>
          </div>
          
          <div className=" relative bottom-20 sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black ">
              Sign in  account
            </h2>
          </div>
  
          <div className="relative bottom-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-black text-sm font-medium leading-6 ">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md p-2 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-200 placeholder:text-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-black hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md p-2 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              
            </form>
            <br/>
            <div>
                <button
                  type="submit"
                  className="flex bg-white w-full justify-center rounded-md text-black px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  onClick={Signin}
                >
                   sign in
                </button>
              </div>
            
            <p className="mt-10 text-center text-sm text-black">
              wanna create acc?{' '}
              <a href="signup" className="font-semibold leading-6 text-black hover:text-blue-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
        
        
        )}
        </>
    );
      };
