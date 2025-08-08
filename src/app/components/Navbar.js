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
        <div className={`md:hidden absolute top-[4rem] left-0 right-0 sulphur-regular bg-[#000] flex flex-col  px-6 gap-14 py-12 h-[100vh] w-[100%] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <Image className={`absolute top-0 left-0 -z-1 ${menuOpen ? 'opacity-100' : 'opacity-0 duration-400' }`} src="/navbg.png" width={237} height={852} alt='bg' />
          <Link 
          href="#stats" 
          className="hover:scale(1.1) text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            Statistics 
            <span>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.3682 6.46382C7.35941 6.19821 7.25334 5.94508 7.07015 5.75255L1.86782 0.33344C1.76909 0.230648 1.65107 0.148313 1.52051 0.091138C1.38996 0.0339629 1.24942 0.00306773 1.10692 0.00021684C0.964425 -0.00263405 0.822764 0.0226154 0.690025 0.0745229C0.557286 0.12643 0.436061 0.203979 0.333298 0.302739C0.230535 0.4015 0.148243 0.519538 0.091105 0.650111C0.033967 0.780683 0.00310274 0.921233 0.000292732 1.06373C-0.00251775 1.20623 0.0227808 1.34789 0.074726 1.48061C0.126671 1.61334 0.20425 1.73453 0.30304 1.83726L4.78058 6.50446L0.30304 11.1717C0.204298 11.2744 0.126765 11.3956 0.0748577 11.5283C0.0229501 11.661 -0.00231318 11.8026 0.000516846 11.9451C0.00334687 12.0876 0.0342059 12.2281 0.0913429 12.3587C0.148479 12.4892 0.230778 12.6072 0.333522 12.706C0.436267 12.8047 0.557446 12.8822 0.690157 12.9341C0.822868 12.9861 0.964503 13.0113 1.10698 13.0085C1.24945 13.0057 1.38997 12.9748 1.52051 12.9177C1.65106 12.8605 1.76908 12.7782 1.86782 12.6755L7.07015 7.25637C7.17047 7.15103 7.24857 7.02657 7.29978 6.8904C7.35098 6.75424 7.37425 6.60916 7.3682 6.46382Z" fill="white"/>
              </svg>
            </span>
            </Link>

          <Link 
          href="#howitworks" 
          className="text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            How it works
            <span>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.3682 6.46382C7.35941 6.19821 7.25334 5.94508 7.07015 5.75255L1.86782 0.33344C1.76909 0.230648 1.65107 0.148313 1.52051 0.091138C1.38996 0.0339629 1.24942 0.00306773 1.10692 0.00021684C0.964425 -0.00263405 0.822764 0.0226154 0.690025 0.0745229C0.557286 0.12643 0.436061 0.203979 0.333298 0.302739C0.230535 0.4015 0.148243 0.519538 0.091105 0.650111C0.033967 0.780683 0.00310274 0.921233 0.000292732 1.06373C-0.00251775 1.20623 0.0227808 1.34789 0.074726 1.48061C0.126671 1.61334 0.20425 1.73453 0.30304 1.83726L4.78058 6.50446L0.30304 11.1717C0.204298 11.2744 0.126765 11.3956 0.0748577 11.5283C0.0229501 11.661 -0.00231318 11.8026 0.000516846 11.9451C0.00334687 12.0876 0.0342059 12.2281 0.0913429 12.3587C0.148479 12.4892 0.230778 12.6072 0.333522 12.706C0.436267 12.8047 0.557446 12.8822 0.690157 12.9341C0.822868 12.9861 0.964503 13.0113 1.10698 13.0085C1.24945 13.0057 1.38997 12.9748 1.52051 12.9177C1.65106 12.8605 1.76908 12.7782 1.86782 12.6755L7.07015 7.25637C7.17047 7.15103 7.24857 7.02657 7.29978 6.8904C7.35098 6.75424 7.37425 6.60916 7.3682 6.46382Z" fill="white"/>
              </svg>
            </span>
            </Link>
          <Link 
          href="#why-choose" 
          className="text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            Why Choose Us?
            <span>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.3682 6.46382C7.35941 6.19821 7.25334 5.94508 7.07015 5.75255L1.86782 0.33344C1.76909 0.230648 1.65107 0.148313 1.52051 0.091138C1.38996 0.0339629 1.24942 0.00306773 1.10692 0.00021684C0.964425 -0.00263405 0.822764 0.0226154 0.690025 0.0745229C0.557286 0.12643 0.436061 0.203979 0.333298 0.302739C0.230535 0.4015 0.148243 0.519538 0.091105 0.650111C0.033967 0.780683 0.00310274 0.921233 0.000292732 1.06373C-0.00251775 1.20623 0.0227808 1.34789 0.074726 1.48061C0.126671 1.61334 0.20425 1.73453 0.30304 1.83726L4.78058 6.50446L0.30304 11.1717C0.204298 11.2744 0.126765 11.3956 0.0748577 11.5283C0.0229501 11.661 -0.00231318 11.8026 0.000516846 11.9451C0.00334687 12.0876 0.0342059 12.2281 0.0913429 12.3587C0.148479 12.4892 0.230778 12.6072 0.333522 12.706C0.436267 12.8047 0.557446 12.8822 0.690157 12.9341C0.822868 12.9861 0.964503 13.0113 1.10698 13.0085C1.24945 13.0057 1.38997 12.9748 1.52051 12.9177C1.65106 12.8605 1.76908 12.7782 1.86782 12.6755L7.07015 7.25637C7.17047 7.15103 7.24857 7.02657 7.29978 6.8904C7.35098 6.75424 7.37425 6.60916 7.3682 6.46382Z" fill="white"/>
              </svg>
            </span>
            </Link>
          <Link href="#reviews" 
          className="text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            User Reviews
             <span>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.3682 6.46382C7.35941 6.19821 7.25334 5.94508 7.07015 5.75255L1.86782 0.33344C1.76909 0.230648 1.65107 0.148313 1.52051 0.091138C1.38996 0.0339629 1.24942 0.00306773 1.10692 0.00021684C0.964425 -0.00263405 0.822764 0.0226154 0.690025 0.0745229C0.557286 0.12643 0.436061 0.203979 0.333298 0.302739C0.230535 0.4015 0.148243 0.519538 0.091105 0.650111C0.033967 0.780683 0.00310274 0.921233 0.000292732 1.06373C-0.00251775 1.20623 0.0227808 1.34789 0.074726 1.48061C0.126671 1.61334 0.20425 1.73453 0.30304 1.83726L4.78058 6.50446L0.30304 11.1717C0.204298 11.2744 0.126765 11.3956 0.0748577 11.5283C0.0229501 11.661 -0.00231318 11.8026 0.000516846 11.9451C0.00334687 12.0876 0.0342059 12.2281 0.0913429 12.3587C0.148479 12.4892 0.230778 12.6072 0.333522 12.706C0.436267 12.8047 0.557446 12.8822 0.690157 12.9341C0.822868 12.9861 0.964503 13.0113 1.10698 13.0085C1.24945 13.0057 1.38997 12.9748 1.52051 12.9177C1.65106 12.8605 1.76908 12.7782 1.86782 12.6755L7.07015 7.25637C7.17047 7.15103 7.24857 7.02657 7.29978 6.8904C7.35098 6.75424 7.37425 6.60916 7.3682 6.46382Z" fill="white"/>
              </svg>
            </span>
            </Link>
          <Link 
          href="#faq" 
          className="text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            FAQ
            <span>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.3682 6.46382C7.35941 6.19821 7.25334 5.94508 7.07015 5.75255L1.86782 0.33344C1.76909 0.230648 1.65107 0.148313 1.52051 0.091138C1.38996 0.0339629 1.24942 0.00306773 1.10692 0.00021684C0.964425 -0.00263405 0.822764 0.0226154 0.690025 0.0745229C0.557286 0.12643 0.436061 0.203979 0.333298 0.302739C0.230535 0.4015 0.148243 0.519538 0.091105 0.650111C0.033967 0.780683 0.00310274 0.921233 0.000292732 1.06373C-0.00251775 1.20623 0.0227808 1.34789 0.074726 1.48061C0.126671 1.61334 0.20425 1.73453 0.30304 1.83726L4.78058 6.50446L0.30304 11.1717C0.204298 11.2744 0.126765 11.3956 0.0748577 11.5283C0.0229501 11.661 -0.00231318 11.8026 0.000516846 11.9451C0.00334687 12.0876 0.0342059 12.2281 0.0913429 12.3587C0.148479 12.4892 0.230778 12.6072 0.333522 12.706C0.436267 12.8047 0.557446 12.8822 0.690157 12.9341C0.822868 12.9861 0.964503 13.0113 1.10698 13.0085C1.24945 13.0057 1.38997 12.9748 1.52051 12.9177C1.65106 12.8605 1.76908 12.7782 1.86782 12.6755L7.07015 7.25637C7.17047 7.15103 7.24857 7.02657 7.29978 6.8904C7.35098 6.75424 7.37425 6.60916 7.3682 6.46382Z" fill="white"/>
              </svg>
            </span>
            </Link>
          <div>
            <p className='manrope-regular mb-4 text-xl text-[#CDD0D5]'>Follow</p>
            <div className='flex items-center flex-wrap gap-4 justify-center'>
                <a href="" className='flex flex-wrap'>
                  <Image className='w-18' src="/tg.svg" alt='logo' width={100} height={100}  />
                </a>
                <a href="" className='flex'>
                  <Image className='w-18'  src="/x.svg" alt='logo' width={100} height={100}  />
                </a>
                <a href="" className='flex'>
                  <Image className='w-18' src="/yt.svg" alt='logo' width={100} height={100}  />
                </a>
                <a href="" className='flex'>
                  <Image className='w-18' src="/medium.svg" alt='logo' width={100} height={100}  />
                </a>
                <a href="" className='flex'>
                  <Image className='w-18' src="/visa.svg" alt='logo' width={100} height={100}  />
                </a>
                <a href="" className='flex'>
                  <Image className='w-18' src="/g-pay.svg" alt='logo' width={100} height={100}  />
                </a>
                <a href="" className='flex'>
                  <Image className='w-18' src="/a-pay.svg" alt='logo' width={100} height={100}  />
                </a>
                <a href="" className='flex'>
                  <Image className='w-18' src="/m-card.svg" alt='logo' width={100} height={100}  />
                </a>
            </div>
          </div>
        </div>
    </nav>
  );
}
