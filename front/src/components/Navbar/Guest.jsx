import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/logo.png";
import Button from "../../components/Buttons/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    let Links = [
      { name: "HOME", link: "/" },
      { name: "ABOUT", link: "/about" },
      { name: "SERVICES", link: "/services" },
      { name: "Packs", link: "/packs" },
      { name: "BLOG'S", link: "/blogs" },
      { name: "CONTACT", link: "/contact" },
    ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full absolute top-0 left-0 z-20 flex items-center justify-between py-5 px-4 md:px-12 md:py-[40px] bg-slate-800 lg:bg-transparent md:border-b border-[#8d9faf]">
      <div className="w-52">
        <img src={logo} className="w-[160px] md:w-auto" alt="logo image" />
      </div>

      <div className="hidden lg:block">
        <ul className="md:flex md:items-center md:justify-evenly transition-all duration-500 ease-in">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-12 text-sm md:my-0 my-7">
              <a
                href={link.link}
                className="text-white font-semibold uppercase hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Button className="hidden lg:block">Book A Seet</Button>

      <FontAwesomeIcon
        icon={faBars}
        className="lg:hidden text-white text-2xl"
        onClick={() => toggleNav()}
      />

      {/* mobile navbar */}
      <div
        className={`lg:hidden fixed inset-0 transition-transform duration-500 ease-in-out z-40 flex ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 bg-[#030303] transition-transition opacity-20 duration-100 ease-in-out`}
          onClick={toggleNav}
        />
        <nav
          className={`w-10/12 bg-slate-800 h-full flex-shrink-0 transform transition-transform ease-in-out duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="transition-all py-6 duration-500 ease-in">
            {Links.map((link) => (
              <li
                key={link.name}
                className="pl-8 text-sm border-b border-white py-5"
              >
                <a
                  href={link.link}
                  className="text-white font-semibold uppercase hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <Button className="border-transparent duration-200 ml-8 bg-[#030303]">
            Book A Seet
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
