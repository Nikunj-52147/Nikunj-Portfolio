import { motion } from "framer-motion";

const Project = ({ image, title, techArr, desc, link, index }) => {

  const containerVariant = {
    hidden: { opacity: 0, x: index % 2 === 0 ? 200 : -200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.9,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, x: index % 2 === 0 ? 200 : -200 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3, margin: "350px" }}
      className="w-[45%]"
    >
     
      <motion.div
        variants={childVariant}
        className="w-full flex items-center justify-center h-[50%] p-10 bg-[#131518] rounded-2xl transition"
      >
        
        <img src={image} alt="Project" />
      </motion.div>
      <motion.h2
        variants={childVariant}
        className="text-5xl font-semibold mt-8"
      >
     
        {title}
      </motion.h2>
      <motion.div variants={childVariant} className="flex mt-5 gap-5">
     
        {techArr.map((item, index) => (
          <div
            key={index}
            className=" border border-gray-700 bg-[#0c0f15] px-5 py-0.5 rounded-3xl text-lg text-[#78797d]"
          >
            
            {item}
          </div>
        ))}
      </motion.div>
      <motion.p variants={childVariant} className="mt-8 text-lg text-[#78797d]">
        {desc}
      </motion.p>
      <motion.div
        variants={childVariant}
        className="mt-5 flex gap-5 items-center"
      >
        
        <div className="inline-block bg-orange-400 h-0.5 w-15"></div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 text-2xl font-semibold cursor-pointer"
        >
          Visit
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Project;
