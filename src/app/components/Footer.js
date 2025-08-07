import Image from "next/image";
const Footer = () => {

    return (
        <footer className="bg-white/5 md:px-26 px-12 py-12">
            <div className="flex justify-between flex-wrap gap-y-12">
                <div className="flex flex-col max-md:items-center gap-6 w-full md:w-[50%]">
                    <Image className="w-40" src="/logo.png" alt="logo" width={338} height={68} priority />
                    <div className="flex items-center gap-4">
                        <a href="">
                            <Image className="w-14" src="/tg.svg" width={24} height={24} alt="fb" />
                        </a>
                        <a href="">
                            <Image className="w-14" src="/x.svg" width={24} height={24} alt="fb" />
                        </a>
                        <a href="">
                            <Image className="w-14" src="/yt.svg" width={24} height={24} alt="fb" />
                        </a>
                        <a href="">
                            <Image className="w-14" src="/medium.svg" width={24} height={24} alt="fb" />
                        </a>
                    </div>
                    <p className="manrope-regular text-base tracking-[0.5px] text-white">© CoinBunch - All Rights Reserved.</p>
                </div>
                <div className="flex flex-col items-start max-md:items-center gap-6 w-full md:w-[30%]">
                    <p className="manrope-regular text-base tracking-[0.5px] text-white">Buy Crypto With</p>
                    <div className="flex items-center gap-4">
                        <a href="">
                            <Image className="w-20" src="/visa.svg" width={24} height={24} alt="fb" />
                        </a>
                        <a href="">
                            <Image className="w-20" src="/g-pay.svg" width={24} height={24} alt="fb" />
                        </a>
                        <a href="">
                            <Image className="w-20" src="/a-pay.svg" width={24} height={24} alt="fb" />
                        </a>
                        <a href="">
                            <Image className="w-20" src="/m-card.svg" width={24} height={24} alt="fb" />
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-white md:ml-auto">
                        <a href="">
                            Privacy Policy
                        </a>
                        <a href="">
                            Terms & Condition
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;