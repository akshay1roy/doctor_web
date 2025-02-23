import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 text-gray-500 ">
        <p>
          ABOUT <span>US</span>{" "}
        </p>
      </div>

      <div className="flex my-10 flex-col md:flex-row gap-12 items-center ">
        <img
          className="w-[90%] md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 px-2 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            possimus quia fugiat suscipit, doloremque consectetur, nihil unde
            incidunt corporis maiores nulla quaerat commodi odio molestias
            officiis! Quisquam aliquid nobis debitis blanditiis amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            quisquam quasi quaerat ex assumenda, facere eveniet beatae debitis
            harum maiores iure!
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo dicta
            excepturi reprehenderit blanditiis recusandae ullam cumque.
          </p>
        </div>
      </div>

      {/* why choose us */}

      <div className="text-xl my-4 ">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-2 mb-20">
        <div className="border px-8 md:px-12 sm:py-12 py-8 flex-col gap-5 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            laudantium odit obcaecati hic ad nihil quibusdam.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-16 flex-col gap-5 hover:bg-primary hover:text-white">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            provident ad natus!
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-16 flex-col gap-5 hover:bg-primary hover:text-white">
          <b>Personalization:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
