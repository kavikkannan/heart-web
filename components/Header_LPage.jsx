"use client";
import {  useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Header() {

  return (
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-black sr-only">Your Company</span>
            <img className=" h-8 w-10"
                src="/images/c.JPG"
                alt="your company"
            />
          </Link>
    
        </div>
        <div>HEART DISEASE PREDICTION</div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <div className="text-sm font-semibold leading-6 text-blue-300">
        CHAARULATHA J (22MID0317)
          </div>
        </div>
        <div className="flex lg:hidden">
        <div className="text-sm font-semibold leading-6 text-blue-300">
        CHAARULATHA J (22MID0317)
          </div>
        </div>
      </nav>
      
    </header>
  );
}
