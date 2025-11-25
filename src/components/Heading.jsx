import { motion } from "framer-motion"

const Heading = ({ number, title }) => {

const wrapper = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };


  const bgVariant = {
    hidden: { opacity: 0, scale: 1.1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };


  return (
    <motion.div variants={wrapper}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }} className="flex justify-between">
      <div >
        <motion.div variants={fadeUp} className="text-6xl font-semibold text-[#0d0f14]">{number}</motion.div>
        <motion.div variants={fadeUp}  className="text-orange-400 text-6xl font-semibold">{title}</motion.div>
      </div>
      <motion.div variants={bgVariant} className="text-[12rem] font-extrabold text-[#0d0f14] -mt-16 ">
        {title.toUpperCase()}
      </motion.div>
    </motion.div>
  )
}

export default Heading
