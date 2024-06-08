import { Fade } from "react-awesome-reveal";
import Vedio from "../../components/Shared/Vedio";
import Benifits from "../../components/Shared/Benifits";
import images from "../../assets/img/assets";

export default function About() {
  return (
    <div>
      {/* Breadcrumb Area Start */}
      <Fade>
        <section
          className="px-4 md:px-12 leading-tight bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.banner1})` }}
        >
          <div className="container h-[250px] md:h-[400px] flex justify-center items-center pt-20 md:pt-36">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb-content text-center">
                    <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                      <h2 className="text-white uppercase font-semibold mb-1 md:mb-3 text-[24px] md:text-4xl">
                        About Us
                      </h2>
                      <ul className="flex justify-center items-center text-white font-[500]">
                        <li>
                          <a href="/" className="hover:text-black">
                            Home
                          </a>
                        </li>
                        <span className="mx-2">&gt;</span>
                        <li>About Us</li>
                      </ul>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* About Area */}
      <section className="coworking-testimonials-area md:pt-28 mx-4 md:mr-11">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-12">
            {/* <!-- Testimonial Thumbnail --> */}
            <div className="col-span-1 md:col-span-6 lg:grid-cols-6 md:mx-8">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div className="testimonial-thumbnail py-14 md:py-0">
                  <img src={images.workspace1} alt="image" />
                </div>
              </Fade>
            </div>

            <div className="col-span-1 md:col-span-6 lg:grid-cols-6 ">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                {/* <!-- Section Heading --> */}
                <div className="section-heading">
                  <h6 className="mb-2 md:mb-4 text-[18px] uppercase">
                    Testimonials
                  </h6>
                  <h2 className="font-bold text-[24px] md:text-[36px] text-[#1E3954]">
                    20 Years Of Experience
                  </h2>
                </div>

                {/* <!-- Testimonial Slide --> */}
                <div className="overflow-auto pb-14 w-11/12">
                  <div className="about-content text-sm md:text-base">
                    <p className="leading-8 text-gray-500 my-4">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia dese mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste.
                    </p>
                    <p className="leading-8 text-gray-500">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia dese mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste. Lorem Ipsum available.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* vedio presetenation Area */}
      <section className="md:pt-24">
        <Vedio />
      </section>

      {/* Benifits Area */}
      <section className="md:pt-6">
        <Benifits />
      </section>
    </div>
  );
}
