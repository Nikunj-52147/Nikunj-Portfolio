import Heading from "../components/Heading";
import Project from "../components/Project";

import Airbnb from "../assets/Airbnb-clone.png";
import Donuts from "../assets/donuts.png";
import Educity from "../assets/educity.png";
import Komono from "../assets/Komono.png";
import Portfolio from "../assets/portfolio-2.png";
import Kanban from "../assets/kanban-2.png";
import Snake from "../assets/snack-mania.png";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {

   const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2, margin: "350px" });

  const containerVariant = {
  hidden: { x: -70, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,   
      delayChildren: 0.3      
    }
  }
};

  return (
    <section
      id="projects"
      className="pl-35 pt-35 min-h-screen bg-linear-[325deg,#090b0f_70%,#06090d_70%] bg-fixed"
    >
      <Heading number="02" title="Projects" />

      <motion.div
        className="flex gap-15 flex-wrap pt-10"
        ref={ref}
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <Project
          image={Airbnb}
          title="Airbnb-clone"
          desc="A full-stack rental platform where users can sign up (including Google/GitHub OAuth), browse properties, mark favorites, make bookings, and manage their own listings. It also includes filtering by property type, dates, and guest count. Built with Next.js, TypeScript, MongoDB, and Prisma."
          techArr={["Next.js", "MongoDB", "TypeScript", "Tailwind"]}
          link="https://villavista-mocha.vercel.app/"
          index={1}
        />

        <Project
          image={Donuts}
          title="Donut Store"
          desc="A visually engaging donut store landing page featuring smooth, scroll-based animations powered by GSAP. Focused on delivering a fun, modern, and animated browsing experience, with an emphasis on clean UI and playful visuals."
          techArr={["React", "GSAP", "Tailwind"]}
          link="https://donut-store.vercel.app/"
          index={2}
        />

        <Project
          image={Educity}
          title="Educity"
          desc="A modern university landing page built with React and Tailwind CSS. It includes a smooth testimonial slider with clean transition effects. This project helped me practice component-based UI building and Tailwind styling. It focuses on clean sections, responsive design, and a simple user-friendly layout."
          techArr={["React", "Tailwind"]}
          link="https://educity-theta.vercel.app/"
          index={3}
        />

        <Project
          image={Komono}
          title="Komono Watch - Hero page"
          desc="A visually polished hero section for a watch brand, built using React, CSS, and GSAP. The page focuses on smooth animations and clean visual appeal rather than heavy functionality. It was a fun experiment in crafting aesthetic layouts and motion-driven UI."
          techArr={["React", "GSAP", "CSS"]}
          link="https://komono-watch-magnus-silver.vercel.app/"
          index={4}
        />

        <Project
          image={Portfolio}
          title="Personal Portfolio"
          desc="A simple and clean personal portfolio built to showcase my projects, skills, and interests. It features smooth animations, a structured layout, and easy navigation across sections like About Me, Projects, and Contact. The focus of this site is to present my work clearly while keeping the design modern."
          techArr={["React", "Tailwind", "Framer Motion"]}
          link="https://villavista-mocha.vercel.app/"
          index={5}
        />

        <Project
          image={Kanban}
          title="Kanban Board"
          desc="A minimal Kanban board with four sections — Backlog, To Do, In Progress, and Completed. Users can add new cards to any section and delete them when no longer needed. Built with Framer Motion for smooth drag-and-drop–style animations and transitions, making the workflow feel interactive and intuitive."
          techArr={["React", "Tailwind", "Framer Motion"]}
          link="https://kanbanboard-umber.vercel.app/"
          index={6}
        />

        <Project
          image={Snake}
          title="Snake Game"
          desc="A classic Snake game built using HTML, CSS, and JavaScript. It features smooth movement and uses localStorage to save the player’s high score on their device. A fun project focused on game logic and improving JavaScript fundamentals."
          techArr={["HTML", "CSS", "Javascript"]}
          link="https://nikunj-52147.github.io/GAME-Snake-Mania/"
          index={7}
        />
      </motion.div>
    </section>
  );
};

export default Projects;
