import Heading from "../components/Heading"
import Skill from "../components/Skill";
import GSAP from "../assets/gsap-logo.png"
import FramerMotion from "../assets/framer-motion.png"
import { motion } from "framer-motion";
import { Html5OriginalIcon, Css3OriginalIcon, JavascriptOriginalIcon, TailwindcssOriginalIcon, TypescriptOriginalIcon, ReactOriginalIcon, NextjsOriginalIcon, SassOriginalIcon, MongodbOriginalIcon, MysqlOriginalIcon, PostgresqlOriginalIcon, NodejsPlainWordmarkIcon } from "@devicon/react"

const About = () => {

const leftContainer = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const rightContainer = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

  return (
    
    <section id="about" className="pl-35 pt-15 min-h-screen bg-linear-[325deg,#090b0f_70%,#06090d_70%] bg-fixed">
      <Heading number="01" title="About Me"/>
      <div className="flex flex-row justify-between">
        <motion.div variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} className="w-[45%] text-xl text-[#78797d]">
          <motion.h2 variants={leftItem} className="text-4xl font-semibold text-white">About Me</motion.h2>
          <br />
          <motion.p variants={leftItem}>Hi, I’m Nikunj — a developer who enjoys building clean, user-friendly web experiences. I’ve been learning and growing in frontend development, and lately I’ve been exploring modern libraries like Framer Motion, GSAP, and Three.js to add more creativity and interaction to my projects. I love understanding how things work behind the scenes and turning ideas into something people can actually use on the web.</motion.p>
          <br />
          <motion.p variants={leftItem}>I like improving my skills one step at a time, trying out new tools, and finding better ways to solve problems. I prefer keeping my work clean and organized — whether I’m designing UI components, handling backend logic, or building a full-stack project from start to finish.</motion.p>
          <br />
          <motion.p variants={leftItem}>Outside of coding, I enjoy cycling, watching anime, reading and travelling. These hobbies help me relax, stay curious, and keep a good balance in life.</motion.p>
          <br />
          <motion.p variants={leftItem}>I’m always excited for new opportunities, challenges, and the chance to grow as a developer while contributing to meaningful projects.</motion.p>
        
        </motion.div>
        <motion.div className="w-[45%]" variants={rightContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <motion.h2 variants={skillItem} className="text-4xl font-semibold text-white">My Skills</motion.h2>
          <motion.div variants={rightContainer} initial="hidden"
            whileInView="visible"
            
            viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-2 gap-4 mt-7">
            <Skill icon={<Html5OriginalIcon size={35}/>} title="HTML" bgColor="#371a16"/>
            <Skill icon={<Css3OriginalIcon size={35}/>} title="CSS" bgColor="#0e2132"/>
            <Skill icon={<JavascriptOriginalIcon size={35}/>} title="JavaScript" bgColor="#383616"/>
            <Skill icon={<TailwindcssOriginalIcon size={35}/>} title="Tailwind" bgColor="#0c2f39"/>
            <Skill icon={<TypescriptOriginalIcon size={35}/>} title="TypeScript" bgColor="#152538"/>
            <Skill icon={<SassOriginalIcon size={35}/>} title="Sass" bgColor="#301f2d"/>
            <Skill icon={<NextjsOriginalIcon size={35}/>} title="Next.js" bgColor="#191b20"/>
            <Skill icon={<ReactOriginalIcon size={35}/>} title="React" bgColor="#0b3441"/>
            <Skill icon={ <img src={FramerMotion} alt="Framer Motion" width={35} height={35}/>} title="Framer Motion" bgColor="#d5d5d6"/>
            <Skill icon={ <img src={GSAP} alt="GSAP" width={35} height={35}/>} title="GSAP" bgColor="#0e2132"/>
            <Skill icon={<NodejsPlainWordmarkIcon size={35}/>} title="Node.js" bgColor="#1a2a1d"/>
            <Skill icon={<MongodbOriginalIcon size={35}/>} title="Mongo
            DB" bgColor="#182b1e"/>
            <Skill icon={<PostgresqlOriginalIcon size={35}/>} title="PostgreSQL" bgColor="#1b344f"/>
            <Skill icon={<MysqlOriginalIcon size={35}/>} title="MySQL" bgColor="#cacaca"/>
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
