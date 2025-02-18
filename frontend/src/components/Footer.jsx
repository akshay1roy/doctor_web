import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        {/* left  */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quidem
            nobis dolorum dolore autem rerum reiciendis perspiciatis doloremque
            fugiat accusantium ad.
          </p>
        </div>
        {/* center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>privacy policy</li>
          </ul>
        </div>
        {/* right */}
        <div>
          <p className="text-xl font-medium  mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 123 456 7890</li>
            <li>xyz@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* comment */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ Prescipto - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
