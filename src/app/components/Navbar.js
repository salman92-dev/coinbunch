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
    <nav className="max-md:fixed relative z-1000 w-full text-white px-4 py-4 flex items-center justify-between max-sm:bg-[#121417]">
      <div className="relative flex items-center justify-between space-x-4">
        <div className="text-xl md:text-3xl font-bold flex items-center sulphur-bold relative z-100">
            <Image className='w-40' src="/logo.png" width={338} height={68} alt='logo' priority />
        </div>
      </div>
      <div className="hidden md:flex gap-12 ml-12 manrope-regular text-base">
          <Link href="#stats">Statistics</Link>
          <Link href="#howitworks">How it works</Link>
          <Link href="#why-choose">Why Choose Us?</Link>
          <Link href="#reviews">User Reviews</Link>
          <Link href="#faq">FAQ</Link> 
        </div>

      <div className="flex items-center space-x-4">
        <button style={{background : 'linear-gradient(180deg,#161922,#000000)'}}
        className='px-6 py-3 border-1 manrope-semibold cursor-pointer border-[#525866] rounded-xl max-sm:hidden'>Join Community</button>
        <button
          className="md:hidden bg-[#FFFFFF1A] rounded-[8px] cursor-pointer relative z-100"
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
        <div className={`md:hidden absolute top-[4rem] left-0 right-0 sulphur-regular bg-[#000] flex flex-col justify-center px-6 gap-12 py-12 h-[100vh] w-[100%] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <Image className={`absolute top-0 left-0 -z-1 ${menuOpen ? 'opacity-100' : 'opacity-0 duration-400' }`} src="/navbg.png" width={237} height={852} alt='bg' />
          <Image className={`w-[55%] absolute top-0 right-0 transition delay-500 duration-500 origin-bottom-left ${menuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-15' }`} src="/nav-mobile.png" width={237} height={852} alt='bg' />
          <Link href="#stats" className="hover:scale(1.1) text-2xl" onClick={()=> setMenuOpen(false)}>Statistics</Link>
          <Link href="#howitworks" className="text-2xl" onClick={()=> setMenuOpen(false)}>How it works</Link>
          <Link href="#why-choose" className="text-2xl" onClick={()=> setMenuOpen(false)}>Why Choose Us?</Link>
          <Link href="#reviews" className="text-2xl" onClick={()=> setMenuOpen(false)}>User Reviews</Link>
          <Link href="#faq" className="text-2xl" onClick={()=> setMenuOpen(false)}>FAQ</Link>

        </div>
    </nav>
  );
}
