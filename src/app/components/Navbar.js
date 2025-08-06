'use  client';
import Link from 'next/link';
import Image from 'next/image';
import { FiBell, FiSearch } from 'react-icons/fi';
import { useState,useEffect } from 'react';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState('');

const path = usePathname();

 useEffect(() =>{
   const handlIndex = () => {
    if (path === '/') {
      setIndex('home');
    }
    else if (path === '/explore'){
      setIndex('explore');
    }
    else if (path === '/submit') {
      setIndex('submit');
    }
    else {
      setIndex('home')
    }
  };
  handlIndex();

 },[path])



  return (
    <nav className="max-md:fixed relative z-100 w-full text-white px-4 py-4 flex items-center justify-between max-sm:bg-[#121417]">
      <div className="relative flex items-center justify-between space-x-4">
        <div className="text-xl md:text-3xl font-bold flex items-center sulphur-bold">
            <Image className='w-40' src="/logo.png" width={338} height={68} alt='logo' priority />
        </div>
      </div>
      <div className="hidden md:flex gap-12 ml-12 manrope-regular text-base">
          <Link href="/" className={`link-hover ${index === 'home' ? 'active' : ''}`}>Features</Link>
          <Link href="/secrets"  className={`link-hover ${index === 'explore' ? 'active' : ''}`}>Pricing</Link>
          <Link href="/submit"  className={`link-hover ${index === 'submit' ? 'active' : ''}`}>Blog</Link>
          <Link href="/submit"  className={`link-hover ${index === 'submit' ? 'active' : ''}`}>Contact</Link>
        </div>

      <div className="flex items-center space-x-4">
        <button style={{background : 'linear-gradient(180deg,#161922,#000000)'}}
        className='px-6 py-3 border-1 manrope-semibold cursor-pointer border-[#525866] rounded-xl max-sm:hidden'>Join Community</button>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
       <div className={`${menuOpen ? 'block blurred' : 'hidden'} sm:hidden absolute`}></div>
        <div className={`md:hidden absolute top-[4rem] left-0 right-0 sulphur-regular bg-[#121417] flex flex-col pl-6 gap-12 py-12 h-[100vh] w-[80%] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Link href="/" className="hover:scale(1.1) text-2xl">Features</Link>
          <Link href="/secrets" className="text-2xl">Pricing</Link>
          <Link href="/submit" className="text-2xl">Blog</Link>
          <Link href="/submit" className="text-2xl">Contact</Link>
        </div>
    </nav>
  );
}
