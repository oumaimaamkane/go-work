import React, { useState } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FcConferenceCall } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../../lib/consts/navigation";
import { FaBars } from "react-icons/fa"; // Import an icon for the toggle button

const linkClasses =
  "flex items-center gap-2 px-3 py-2 rounded-md text-base transition-colors duration-200 text-gray-700 dark:text-white font-medium";
const hoverClasses =
  "hover:bg-gray-200 dark:hover:bg-neutral-600 hover:no-underline active:bg-gray-200 dark:active:bg-neutral-800";
const activeLinkClasses =
  "text-orange-500 dark:text-white bg-orange-100 dark:bg-orange-500 hover:no-underline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
  <aside
    className={classNames(
      "bg-white dark:bg-neutral-700 transition-all duration-300 p-4 flex flex-col shadow-lg h-full",
      {
        "w-64": isOpen,
        "w-20": !isOpen,
      }
    )}
  >
        <div className="flex items-center gap-3 px-2 py-4 border-b border-gray-400 dark:border-neutral-500">
          <FcConferenceCall fontSize={28} className="dark:text-red" />
          {isOpen && (
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Co-Working
            </span>
          )}
        </div>
        <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-neutral-600 scrollbar-track-gray-200 dark:scrollbar-track-neutral-800">
          <ul className="flex flex-col py-4 space-y-1">
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} isOpen={isOpen} />
            ))}
          </ul>
        </nav>
        <div className="border-t border-gray-400 dark:border-neutral-500 pt-4">
          <ul className="flex flex-col space-y-1">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} isOpen={isOpen} />
            ))}
            <div
              className={classNames(
                "text-red-500 dark:text-red-600 cursor-pointer",
                linkClasses,
                hoverClasses
              )}
            >
              <span className="text-xl">
                <HiOutlineLogout />
              </span>
              {isOpen && "Logout"}
            </div>
          </ul>
        </div>
      </aside>
      <button
  onClick={toggleSidebar}
  className={classNames(
    "absolute top-14 right-1 flex items-center justify-center bg-gray-200 text-gray-900 rounded-full focus:outline-none shadow-sm transition-all duration-300",
    "w-10 h-10" // Always maintain this size
  )}
>
  {isOpen ? (
    <FaChevronCircleLeft className="text-xl" />
  ) : (
    <FaChevronCircleRight className="text-xl" />
  )}
</button>


    </div>
  );
};

export default Sidebar;

function SidebarLink({ item, isOpen }) {
  const { pathname } = useLocation();
  const isActive = pathname === item.path;

  return (
    <Link
      to={item.path}
      className={classNames(linkClasses, {
        [activeLinkClasses]: isActive,
        [hoverClasses]: !isActive,
      })}
    >
      <span className="text-xl">{item.icon}</span>
      {isOpen && item.label}
    </Link>
  );
}
