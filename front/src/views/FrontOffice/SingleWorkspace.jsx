import { Fade } from "react-awesome-reveal";
import images from "../../assets/img/assets";
import Carousel from "../../components/Slider/Carousel";
import LinkButton from "../../components/Buttons/LinkButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const REVIEW_IMAGE = [
  images.workspace1,
  images.workspace2,
  images.workspace3,
  images.workspace4,
];

export default function SingleWorkspace() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Breadcrumb Area Start */}
      <Fade
        delay={1e2}
        cascade
        triggerOnce
        damping={1e-1}
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
                      Private Office
                    </h2>
                    <ul className="flex justify-center items-center text-white font-[500]">
                      <li>
                        <a href="/" className="hover:text-black">
                          Home
                        </a>
                      </li>
                      <span className="mx-2">&gt;</span>
                      <li>Private Office</li>
                    </ul>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* Workspace Area */}
      <section className="bg-white coworking-testimonials-area py-16 px-4 md:pr-11">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
            {/* <!-- Testimonial Thumbnail --> */}
            <div className="col-span-1 md:col-span-7 lg:grid-cols-7 md:mx-8">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div className="testimonial-thumbnail">
                  <Carousel autoSlide={true} autoSlideInterval={1800}>
                    {REVIEW_IMAGE.map((slide, index) => (
                      <img key={index} src={slide} alt={`Slide ${index + 1}`} />
                    ))}
                  </Carousel>
                </div>
              </Fade>
            </div>

            <div className="col-span-1 md:col-span-5 lg:grid-cols-5">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                {/* <!-- Section Heading --> */}
                <div className="section-heading w-11/12">
                  <h2 className="font-bold text-[24px] md:text-[30px] mb-3 text-[#1E3954]">
                    Private Office
                  </h2>

                  <div className="container flex items-center">
                    <div className="border-black border-2 w-1/2 text-center py-1 md:py-2">
                      <p className="text-gray-500 uppercase md:mb-1 text-sm md:text-base leading-8">
                        STARTING FROM
                      </p>
                      <p className="text-teal-500 text-[14px] md:text-base font-bold">
                        $20 / HR
                      </p>
                    </div>

                    <div className="border-black border-2 border-l-0 w-1/2 text-center py-1 md:py-2">
                      <p className="text-gray-500 uppercase md:mb-1 text-sm md:text-base leading-8">
                        ideal for
                      </p>
                      <p className="text-teal-500 text-[14px] md:text-base font-bold">
                        20+
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Workspace Content --> */}
                <div className="overflow-auto w-11/12">
                  <div className="about-content text-sm md:text-base">
                    <p className="leading-8 text-gray-500 my-4">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia dese mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste. Lorem Ipsum available.
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia dese mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste. Lorem Ipsum available.
                    </p>

                    <button
                      className="inline-block h-fit px-8 py-3 md:py-4 md:px-12 text-sm md:text-base rounded-full bg-[#030303] border-transparent hover:bg-gray-800 duration-200 text-white mt-3"
                      onClick={toggleModal}
                    >
                      Reserve Now
                    </button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Area */}
      <div
        className={`fixed inset-0 overflow-auto z-50 transition-all duration-500 ease-in-out transform 
        ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        style={{
          backgroundImage: `url(${images.cowSpaceImg2})`,
        }}
      >
        <div
          className={`w-full h-full px-4 transition-all duration-500 ease-in-out shadow-lg video-area ${
            isOpen ? "visible" : "invisible"
          }`}
        >
          {/* Membership options Area */}
          <div className="px-4 md:px-12 mb-14 md:mb-28 leading-tight bg-center">
            <div className="container mx-auto py-14 md:pb-28">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <h2 className="text-[24px] md:text-[50px] font-semibold text-center mb-10 text-white">
                  Membership options
                </h2>
              </Fade>

              <div className="memdership-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                {/* membership single item */}
                <div className="py-8 md:py-12 col-span-1 md:col-span-4 lg:grid-cols-6 px-6 md:px-8 rounded-xl transition-border duration-200 ease-in border border-[#55BBAF] md:border-0 md:hover:border hover:border-[#55BBAF]">
                  <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                    <h3 className="text-lg md:text-2xl font-semibold text-white">
                      Desk
                    </h3>
                    <div className="price flex items-center space-x-2 text-[#f6ec26] mt-4 md:mt-8 rounded-md">
                      <span className="text-lg md:text-2xl font-bold">$</span>
                      <span className="text-[30px] md:text-5xl font-semibold">
                        29
                      </span>
                      <span className="text-base md:text-lg font-semibold">
                        /mo
                      </span>
                    </div>

                    {/* benifits */}
                    <div className="mt-6 mb-10 pr-4">
                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm md:text-base text-white ml-4">
                          Mix of sitting and standing workspaces
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm md:text-base text-white ml-4">
                          24/7 Access
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm md:text-base text-white ml-4">
                          Coffee, tea, still, and sparkling water
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faXmark}
                          className="text-red-600 size-[20px]"
                        />
                        <p className="text-sm md:text-base text-white ml-4">
                          Access to {`community's`} online member network
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faXmark}
                          className="text-red-600 size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          Fast Wi-Fi and prints
                        </p>
                      </li>
                    </div>

                    {/* button */}
                    <LinkButton className="text-white">Join Now</LinkButton>
                  </Fade>
                </div>

                {/* membership single item */}
                <div className="py-8 md:py-12 col-span-1 md:col-span-4 lg:grid-cols-6 px-6 md:px-8 relative overflow-hidden transition-border duration-200 ease-in border border-[#55697C] hover:rounded-xl hover:border-[#55BBAF]">
                  <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                    <div>
                      <span className="bg-green-500 absolute w-8 h-60 -top-16 translate-x-16 right-20 -rotate-[50deg]"></span>
                      <span className="absolute uppercase top-8 right-8 rotate-[40deg] font-bold text-sm text-white">
                        Best
                      </span>
                    </div>

                    <h3 className="text-lg md:text-2xl font-semibold text-white">
                      Virtual
                    </h3>

                    <div className="price flex items-center space-x-2 text-[#f6ec26] mt-4 md:mt-8 rounded-md">
                      <span className="text-lg md:text-2xl font-bold">$</span>
                      <span className="text-[30px] md:text-5xl font-semibold">
                        60
                      </span>
                      <span className="text-base md:text-lg font-semibold">
                        /mo
                      </span>
                    </div>

                    {/* benifits */}
                    <div className="mt-6 mb-10 pr-4">
                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          Mix of sitting and standing workspaces
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          24/7 Access
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          Coffee, tea, still, and sparkling water
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          Access to {`community's`} online member network
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faXmark}
                          className="text-red-600 size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          Fast Wi-Fi and prints
                        </p>
                      </li>
                    </div>

                    {/* button */}
                    <LinkButton className="text-white">Join Now</LinkButton>
                  </Fade>
                </div>

                {/* membership single item */}
                <div className="py-8 md:py-12 col-span-1 md:col-span-4 lg:grid-cols-6 px-6 md:px-8 rounded-xl transition-border duration-200 ease-in border border-[#55BBAF] md:border-0 md:hover:border hover:border-[#55BBAF]">
                  <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                    <h3 className="text-lg md:text-2xl font-semibold text-white">
                      Office
                    </h3>
                    <div className="price flex items-center space-x-2 text-[#f6ec26] mt-4 md:mt-8 rounded-md">
                      <span className="text-lg md:text-2xl font-bold">$</span>
                      <span className="text-[30px] md:text-5xl font-semibold">
                        90
                      </span>
                      <span className="text-base md:text-lg font-semibold ">
                        /mo
                      </span>
                    </div>

                    {/* benifits */}
                    <div className="mt-6 mb-10 pr-4">
                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          Mix of sitting and standing workspaces
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          24/7 Access
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          Coffee, tea, still, and sparkling water
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          Access to {`community's`} online member network
                        </p>
                      </li>

                      <li className="py-3 flex">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#55BBAF] size-[20px]"
                        />
                        <p className="text-sm leading-7 md:text-base text-white ml-4">
                          Fast Wi-Fi and prints
                        </p>
                      </li>
                    </div>

                    {/* button */}
                    <LinkButton className="text-white">Join Now</LinkButton>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Area */}
      <section className="bg-[white] pb-14 md:pb-24 px-4 md:px-12">
        <div className="section-heading">
          <h2 className="font-bold text-[20px] md:text-[30px] mb-16 text-[#1E3954]">
            Workspace Services
          </h2>
        </div>

        <div className="flex flex-wrap">
          {/* single Service item */}
          <div className="card w-full min-[640px]:w-1/2 lg:w-1/4 p-4 py-8 text-center">
            <Fade
              delay={1e2}
              direction="top-left"
              triggerOnce
              cascade
              damping={1e-1}
            >
              <figure className="w-fit p-6 mb-4 bg-[#EEF8F7] mx-auto">
                <svg
                  className="card-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 59 59"
                >
                  <path d="M10.407 1.707A.999.999 0 1 0 8.993.293c-11.307 11.307-11.307 29.705 0 41.012a1 1 0 0 0 1.414-1.414C-.12 29.363-.12 12.234 10.407 1.707zM50.005.293a.999.999 0 1 0-1.414 1.414c5.092 5.091 7.896 11.871 7.896 19.092S53.683 34.8 48.591 39.891a.999.999 0 1 0 1.414 1.414c5.47-5.469 8.481-12.751 8.481-20.506S55.475 5.762 50.005.293z"></path>
                  <path d="M14.651 5.949a.999.999 0 1 0-1.414-1.414c-8.968 8.968-8.968 23.56 0 32.527a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414c-8.188-8.188-8.188-21.51 0-29.699zM45.763 4.535a.999.999 0 1 0-1.414 1.414c8.188 8.188 8.188 21.511 0 29.699a.999.999 0 1 0 1.414 1.414c8.968-8.967 8.968-23.559 0-32.527z"></path>
                  <path d="M18.893 8.778a.999.999 0 0 0-1.414 0c-3.206 3.206-4.972 7.475-4.972 12.021s1.766 8.814 4.972 12.021a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414c-5.849-5.849-5.849-15.364 0-21.213.39-.391.39-1.024 0-1.415zM41.521 8.778a.999.999 0 1 0-1.414 1.414c5.849 5.849 5.849 15.364 0 21.213a.999.999 0 1 0 1.414 1.414c3.206-3.206 4.972-7.475 4.972-12.021s-1.766-8.814-4.972-12.02zM29.499 14c-3.859 0-7 3.141-7 7 0 3.519 2.614 6.432 6 6.92V58a1 1 0 1 0 2 0V27.92c3.386-.488 6-3.401 6-6.92 0-3.859-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                </svg>
              </figure>

              <h3 className=" font-semibold text-[#1E3954] mb-4">
                Highspeed WiFi
              </h3>
              <p className="text-gray-500 text-base md:text-lg">
                We offer you excellent rates of return paid either monthl.
              </p>
            </Fade>
          </div>

          {/* single Service item */}
          <div className="card w-full min-[640px]:w-1/2 lg:w-1/4 p-4 py-8 text-center">
            <Fade
              delay={1e2}
              direction="top-left"
              triggerOnce
              cascade
              damping={1e-1}
            >
              <figure className="w-fit p-6 mb-4 bg-[#EEF8F7] mx-auto">
                <svg
                  className="card-icon"
                  viewBox="-47 1 511 511.999"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M396.676 46.254h-24.89l-6.915-33.527C363.348 5.352 356.777 0 349.25 0H67.863c-7.531 0-14.101 5.352-15.62 12.727l-6.919 33.527h-24.89C9.44 46.254.5 55.195.5 66.188v32.957c0 10.992 8.941 19.937 19.934 19.937h9.78l5.544 38.95a17.646 17.646 0 0 0-4.512 3.702 17.538 17.538 0 0 0-4.113 13.961l37.004 259.989c1.02 7.171 6.406 12.859 13.21 14.539l5.266 37.015C84.625 501.355 96.891 512 111.148 512h194.817c14.258 0 26.523-10.645 28.535-24.762l5.266-37.015c6.804-1.68 12.191-7.368 13.21-14.54l37.004-259.988a17.538 17.538 0 0 0-4.113-13.96 17.597 17.597 0 0 0-4.515-3.704l5.546-38.949h9.782c10.992 0 19.933-8.945 19.933-19.937V66.188c-.004-10.993-8.945-19.934-19.937-19.934zm-21.563 127.324L338.11 433.566a2.525 2.525 0 0 1-2.488 2.16h-71.848c-4.144 0-7.503 3.36-7.503 7.508s3.359 7.508 7.503 7.508h60.754l-4.894 34.383c-.965 6.762-6.84 11.863-13.672 11.863H111.148c-6.832 0-12.707-5.101-13.671-11.863l-4.891-34.383H228.84c4.148 0 7.508-3.36 7.508-7.508s-3.36-7.507-7.508-7.507H81.488a2.525 2.525 0 0 1-2.488-2.16L41.996 173.577a2.49 2.49 0 0 1 2.36-2.851c.101-.004.199-.012.304-.02h327.79c.1.008.202.016.304.02.914.046 1.5.539 1.77.847a2.49 2.49 0 0 1 .59 2.004zm-329.73-54.496H371.73l-5.21 36.613H50.594zm356.215-19.937a4.926 4.926 0 0 1-4.922 4.921H20.434a4.929 4.929 0 0 1-4.922-4.921V66.188a4.929 4.929 0 0 1 4.922-4.922h67.175a7.504 7.504 0 0 0 7.504-7.508 7.504 7.504 0 0 0-7.504-7.504H60.656l6.29-30.492a.944.944 0 0 1 .917-.75H349.25c.441 0 .828.316.918.75l6.289 30.492H122.543a7.504 7.504 0 0 0-7.508 7.504 7.505 7.505 0 0 0 7.508 7.508h274.133a4.926 4.926 0 0 1 4.922 4.922zm0 0"></path>
                  <path d="M265.023 241.422c-.05-.05-.105-.098-.16-.149-24.953-24.695-70.41-19.57-101.484 11.508-14.852 14.848-24.32 33.406-26.664 52.258-2.434 19.547 3.015 37.098 15.34 49.422 0 .004.004.004.007.008.02.02.04.039.06.054 10.398 10.364 24.495 15.844 40.374 15.844 2.934 0 5.934-.191 8.977-.566 18.851-2.344 37.41-11.817 52.261-26.664 31.153-31.157 36.235-76.77 11.325-101.68-.012-.016-.024-.023-.036-.035zm-113.41 65.469c1.934-15.551 9.883-30.996 22.38-43.496 14.972-14.973 33.718-22.864 50.48-22.864 7.703 0 14.98 1.676 21.285 5.09-12.606 7.488-32.18 22.219-38.133 44.05-5.18 18.981-33.281 40.009-48.703 49.759-6.281-8.63-8.875-19.957-7.309-32.54zm91.504 25.629c-12.5 12.5-27.945 20.445-43.496 22.378-10.984 1.368-21.016-.433-29.129-5.09 15.48-10.218 45.133-32.413 51.617-56.187 5.293-19.418 26.215-32.492 35.77-37.574 14.86 19.781 8.875 52.832-14.762 76.473zm0 0"></path>
                </svg>
              </figure>

              <h3 className=" font-semibold text-[#1E3954] mb-4">
                Organic Tea & Coffee
              </h3>
              <p className="text-gray-500 text-base md:text-lg">
                We offer you excellent rates of return paid either monthl.
              </p>
            </Fade>
          </div>

          {/* single Service item */}
          <div className="card w-full min-[640px]:w-1/2 lg:w-1/4 p-4 py-8 text-center">
            <Fade
              delay={1e2}
              direction="top-left"
              triggerOnce
              cascade
              damping={1e-1}
            >
              <figure className="w-fit p-6 mb-4 bg-[#EEF8F7] mx-auto">
                <svg
                  className="card-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 361.424 361.424"
                >
                  <path d="M277.971 172.32c-7.82 0-14.16 6.34-14.16 14.16s6.34 14.16 14.16 14.16 14.16-6.34 14.16-14.16c0-7.821-6.34-14.16-14.16-14.16zm.162 19.557c-.054.002-.108.002-.162.002v-.16a5.24 5.24 0 1 1 5.24-5.24 5.24 5.24 0 0 1-5.078 5.398zM292.131 244.32c-.109-7.742-6.417-13.961-14.16-13.96-7.82.001-14.159 6.341-14.159 14.161s6.341 14.159 14.161 14.159c7.82-.001 14.159-6.341 14.159-14.161l-.001-.199zm-13.956 5.436a5.24 5.24 0 1 1 0 0zM245.811 201.4c-7.82 0-14.16 6.34-14.16 14.16s6.34 14.16 14.16 14.16 14.16-6.34 14.16-14.16c0-7.821-6.34-14.16-14.16-14.16zm5.24 14.16a5.24 5.24 0 1 1-10.48 0 5.24 5.24 0 0 1 10.48 0zM310.131 201.4c-7.82 0-14.16 6.34-14.16 14.16s6.34 14.16 14.16 14.16 14.16-6.34 14.16-14.16c0-7.821-6.34-14.16-14.16-14.16zm5.24 14.16a5.24 5.24 0 1 1-10.48 0 5.24 5.24 0 0 1 10.48 0z"></path>
                  <path d="M361.313 211.479c-2.282-44.736-39.267-79.811-84.062-79.72h-72.52a24.32 24.32 0 0 0-19.72-21.8V65.72a4.48 4.48 0 0 0-8.92 0v44.24a24.319 24.319 0 0 0-19.36 21.8h-72.52C37.819 131.643.117 169.157 0 215.549c-.116 46.392 37.397 84.094 83.789 84.211 44.81.112 81.818-34.968 84.102-79.719h25.64c2.364 46.332 41.839 81.975 88.171 79.611s81.974-41.841 79.611-88.173zM180.731 118.44a15.4 15.4 0 0 1 15.24 13.32h-30.48a15.4 15.4 0 0 1 15.24-13.32zm96.52 172c-41.337-.044-74.836-33.543-74.88-74.88a4.48 4.48 0 0 0-4.48-4.48h-34.32a4.48 4.48 0 0 0-4.48 4.48c0 41.355-33.525 74.88-74.88 74.88s-74.88-33.525-74.88-74.88 33.525-74.88 74.88-74.88h193.04c41.355 0 74.88 33.525 74.88 74.88s-33.525 74.88-74.88 74.88z"></path>
                  <path d="M112.451 201.4h-12v-12c0-7.82-6.34-14.16-14.16-14.16s-14.16 6.34-14.16 14.16v12h-12c-7.82 0-14.16 6.34-14.16 14.16s6.34 14.16 14.16 14.16h12v12c0 7.82 6.34 14.16 14.16 14.16s14.16-6.34 14.16-14.16v-12h12c7.82 0 14.16-6.34 14.16-14.16 0-7.821-6.34-14.16-14.16-14.16zm.2 19.44l-.2-.04h-16.48a4.44 4.44 0 0 0-4.48 4.4v16.56a5.24 5.24 0 1 1-10.48 0v-16.48a4.44 4.44 0 0 0-4.28-4.48h-16.64a5.24 5.24 0 1 1 0-10.48h16.64a4.44 4.44 0 0 0 4.48-4.4V189.4a5.24 5.24 0 0 1 10.48 0v16.48a4.44 4.44 0 0 0 4.4 4.48h16.56a5.24 5.24 0 1 1 0 10.48z"></path>
                </svg>
              </figure>

              <h3 className=" font-semibold text-[#1E3954] mb-4">
                Relax, entertainment room
              </h3>
              <p className="text-gray-500 text-base md:text-lg">
                We offer you excellent rates of return paid either monthl.
              </p>
            </Fade>
          </div>

          {/* single Service item */}
          <div className="card w-full min-[640px]:w-1/2 lg:w-1/4 p-4 py-8 text-center">
            <Fade
              delay={1e2}
              direction="top-left"
              triggerOnce
              cascade
              damping={1e-1}
            >
              <figure className="w-fit p-6 mb-4 bg-[#EEF8F7] mx-auto">
                <svg
                  className="card-icon"
                  height="512pt"
                  viewBox="-17 0 512 512.009"
                >
                  <path d="M443.73 512.008H170.664c-18.828 0-34.137-15.309-34.137-34.133V256.008c0-18.824 15.309-34.133 34.137-34.133H443.73c18.825 0 34.133 15.309 34.133 34.133v221.867c0 18.824-15.316 34.133-34.133 34.133zM170.664 238.94c-9.414 0-17.066 7.657-17.066 17.067v221.867c0 9.414 7.652 17.066 17.066 17.066H443.73c9.41 0 17.067-7.652 17.067-17.066V256.008c0-9.41-7.656-17.067-17.067-17.067zm0 0"></path>
                  <path d="M230.395 238.941h-34.133c-4.711 0-8.532-3.824-8.532-8.53V122.503c0-32.152-20.55-60.426-49.972-68.734-20.328-5.754-41.797-1.633-58.887 11.289-17.324 13.105-27.668 33.449-27.668 54.406v42.668c0 14.113-11.484 25.601-25.598 25.601-14.117 0-25.601-11.488-25.601-25.601v-42.668C.004 53.59 53.594 0 119.473 0c65.875 0 119.465 53.59 119.465 119.465v110.933c-.008 4.72-3.833 8.543-8.543 8.543zm-25.598-17.066h17.066V119.477c0-56.465-45.937-102.403-102.402-102.403S17.063 63.012 17.063 119.477v42.664c0 4.703 3.832 8.535 8.535 8.535 4.699 0 8.53-3.832 8.53-8.535v-42.664c0-26.278 12.88-51.704 34.442-68.02 21.383-16.18 48.297-21.336 73.828-14.105 36.747 10.382 62.399 45.394 62.399 85.152zm0 0M332.797 443.742h-51.2a8.538 8.538 0 0 1-6.374-2.86 8.527 8.527 0 0 1-2.102-6.663l7.938-67.867c-10.309-8.028-16.532-20.426-16.532-33.543 0-23.528 19.141-42.668 42.668-42.668 23.528 0 42.668 19.14 42.668 42.668 0 13.117-6.215 25.515-16.531 33.543l7.938 67.867a8.524 8.524 0 0 1-2.098 6.664 8.563 8.563 0 0 1-6.375 2.86zm-41.617-17.066h32.023l-7.422-63.473a8.522 8.522 0 0 1 4.18-8.363c8.031-4.664 12.828-12.903 12.828-22.024 0-14.113-11.488-25.597-25.601-25.597s-25.602 11.484-25.602 25.597c0 9.114 4.797 17.348 12.828 22.024a8.515 8.515 0 0 1 4.18 8.363zm0 0"></path>
                </svg>
              </figure>

              <h3 className=" font-semibold text-[#1E3954] mb-4">
                Meeting Room
              </h3>
              <p className="text-gray-500 text-base md:text-lg">
                We offer you excellent rates of return paid either monthl.
              </p>
            </Fade>
          </div>

          {/* single Service item */}
          <div className="card w-full min-[640px]:w-1/2 lg:w-1/4 p-4 py-8 text-center">
            <Fade
              delay={1e2}
              direction="bottom-right"
              cascade
              triggerOnce
              damping={1e-1}
            >
              <figure className="w-fit p-6 mb-4 bg-[#EEF8F7] mx-auto">
                <svg
                  className="card-icon"
                  height="640"
                  viewBox="0 0 480 480"
                  width="640"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M240 0H136a8 8 0 0 0-8 8v56H8a8 8 0 0 0-8 8v400a8 8 0 0 0 8 8h232a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8zm-8 416h-88v-16h88zM16 120h112v240H16zm216-32h-88V64h88zM16 376h112v24H16zm128 8V104h88v280zm88-368v32h-88V16zM128 80v24H16V80zM16 416h112v48H16zm128 48v-32h88v32zm0 0"></path>
                  <path d="M479.742 437.984l-96-368a7.99 7.99 0 0 0-9.805-5.71l-120 32a7.996 7.996 0 0 0-5.68 9.742l96 368a7.978 7.978 0 0 0 9.805 5.695l120-32a7.999 7.999 0 0 0 5.68-9.727zM278.496 158.543l104.543-27.871 3.762 14.398-104.535 27.914zm112.344 2.05l46.398 177.981-104.504 27.883-46.398-177.992zm50.472 193.47l8.192 31.394-104.543 27.871-8.16-31.383zM370.29 81.8L379 115.199l-104.543 27.863-8.703-33.382zm-12.578 380.398L349 428.801l104.543-27.88 8.703 33.384zm0 0M104 144H40a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8zm-8 64H48v-48h48zm0 0"></path>
                </svg>
              </figure>

              <h3 className=" font-semibold text-[#1E3954] mb-4">
                Gallery of books, comics
              </h3>
              <p className="text-gray-500 text-base md:text-lg">
                We offer you excellent rates of return paid either monthl.
              </p>
            </Fade>
          </div>

          {/* single Service item */}
          <div className="card w-full min-[640px]:w-1/2 lg:w-1/4 p-4 py-8 text-center">
            <Fade
              delay={1e2}
              direction="bottom-right"
              cascade
              triggerOnce
              damping={1e-1}
            >
              <figure className="w-fit p-6 mb-4 bg-[#EEF8F7] mx-auto">
                <svg
                  className="card-icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 470 470"
                >
                  <g>
                    <path d="m429.591,418.378l-62.223-150.218c-1.585-3.826-5.972-5.645-9.799-4.059s-5.645,5.973-4.059,9.799l56.251,135.801-51.309-14.867c-3.368-0.977-6.965,0.513-8.656,3.586l-25.769,46.793-60.357-145.716c69.663-13.434 122.447-74.853 122.447-148.378 0.001-83.327-67.79-151.119-151.117-151.119s-151.119,67.792-151.119,151.119c0,33.751 11.124,64.951 29.896,90.133l-73.368,177.126c-1.103,2.664-0.582,5.724 1.341,7.872 1.922,2.148 4.907,3.004 7.676,2.202l60.533-17.541 30.4,55.207c1.324,2.403 3.847,3.882 6.568,3.882 0.138,0 0.277-0.004 0.416-0.011 2.879-0.16 5.411-1.955 6.515-4.619l58.136-140.353c1.585-3.827-0.232-8.214-4.059-9.799-3.827-1.585-8.214,0.232-9.799,4.059l-52.165,125.936-25.767-46.793c-1.692-3.073-5.291-4.563-8.657-3.586l-51.308,14.867 64.397-155.469c27.598,29.52 66.86,48.005 110.364,48.005 4.491,0 8.933-0.209 13.325-0.594l67.818,163.727c1.103,2.664 3.636,4.459 6.514,4.618 0.14,0.008 0.278,0.012 0.417,0.012 2.721,0 5.244-1.479 6.567-3.882l30.401-55.207 60.533,17.541c2.771,0.803 5.753-0.054 7.676-2.202 1.923-2.148 2.443-5.208 1.34-7.872zm-330.71-267.259c2.84217e-14-75.056 61.063-136.119 136.119-136.119 75.056,0 136.118,61.063 136.118,136.119s-61.062,136.118-136.118,136.118c-75.056,0-136.119-61.062-136.119-136.118z"></path>
                    <path d="m321.659,122.961c-0.863-2.658-3.135-4.616-5.892-5.079l-50.467-8.469-23.649-45.379c-1.292-2.479-3.855-4.034-6.651-4.034-2.795,0-5.359,1.555-6.651,4.034l-23.65,45.379-50.466,8.469c-2.757,0.462-5.028,2.42-5.892,5.079-0.864,2.659-0.178,5.577 1.781,7.572l35.85,36.515-7.54,50.614c-0.412,2.765 0.748,5.529 3.01,7.173 2.26,1.642 5.249,1.891 7.751,0.646l45.807-22.812 45.806,22.812c1.059,0.527 2.203,0.787 3.343,0.787 1.557,0 3.104-0.484 4.409-1.432 2.262-1.644 3.422-4.408 3.01-7.173l-7.539-50.614 35.85-36.516c1.958-1.995 2.644-4.913 1.78-7.572zm-50.951,36.244c-1.648,1.679-2.413,4.033-2.066,6.359l5.97,40.074-36.268-18.061c-1.054-0.524-2.198-0.787-3.344-0.787-1.145,0-2.291,0.262-3.343,0.787l-36.268,18.061 5.97-40.074c0.347-2.326-0.418-4.681-2.066-6.359l-28.385-28.912 39.957-6.706c2.32-0.389 4.323-1.844 5.41-3.93l18.725-35.929 18.725,35.93c1.088,2.086 3.09,3.541 5.41,3.93l39.958,6.706-28.385,28.911z"></path>
                    <path d="m348.612,158.684c-4.107-0.549-7.877,2.343-8.42,6.45-6.957,52.507-52.18,92.104-105.192,92.104-58.514,0-106.119-47.604-106.119-106.119s47.605-106.119 106.119-106.119c53.013,0 98.235,39.596 105.192,92.104 0.543,4.107 4.32,7.001 8.42,6.45 4.105-0.544 6.994-4.314 6.449-8.42-7.94-59.936-59.555-105.134-120.061-105.134-66.785,0-121.119,54.333-121.119,121.119s54.334,121.118 121.119,121.118c60.506,0 112.121-45.198 120.062-105.134 0.544-4.105-2.344-7.875-6.45-8.419z"></path>
                  </g>
                </svg>
              </figure>

              <h3 className=" font-semibold text-[#1E3954] mb-4">
                Award winning design
              </h3>
              <p className="text-gray-500 text-base md:text-lg">
                We offer you excellent rates of return paid either monthl.
              </p>
            </Fade>
          </div>

          {/* single Service item */}
          <div className="card w-full min-[640px]:w-1/2 lg:w-1/4 p-4 py-8 text-center">
            <Fade
              delay={1e2}
              direction="bottom-right"
              cascade
              triggerOnce
              damping={1e-1}
            >
              <figure className="w-fit p-6 mb-4 bg-[#EEF8F7] mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="card-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M511.976 416.063c-.005-.075-.004-.149-.011-.224a7.343 7.343 0 0 0-.131-.873c-.006-.028-.015-.056-.022-.084a7.268 7.268 0 0 0-.218-.768c-.023-.067-.048-.132-.073-.198a7.221 7.221 0 0 0-.284-.663c-.018-.038-.03-.077-.049-.115l-40.112-79.118V73.72c0-8.006-6.513-14.519-14.519-14.519H55.441c-8.006 0-14.519 6.513-14.519 14.519v260.298L.811 413.137c-.019.038-.031.077-.049.115a7.618 7.618 0 0 0-.284.662c-.025.066-.05.132-.073.199a7.626 7.626 0 0 0-.218.77l-.021.081a7.391 7.391 0 0 0-.131.874c-.007.074-.007.149-.011.223-.01.156-.024.31-.024.468v19.026c0 9.509 7.735 17.244 17.244 17.244h477.512c9.509 0 17.244-7.735 17.244-17.244v-19.026c0-.158-.014-.312-.024-.466zM55.923 74.203h400.154v254.109H55.923V74.203zm-2.894 269.108H458.97l33.318 65.717h-164.78l-8.271-29.989c-1.684-6.105-7.282-10.369-13.615-10.369h-99.246c-6.333 0-11.932 4.264-13.615 10.368l-8.271 29.99H19.711l33.318-65.717zm258.919 65.718H200.052l6.993-25.358h97.91l6.993 25.358zM497 435.554a2.247 2.247 0 0 1-2.244 2.244H17.244A2.247 2.247 0 0 1 15 435.554v-11.526h482v11.526z"></path>
                  <path d="M432.577 213.756a7.499 7.499 0 0 0-7.5 7.5v76.055H86.923v-76.055c0-4.143-3.357-7.5-7.5-7.5a7.499 7.499 0 0 0-7.5 7.5v79.294c0 6.485 5.275 11.761 11.761 11.761h344.633c6.485 0 11.761-5.275 11.761-11.761v-79.294a7.502 7.502 0 0 0-7.501-7.5zM428.316 90.203H83.684c-6.485 0-11.761 5.275-11.761 11.761v79.294c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-76.055h338.154v76.055c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-79.294c0-6.487-5.275-11.761-11.761-11.761z"></path>
                </svg>
              </figure>

              <h3 className=" font-semibold text-[#1E3954] mb-4">
                Free public computer
              </h3>
              <p className="text-gray-500 text-base md:text-lg">
                We offer you excellent rates of return paid either monthl.
              </p>
            </Fade>
          </div>

          {/* single Service item */}
          <div className="card w-full min-[640px]:w-1/2 lg:w-1/4 p-4 py-8 text-center">
            <Fade
              delay={1e2}
              direction="bottom-right"
              cascade
              triggerOnce
              damping={1e-1}
            >
              <figure className="w-fit p-6 mb-4 bg-[#EEF8F7] mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="card-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M456.354 334.396a28.223 28.223 0 0 0-1.536-2.321c-5.171-7.228-12.86-12.006-21.632-13.449a33.072 33.072 0 0 0-24.781 5.786l-95.403 68.122h-99.669c-4.702 0-8.533-3.823-8.533-8.533s3.831-8.533 8.533-8.533H268.8c16.469 0 29.867-13.397 29.867-29.867 0-.094-.009-.879-.017-.964-.529-16.461-14.413-29.295-30.532-28.902h-111.01a42.822 42.822 0 0 0-26.974 9.907l-41.728 34.731a8.558 8.558 0 0 0-3.072 6.562v102.4a8.53 8.53 0 0 0 8.533 8.533h211.721a59.872 59.872 0 0 0 38.025-13.73l103.45-85.478c14.053-10.012 18.132-29.45 9.291-44.264zm-19.669 30.737L332.74 450.987a42.82 42.82 0 0 1-27.162 9.813H102.4v-89.865l38.664-32.188c4.54-3.78 10.283-5.897 16.12-5.948l111.206-.008c7.074-.009 12.979 5.342 13.21 12.809 0 7.057-5.743 12.8-12.8 12.8h-55.467c-14.114 0-25.6 11.486-25.6 25.6s11.486 25.6 25.6 25.6h102.4a8.646 8.646 0 0 0 4.975-1.587l97.638-69.726c3.516-2.526 7.791-3.507 12.075-2.825 4.275.708 8.013 3.029 10.581 6.613.256.35.486.708.708 1.075 4.319 7.229 2.313 16.726-5.025 21.983z"></path>
                  <path d="M93.611 349.867H0v17.067h85.077v128H0V512h93.611a8.53 8.53 0 0 0 8.533-8.533V358.4a8.53 8.53 0 0 0-8.533-8.533z"></path>
                  <path d="M42.667 426.667c-14.114 0-25.6 11.486-25.6 25.6s11.486 25.6 25.6 25.6 25.6-11.486 25.6-25.6-11.486-25.6-25.6-25.6zm0 34.133c-4.702 0-8.533-3.823-8.533-8.533 0-4.71 3.831-8.533 8.533-8.533s8.533 3.823 8.533 8.533c0 4.71-3.831 8.533-8.533 8.533zM503.467 264.533H8.533A8.53 8.53 0 0 0 0 273.066c0 32.93 26.795 59.733 59.733 59.733h392.533c32.93 0 59.733-26.803 59.733-59.733a8.524 8.524 0 0 0-8.532-8.533zm-51.2 51.2H59.733c-20.608 0-37.845-14.686-41.805-34.133h476.143c-3.959 19.447-21.196 34.133-41.804 34.133z"></path>
                  <path d="M256 42.667c-122.334 0-221.867 99.533-221.867 221.867v8.533a8.53 8.53 0 0 0 8.533 8.533h426.667a8.525 8.525 0 0 0 8.533-8.533v-8.533C477.867 142.199 378.342 42.667 256 42.667zM51.2 264.533c0-112.922 91.878-204.8 204.8-204.8s204.8 91.878 204.8 204.8H51.2z"></path>
                  <path d="M115.644 140.006a190.753 190.753 0 0 0-16.435 21.342l14.225 9.429a174.385 174.385 0 0 1 14.967-19.439l-12.757-11.332zM256 76.8c-47.923.026-93.551 18.133-128.469 50.961l11.691 12.433c31.744-29.85 73.224-46.302 116.787-46.327L256 76.8zM230.4 0h51.2v17.067h-51.2z"></path>
                  <path d="M247.467 8.533h17.067V51.2h-17.067z"></path>
                </svg>
              </figure>

              <h3 className=" font-semibold text-[#1E3954] mb-4">
                Equipped Kitchen
              </h3>
              <p className="text-gray-500 text-base md:text-lg">
                We offer you excellent rates of return paid either monthl.
              </p>
            </Fade>
          </div>
        </div>
      </section>

      {/* Cta Area */}
      <div className="relative">
        <div className="py-16 md:py-24 container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <Fade
              delay={1e2}
              className="w-full"
              cascade
              triggerOnce
              damping={1e-1}
            >
              <h2 className="text-[24px] text-white md:text-4xl font-bold text-center">
                Connect with us
              </h2>

              <p className="text-center text-sm text-white md:text-lg my-3 md:my-5">
                Subscribe to our e-mail list and stay up-to-date with all our
                news.
              </p>

              <div className="w-full md:w-7/12 mx-auto bg-white rounded-full mt-6 p-2 flex items-center justify-between">
                <input
                  type="email"
                  placeholder="Sign up to your newsletter"
                  className="w-8/12 text-[13px] md:text-base md:w-9/12 border-none outline-none pl-2 md:pl-8 rounded-l-full"
                />

                <button className="md:w-auto bg-teal-500 px-4 md:px-6 py-2 md:py-3 text-white text-[13px] md:text-base rounded-full">
                  Sign Up
                </button>
              </div>
            </Fade>
          </div>

          <Fade
            delay={1e2}
            cascade
            triggerOnce
            damping={1e-1}
            className="absolute top-0 left-0 -z-50 w-full h-full overflow-hidden pointer-events-none"
          >
            <div
              className="w-full h-full fixed bottom-0 left-0 bg-cover bg-no-repeat overflow-hidden pointer-events-none"
              style={{
                backgroundPosition: "center",
                backgroundImage: `url(${images.banner3})`,
              }}
            ></div>
          </Fade>
        </div>
      </div>
    </>
  );
}
