import Link from "next/link";
import React from "react";

const Header = () => {
  const pages = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Services", href: "/services" },
    { title: "Features", href: "/features" },
  ];
  return (
    <header className="header py-5">
      <div className="container">
        <div className="flex items-center lg:justify-center justify-between">
          <div className="lg:text-center text-left">
            <Link href="/">
              <h1 className="font-bold text-3xl">
                <span className="text-emerald-600">Agro</span>
                Pro
              </h1>
            </Link>
            <p className="text-sm text-gray-600 lg:block hidden font-serif">
              Learn Advance farming with us
            </p>
          </div>
          <button className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="container mt-2 lg:flex items-center justify-center border-t border-b hidden ">
        <ul className="flex items-center justify-between">
          {pages.map((page) => (
            <li key={page.title}>
              <Link
                href={page.href}
                className="text-sm font-light py-2 px-5 block hover:bg-emerald-600 transition-colors hover:text-white duration-300"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
