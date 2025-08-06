'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeLogo = () => {
  const logos = [
    { src: "/item-1.svg", width: 224 },
    { src: "/item-2.svg", width: 224 },
    { src: "/item-3.svg", width: 240 },
    { src: "/item-4.svg", width: 112 },
    
  ];

  return (
    <section className="w-full 2xl:container mx-auto 2xl:px-36">
      <div className="rounded-2xl px-30 overflow-hidden m-2 md:m-6">
        <Marquee
          speed={100}        // pixels per second
          pauseOnHover={true}  // nice touch!
        >
          <div className="flex items-center ga-x-6 lg:gap-x-21 py-2">
            {logos.map((logo, index) => (
            <Image
              key={index}
              className="w-26 mx-8"
              src={logo.src}
              alt="logo"
              width={logo.width}
              height={70}
              loading="lazy"
            />
          ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeLogo;
