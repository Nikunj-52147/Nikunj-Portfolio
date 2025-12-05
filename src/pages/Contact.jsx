import { useRef, useState } from "react";
import Heading from "../components/Heading";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useBreakpoint } from "../hooks/useBreakpoint";

const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

const parentVariants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const Contact = () => {
    

  const isLaptop = useBreakpoint();
  return isLaptop ? <Laptop /> : <Mobile />
  
};

const Laptop = () => {
  const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

  const isInView = useInView(ref, {margin: "-100px"});
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xdge5e3', 'template_lk9c8pm', formRef.current, {
        publicKey: '8xGj0i6pIw4bJrWEN',
      })
      .then(
        () => {
          setSuccess(true)
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true)
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
      <section id="contact" className="pl-35 pt-35 min-h-screen bg-linear-[325deg,#090b0f_70%,#06090d_70%] bg-fixed">
      <Heading number="03" title="Connect" />
      <motion.div
        className="contact flex gap-12"
        variants={variants}
         viewport={{ once: true, amount: 0.3 }}
        initial="initial"
        whileInView="animate"
        ref={ref}
      >
        <motion.div
          className="textContainer flex-1 flex flex-col gap-10"
          variants={variants}
        >
          <motion.h1 className="text-5xl font-bold" variants={variants}>
            Get in touch
          </motion.h1>
          <motion.p className="text-xl text-[#78797d]">
            Whether you have an exciting project in mind, an amazing job opportunity, or just want to say hello, I'd be thrilled to hear from you!
          </motion.p>
          <motion.div className="item text-xl" variants={variants}>
            <h2>Mail</h2>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nikunj51260@gmail.com&su=Hello&body=Hi" target="_blank" className=" text-[#78797d]">nikunj51260@gamil.com</a>
          </motion.div>
          <motion.div className="item text-xl" variants={variants}>
            <h2>Phone</h2>
            <span className=" text-[#78797d]">+91 7359955272</span>
          </motion.div>
          <motion.div className="item text-xl" variants={variants}>
            <h2>Github Profile</h2>
            <a href="https://github.com/Nikunj-52147" target="_blank" className=" text-[#78797d]">https://github.com/Nikunj-52147</a>
          </motion.div>
        </motion.div>
        <div className="formContainer flex-1 relative">
          <motion.div
            className="phone-svg absolute m-auto z-10 pointer-events-none"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <svg
              width="450px"
              height="450px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true, amount: 0.3 }}
                d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
                stroke="oklch(76.9% 0.188 70.08)"
                stroke-width="0.5"
                stroke-linecap="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true, amount: 0.3 }}
                d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                stroke="oklch(76.9% 0.188 70.08)"
                stroke-width="0.5"
                stroke-linecap="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true, amount: 0.3 }}
                d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                stroke="oklch(76.9% 0.188 70.08)"
                stroke-width="0.5"
                stroke-linecap="round"
              />
            </svg>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="p-5 bg-transparent border text-xl! placeholder:text-xl border-white text-white rounded-2xl"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              className="p-5 text-xl! placeholder:text-xl bg-transparent border border-white text-white rounded-2xl"
            />
            <textarea
              rows={5}
              required
              placeholder="Message"
              name="message"
              className="p-5 text-xl! placeholder:text-xl bg-transparent border border-white text-white rounded-2xl"
            ></textarea>
            <button className="p-5 cursor-pointer rounded-2xl font-bold border-2 border-amber-400 bg-transparent text-2xl! text-orange-400">
              Submit
            </button>
           
            {error && <p className="text-2xl font-semibold text-red-500">
                        Something went wrong. Please try again.
                    </p>
            }
            {success && <p className="text-2xl font-semibold text-green-500">
                        Thanks for reaching out!
                    </p>}
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

const Mobile = () => {
  const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

  const isInView = useInView(ref, {margin: "-100px"});
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xdge5e3', 'template_lk9c8pm', formRef.current, {
        publicKey: '8xGj0i6pIw4bJrWEN',
      })
      .then(
        () => {
          setSuccess(true)
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true)
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
      <section id="contact" className="pl-5 pt-15 min-h-screen bg-linear-[325deg,#090b0f_70%,#06090d_70%] bg-fixed">
      <Heading number="03" title="Connect" />
      
      <div
        className="contact flex items-center justify-center gap-12 flex-wrap w-full"
        variants={variants}
         viewport={{ once: true, amount: 0.3 }}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        ref={ref}
      >
        <motion.div
          className="textContainer flex-1 flex flex-col gap-5 w-full mt-10"
          variants={variants} initial="initial"
        animate={isInView ? "animate" : "initial"}
        ref={ref}
        >
          <motion.h1 className="text-5xl font-bold" variants={variants}>
            Get in touch
          </motion.h1>
          <motion.p className="text-xl text-[#78797d]" variants={variants}>
            Whether you have an exciting project in mind, an amazing job opportunity, or just want to say hello, I'd be thrilled to hear from you!
          </motion.p>
          <motion.div className="item text-xl" variants={variants}>
            <h2>Mail</h2>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nikunj51260@gmail.com&su=Hello&body=Hi" target="_blank" className=" text-[#78797d]">xyz@gamil.com</a>
          </motion.div>
          <motion.div className="item text-xl" variants={variants}>
            <h2>Phone</h2>
            <span className=" text-[#78797d]">+91 1234567890</span>
          </motion.div>
          <motion.div className="item text-xl" variants={variants}>
            <h2>Github Profile</h2>
            <a href="https://github.com/Nikunj-52147" target="_blank" className=" text-[#78797d]">https://github.com/Nikunj-52147</a>
          </motion.div>
        </motion.div>
        <div className="formContainer flex-1 relative">
          <motion.div
            className="phone-svg absolute -left-16 z-10 pointer-events-none"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <svg
              width="400px"
              height="400px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true, amount: 0.3 }}
                d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
                stroke="oklch(76.9% 0.188 70.08)"
                stroke-width="0.5"
                stroke-linecap="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true, amount: 0.3 }}
                d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                stroke="oklch(76.9% 0.188 70.08)"
                stroke-width="0.5"
                stroke-linecap="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true, amount: 0.3 }}
                d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                stroke="oklch(76.9% 0.188 70.08)"
                stroke-width="0.5"
                stroke-linecap="round"
              />
            </svg>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="p-4 bg-transparent border text-xl! placeholder:text-xl border-white text-white rounded-2xl"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              className="p-4 text-xl! placeholder:text-xl bg-transparent border border-white text-white rounded-2xl"
            />
            <textarea
              rows={5}
              required
              placeholder="Message"
              name="message"
              className="p-4 text-xl! placeholder:text-xl bg-transparent border border-white text-white rounded-2xl"
            ></textarea>
            <button className="p-4 cursor-pointer rounded-2xl font-bold border-2 border-amber-400 bg-transparent text-2xl! text-orange-400">
              Submit
            </button>
           
            {error && <p className="text-2xl font-semibold text-red-500">
                        Something went wrong. Please try again.
                    </p>
            }
            {success && <p className="text-2xl font-semibold text-green-500">
                        Thanks for reaching out!
                    </p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
