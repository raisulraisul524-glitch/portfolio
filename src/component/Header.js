import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header() {
  const [toggleMenu,setToggleMenu]=useState(false)
  return (
    <header id='header' className="flex justify-between px-5 py-2 bg-secondary">   
      <a className="font-bold text-white" href="/">Risul Hak</a>
      <nav className="hidden md:block">
        <ul className="flex text-white ">
        <li><a  href="/" className='hover:text-yellow-500'>HOME</a></li>
        <li><a href="#about" className='hover:text-yellow-500'>ABOUT</a></li>
        <li><a href="#project" className='hover:text-yellow-500'>PROJECT</a></li>
        <li><a href="#resume" className='hover:text-yellow-500'>RESUME</a></li>
        <li><a href="#contact" className='hover:text-yellow-500'>CONTACT</a></li>
      </ul>

      </nav>
       {toggleMenu && <nav className="block md:hidden ">
        <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
        <li><a  href="/">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#project">PROJECT</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      </nav>}
    
      <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
        <Bars3Icon className='text-white h-5'></Bars3Icon>

      </button>
      
    </header>
  );
}
 