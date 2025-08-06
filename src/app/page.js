'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import MarqueeLogo from "./components/Marquee";
import ImageSlider from "./components/Slider";
import FAQAccordion from "./components/Faq";
import Footer from "./components/Footer";
import AnimatedText from "./components/Scrollanimation";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
export default function Home() {
  const [ref1, inView1] = useInView({ triggerOnce: true,threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.9 });
  const [ref3, inView3] = useInView({ triggerOnce: true ,threshold: 0.9});
  const [ref4, inView4] = useInView({ triggerOnce: true,threshold: 0.9 });
  const [ref5, inView5] = useInView({ triggerOnce: true,threshold: 0.9 });
  const [ref6, inView6] = useInView({ triggerOnce: true,threshold: 0.9 });
  const [ref7, inView7] = useInView({ triggerOnce: true,threshold: 0.9 });
  const [ref8, inView8] = useInView({ triggerOnce: true,threshold: 0.9 });
  return (

   <div className="2xl:container mx-auto overflow-hidden">
    {/* ---------hero-banner---------- */}
    <section className="flex flex-col items-center gap-6 pb-32"
    style={{background : 'url(/hero-bg.webp) no-repeat', backgroundSize : 'cover', backgroundPosition :'top center'}}
    >
      <Navbar/>
      <p className="mt-12 max-md:mt-40 text-[0.75rem] tracking-[2.4px]bg-[#BFA2F61A] manrope-medium px-4 inline py-1 border border-[#BFA2F633] bg-clip-text text-transparent rounded-lg" 
      style={{backdropFilter : 'blur(20px)', backgroundImage : 'linear-gradient(270deg, #BFA2F6 0%, #50F8E4 100%)'}}>Swap Bitcoin & Crypto in Seconds</p>
      {/* <h1 className="bg-clip-text text-transparent text-center text-3xl md:text-6xl manrope-medium gradient-3">Exchange Your Crypto Instantly,<br/> Anytime, Anywhere You Want</h1> */}
      <AnimatedText className="bg-clip-text text-transparent text-center text-3xl md:text-6xl manrope-medium gradient-3 lg:px-40" text="Exchange Your Crypto Instantly, Anytime, Anywhere You Want" as="h1"/>

      <button className="cursor-pointer mb-6 bg-[#6FFFE9] px-12 manrope-semibold py-3 text-[#003233] rounded-xl">
        Get Started
      </button>
      <motion.div
      className="mx-auto w-[90%] md:w-[65%]"
      ref={ref1}
      initial={{ opacity: 0, y: 50 }}
      animate={inView1 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Image className="w-full" src="/hero-banner.png" width={3552} height={1672} alt="hero"/>
      </motion.div>
      <div className="flex flex-col items-center gap-6 overflow-hidden">
            <p className="text-[0.75rem] bg-[#BFA2F61A] tracking-[2.4px] manrope-medium px-4 inline py-1 border border-[#BFA2F633] bg-clip-text text-transparent rounded-lg" 
            style={{backdropFilter : 'blur(20px)', backgroundImage : 'linear-gradient(270deg, #BFA2F6 0%, #50F8E4 100%)'}}>1K+ PROTOCOL TRUSTED US</p>

            <h2 className="text-3xl md:text-5xl manrope-medium text-white">They believed us</h2>

            <MarqueeLogo />
      </div>
    </section>
    {/* -------statistics---------- */}
    <section className="flex flex-col items-center pb-16 px-6">
      <div className="flex flex-col items-center gap-4">
        <p className="text-[0.75rem] bg-[#BFA2F61A] tracking-[2.4px] manrope-medium px-4 inline py-1 border border-[#BFA2F633] bg-clip-text text-transparent rounded-lg gradient-1">NUMBERS</p>
        <AnimatedText className="text-3xl md:text-5xl manrope-medium text-center text-white" text="Discover Our Statistics" as="h2" />
        <AnimatedText 
        className="manrope-medium text-base md:text-[1.1rem] text-center text-white"
        text="Discover our milestones and successes that demonstrate our commitment to excellence and innovation."
        as="p"
        />
      </div>
      <div className="flex flex-wrap gap-y-4 md:gap-2 justify-center items-center mt-8">

        <motion.div 
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="border border-[#31353F] rounded-lg p-4 gradient-2 w-[19rem] flex flex-col items-start max-md:items-center">
          <h3 className="gradient-1 bg-clip-text text-transparent inline text-4xl tracking-[-1.6px] manrope-medium">124K+</h3>
          <p className="text-[1.1rem] manrope-medium mt-18 text-white">
            Aggregate Agreement Authors
          </p>
        </motion.div>

        <motion.div 
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut',delay :0.1 }}
        className="border border-[#31353F] rounded-lg p-4 gradient-2 w-[19rem] flex flex-col items-start max-md:items-center">
          <h3 className="gradient-1 bg-clip-text text-transparent inline text-4xl tracking-[-1.6px] manrope-medium">5.67B+</h3>
          <p className="text-[1.1rem] manrope-medium mt-18 text-white">
          Total Transactions
          </p>
        </motion.div>

        <motion.div 
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={inView4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut',delay :0.2 }}
        className="border border-[#31353F] rounded-lg p-4 gradient-2 w-[19rem] flex flex-col items-start max-md:items-center">
          <h3 className="gradient-1 bg-clip-text text-transparent inline text-4xl tracking-[-1.6px] manrope-medium">982.15M+</h3>
          <p className="text-[1.1rem] manrope-medium mt-18 text-white">
            Unique 
           Addresses  
          </p>
        </motion.div>

        <motion.div 
        ref={ref5}
        initial={{ opacity: 0, y: 50 }}
        animate={inView5 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut',delay :0.3 }}
        className="border border-[#31353F] rounded-lg p-4 gradient-2 w-[19rem] flex flex-col items-start max-md:items-center">
          <h3 className="gradient-1 bg-clip-text text-transparent inline text-4xl tracking-[-1.6px] manrope-medium">5.42.16M+</h3>
          <p className="text-[1.1rem] manrope-medium mt-18 text-white">
            Total visits today  
          </p>
        </motion.div>

      </div>
    </section>

    {/* -------how it works------ */}
    <section className="px-6 flex flex-col items-center py-12 relative">
      <Image className="absolute select-none right-0 top-[-30rem] select-none" src="/bg-1.png" width={496} height={1122} alt="bg-1" />
      <motion.div 
        ref={ref6}
        initial={{ opacity: 0, y: 50 }}
        animate={inView6 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-[95%] md:w-[80%] flex flex-col gap-6 pl-8 gradient-border mb-12">
        <h4 className="text-lg md:text-2xl manrope-bold text-white">How it works</h4>
        <h2 className="manrope-medium text-3xl md:text-5xl gradient-3 text-transparent bg-clip-text">Easy Steps to Exchange Bitcoin</h2>
      </motion.div>
      <motion.div 
      ref={ref7}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView7 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#23262F4D] rounded-xl flex flex-wrap max-md:gap-4 items-center w-[95%] md:w-[80%]">
        <div className="p-6 py-12 rounded-xl gradient-4 w-full md:w-[33.33%] hover:scale-110 duration-200">
          <span className="w-16 h-16 manrope-bold text-2xl text-black flex items-center justify-center bg-white rounded-full mb-6">
            01
          </span>
          <h4 className="text-2xl manrope-bold mb-2 text-black">Choose an Exchange</h4>
          <p className="manrope-regular text-base mb-6 text-black">
            Sign up on a trusted crypto exchange like Binance, Coinbase, or Kraken.
          </p>
          <button className="w-full gradient-7 py-3 rounded-xl px-6">
            Start Trading
          </button>
        </div>
        <div className="p-6 rounded-xl w-full md:w-[33.33%]">
          <p className="w-16 h-16 manrope-bold text-2xl flex items-center justify-center gradient-5 rounded-full mb-6">
            <span className="gradient-8 text-transparent bg-clip-text">02</span>
          </p>
          <h4 className="text-2xl manrope-bold mb-2 text-white">Add Funds</h4>
          <p className="manrope-regular text-base mb-6 text-white">
           Transfer your BTC to your exchange wallet.
           </p>
          <button className="w-full gradient-6 py-3 rounded-xl px-6 text-start">
            Add Funds....
          </button>
        </div>
        <div className="p-6 rounded-xl w-full md:w-[33.33%]">
          <p className="w-16 h-16 manrope-bold text-2xl flex items-center justify-center gradient-5 rounded-full mb-6">
            <span className="gradient-8 text-transparent bg-clip-text">03</span>
          </p>
          <h4 className="text-2xl manrope-bold mb-2 text-white">Trade & Withdraw</h4>
          <p className="manrope-regular text-base mb-6 text-white">
            Exchange BTC for your desired currency and withdraw it.
          </p>
          <button className="w-full gradient-6 py-3 rounded-xl px-6 text-start">
            Buy and HODL
          </button>
        </div>
      </motion.div>
    </section>

    {/* ----bitcoin price */}
    <section className="py-16 relative">
        <Image className="absolute bottom-[-18rem] left-0 z-1" src="/bg-4.png" width={371} height={329} alt="bg-2" />
       <div className="w-[85%] mx-auto gradient-9 p-4 md:p-10 rounded-xl relative overflow-hidden">
        <Image className="absolute top-0 left-0" src="/bg-2.png" width={319} height={415} alt="bg-2" />
        <Image className="absolute bottom-0 right-0 z-1" src="/bg-3.png" width={371} height={329} alt="bg-2" />
        <div className="flex items-center flex-wrap justify-between">
          <motion.div 
           ref={ref8}
          initial={{ opacity: 0, scale :  0.5 }}
          animate={inView8 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-3 w-full md:w-[48%]">
            <p className="text-[0.75rem] w-fit bg-[#BFA2F61A] tracking-[2.4px] manrope-medium px-4 inline py-1 border border-[#BFA2F633] bg-clip-text text-transparent rounded-lg" 
            style={{backdropFilter : 'blur(20px)', backgroundImage : 'linear-gradient(270deg, #BFA2F6 0%, #50F8E4 100%)'}}>BRAND BOOST</p>
            <h2 className="text-3xl md:text-5xl manrope-medium tracking-[-1.92px]">Live Bitcoin Price</h2>
            <p className="manrope-medium text-base md:text-[1.1rem]">Stay updated with the latest Bitcoin market rate before making your exchange.</p>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-4 text-base manrope-semibold bg-[#20232D] py-4 px-6 rounded-lg">
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 3.125V5.9375C17.5 6.10326 17.4342 6.26223 17.3169 6.37944C17.1997 6.49665 17.0408 6.5625 16.875 6.5625C16.7092 6.5625 16.5503 6.49665 16.4331 6.37944C16.3158 6.26223 16.25 6.10326 16.25 5.9375V3.75H14.0625C13.8967 3.75 13.7378 3.68415 13.6206 3.56694C13.5033 3.44973 13.4375 3.29076 13.4375 3.125C13.4375 2.95924 13.5033 2.80027 13.6206 2.68306C13.7378 2.56585 13.8967 2.5 14.0625 2.5H16.875C17.0408 2.5 17.1997 2.56585 17.3169 2.68306C17.4342 2.80027 17.5 2.95924 17.5 3.125ZM16.875 13.4375C16.7092 13.4375 16.5503 13.5033 16.4331 13.6206C16.3158 13.7378 16.25 13.8967 16.25 14.0625V16.25H14.0625C13.8967 16.25 13.7378 16.3158 13.6206 16.4331C13.5033 16.5503 13.4375 16.7092 13.4375 16.875C13.4375 17.0408 13.5033 17.1997 13.6206 17.3169C13.7378 17.4342 13.8967 17.5 14.0625 17.5H16.875C17.0408 17.5 17.1997 17.4342 17.3169 17.3169C17.4342 17.1997 17.5 17.0408 17.5 16.875V14.0625C17.5 13.8967 17.4342 13.7378 17.3169 13.6206C17.1997 13.5033 17.0408 13.4375 16.875 13.4375ZM5.9375 16.25H3.75V14.0625C3.75 13.8967 3.68415 13.7378 3.56694 13.6206C3.44973 13.5033 3.29076 13.4375 3.125 13.4375C2.95924 13.4375 2.80027 13.5033 2.68306 13.6206C2.56585 13.7378 2.5 13.8967 2.5 14.0625V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H5.9375C6.10326 17.5 6.26223 17.4342 6.37944 17.3169C6.49665 17.1997 6.5625 17.0408 6.5625 16.875C6.5625 16.7092 6.49665 16.5503 6.37944 16.4331C6.26223 16.3158 6.10326 16.25 5.9375 16.25ZM3.125 6.5625C3.29076 6.5625 3.44973 6.49665 3.56694 6.37944C3.68415 6.26223 3.75 6.10326 3.75 5.9375V3.75H5.9375C6.10326 3.75 6.26223 3.68415 6.37944 3.56694C6.49665 3.44973 6.5625 3.29076 6.5625 3.125C6.5625 2.95924 6.49665 2.80027 6.37944 2.68306C6.26223 2.56585 6.10326 2.5 5.9375 2.5H3.125C2.95924 2.5 2.80027 2.56585 2.68306 2.68306C2.56585 2.80027 2.5 2.95924 2.5 3.125V5.9375C2.5 6.10326 2.56585 6.26223 2.68306 6.37944C2.80027 6.49665 2.95924 6.5625 3.125 6.5625ZM13.75 13.75C13.6529 13.7502 13.5571 13.7278 13.4702 13.6845C13.3832 13.6413 13.3076 13.5784 13.2492 13.5008C12.8708 12.9962 12.3801 12.5867 11.816 12.3047C11.2519 12.0226 10.6299 11.8758 9.99922 11.8758C9.36854 11.8758 8.74651 12.0226 8.18241 12.3047C7.61831 12.5867 7.12763 12.9962 6.74922 13.5008C6.64956 13.6334 6.5013 13.721 6.33705 13.7443C6.17281 13.7676 6.00605 13.7247 5.87344 13.625C5.74083 13.5253 5.65324 13.3771 5.62995 13.2128C5.60665 13.0486 5.64955 12.8818 5.74922 12.7492C6.30312 12.0076 7.04134 11.4237 7.89062 11.0555C7.42524 10.6306 7.09919 10.0749 6.95526 9.4614C6.81133 8.84789 6.85624 8.2052 7.0841 7.61767C7.31197 7.03014 7.71213 6.52523 8.23209 6.1692C8.75204 5.81316 9.36749 5.62265 9.99766 5.62265C10.6278 5.62265 11.2433 5.81316 11.7632 6.1692C12.2832 6.52523 12.6833 7.03014 12.9112 7.61767C13.1391 8.2052 13.184 8.84789 13.0401 9.4614C12.8961 10.0749 12.5701 10.6306 12.1047 11.0555C12.9545 11.4234 13.6933 12.0074 14.2477 12.7492C14.3174 12.8419 14.36 12.9522 14.3706 13.0677C14.3812 13.1832 14.3595 13.2994 14.3079 13.4033C14.2562 13.5072 14.1767 13.5946 14.0782 13.6558C13.9796 13.7171 13.866 13.7497 13.75 13.75ZM10 10.625C10.3708 10.625 10.7334 10.515 11.0417 10.309C11.35 10.103 11.5904 9.81014 11.7323 9.46753C11.8742 9.12492 11.9113 8.74792 11.839 8.38421C11.7666 8.02049 11.588 7.6864 11.3258 7.42417C11.0636 7.16195 10.7295 6.98337 10.3658 6.91103C10.0021 6.83868 9.62508 6.87581 9.28247 7.01773C8.93986 7.15964 8.64702 7.39996 8.44099 7.70831C8.23497 8.01665 8.125 8.37916 8.125 8.75C8.125 9.24728 8.32254 9.72419 8.67417 10.0758C9.02581 10.4275 9.50272 10.625 10 10.625Z" fill="white"/>
                  </svg>
                </span>
                 Real-Time Price Tracking
                </p>
                <p className="flex items-center gap-4 text-base manrope-semibold bg-[#20232D] py-4 px-6 rounded-lg">
                <span>
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.125 13.25C17.125 13.4158 17.0592 13.5747 16.9419 13.6919C16.8247 13.8092 16.6658 13.875 16.5 13.875H1.5C1.33424 13.875 1.17527 13.8092 1.05806 13.6919C0.940848 13.5747 0.875 13.4158 0.875 13.25V0.75C0.875 0.58424 0.940848 0.425269 1.05806 0.308058C1.17527 0.190848 1.33424 0.125 1.5 0.125C1.66576 0.125 1.82473 0.190848 1.94194 0.308058C2.05915 0.425269 2.125 0.58424 2.125 0.75V9.24141L6.05781 5.30781C6.11586 5.2497 6.18479 5.2036 6.26066 5.17215C6.33654 5.1407 6.41787 5.12451 6.5 5.12451C6.58213 5.12451 6.66346 5.1407 6.73934 5.17215C6.81521 5.2036 6.88414 5.2497 6.94219 5.30781L9 7.36641L13.1164 3.25H11.5C11.3342 3.25 11.1753 3.18415 11.0581 3.06694C10.9408 2.94973 10.875 2.79076 10.875 2.625C10.875 2.45924 10.9408 2.30027 11.0581 2.18306C11.1753 2.06585 11.3342 2 11.5 2H14.625C14.7908 2 14.9497 2.06585 15.0669 2.18306C15.1842 2.30027 15.25 2.45924 15.25 2.625V5.75C15.25 5.91576 15.1842 6.07473 15.0669 6.19194C14.9497 6.30915 14.7908 6.375 14.625 6.375C14.4592 6.375 14.3003 6.30915 14.1831 6.19194C14.0658 6.07473 14 5.91576 14 5.75V4.13359L9.44219 8.69219C9.38414 8.7503 9.31521 8.7964 9.23934 8.82785C9.16346 8.8593 9.08213 8.87549 9 8.87549C8.91787 8.87549 8.83654 8.8593 8.76066 8.82785C8.68479 8.7964 8.61586 8.7503 8.55781 8.69219L6.5 6.63359L2.125 11.0086V12.625H16.5C16.6658 12.625 16.8247 12.6908 16.9419 12.8081C17.0592 12.9253 17.125 13.0842 17.125 13.25Z" fill="white"/>
                    </svg>
                </span>
                 Market Trend Insights
                </p>
                <p className="flex items-center gap-4 text-base manrope-semibold bg-[#20232D] py-4 px-6 rounded-lg">
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.19218 13.3078C9.25029 13.3659 9.29639 13.4348 9.32785 13.5107C9.3593 13.5865 9.37549 13.6679 9.37549 13.75C9.37549 13.8321 9.3593 13.9135 9.32785 13.9893C9.29639 14.0652 9.25029 14.1341 9.19218 14.1922L6.69218 16.6922C6.63414 16.7503 6.56521 16.7964 6.48933 16.8279C6.41346 16.8593 6.33213 16.8755 6.25 16.8755C6.16786 16.8755 6.08653 16.8593 6.01066 16.8279C5.93479 16.7964 5.86585 16.7503 5.80781 16.6922L3.30781 14.1922C3.24974 14.1341 3.20368 14.0652 3.17225 13.9893C3.14082 13.9134 3.12465 13.8321 3.12465 13.75C3.12465 13.6679 3.14082 13.5866 3.17225 13.5107C3.20368 13.4348 3.24974 13.3659 3.30781 13.3078C3.42508 13.1905 3.58414 13.1247 3.75 13.1247C3.83212 13.1247 3.91344 13.1408 3.98931 13.1723C4.06518 13.2037 4.13412 13.2497 4.19218 13.3078L5.625 14.7414V3.75C5.625 3.58424 5.69084 3.42527 5.80805 3.30806C5.92527 3.19085 6.08424 3.125 6.25 3.125C6.41576 3.125 6.57473 3.19085 6.69194 3.30806C6.80915 3.42527 6.875 3.58424 6.875 3.75V14.7414L8.30781 13.3078C8.36585 13.2497 8.43478 13.2036 8.51066 13.1722C8.58653 13.1407 8.66786 13.1245 8.75 13.1245C8.83213 13.1245 8.91346 13.1407 8.98933 13.1722C9.06521 13.2036 9.13414 13.2497 9.19218 13.3078ZM16.6922 5.80782L14.1922 3.30782C14.1341 3.24971 14.0652 3.20361 13.9893 3.17215C13.9135 3.1407 13.8321 3.12451 13.75 3.12451C13.6679 3.12451 13.5865 3.1407 13.5107 3.17215C13.4348 3.20361 13.3659 3.24971 13.3078 3.30782L10.8078 5.80782C10.6905 5.92509 10.6246 6.08415 10.6246 6.25C10.6246 6.41586 10.6905 6.57492 10.8078 6.69219C10.9251 6.80947 11.0841 6.87535 11.25 6.87535C11.4158 6.87535 11.5749 6.80947 11.6922 6.69219L13.125 5.2586V16.25C13.125 16.4158 13.1908 16.5747 13.3081 16.6919C13.4253 16.8092 13.5842 16.875 13.75 16.875C13.9158 16.875 14.0747 16.8092 14.1919 16.6919C14.3091 16.5747 14.375 16.4158 14.375 16.25V5.2586L15.8078 6.69219C15.9251 6.80947 16.0841 6.87535 16.25 6.87535C16.4158 6.87535 16.5749 6.80947 16.6922 6.69219C16.8095 6.57492 16.8753 6.41586 16.8753 6.25C16.8753 6.08415 16.8095 5.92509 16.6922 5.80782Z" fill="white"/>
                    </svg>
                </span>
                 Get the Best Exchange Value
                </p>
                <button className="w-fit mt-4 cursor-pointer mb-6 bg-[#6FFFE9] px-4 manrope-semibold py-3 text-[#003233] rounded-xl">
                Start Exchange
              </button>
            </div>
          </motion.div>
          <div className="w-full md:w-[48%]">
            <Image src="/wallpaper-1.png" alt="logo" width={564} height={530} />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center flex-wrap justify-between mt-8 relative z-10">
          <div className="flex flex-col gap-3 w-full md:w-[48%]">
            <p className="text-[0.75rem] w-fit bg-[#BFA2F61A] tracking-[2.4px] manrope-medium px-4 inline py-1 border border-[#BFA2F633] bg-clip-text text-transparent rounded-lg" 
            style={{backdropFilter : 'blur(20px)', backgroundImage : 'linear-gradient(270deg, #BFA2F6 0%, #50F8E4 100%)'}}>SPEEDY</p>
            <h2 className="text-3xl md:text-5xl manrope-medium tracking-[-1.92px]">Instant Bitcoin Exchange</h2>
            <p className="manrope-medium text-base md:text-[1.1rem]">Quickly convert Bitcoin into your desired currency with fast and secure transactions.</p>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-4 text-base manrope-semibold bg-[#20232D] py-4 px-6 rounded-lg">
                <span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM15.875 9C15.8757 9.88201 15.7059 10.7558 15.375 11.5734L11.8828 9.42578C11.7343 9.33416 11.5682 9.2748 11.3953 9.25156L9.6125 9.01094C9.36684 8.9789 9.11719 9.02009 8.89483 9.12932C8.67247 9.23855 8.48729 9.41098 8.3625 9.625H7.68125L7.38438 9.01094C7.30231 8.83995 7.18219 8.69002 7.03324 8.57261C6.88428 8.45521 6.71043 8.37345 6.525 8.33359L5.9 8.19844L6.51094 7.125H7.81641C8.02766 7.12459 8.23538 7.07084 8.42032 6.96875L9.37735 6.44062C9.46143 6.39376 9.54004 6.33768 9.61172 6.27344L11.7141 4.37188C11.9248 4.18298 12.0649 3.92788 12.1112 3.64865C12.1575 3.36942 12.1073 3.08276 11.9688 2.83594L11.9406 2.78516C13.117 3.34297 14.1111 4.22296 14.8075 5.32301C15.5039 6.42306 15.8741 7.69805 15.875 9ZM10.1961 2.22969L10.875 3.44531L8.77266 5.34687L7.81641 5.875H6.51094C6.29121 5.87468 6.07527 5.93228 5.8849 6.04201C5.69452 6.15173 5.53643 6.30971 5.42657 6.5L4.74453 7.68984L3.95157 5.57734L4.80625 3.55625C5.56277 2.97171 6.43304 2.55164 7.36132 2.32293C8.28959 2.09423 9.2554 2.06194 10.1969 2.22812L10.1961 2.22969ZM2.125 9C2.12396 7.97814 2.35194 6.96904 2.79219 6.04688L3.67813 8.41172C3.75196 8.60752 3.87376 8.78165 4.03237 8.91815C4.19098 9.05465 4.38132 9.14914 4.58594 9.19297L6.26016 9.55313L6.55782 10.1719C6.66112 10.3823 6.82121 10.5597 7.02001 10.6839C7.2188 10.8082 7.44839 10.8744 7.68282 10.875H7.79844L7.2336 12.143C7.13407 12.3662 7.1022 12.6138 7.14191 12.855C7.18162 13.0962 7.29118 13.3204 7.45704 13.5L7.46797 13.5109L9 15.0891L8.84844 15.8703C7.05299 15.8285 5.34497 15.0867 4.08885 13.8031C2.83273 12.5196 2.12798 10.7959 2.125 9ZM10.1391 15.7797L10.2273 15.3258C10.2636 15.1329 10.2543 14.9343 10.2 14.7457C10.1457 14.5571 10.0481 14.3839 9.91485 14.2398C9.91101 14.2364 9.90736 14.2327 9.90391 14.2289L8.375 12.6516L9.44532 10.25L11.2281 10.4906L14.8 12.6875C14.2825 13.5002 13.6003 14.1953 12.7975 14.7279C11.9946 15.2605 11.089 15.6188 10.1391 15.7797Z" fill="white"/>
                  </svg>
                </span>
                 Rapid Order Execution
                </p>
                <p className="flex items-center gap-4 text-base manrope-semibold bg-[#20232D] py-4 px-6 rounded-lg">
                <span>
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2.875C9.38193 2.875 8.77775 3.05828 8.26384 3.40166C7.74994 3.74504 7.3494 4.2331 7.11288 4.80411C6.87635 5.37513 6.81447 6.00347 6.93505 6.60966C7.05562 7.21585 7.35325 7.77267 7.79029 8.20971C8.22733 8.64675 8.78415 8.94438 9.39034 9.06495C9.99653 9.18553 10.6249 9.12365 11.1959 8.88712C11.7669 8.6506 12.255 8.25006 12.5983 7.73616C12.9417 7.22225 13.125 6.61807 13.125 6C13.125 5.1712 12.7958 4.37634 12.2097 3.79029C11.6237 3.20424 10.8288 2.875 10 2.875ZM10 7.875C9.62916 7.875 9.26665 7.76503 8.95831 7.55901C8.64996 7.35298 8.40964 7.06014 8.26773 6.71753C8.12581 6.37492 8.08868 5.99792 8.16103 5.63421C8.23337 5.27049 8.41195 4.9364 8.67417 4.67417C8.9364 4.41195 9.27049 4.23337 9.63421 4.16103C9.99792 4.08868 10.3749 4.12581 10.7175 4.26773C11.0601 4.40964 11.353 4.64996 11.559 4.95831C11.765 5.26665 11.875 5.62916 11.875 6C11.875 6.49728 11.6775 6.97419 11.3258 7.32583C10.9742 7.67746 10.4973 7.875 10 7.875ZM18.75 0.375H1.25C1.08424 0.375 0.925268 0.440848 0.808058 0.558058C0.690848 0.675269 0.625 0.83424 0.625 1V11C0.625 11.1658 0.690848 11.3247 0.808058 11.4419C0.925268 11.5592 1.08424 11.625 1.25 11.625H18.75C18.9158 11.625 19.0747 11.5592 19.1919 11.4419C19.3092 11.3247 19.375 11.1658 19.375 11V1C19.375 0.83424 19.3092 0.675269 19.1919 0.558058C19.0747 0.440848 18.9158 0.375 18.75 0.375ZM15.1289 10.375H4.87109C4.66125 9.66531 4.27719 9.01941 3.75389 8.49611C3.23059 7.97281 2.58468 7.58875 1.875 7.37891V4.62109C2.58468 4.41125 3.23059 4.02719 3.75389 3.50389C4.27719 2.98059 4.66125 2.33468 4.87109 1.625H15.1289C15.3387 2.33468 15.7228 2.98059 16.2461 3.50389C16.7694 4.02719 17.4153 4.41125 18.125 4.62109V7.37891C17.4153 7.58875 16.7694 7.97281 16.2461 8.49611C15.7228 9.01941 15.3387 9.66531 15.1289 10.375ZM18.125 3.29453C17.3753 2.97218 16.7778 2.37466 16.4555 1.625H18.125V3.29453ZM3.54453 1.625C3.22218 2.37466 2.62466 2.97218 1.875 3.29453V1.625H3.54453ZM1.875 8.70547C2.62466 9.02782 3.22218 9.62534 3.54453 10.375H1.875V8.70547ZM16.4555 10.375C16.7778 9.62534 17.3753 9.02782 18.125 8.70547V10.375H16.4555Z" fill="white"/>
                    </svg>
                </span>
                 Low Transaction Fees
                </p>
                <p className="flex items-center gap-4 text-base manrope-semibold bg-[#20232D] py-4 px-6 rounded-lg">
                <span>
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.125C6.51664 3.125 5.0666 3.56487 3.83323 4.38898C2.59986 5.21309 1.63856 6.38443 1.07091 7.75487C0.50325 9.12532 0.354725 10.6333 0.644114 12.0882C0.933503 13.543 1.64781 14.8794 2.6967 15.9283C3.7456 16.9772 5.08197 17.6915 6.53683 17.9809C7.99168 18.2703 9.49968 18.1218 10.8701 17.5541C12.2406 16.9864 13.4119 16.0251 14.236 14.7918C15.0601 13.5584 15.5 12.1084 15.5 10.625C15.4977 8.63657 14.7068 6.73024 13.3008 5.32421C11.8948 3.91818 9.98843 3.12727 8 3.125ZM8 16.875C6.76387 16.875 5.5555 16.5084 4.52769 15.8217C3.49988 15.1349 2.6988 14.1588 2.22576 13.0168C1.75271 11.8747 1.62894 10.6181 1.8701 9.40569C2.11125 8.1933 2.70651 7.07966 3.58059 6.20558C4.45466 5.3315 5.56831 4.73625 6.78069 4.49509C7.99307 4.25393 9.24974 4.37771 10.3918 4.85075C11.5338 5.3238 12.5099 6.12488 13.1967 7.15269C13.8834 8.18049 14.25 9.38887 14.25 10.625C14.2481 12.282 13.5891 13.8707 12.4174 15.0424C11.2457 16.2141 9.65704 16.8731 8 16.875ZM11.5672 7.05781C11.6253 7.11586 11.6714 7.18479 11.7029 7.26066C11.7343 7.33654 11.7505 7.41787 11.7505 7.5C11.7505 7.58213 11.7343 7.66346 11.7029 7.73934C11.6714 7.81521 11.6253 7.88414 11.5672 7.94219L8.44219 11.0672C8.38412 11.1253 8.31518 11.1713 8.23931 11.2027C8.16344 11.2342 8.08213 11.2503 8 11.2503C7.91788 11.2503 7.83656 11.2342 7.76069 11.2027C7.68482 11.1713 7.61588 11.1253 7.55782 11.0672C7.49975 11.0091 7.45368 10.9402 7.42226 10.8643C7.39083 10.7884 7.37466 10.7071 7.37466 10.625C7.37466 10.5429 7.39083 10.4616 7.42226 10.3857C7.45368 10.3098 7.49975 10.2409 7.55782 10.1828L10.6828 7.05781C10.7409 6.9997 10.8098 6.9536 10.8857 6.92215C10.9615 6.8907 11.0429 6.87451 11.125 6.87451C11.2071 6.87451 11.2885 6.8907 11.3643 6.92215C11.4402 6.9536 11.5091 6.9997 11.5672 7.05781ZM5.5 1.25C5.5 1.08424 5.56585 0.925268 5.68306 0.808058C5.80027 0.690848 5.95924 0.625 6.125 0.625H9.875C10.0408 0.625 10.1997 0.690848 10.3169 0.808058C10.4342 0.925268 10.5 1.08424 10.5 1.25C10.5 1.41576 10.4342 1.57473 10.3169 1.69194C10.1997 1.80915 10.0408 1.875 9.875 1.875H6.125C5.95924 1.875 5.80027 1.80915 5.68306 1.69194C5.56585 1.57473 5.5 1.41576 5.5 1.25Z" fill="white"/>
                    </svg>
                </span>
                 Instant Withdrawals
                </p>
                <button className="w-fit mt-4 cursor-pointer mb-6 bg-[#6FFFE9] px-4 manrope-semibold py-3 text-[#003233] rounded-xl">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full md:w-[48%]">
            <Image src="/wallpaper-2.png" alt="logo" width={564} height={530} />
          </div>
        </div>
       </div>
    </section>

    {/* ----reason to choose-------- */}
    <section className="py-16 relative z-100">
      <Image className="select-none absolute -z-1 right-0 bottom-[-35rem] max-md:-z-1" src="/bg-5.png" width={553} height={1243} alt="bg" />
       <div className="w-[85%] mx-auto flex flex-col gap-6 pl-8 gradient-border mb-12">
        <h4 className="text-lg md:text-2xl manrope-bold">How it works</h4>
        <h2 className="manrope-medium text-3xl md:text-5xl gradient-3 text-transparent bg-clip-text">Easy Steps to Exchange Bitcoin</h2>
      </div>
      <div className="w-[85%] mx-auto flex items-center justify-between flex-wrap gap-y-6 relative z-100">

         <div className="w-full md:w-[49%] flex max-md:flex-col items-center gap-2 bg-[#14161B] rounded-lg">
          <div>
            <Image className="w-full h-full" src="/rates.svg" width={100} height={100} alt="logo" /> 
          </div>
          <div className="p-4">
            <h4 className="manrope-bold text-2xl md:text-3xl mb-2">Best rates</h4>
            <p className="text-base manrope-regular">Get the best market rate instantly with real-time price tracking.</p>
          </div>
        </div>

        <div className="w-full md:w-[49%] flex max-md:flex-col items-center gap-2 bg-[#14161B] rounded-lg">
          <div>
            <Image className="w-full h-full" src="/transaction.svg" width={100} height={100} alt="logo" /> 
          </div>
          <div className="p-4">
            <h4 className="manrope-bold text-2xl md:text-3xl mb-2">Best rates</h4>
            <p className="text-base manrope-regular">Get the best market rate instantly with real-time price tracking.</p>
          </div>
        </div>

          <div className="w-full md:w-[49%] flex max-md:flex-col items-center gap-2 bg-[#14161B] rounded-lg">
          <div>
            <Image className="w-full h-full" src="/account.svg" width={100} height={100} alt="logo" /> 
          </div>
          <div className="p-4">
            <h4 className="manrope-bold text-2xl md:text-3xl mb-2">Best rates</h4>
            <p className="text-base manrope-regular">Get the best market rate instantly with real-time price tracking.</p>
          </div>
        </div>

          <div className="w-full md:w-[49%] flex max-md:flex-col items-center gap-2 bg-[#14161B] rounded-lg">
          <div>
            <Image className="w-full h-full" src="/exchange.svg" width={100} height={100} alt="logo" /> 
          </div>
          <div className="p-4">
            <h4 className="manrope-bold text-2xl md:text-3xl mb-2">Best rates</h4>
            <p className="text-base manrope-regular">Get the best market rate instantly with real-time price tracking.</p>
          </div>
        </div>

          <div className="w-full md:w-[49%] flex max-md:flex-col items-center gap-2 bg-[#14161B] rounded-lg">
          <div>
            <Image className="w-full h-full" src="/hold.svg" width={100} height={100} alt="logo" /> 
          </div>
          <div className="p-4">
            <h4 className="manrope-bold text-2xl md:text-3xl mb-2">Best rates</h4>
            <p className="text-base manrope-regular">Get the best market rate instantly with real-time price tracking.</p>
          </div>
        </div>

          <div className="w-full md:w-[49%] flex max-md:flex-col items-center gap-2 bg-[#14161B] rounded-lg">
          <div>
            <Image className="w-full h-full" src="/support.svg" width={100} height={100} alt="logo" /> 
          </div>
          <div className="p-4">
            <h4 className="manrope-bold text-2xl md:text-3xl mb-2">Best rates</h4>
            <p className="text-base manrope-regular">Get the best market rate instantly with real-time price tracking.</p>
          </div>
        </div>

      </div>
    </section>

    {/* -----testimonials------------ */}
    <section className="py-16 relative z-100">
      <div className="w-[80%] mx-auto flex flex-col gap-6 pl-8 gradient-border mb-12">
        <h4 className="text-lg md:text-2xl manrope-bold">User Reviews</h4>
        <h2 className="manrope-medium text-3xl md:text-5xl gradient-3 text-transparent bg-clip-text">What our users Says</h2>
      </div>
       <ImageSlider/>
    </section>

    {/* -----faq------- */}
    <section className="py-16 relative">
      <Image className="absolute left-0 bottom-[-5rem] max-md:bottom-[45rem]" src="/bg-6.png" width={426} height={1122} alt="bg" />
       <div className="w-[85%] gradient-9 rounded-xl mx-auto p-4 md:p-6 flex flex-wrap gap-4 items-end justify-between">
            <div className="w-full md:w-[32%]">
              <p className="text-[0.75rem] w-fit bg-[#BFA2F61A] tracking-[2.4px] manrope-medium px-4 inline py-1 border border-[#BFA2F633] bg-clip-text text-transparent rounded-lg" 
              style={{backdropFilter : 'blur(20px)', backgroundImage : 'linear-gradient(270deg, #BFA2F6 0%, #50F8E4 100%)'}}>FAQ</p>
              <h2 className="text-3xl md:text-5xl manrope-medium mt-3">Frequently Asked Questions</h2>
              <div className="p-4 rounded-xl gradient-4 w-full mt-12">
            <h4 className="text-2xl manrope-bold mb-2 text-black">Still have questions?</h4>
            <p className="manrope-regular text-base mb-6 text-black">
              If the solution eludes you, 
              kindly engage with our customer support.
            </p>
            <button className="w-full gradient-7 py-3 rounded-xl px-6">
              Get In Touch
            </button>
              </div>
            </div>
          <div className="w-full md:w-[65%]">
            <FAQAccordion />
          </div>
       </div>
    </section>
    {/* footer */}
    <Footer/>
   </div>
  );
}
