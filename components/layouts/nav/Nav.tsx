"use client";

import Image from "next/image";
import { useState } from "react";
import { Q } from "../../icons";
import Link from "next/link";
import navMenu from "./navMenu";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<string>("");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (link: string) => {
    setMenuActive(link);
  };

  return (
    <>
      <nav className="nav pt-6 mb-6">
        <section>
          <div className="flex items-center justify-between h-16">
            {/* logo */}
            <section className="flex items-end">
              <Q width="55" height="55" />
              <h1 className="text-3xl text-primary font-bold">UIZ EASY</h1>
            </section>
            {/* menus */}
            <section className="hidden lg:flex gap-6">
              {navMenu.map((menu: any) => (
                <Link
                  key={menu.id}
                  href={menu.link}
                  className={`${
                    menuActive === menu.link ? "text-[#C500E2]" : "text-primary"
                  }`}
                  onClick={() => handleMenuClick(menu.link)}
                >
                  {menu.name}
                </Link>
              ))}
            </section>
            {/* auths */}
            <section className="hidden lg:flex gap-4 items-center">
              <Link
                className="bg-primary text-white font-bold border-2 border-primary py-1 px-12 rounded-md"
                href={"#"}
              >
                Daftar
              </Link>
              <Link
                className="bg-white text-primary font-bold border-2 border-primary py-1 px-12 rounded-md"
                href={"#"}
              >
                Masuk
              </Link>
            </section>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section
          className={`${isOpen ? "block" : "hidden"} lg:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navMenu.map((menu: any) => (
              <Link
                key={menu.id}
                href={menu.link}
                className={`block mb-1 ${
                  menuActive === menu.link
                    ? "text-[#C500E2] font-semibold"
                    : "text-primary"
                }`}
                onClick={() => handleMenuClick(menu.link)}
              >
                {menu.name}
              </Link>
            ))}
          </div>
          {/* auths */}
          <section className="flex lg:hidden gap-4 items-center">
            <Link
              className="bg-primary text-white font-bold border-2 border-primary py-1 px-12 rounded-md"
              href={"#"}
            >
              Daftar
            </Link>
            <Link
              className="bg-white text-primary font-bold border-2 border-primary py-1 px-12 rounded-md"
              href={"#"}
            >
              Masuk
            </Link>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Nav;
