"use client";

import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./tabButton";

const Tabdata:any = [
  {
    title:"Skills",
    id:"skills",
    content: (
      <ul className="text-disc pl-2">
        <li>React.js</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="text-disc pl-2" >
        <li>Becholar in Computer Science</li>
        <li>ICS for Aspire Group of colleges</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="text-disc pl-2">
        <li>PSDF internship as a frontend developer</li>
      </ul>
    ),
  },
];

function AboutMe() {
  const [tab, settab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id: any) {
    startTransition(() => {
      settab(id);
    });
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 xl:px-16 sm:py-16 py-8 px-4 items-center ">
        <Image
          src="/images/about-image.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="font-bold text-4xl mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            {" "}
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next, Tailwind, Sql, HTML, CSS. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>

          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              {" "}
              skills{" "}
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              education{" "}
            </TabButton>
            <TabButton
              active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              {" "}
              certifications{" "}
            </TabButton>
          </div>
          <div className="mt-3">
            {Tabdata.find((t:any) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
