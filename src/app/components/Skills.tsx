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
    <section className="skill py-0 pb-50 relative" id="skills">
        <div className="container">
                    <div className="skill-bx bg-black  text-center py-40 px-40 mt-20">
                        <h2 className='text-white text-5xl font-bold'>Skills</h2>
                        <p className='text-gray-300 text-xl mt-6 mb-20 max-w-xl text-center mx-auto'>Proficient in wielding digital tools, crafting captivating online experiences through pixel mastery and coding finesse.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider w-5/5 mx-auto relative">
                            <div className="flex flex-col items-center gap-y-5">
                                <Image src="/images/meter1.svg" alt="Image" width={150} height={150} />
                                <h5 className='text-xl font-semibold'>Web Development</h5>
                            </div>
                            <div className="flex flex-col items-center gap-y-5">
                                <Image src="/images/meter2.svg" alt="Image" width={150} height={150} />
                                <h5 className='text-xl font-semibold'>Brand Identity</h5>
                            </div>
                            <div className="flex flex-col items-center gap-y-5">
                                <Image src="/images/meter3.svg" alt="Image"  width={150} height={150}/>
                                <h5 className='text-xl font-semibold'>Logo Design</h5>
                            </div>
                            <div className="flex flex-col items-center gap-y-5">
                                <Image src="/images/meter3.svg" alt="Image" width={150} height={150} />
                                <h5 className='text-xl font-semibold'>Web Development</h5>
                            </div>
                        </Carousel>
            </div>
        </div>
        <Image className="background-image-left" src="/images/color-sharp.png" alt="Image" width={100} height={100} />
    </section>
  )
}