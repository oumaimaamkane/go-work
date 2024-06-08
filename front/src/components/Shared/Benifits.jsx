import { Fade } from "react-awesome-reveal";
import LinkButton from "../Buttons/LinkButton";
import images from "../../assets/img/assets";


export default function Benifits() {
  return (
    <section className="coworking-testimonials-area mb-14 md:mb-20 mx-4 md:mx-12">
      <div className="container">
        <div className="flex gap-12 justify-between">
          <div className="md:w-6/12">
            {/* <!-- Section Heading --> */}
            <div className="section-heading">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <h6 className="mb-3 md:mb-6 text-[18px] uppercase">
                  OUR BENEFITS
                </h6>
                <h2 className="font-bold mb-4 md:text-[46px] text-[#1E3954]">
                  Benefits to Setting Up Your Startup in Our Coworking Space
                </h2>

                <p className="text-sm md:text-lg leading-8 text-gray-500 my-8 md:leading-[35px]">
                  We are proud of what we have come up to at our center! Only
                  here you get to enjoy with talented people who work in
                  different areas, designers, photographers, engineers etc.
                </p>

                <div className="mb-8 md:mb-12">
                  <li className="flex  text-sm md:text-lg leading-6 md:leading-[35px] text-gray-500  border-t border-[#EBEBEB] py-3">
                    <span className="text-teal-500 mr-2 font-bold">1.</span>
                    <p>Actual office space that promoting productivity</p>
                  </li>

                  <li className="flex text-sm md:text-lg leading-6 md:leading-[35px]  text-gray-500 border-t border-[#EBEBEB] py-3">
                    <span className="text-teal-500 mr-2 font-bold">2.</span>
                    <p>Meaningful connections with your team</p>
                  </li>

                  <li className="flex text-sm md:text-lg leading-6 md:leading-[35px]  text-gray-500 border-y border-[#EBEBEB] py-3">
                    <span className="text-teal-500 mr-2 font-bold">3.</span>
                    <p>Increased productivity to get some work done</p>
                  </li>
                </div>

                {/* button */}
                <LinkButton
                  className="h-fit text-white md:py-5 md:px-12 rounded-full
                    duration-500"
                >
                  Schudle My Tour
                </LinkButton>
              </Fade>
            </div>
          </div>

          <div className="hidden md:block col-span-1 md:col-span-5 lg:grid-cols-4">
            <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
              <div className="pl-10 pb-20">
                <img
                  src={images.banner}
                  className="h-full w-full"
                  alt={`Image`}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
