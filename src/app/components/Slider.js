// components/ImageSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

export default function ImageSlider() {
  return (
    <div className='w-[80%] mx-auto'>
        <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={30} 
      modules={[Pagination]}
      className="w-full space-x-5 mx-auto !pb-12"
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      }}
    >
      <SwiperSlide>
        <div className='bg-white/10 p-6 rounded-xl pl-16 md:pl-30 relative'>
             <Image className='absolute w-12 left-2 top-4 md:left-14' src="/komma.svg" width={24} height={24} alt='logo' />
            <p className='manrope-regulat text-base text-white tracking-[-0.5px]'>
                    The platform is incredibly easy to use, and my assets have 
                    grown significantly since I became a holder. The team’s 
                    unwavering focus and innovation make me excited for what’s 
                    next! So incredible!
            </p>
            <div className=' flex items-center gap-2 mt-6'>
                <Image className='w-12' src="/twitter.svg" alt="twitter" width={24} height={24} />
                <div>
                    <h5 className='text-xl manrope-bold text-white'>Floyd M.</h5>
                    <p className='text-white'>- Trader</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
     <SwiperSlide>
        <div className='bg-white/10 p-6 rounded-xl pl-16 md:pl-30 relative'>
             <Image className='absolute w-12 left-2 top-4 md:left-14' src="/komma.svg" width={24} height={24} alt='logo' />
            <p className='manrope-regulat text-base tracking-[-0.5px] text-white'>
                    Stem offers a seamless and intuitive trading experience. I was 
                    able to start buying and trading crypto in no time. The 
                    interface is incredibly user-friendly, and the transaction 
                    speeds are impressive!
            </p>
            <div className=' flex items-center gap-2 mt-6'>
                <Image className='w-12' src="/twitter.svg" alt="twitter" width={24} height={24} />
                <div>
                    <h5 className='text-xl manrope-bold text-white'>Courtney F.</h5>
                    <p className='text-white'>- New Trader</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white/10 p-6 rounded-xl pl-16 md:pl-30 relative'>
             <Image className='absolute w-12 left-2 top-4 md:left-14' src="/komma.svg" width={24} height={24} alt='logo' />
            <p className='manrope-regulat text-base tracking-[-0.5px] text-white'>
                    The platform is incredibly easy to use, and my assets have 
                    grown significantly since I became a holder. The team’s 
                    unwavering focus and innovation make me excited for what’s 
                    next! So incredible!
            </p>
            <div className=' flex items-center gap-2 mt-6'>
                <Image className='w-12' src="/twitter.svg" alt="twitter" width={24} height={24} />
                <div>
                    <h5 className='text-xl manrope-bold text-white'>Floyd M.</h5>
                    <p className='text-white'>- Trader</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
