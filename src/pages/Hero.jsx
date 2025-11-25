import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import profile from "../assets/profile-5.png";

const Hero = () => {
  const container = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.25,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="hero"
      className="pl-35 pt-15 flex flex-row min-h-screen bg-linear-[325deg,#090b0f_70%,#06090d_70%] bg-fixed"
    >
      <motion.div
        className="w-[45%]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col" variants={item}>
          <div className="text-2xl  text-[#78797d]">
            <FiMapPin size={18} className="inline-block mb-2" />
            <span className="text-center ml-2">Gujart, India</span>
          </div>
          <motion.h1
            variants={item}
            className="text-8xl font-bold text-orange-400"
          >
            Nikunj Sheer
          </motion.h1>
          <motion.h2 variants={item} className="text-4xl mt-3">
            Software Engineer
          </motion.h2>
          <motion.div
            variants={item}
            className="h-1 w-15 bg-orange-400 mt-5"
          ></motion.div>
        </motion.div>
        <motion.div variants={item} className="mt-12">
          <div className="p-1 rounded-3xl border-2 border-[#78797d] inline-block">
            <div className="bg-green-400 h-2 w-2 rounded inline-block ml-2"></div>
            <div className="inline-block mx-2 text-lg">Open to work</div>
          </div>
          <motion.div
            variants={item}
            className="max-w-full text-[20px] text-[#78797d] mt-3"
          >
            I am a developer who enjoys learning and expanding knowledge in the
            field of web. I am also determined to create solutions that provide
            excellent online experiences. Explore my portfolio to see my growing
            skills and dedication to quality development.
          </motion.div>
          <motion.div variants={item} className="flex gap-8 mt-9">
            <a href="#contact">
              <div className="py-3 px-12 rounded-4xl font-semibold bg-amber-50 text-black text-2xl hover:bg-amber-400 ">
                <span>Contact</span>
              </div>
            </a>
            <a  href="/Nikunj_resume.pdf" target="_blank" rel="noopener noreferrer">
              <div className="py-3 px-12 rounded-4xl font-semibold border border-amber-400 bg-transparent text-2xl text-orange-400 hover:bg-amber-400 hover:text-black">
                <span>Resume</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        className="-mt-24"
      >
        <img
          src={profile}
          alt="profile pic"
          width={750}
          height={750}
          className=""
        />
      </motion.div>
    </section>
  );
};

export default Hero;
