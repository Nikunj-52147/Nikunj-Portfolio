
const Heading = ({ number, title }) => {
  return (
    <div className="flex justify-between">
      <div >
        <div className="text-6xl font-semibold text-[#0d0f14]">{number}</div>
        <div className="text-orange-400 text-6xl font-semibold">{title}</div>
      </div>
      <div className="text-[12rem] font-extrabold text-[#0d0f14] -mt-16 ">
        {title.toUpperCase()}
      </div>
    </div>
  )
}

export default Heading
