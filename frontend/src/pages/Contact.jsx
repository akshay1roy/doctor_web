import { assets } from "../assets/assets"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>Contact <span>US</span></p>
      </div>
      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-20 ">
        <img className="w-[90%] md:w-[360px]" src={assets.contact_image} alt="" />
        <div className="flex flex-col gap-4 justify-center items-start ">
          <p className="font-semibold text-lg text-gray-600 ">OUR OFFICE</p>

          <p className="text-gray-500">Prestio Hospital </p> <br /> near laal mandir , Jehanabad , Bihar , India 
          <p className="text-gray-500">Tel : 9847038294 <br />Email : akshaydev@gmail.com</p>
          <p className="font-semibold text-lg text-gray-500">Careers at our hospital </p>
          <p className="text-gray-500">Learn more about our team and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:text-white hover:bg-primary transition-all duration-300">Explore job</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
