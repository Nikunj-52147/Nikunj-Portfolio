import { MdEmail, MdMessage } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { motion } from "framer-motion";
import { useBreakpoint } from "../hooks/useBreakpoint";

const sideVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

const Sidebar = () => {
  
  const isLaptop = useBreakpoint();
  return isLaptop ? <Laptop /> : <Mobile />
    
};

const Laptop = () => {
  return (

  <motion.div
      variants={sideVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-40 flex flex-col gap-10 text-2xl z-50 bg-[#090b0f]"
    >
      <motion.a
        variants={itemVariants}
        href="https://mail.google.com/mail/?view=cm&fs=1&to=nikunj51260@gmail.com&su=Hello&body=Hi"
        target="_blank"
      >
        <MdEmail className="hover:text-amber-400 cursor-pointer" />
      </motion.a>
      <motion.a
        variants={itemVariants}
        href="https://github.com/Nikunj-52147"
        target="_blank"
      >
        <FaGithub className="hover:text-amber-400 cursor-pointer" />
      </motion.a>
      <motion.a 
       variants={itemVariants}
        href="/Nikunj_resume.pdf" target="_blank" rel="noopener noreferrer"> 
          <BsFileText className="hover:text-amber-400 cursor-pointer" />
       </motion.a>
     
      <motion.a variants={itemVariants} href="#contact">
        <MdMessage className="hover:text-amber-400 cursor-pointer" />
      </motion.a>
      <motion.a
        variants={itemVariants}
        href="https://www.frontendmentor.io/profile/Nikunj-52147"
        target="_blank"
      >
        <SiFrontendmentor className="hover:text-amber-400 cursor-pointer" />
        <motion.div
          variants={itemVariants}
          className="w-0.5 h-24 bg-gray-300 ml-3 mt-10"
        ></motion.div>
      </motion.a>
    </motion.div>
  );
}

const Mobile = () => {
  return (
    <>
    </>
  )
}

export default Sidebar;
