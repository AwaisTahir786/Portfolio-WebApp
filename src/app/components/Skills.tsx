"use client";

/* eslint-disable react/no-unescaped-entities */

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill py-0 pb-20 relative" id="skills">
        <div className="container">
                    <div className="skill-bx bg-black  text-center lg:py-40 lg:px-40 md:py-0 md:px-0">
                        <h2 className='text-[#fff10f] text-5xl font-bold'>Skills</h2>
                        <p className='text-gray-300 text-xl mt-6 mb-20 max-w-xl text-center mx-auto'>Proficient in wielding digital tools, crafting captivating online experiences through pixel mastery and coding finesse.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider w-5/5 mx-auto relative hover:text-[#fff10f]">
                            <div className="flex flex-col items-center gap-y-3">
                                <Image src="/images/cir3.svg" alt="Image" width={150} height={150} />
                                <h5 className='text-xl font-semibold'>Web Development</h5>
                            </div>
                            <div className="flex flex-col items-center gap-y-3">
                                <Image src="/images/cir2.svg" alt="Image" width={150} height={150} />
                                <h5 className='text-xl font-semibold'>Web Design</h5>
                            </div>
                            <div className="flex flex-col items-center gap-y-3">
                                <Image src="/images/cir.svg" alt="Image"  width={150} height={150}/>
                                <h5 className='text-xl font-semibold'>Branding</h5>
                            </div>
                            <div className="flex flex-col items-center gap-y-3">
                                <Image src="/images/cir2.svg" alt="Image" width={150} height={150} />
                                <h5 className='text-xl font-semibold'>Social Media Marketing</h5>
                            </div>
                        </Carousel>
            </div>
        </div>
    </section>
  )
}