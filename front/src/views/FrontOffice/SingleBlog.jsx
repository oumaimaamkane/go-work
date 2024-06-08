import { Fade } from "react-awesome-reveal";
import images from "../../assets/img/assets";
import { useState } from "react";
import Pagination from "../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from  "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";

const blogs = [
  {
    id: 1,
    title: "The Best Coworking Spaces in 2021",
    image: images.gallery1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const ITEMS_PER_PAGE = 6;

export default function SingleBlog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
        <div className="w-full min-h-[250px] md:min-h-[400px] flex justify-center items-center pt-20 md:pt-36">
          <div className="w-full">
            <div className="breadcrumb-content mx-auto text-center py-6">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <h2 className="text-white uppercase font-semibold mb-3 text-[24px] md:text-4xl">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>

                <div className="post-meta text-white">
                  <a href="#">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                    Jan 01, 2024
                  </a>
                  <span className="mx-4">/</span>
                  <a href="#" className="post-author">
                    <FontAwesomeIcon icon={faUser} className="mr-2" /> by Joe
                    Fylan
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>

      {/* Main Blog Area Start */}
      <Fade
        delay={1e2}
        cascade
        triggerOnce
        damping={1e-1}
        className="px-4 md:px-12 bg-white"
      >
        <div className="bg-white container pt-10 lg:pt-20 w-full lg:w-8/12  mx-auto">
          <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
            {/* Blog item */}
            <div className="blog-item">
              <div className="bg-gray-800 blog-img">
                <img className="w-full" src={images.blog1} alt="blog" />
              </div>
              <Fade
                delay={1e2}
                cascade
                triggerOnce
                damping={1e-1}
                className=" blog-content leading-8 text-[15px] mt-5"
              >
                <h3 className="text-xl md:text-2xl mt-10 font-semibold text-[#1E3954]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  amet, consectetur adipiscing elit.
                </h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget felis id purus finibus ultrices. Donec auctor, turpis nec
                  malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nunc eget felis id purus finibus ultrices. Donec auctor,
                  turpis nec malesuada. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nunc eget felis id purus finibus ultrices.
                  Donec auctor, turpis nec malesuada.
                </p>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget felis id purus finibus ultrices. Donec auctor, turpis nec
                  malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nunc eget felis id purus finibus ultrices. Donec auctor,
                  turpis nec malesuada.
                </p>

                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget felis id purus finibus ultrices. Donec auctor, turpis nec
                  malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nunc eget felis id purus finibus ultrices. Donec auctor,
                  turpis nec malesuada.
                </p>
              </Fade>

              <div className="flex items-center mt-10 py-4 border-t">
                <div className="flex items-center">
                  <h3 className="text-[#666] text-[14px] md:text-lg font-[500]">
                    Share:
                  </h3>
                  <ul className="flex gap-4 ml-6">
                    <li>
                      <a href="/" className="text-[#666]">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-[#666]">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-[#666]">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-[#666]">
                        <FontAwesomeIcon icon={faPinterest} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* Blogs Area Start */}
        <div className="container pb-10 pt-10 lg:pt-28 lg:pb-20 mx-auto">
          <h2 className="text-[#1E3954] text-[24px] md:text-[36px] font-bold text-center mb-10">
            Related Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 md:gap-y-12 md:gap-6">
            {/* Blog item */}
            <div className="blog-item">
              <div className="blog-img">
                <img src={images.gallery1} alt="blog" />
              </div>
              <div className="blog-content mt-4">
                <h3 className="text-[#1E3954] text-[18px] md:text-[20px] font-semibold mb-2">
                  <a href="/">The Best Coworking Spaces in 2021</a>
                </h3>
                <p className="text-[14px] md:text-[16px] leading-7 text-[#666] mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="/"
                  className="text-[14px] md:text-[15px] text-teal-500 hover:text-teal-600 font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Blog item */}
            <div className="blog-item">
              <div className="blog-img">
                <img src={images.gallery2} alt="blog" />
              </div>
              <div className="blog-content mt-4">
                <h3 className="text-[#1E3954] text-[18px] md:text-[20px] font-semibold mb-2">
                  <a href="/">The Best Coworking Spaces in 2021</a>
                </h3>
                <p className="text-[14px] md:text-[16px] leading-7 text-[#666] mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="/"
                  className="text-[14px] md:text-[15px] text-teal-500 hover:text-teal-600 font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Blog item */}
            <div className="blog-item">
              <div className="blog-img">
                <img src={images.gallery3} alt="blog" />
              </div>
              <div className="blog-content mt-4">
                <h3 className="text-[#1E3954] text-[18px] md:text-[20px] font-semibold mb-2">
                  <a href="/">The Best Coworking Spaces in 2021</a>
                </h3>
                <p className="text-[14px] md:text-[16px] leading-7 text-[#666] mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="/"
                  className="text-[14px] md:text-[15px] text-teal-500 hover:text-teal-600 font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="container mt-16 md:mt-24">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </Fade>

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
            damping={1e-1} className="absolute top-0 left-0 -z-50 w-full h-full overflow-hidden pointer-events-none">
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
