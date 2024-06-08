import { useState } from "react";
import images from "../../assets/img/assets";
import Pagination from "../../components/Pagination";
import LinkButton from "../../components/Buttons/LinkButton";
import Services from "../../components/Services/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faImage, faUsers, faXmark, faClone,} from "@fortawesome/free-solid-svg-icons";
import Vedio from "../../components/Shared/Vedio";
import HomeSlides from "../../components/Slider/HomeSlides";
import { Fade, Slide } from "react-awesome-reveal";
import Testimonials from "../../components/Shared/Testimonials";
import Benifits from "../../components/Shared/Benifits";
import Contact from "../../components/Shared/Contact";

const workspaces = [
  {
    id: 1,
    name: "Workspace One",
    description: "Description one",
    image: "path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Workspace Two",
    description: "Description two",
    image: "path/to/image2.jpg",
  },
];

const ITEMS_PER_PAGE = 2;

const HOME_SLIDES = [
  {
    title: "PROBABLY THE BEST CREATIVE SPACE IN THE CITY",
    description: "Coworking Space",
    image:
      "https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/leyer1.jpg",
  },
  {
    title: "PROBABLY THE BEST CREATIVE SPACE IN THE CITY",
    description: "Creative Space",
    image:
      "https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/leyer2.jpg",
  },
  {
    title: "PROBABLY THE BEST CREATIVE SPACE IN THE CITY",
    description: "Creative coworking Starups take off here",
    image:
      "https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/leyer3.jpg",
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(workspaces.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const currentWorkspaces = workspaces.slice(
  //   (currentPage - 1) * ITEMS_PER_PAGE,
  //   currentPage * ITEMS_PER_PAGE
  // );

  return (
    <div>
      {/* hero Area */}
      <section>
        <div className="welcome-sildes">
          {/* Single Slide */}
          <Fade>
            <HomeSlides autoSlide={true} autoSlideInterval={4000}>
              {HOME_SLIDES.map((slide, index) => (
                <div
                  className="min-w-full flex-shrink-0 md:pt-24 flex items-center justify-center single-welcome-slide h-[120vh] md:h-[135vh] bg-cover bg-top text-center"
                  key={index}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <Fade delay={1e2} cascade damping={1e-1}>
                    <div className="slide-content">
                      <small className="text-white uppercase">
                        {slide.title}
                      </small>
                      <h1 className="text-[28px] max-w-[300px] md:max-w-xl mx-auto leading-9 text-white md:text-5xl pt-3 md:pb-9 font-bold">
                        {slide.description}
                      </h1>

                      <LinkButton className="mt-3 text-white md:mt-0">
                        Take A Tour
                      </LinkButton>
                    </div>
                  </Fade>
                </div>
              ))}
            </HomeSlides>
          </Fade>
        </div>

        {/* workspace Search Form */}
        <div className="workspace-search-container w-full">
          <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
            <div className="workspace-search-form w-11/12 md:w-10/12 mx-auto bg-white shadow-xl rounded-md flex items-center">
              <div className="flex items-center flex-wrap w-full justify-between py-8 px-6 md:px-10">
                <div className="w-full md:w-fit mb-3">
                  <label
                    htmlFor="check_in"
                    className="text-[15px] block pb-2 md:pb-3"
                  >
                    Check In
                  </label>
                  <input
                    id="check_in"
                    type="date"
                    placeholder="Search for workspace"
                    className="rounded-sm text-sm p-3  border w-full md:w-[180px]"
                  />
                </div>

                <div className="w-full md:w-fit mb-3">
                  <label
                    htmlFor="check_in"
                    className="text-[15px] block pb-2 md:pb-3"
                  >
                    Check Out
                  </label>
                  <input
                    id="check_in"
                    type="date"
                    placeholder="Search for workspace"
                    className="rounded-sm text-sm p-3  border w-full md:w-[180px]"
                  />
                </div>

                <div className="w-full md:w-fit mb-3">
                  <label
                    htmlFor="check_in"
                    className="text-[15px] block pb-2 md:pb-3"
                  >
                    Workspace Type
                  </label>
                  <select className="rounded-sm text-sm p-3 border w-full md:w-[180px]">
                    <option value="1">Private Office</option>
                    <option value="2">Shared Office</option>
                    <option value="3">Meeting Room</option>
                  </select>
                </div>

                <div className="w-full md:w-fit mb-3">
                  <label
                    htmlFor="personne"
                    className="text-[15px] block pb-2 md:pb-3"
                  >
                    Capacity
                  </label>

                  <input
                    id="personne"
                    type="Number"
                    placeholder="5 Persons"
                    min={1}
                    className="rounded-sm text-sm p-3  border w-full md:w-[180px]"
                  />
                </div>
                <button className="w-full md:w-fit py-3 text-sm px-12 mt-4 md:mt-6 bg-[#030303] hover:bg-gray-800 transition-colors duration-200 ease-in text-white">
                  Search
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* About Area */}
      <section className="-mt-36 md:-mt-0 pt-10 pb-16 md:pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
              <span className="block mb-3 md:mb-6 text-[#888F96] text-[18px] uppercase">
                About US
              </span>

              <h2 className="text-[24px] md:text-4xl font-bold text-center mb-4 text-[#1E3954]">
                Community, creativity,
                <br /> comfort & more
              </h2>

              {/* <img src={images.layerIcon1} alt="layer icon" /> */}
              <FontAwesomeIcon
                icon={faClone}
                className="size-8 text-[#1E3954] text-2xl"
              />

              <p className="text-center w-[280px] md:w-[790px] text-sm md:text-lg leading-8 text-gray-500 my-8">
                We are a community of bold minds who have decided to work under
                the same roof. Our workspace and the people around us inspire us
                to take action, to grow, to do better. By saying that our
                coworking space is sustainable and comfy we confirm that you
                will get 100% satisfaction from working here and making the best
                out of this experience.
              </p>

              <LinkButton className="text-white">Book A Seet</LinkButton>
            </Fade>
          </div>
        </div>
      </section>

      {/* vedio presetenation Area */}
      <Vedio />

      {/* Services Area */}
      <Services />

      {/* work Space Area */}
      <section className="coworking-space-area pb-16 md:pb-28">
        <div className="">
          {/* <!-- Section Heading --> */}
          <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
            <div className="w-full md:w-6/12 mx-auto text-center">
              <div className="mx-4 md:mx-12 pb-16">
                <span className="text-[#888F96] text-[18px] uppercase">
                  OUR WORKSPACE
                </span>
                <h2 className="text-[24px] md:text-4xl font-bold my-4 md:my-8 text-[#1E3954]">
                  Workspaces for all
                </h2>
                <p className="text-sm md:text-lg leading-8 text-gray-500">
                  Whether you’re a startup or a Fortune 500 company, we offer
                  workspace solutions tailored to your needs.
                </p>
              </div>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 overflow-hidden">
            <div className="col-span-12">
              {/* <!-- workspace item --> */}
              <Slide
                delay={1e2}
                direction="right"
                triggerOnce
                cascade
                damping={1e-1}
              >
                <div className="container flex flex-wrap">
                  <img
                    src={images.workspace1}
                    className="w-full md:w-1/2 h-[250px] md:h-[450px]"
                    alt="workspace image"
                  />

                  {/* workspace Description */}
                  <div className="w-full md:w-1/2 workspace-content p-6 pb-16 md:p-16">
                    <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                      <h4 className="text-[22px] md:text-2xl font-semibold text-[#1E3954] mb-2">
                        Private Office
                      </h4>
                      {/* team */}
                      <div className="pb-4 flex items-center border-b">
                        <FontAwesomeIcon
                          icon={faUsers}
                          className="size-5 text-[#1E3954]"
                        />
                        <p className="pl-3 font-semibold text-gray-500 text-sm">
                          Ideal for team size 5 - 40
                        </p>
                      </div>

                      <p className="text-gray-500 text-sm leading-8 md:text-lg mt-5">
                        Our private offices are perfect for teams of 1-100 and
                        are fully serviced so you can focus on your business.
                      </p>

                      <p className="uppercase text-sm md:text-base font-bold mt-5">
                        From <span className="text-teal-500">$99/mo</span>
                      </p>

                      {/* button */}
                      <LinkButton className="md:py-4 text-white md:px-12 uppercase rounded-full mt-6 md:mt-8">
                        Learn More
                      </LinkButton>
                    </Fade>
                  </div>
                </div>
              </Slide>

              <Slide
                delay={1e2}
                direction="left"
                triggerOnce
                cascade
                damping={1e-1}
              >
                {/* <!-- workspace item --> */}
                <div className="container flex flex-row-reverse flex-wrap">
                  <img
                    src={images.workspace2}
                    className="w-full md:w-1/2 h-[250px] md:h-[450px]"
                    alt="workspace image"
                  />

                  {/* workspace Description */}
                  <div className="bg-white w-full md:w-1/2 workspace-content p-6 pb-16 md:p-16">
                    <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                      <h4 className="text-[22px] md:text-2xl font-semibold text-[#1E3954] mb-2">
                        Private Office
                      </h4>
                      {/* team */}
                      <div className="pb-4 flex items-center border-b">
                        <FontAwesomeIcon
                          icon={faUsers}
                          className="size-5 text-[#1E3954]"
                        />
                        <p className="pl-3 font-semibold text-gray-500 text-sm">
                          Ideal for team size 5 - 40
                        </p>
                      </div>

                      <p className="text-gray-500 text-sm leading-8 md:text-lg mt-5">
                        Our private offices are perfect for teams of 1-100 and
                        are fully serviced so you can focus on your business.
                      </p>

                      <p className="uppercase text-sm md:text-base font-bold mt-5">
                        From <span className="text-teal-500">$99/mo</span>
                      </p>

                      {/* button */}
                      <LinkButton className="md:py-4 text-white md:px-12 uppercase rounded-full mt-6 md:mt-8">
                        Learn More
                      </LinkButton>
                    </Fade>
                  </div>
                </div>
              </Slide>

              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                {/* Pagination */}
                <div className="container md:mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Membership options Area */}
      <section
        className="px-4 md:px-12 mb-14 md:mb-28 bg-cover leading-tight bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.cowSpaceImg2})` }}
      >
        <div className="container mx-auto py-14 md:py-28">
          <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
            <h2 className="text-[24px] md:text-[50px] font-semibold text-center mb-4 text-white">
              Membership options
            </h2>
            {/* <img className="mx-auto" src={images.layerIcon1} alt="layer icon" /> */}
            <FontAwesomeIcon
              icon={faClone}
              className="size-8 w-full mx-auto text-white text-2xl"
            />
            <p className="text-center mx-auto text-sm md:w-[795px] md:text-lg leading-8 text-white my-8 mb-12 md:mb-20">
              Beautiful setting, abundant natural light, amazing comfort,
              super-fast internet, industrial style interior, custom made desks,
              state-of-the-art AC system, top notch location,…
            </p>
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

                <p className="mt-3 md:mt-6 text-sm md:text-base leading-8 md:leading-[35px] text-white">
                  Monday through Friday access to open workspace with conference
                  room bookings available.
                </p>

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
                    <p className="text-sm md:text-base text-white ml-4">
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

                <p className="mt-3 md:mt-6 text-sm md:text-base leading-8 md:leading-[35px] text-white">
                  Send and receive packages and mail from our midtown location.
                  Conference room bookings available.
                </p>

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

                <p className="mt-3 md:mt-6 text-sm md:text-base leading-8 md:leading-[35px] text-white">
                  Monday through Friday access to open workspace with conference
                  room bookings available.
                </p>

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
      </section>

      {/* Benifits Area */}
      <Benifits />

      {/* Gallery Area */}
      <section className="coworking-testimonials-area">
        <div className="container">
          <div className="flex flex-wrap">
            {/* single Gallery item */}
            <a
              href="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/h6-g1.jpg"
              target="_blank"
              className="gallery relative z-0 flex items-center justify-center w-full md:w-1/3 my-auto p-4 h-[220px] md:h-[50vh] py-8 text-center px-12 overflow-hidden"
            >
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div
                  className="bg-img absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-500 hover:scale-125"
                  style={{ backgroundImage: `url(${images.gallery1})` }}
                ></div>
                <div className="z-10">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="gal-img text-white size-12 mb-4"
                  />
                  <p className="text-white text-xl font-semibold">
                    View Gallery
                  </p>
                </div>
              </Fade>
            </a>

            {/* single Gallery item */}
            <a
              href="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/h6-g2.jpg"
              target="_blank"
              className="gallery relative z-0 flex items-center justify-center w-full md:w-1/3 my-auto p-4 h-[220px] md:h-[50vh] py-8 text-center px-12  overflow-hidden"
            >
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div
                  className="bg-img absolute  inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-500 hover:scale-125"
                  style={{ backgroundImage: `url(${images.gallery2})` }}
                ></div>
                <div className="z-10">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="gal-img text-white size-12 mb-4"
                  />
                  <p className="text-white text-xl font-semibold">
                    View Gallery
                  </p>
                </div>
              </Fade>
            </a>

            {/* single Gallery item */}
            <a
              href="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/h6-g3.jpg"
              target="_blank"
              className="gallery relative z-0 flex items-center justify-center w-full md:w-1/3 my-auto p-4 h-[220px] md:h-[50vh] py-8 text-center px-12  overflow-hidden"
            >
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div
                  className="bg-img absolute  inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-500 hover:scale-125"
                  style={{ backgroundImage: `url(${images.gallery3})` }}
                ></div>
                <div className="z-10">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="gal-img text-white size-12 mb-4"
                  />
                  <p className="text-white text-xl font-semibold">
                    View Gallery
                  </p>
                </div>
              </Fade>
            </a>

            {/* single Gallery item */}
            <a
              href="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/h6-g4.jpg"
              target="_blank"
              className="gallery relative z-0 flex items-center justify-center w-full md:w-1/3 my-auto p-4 h-[220px] md:h-[50vh] py-8 text-center px-12 overflow-hidden"
            >
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div
                  className="bg-img absolute  inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-500 hover:scale-125"
                  style={{ backgroundImage: `url(${images.gallery4})` }}
                ></div>
                <div className="z-10">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="gal-img text-white size-12 mb-4"
                  />
                  <p className="text-white text-xl font-semibold">
                    View Gallery
                  </p>
                </div>
              </Fade>
            </a>

            {/* single Gallery item */}
            <a
              href="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/h6-g5.jpg"
              target="_blank"
              className="gallery relative z-0 flex items-center justify-center w-full md:w-1/3 my-auto p-4 h-[220px] md:h-[50vh] py-8 text-center px-12 overflow-hidden"
            >
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div
                  className="bg-img absolute  inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-500 hover:scale-125"
                  style={{ backgroundImage: `url(${images.gallery5})` }}
                ></div>
                <div className="z-10">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="gal-img text-white size-12 mb-4"
                  />
                  <p className="text-white text-xl font-semibold">
                    View Gallery
                  </p>
                </div>
              </Fade>
            </a>

            {/* single Gallery item */}
            <a
              href="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/h6-g6.jpg"
              target="_blank"
              className="gallery relative z-0 flex items-center justify-center w-full md:w-1/3 my-auto p-4 h-[220px] md:h-[50vh] py-8 text-center px-12 overflow-hidden"
            >
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div
                  className="bg-img absolute  inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-500 hover:scale-125"
                  style={{ backgroundImage: `url(${images.gallery6})` }}
                ></div>
                <div className="z-10">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="gal-img text-white size-12 mb-4"
                  />
                  <p className="text-white text-xl font-semibold">
                    View Gallery
                  </p>
                </div>
              </Fade>
            </a>
          </div>
        </div>
      </section>

      {/* Becoming Member Area */}
      <section className="mx-4 pt-14 md:pt-16 mb-14 md:mb-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center pb-12 md:pb-20">
            <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
              <h2 className="text-[24px] md:text-4xl leading-7 md:leading-normal font-bold text-center text-[#1E3954]">
                Our Modern Office Spaces
                <br /> Are Simply Stunning
              </h2>

              {/* Member Button */}
              <LinkButton
                className="h-fit text-white md:py-5 md:px-10 rounded-full my-4 md:my-8 
              duration-500"
              >
                BECOME A MEMBER
              </LinkButton>

              <p className="text-center text-sm md:text-base text-[#1E3954]">
                Not Sure?
                <a
                  href="/"
                  className="pl-1 text-teal-500 hover:text-[#42938a]
              duration-500"
                >
                  BOOK A SEAT
                </a>
              </p>
            </Fade>
          </div>

          {/* Brands Area */}
          <div className="flex items-center flex-wrap justify-evenly mb-12 md:mb-20 gap-12">
            <Fade
              delay={1e2}
              direction="top-left"
              triggerOnce
              cascade
              damping={1e-1}
            >
              <img
                src="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/brand_1.jpg"
                alt="brand"
                loading="lazy"
              />
              <img
                src="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/brand_2.jpg"
                loading="lazy"
                alt="brand"
              />
              <img
                src="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/brand_3.jpg"
                alt="brand"
                loading="lazy"
              />
              <img
                src="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/brand_4.jpg"
                alt="brand"
                loading="lazy"
              />
              <img
                src="https://demo2.wpopal.com/co-workshop/wp-content/uploads/2018/11/brand_5.jpg"
                alt="brand"
                loading="lazy"
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* Hsot Event Area */}
      <section
        className="px-4 md:px-12 mb-14 md:mb-20 leading-tight bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.banner1})` }}
      >
        <div className="container flex flex-wrap justify-between items-center py-14 md:py-24">
          <div className="w-full md:w-1/2">
            <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
              <h2 className="text-[26px] md:text-[50px] font-semibold mb-4 text-white">
                Host your next event at Coworkshop
              </h2>

              <p className="text-sm md:text-lg leading-8 text-white md:mt-12 mb-8 md:mb-16">
                The perfect place for dev gatherings, demo nights, speaker
                panels, launch parties and creative brainstorming.
              </p>
              <div className="memdership-container flex gap-8"></div>
            </Fade>
          </div>
          <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
            <LinkButton
              className="text-[#030303] md:py-5 md:px-14 rounded-full bg-white hover:bg-[#030303] hover:text-white
            duration-500 h-fit"
            >
              Host Event
            </LinkButton>
          </Fade>
        </div>
      </section>

      {/* Contact Area */}
      <Contact />
    </div>
  );
}
