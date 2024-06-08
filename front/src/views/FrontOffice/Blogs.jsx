import { Fade } from "react-awesome-reveal";
import images from "../../assets/img/assets";
import Pagination from "../../components/Pagination";
import { useState } from "react";

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

export default function Blogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
    setCurrentPage(page);
    };
  return (
    <div>
      {/* Breadcrumb Area Start */}
      <Fade
        delay={1e2}
        cascade
        triggerOnce
        damping={1e-1}
        className="px-4 md:px-12 leading-tight bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.banner1})` }}
      >
        <div className="w-full h-[250px] md:h-[400px] flex justify-center items-center pt-20 md:pt-36">
          <div className="w-full">
            <div className="breadcrumb-content mx-auto text-center">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <h2 className="text-white uppercase font-semibold mb-1 md:mb-3 text-[24px] md:text-4xl">
                  Our Blogs
                </h2>
                <ul className="flex justify-center items-center text-white font-[500]">
                  <li>
                    <a href="/" className="hover:text-black">
                      Home
                    </a>
                  </li>
                  <span className="mx-2">&gt;</span>
                  <li>Blogs</li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>

      {/* Blog Area Start */}
      <Fade
        delay={1e2}
        cascade
        triggerOnce
        damping={1e-1}
        className="py-12 md:py-20 px-4 md:px-12"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 md:gap-y-12 md:gap-6">
            {/* Blog item */}
            <div className="blog-item">
              <div className="blog-img h-[242px]">
                <img className="h-full" src={images.blog1} alt="blog" />
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
                  href="/blogs/single-blog"
                  className="text-[14px] md:text-[15px] text-teal-500 hover:text-teal-600 font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Blog item */}
            <div className="blog-item">
              <div className="blog-img h-[242px]">
                <img className="h-full" src={images.gallery2} alt="blog" />
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
              <div className="blog-img h-[242px]">
                <img className="h-full" src={images.gallery4} alt="blog" />
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
              <div className="blog-img h-[242px]">
                <img className="h-full" src={images.gallery1} alt="blog" />
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
              <div className="blog-img h-[242px]">
                <img className="h-full" src={images.blog1} alt="blog" />
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
              <div className="blog-img h-[242px]">
                <img className="h-full" src={images.gallery6} alt="blog" />
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
    </div>
  );
}
