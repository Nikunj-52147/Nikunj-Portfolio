import { motion } from "framer-motion"

const Navbar = () => {

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

  return (
      <motion.nav  variants={navVariants}
      initial="hidden"
      animate="visible" className="p-5 border-0 sticky top-0 z-50 px-30 bg-[#06090d]">
    
        <motion.ul className="flex text-2xl justify-start gap-10 list-none text-[#78797d]">
        <motion.li variants={itemVariants} className="hover:text-amber-400 text-white"><a href="#hero">Home</a></motion.li>
        <motion.li variants={itemVariants} className="hover:text-amber-400"><a href="#about">About</a></motion.li>
        <motion.li variants={itemVariants} className="hover:text-amber-400"><a href="#projects">Projects</a></motion.li>
        <motion.li variants={itemVariants} className="hover:text-amber-400"><a href="#contact">Connect</a></motion.li>
        </motion.ul>
     
    </motion.nav>
  )
}

export default Navbar
