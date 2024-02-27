import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
         <div className="w-full h-screen md:items-center md:justify-center bg-black/[0.96] antialised bg-grid-white/[0.02] relative overflow">
       <Navbar/>
       <Spotlight
       className="hidden md:flex md:left-80 md:-top-80"
       fill="white">
       </Spotlight>
       <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center
                bg-clip-text text-transparent 
                bg-gradient-to-b from-neutral-50 
                to bg-neutral-400 bg-opacity-50">
                   Where Nostalgia Reigns Supreme.
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Consoles, collectibles, and more...
        </p>
        
        <Link
          href={"/Player One Start"}
          className="cursor-pointer
          flex items-center
          justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
          >
            Player One Start
          </Link>
       </div>
      </div> 
  );
}
