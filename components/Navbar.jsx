import { useState } from "react";
import Container from "@components/Container";
import Link from "next/link";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "/posts" },
    { text: "Books", href: "/posts" },
    { text: "Open Source", href: "/posts" },
  ];
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button
              className="flex items-center"
              onClick={() => setOffcanvas(!offcanvas)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    stroke-z="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    stroke-z="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="w-6/12 lg:w-2/12 ">
            <Link href="/">
              <a className="flex items-center justify-center lg:justify-start">
                <div className="mr-4 flex w-10 items-center justify-center rounded bg-gray-500 shadow-2xl">
                  E
                </div>
                epictetus
              </a>
            </Link>
          </div>
          <div className="w-3/12 text-right lg:hidden">
            <button onClick={() => setSearch(!search)}>
              <svg
                z="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`fixed top-0 h-full w-full bg-gradient-to-b from-gray-600 to-gray-900 p-10 transition-all lg:static lg:h-auto lg:w-7/12 lg:bg-none lg:p-0 ${
              offcanvas ? "left-0" : "-left-full"
            }`}
          >
            <button
              className="absolute top-10 right-10 cursor-pointer lg:hidden"
              onClick={() => setOffcanvas(!offcanvas)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ul className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-10  lg:space-y-0">
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Ui Design</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Front-End</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Back-End</a>
                </Link>
              </li>
              <li className="relative">
                <a
                  className="flex cursor-pointer items-center hover:underline"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Lainnya
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute mt-4 w-[200px] rounded bg-gray-800">
                    {dropdownList.map(({ text, href }) => (
                      <li
                        key={text}
                        className="border-b border-white/5 last:border-0"
                      >
                        <Link href={href}>
                          <a className=" flex py-3 px-6 hover:bg-gray-700/60">
                            {text}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`absolute left-0 w-full px-10 transition-all lg:static lg:w-3/12 ${
              search ? "top-10" : "-top-40"
            }`}
          >
            <input
              className="w-full rounded-lg bg-gray-700 py-3 px-6 pl-12 bg-search lg:rounded-full"
              placeholder="Search..."
            />
            <button
              className="absolute top-3 right-12 cursor-pointer lg:hidden"
              onClick={() => setSearch(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
