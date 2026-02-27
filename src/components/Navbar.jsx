import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId = null;
    let lastY = 0;
    let scheduled = false;

    const update = () => {
      scheduled = false;
      const above = lastY > 100;
      setScrolled((prev) => (prev !== above ? above : prev));
    };

    const onScroll = () => {
      lastY = window.scrollY || 0;
      if (!scheduled) {
        scheduled = true;
        rafId = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 sm:py-6 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-accent/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-8 sm:w-10 h-8 sm:h-10 object-contain group-hover:scale-110 transition"
          />
          <div className="hidden sm:block">
            <p className="text-white sm:text-[18px] text-[16px] font-bold flex items-center">
              Rishabh Kumar
            </p>
            <p className="text-accent text-[10px] sm:text-[11px] font-semibold tracking-wider">
              Full Stack Engineer
            </p>
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-1 sm:gap-2">
          {navLinks.map((nav) => {
            const isActive = active === nav.title;
            return (
              <li
                key={nav.id}
                onClick={() => {
                  setActive(nav.title);
                  window.location.href = `#${nav.id}`;
                }}
                className={`text-[13px] sm:text-[15px] font-semibold cursor-pointer px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-white shadow-lg shadow-accent/40"
                    : "text-gray-300 hover:text-white hover:bg-accent/10"
                }`}
              >
                {nav.title}
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 sm:p-6 bg-black-100 absolute top-16 sm:top-20 right-3 sm:right-0 mx-2 sm:mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-3 sm:gap-4 w-full">
              {navLinks.map((nav) => {
                const isActive = active === nav.title;
                return (
                  <li
                    key={nav.id}
                    className={`text-sm sm:text-[16px] font-bold cursor-pointer px-3 py-1 rounded-md transition w-full ${
                      isActive
                        ? "text-accent bg-accent/20"
                        : "text-white hover:text-accent"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                      window.location.href = `#${nav.id}`;
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
