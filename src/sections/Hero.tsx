import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";


const buttons = [
  {
    link: "https://www.linkedin.com/in/harman-b-710241203/",
  },
];

export const HeroSection = () => {
  return <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
            <div className="absolute inset-0 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
                <div className="absolute inset-0 -z-30 opacity-5" style={{
                  backgroundImage: `url(${grainImage.src})`}}
                ></div>
                <div className=" size-[620px] hero-ring"></div>
                <div className=" size-[820px] hero-ring"></div>
                <div className=" size-[1020px] hero-ring"></div>
                <div className=" size-[1220px] hero-ring"></div>

                   <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration={30} shouldSpin spinDuration={5}>
                    <SparkleIcon className="size-8 text-emerald-300/20"/>
                  </HeroOrbit>
                  <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration={32} shouldSpin spinDuration={5}>
                    <SparkleIcon className="size-5 text-emerald-300/20"/>
                  </HeroOrbit>
                  <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={34}>
                    <div className="size-2 rounded-full bg-emerald-300/20"></div>
                  </HeroOrbit>
                  <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration={36} shouldSpin spinDuration={5}>
                    <SparkleIcon className="size-10 text-emerald-300/20"/>
                  </HeroOrbit>
                  <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration={38} shouldSpin spinDuration={7}>
                    <StarIcon className="size-12 text-emerald-300"/>
                  </HeroOrbit>
                   <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration={40} shouldSpin spinDuration={7}>
                    <StarIcon className="size-8 text-emerald-300"/>
                  </HeroOrbit>
                  <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={42}>
                    <div className="size-2 rounded-full bg-emerald-300/20"></div>
                  </HeroOrbit>
                  <HeroOrbit size={710} rotation={144}  shouldOrbit orbitDuration={44} shouldSpin spinDuration={5}>
                    <SparkleIcon className="size-14 text-emerald-300/20"/>
                  </HeroOrbit>
                  <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={46}>
                    <div className="size-3 rounded-full bg-emerald-300/20"></div>
                  </HeroOrbit>
                  <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration={48} shouldSpin spinDuration={7}>
                    <StarIcon className="size-28 text-emerald-300"/>
                  </HeroOrbit>
              </div>
            <div id="home" className="container">
              <div className="flex flex-col items-center">
                  <Image src={memojiImage} 
                  className="size-[100px]" alt="Person using a computer" />
                  <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                    <div className="bg-green-500 size-2.5 rounded-full relative">
                      <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                    </div>
                    <div className="text-sm font-medium">Available for new projects</div>
                  </div>
                </div>
                  <div className="max-w-lg mx-auto">
                    <h1 className="font-serif text-3xl md:text-4xl text-center mt-8 tracking-wide">{"Hi, I'm Harman Barpaga"}</h1>
                    <p className="mt-4 text-center text-white/60 md:text-lg">Software Engineer | Full Stack Developer | Java Developer</p>
                  </div>
                <div className="flex flex-col items-center md:flex-row justify-center mt-8 gap-4">
                  <a href="#projects" className="z-30">
                  <button type="button" id="projects" className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                    <span className="font-semibold">Explore My Work</span>
                    <ArrowDown className="size-4" />
                  </button>
                  </a>
                  <a target="_blank" href={buttons[0].link} className="z-30">
                    <button type="button"  className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
                        <span className="inline-flex items-center gap-2 font-semibold"><Linkedin className="size-6" />{"Let's Connect"}</span>
                    </button>
                  </a>
                </div>
            </div>
          </div>;
};
