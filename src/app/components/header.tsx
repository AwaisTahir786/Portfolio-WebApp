/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import Animation from "./animation";
import ProjetsSection from "./projetsSection";
import Link from "next/link";
import { motion } from "framer-motion";



function Header() {

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-left justify-self-start"
        >
          <h1 className="text-4xl mb-4 sm:text-5xl lg:text-6xl px-12 py-4 font-extrabold text-white">
            <span className="text-[#fff10f]">
              Hi, I'm{" "} <span className="text-[#fff10f]">Awais</span> 
            </span> <br />
            <Animation/>
          </h1>
          <p className="lg:text-xl text-lg text-[white] px-12 py-4 ">
            Make it work, make it right, make it fast <span className="text-[#fff10f]"> !</span>
          </p>

          <div className="px-12">
            <Link href={"#contact"}>
              <button className="rounded-full w-full sm:w-fit bg-[#fff10f] px-6 py-3 hover:bg-slate-00 text-black mr-4">
                Hire Me
              </button>
            </Link>
            <Link href={"/images/Awais-Resume.pdf"} download="Resume">
              <button className="rounded-full w-full sm:w-fit bg-[#fff10f] px-1 py-1 hover:bg-slate-800 text-white  mt-3 ">
                <span className=" block rounded-full bg-[#121212] hover:bg-slate-800 px-5 py-2">
                  Download CV{" "}
                </span>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 px-12 place-self-center mt-4"
        >
          <div className="rounded-full bg-[#181818] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] h-[200px] w-[200px] relative lg:w-[500] lg:h-[500]">
            <Image
              src="/images/pic.png"
              alt="Picture of the author"
              className="absolute translate transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
