import { useBreakpoint } from "../hooks/useBreakpoint";

const Footer = () => {

  const isLaptop = useBreakpoint();
  return isLaptop ? <Laptop /> : <Mobile />
}

const Laptop = () => {
  return (
    <div className="mt-20 ml-35 text-xl mb-7 flex justify-center text-[#78797d]">
      Built by Nikunj Sheer — {new Date().getFullYear()}
    </div>
  )
}

const Mobile = () => {
  return (
    <div className="mt-20 ml-5 text-xl mb-7 flex justify-center text-[#78797d]">
      Built by Nikunj Sheer — {new Date().getFullYear()}
    </div>
  )
}

export default Footer
