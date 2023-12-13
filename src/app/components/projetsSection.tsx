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
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tags: ["All", "Web"],
    github: "https://github.com/AwaisTahir786",
    preview: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tags: ["All", "Web"],
    github: "https://github.com/AwaisTahir786",
    preview: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    github: "https://github.com/AwaisTahir786",
    preview: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tags: ["All", "Mobile"],
    github: "https://github.com/AwaisTahir786",
    preview: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tags: ["All", "Web"],
    github: "https://github.com/AwaisTahir786",
    preview: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    
    tags: ["All", "Web"],
    github: "https://github.com/AwaisTahir786",
    preview: "/",
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
    <section id="projects" >
      <h2 className="text-white text-center font-bold text-4xl mt-4 mb-8 md:mb-16 ">
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
      <ul ref={ref} className="grid grid-cols-3 gap-4 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarients}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{duration:0.3 , delay: index * 0.4}}
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
