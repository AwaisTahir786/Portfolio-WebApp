"use client";

import React from "react";
import ProjectCards from "./projectCards";
import { useState } from "react";
import ProjectTag from "./projectTag";
import { useRef } from "react"; // direct target html tag
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "Compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences.",
    image: "/images/projects/1.png",
    tags: ["All", "Web"],
    github: "https://github.com/AwaisTahir786/Portfolio-WebApp",
    preview: "https://portfolio-web-app-virid.vercel.app/",
  },
  {
    id: 2,
    title: "Blog Website",
    description:
      "This is a personal or corporate website that regularly offers new and informative articles, usually on a specific topic or range of topics.",
    image: "/images/projects/two.png",
    tags: ["All", "Web"],
    github: "https://github.com/AwaisTahir786/blog-web-application",
    preview: "https://blog-web-application-chi.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "This website is an online platform where businesses sell products or services directly to customers through the internet.",
    image: "/images/projects/20.png",
    tags: ["All", "Web"],
    github: "https://github.com/AwaisTahir786/E-commerce-Web-App",
    preview: "https://e-commerce-web-app-nu.vercel.app/",
  },
  {
    id: 4,
    title: "Car Dealer App",
    description:
      "These website may work online marketplaces like Autotrader or Carfax, car manufacturer, dealership, and enthusiast website.",
    image: "/images/projects/21.png",
    tags: ["All", "Mobile"],
    github: "https://github.com/AwaisTahir786/Car-webApp",
    preview: "https://car-web-app-beige.vercel.app/",
  },
  {
    id: 5,
    title: "Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tags: ["All", "Web"],
    github: "https://github.com/AwaisTahir786",
    preview: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description:
      "This site provide a full stack road map about web developers.",
    image: "/images/projects/6.png",

    tags: ["All", "Web"],
    github: "https://github.com/AwaisTahir786",
    preview: "/",
  },
  {
    id: 7,
    title: "To-Do App",
    description:
      "List of tasks you need to complete or things that you want to do",
    image: "/images/projects/todo.png",

    tags: ["All", "Mobile"],
    github: "https://github.com/AwaisTahir786",
    preview: "https://to-do-app-one-beta.vercel.app/",
  },
];

function ProjetsSection() {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  function handleTag(value: string) {
    setTag(value);
  }

  const filteredProjects = projectsData.filter((filtered) =>
    filtered.tags?.includes(tag)
  );

  const cardVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-[#fff10f] text-center font-bold text-5xl mt-4 mb-8 md:mb-16 ">
        Projects
      </h2>

      <div className="flex flex-row justify-center text-white ">
        <ProjectTag name="All" isSelected={tag === "All"} onClick={handleTag} />
        <ProjectTag name="Web" isSelected={tag === "Web"} onClick={handleTag} />
        <ProjectTag
          name="Mobile"
          isSelected={tag === "Mobile"}
          onClick={handleTag}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1 mt-16  "
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarients}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCards
              key={project.id}
              title={project.title}
              imageUrl={project.image}
              description={project.description}
              gitUrl={project.github}
              previewUrl={project.preview}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjetsSection;
