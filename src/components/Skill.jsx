import { motion } from "framer-motion"

const Skill = ({ icon, title, bgColor }) => {

const skillItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

  return (
    <motion.div variants={skillItem}  className='w-[250] px-5 py-3 rounded-xl bg-[#0c0f15] flex gap-4 items-center justify-start'>
    
        <div style={{ backgroundColor: bgColor }} className={`bg-[${bgColor}] p-2 rounded`}>
           {icon}
      </div>
      <div className='text-xl font-semibold text-[#afb3b8]'>{title}</div>
    </motion.div>
  )
}

export default Skill
