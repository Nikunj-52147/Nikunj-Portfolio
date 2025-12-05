import { motion, AnimatePresence } from "framer-motion"
import { useBreakpoint } from "../hooks/useBreakpoint";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

 const navVariants = {
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
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

const Navbar = () => {
  const isLaptop = useBreakpoint();
   return isLaptop ? <Laptop /> : <Mobile />
}

const Laptop = () => {

  const [active, setActive] = useState("hero"); 

  useEffect(() => {
  const sections = ["hero", "about", "projects", "contact"];

  function handleScroll() {
    sections.forEach((id) => {
      const sec = document.getElementById(id);
      if (sec) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


    return(

    <motion.nav  variants={navVariants}
      initial="hidden"
      animate="visible" className="p-5 border-0 sticky top-0 z-50 px-30 bg-[#06090d]">
    
        <motion.ul className="flex text-2xl justify-start gap-10 list-none text-[#78797d]">
        <motion.li variants={itemVariants} className="hover:text-amber-400"><a href="#hero" className={active === "hero" ? "text-white font-bold" : ""}>Home</a></motion.li>
        <motion.li variants={itemVariants} className="hover:text-amber-400"><a href="#about" className={active === "about" ? "text-white font-bold" : ""}>About</a></motion.li>
        <motion.li variants={itemVariants} className="hover:text-amber-400"><a href="#projects" className={active === "projects" ? "text-white font-bold" : ""}>Projects</a></motion.li>
        <motion.li variants={itemVariants} className="hover:text-amber-400"><a href="#contact" className={active === "contact" ? "text-white font-bold" : ""}>Connect</a></motion.li>
        </motion.ul>
     
    </motion.nav>
    )

}

const Mobile = () => {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 15 }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 }
  };

  return (
    <nav className="p-4 bg-[#06090d] text-white flex justify-between items-center sm:hidden sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Nikunj</h1>

      <HiMenu
        className="text-3xl cursor-pointer"
        onClick={() => setOpen(true)}
      />

      
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-[#0d0f14] text-white p-6 z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <IoClose
              className="text-3xl cursor-pointer mb-8"
              onClick={() => setOpen(false)}
            />

            <ul className="flex flex-col gap-6 text-xl">
             <li className="hover:text-amber-400 cursor-pointer">
              <a href="#hero" onClick={() => setOpen(false)}>Home</a>
            </li>

            <li className="hover:text-amber-400 cursor-pointer">
              <a href="#about" onClick={() => setOpen(false)}>About</a>
            </li>

            <li className="hover:text-amber-400 cursor-pointer">
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            </li>

            <li className="hover:text-amber-400 cursor-pointer">
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};




export default Navbar
