import Image from "next/image";
const Footer = () => {

    return (
        <footer className="bg-white/5 md:px-26 px-12 py-12">
            <div className="flex justify-between flex-wrap gap-y-8">
                <div className="flex flex-col max-md:items-center gap-6 w-full md:w-[50%]">
                    <Image className="w-40" src="/logo.png" alt="logo" width={338} height={68} priority />
                    <p className="manrope-regular text-base tracking-[0.5px] text-white">© CoinBuch - All Rights Reserved.</p>
                </div>
                <div className="flex flex-col items-end max-md:items-center gap-6 w-full md:w-[50%]">
                    <p className="manrope-regular text-base tracking-[0.5px] text-white">Community</p>
                    <div className="flex items-center gap-4">
                        <a href="">
                            <Image src="/fb.svg" width={24} height={24} alt="fb" />
                        </a>
                        <a href="">
                            <Image src="/x.svg" width={24} height={24} alt="fb" />
                        </a>
                        <a href="">
                            <Image src="/tg.svg" width={24} height={24} alt="fb" />
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-white">
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