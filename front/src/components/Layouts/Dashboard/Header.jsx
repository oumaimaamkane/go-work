import React, { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { CiSettings, CiLogout } from "react-icons/ci";
import { Menu, Transition, MenuItem, MenuButton, MenuItems } from "@headlessui/react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkMode", newDarkMode);
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newDarkMode;
    });
  };

  return (
    <header className="bg-white dark:bg-neutral-600 h-16 px-10 mt-4 mx-5 py-2 flex justify-between items-center rounded-lg shadow-md">
      <div className="flex items-center">
        <HiOutlineSearch fontSize={20} className="text-gray-600 dark:text-neutral-100" />
        <input
          type="text"
          placeholder="Search"
          className="text-sm outline-none h-10 w-[18rem] px-3 dark:bg-neutral-600 dark:text-gray-200"
        />
      </div>
      <div className="flex items-center gap-4">
        <MdNotificationsNone fontSize={20} className="dark:text-neutral-100" />
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <HiOutlineSun fontSize={21} className="dark:text-neutral-100" />
          ) : (
            <HiOutlineMoon fontSize={21} />
          )}
        </button>

        <Menu as="div" className="relative">
          {({ open }) => (
            <>
              <MenuButton className="focus:outline-none">
                <BsPersonCircle fontSize={22} className="dark:text-neutral-100" />
              </MenuButton>
              <Transition
                show={open}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <MenuItems
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 rounded-md shadow-lg focus:outline-none z-10"
                >
                  <MenuItem>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 dark:bg-neutral-800" : ""
                        } flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full text-left`}
                        onClick={() => console.log("Profile clicked")}
                      >
                        <RxPerson fontSize={16} />
                        Profile
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 dark:bg-neutral-800" : ""
                        } flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full text-left`}
                        onClick={() => console.log("Settings clicked")}
                      >
                        <CiSettings fontSize={19} />
                        Settings
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 dark:bg-neutral-800" : ""
                        } flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full text-left`}
                        onClick={() => console.log("Logout clicked")}
                      >
                        <CiLogout fontSize={18} />
                        Logout
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </header>
  );
};

export default Header;
