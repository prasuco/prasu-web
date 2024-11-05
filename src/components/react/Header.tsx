import { useState } from "react";

interface Link {
  name: string;
  href: string;
}

const Links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="main">
      <div className="bg-indigo-600 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          This website is currently in development phase, heavy changes are
          being made. So, hang tight.
        </p>
      </div>

      <div className="nav">
        <nav className="bg-white dark:bg-gray-800  shadow ">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
              <div className="w-full justify-between flex items-center">
                <a className="flex-shrink-0" href="/">
                  <img
                    className="w-8 h-8"
                    src="https://fav.farm/👓"
                    alt="Workflow"
                  />
                </a>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    {Links.map((link) => (
                      <a
                      key={link.name}
                        className={`text-gray-500  dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="flex items-center ml-4 md:ml-6"></div>
              </div>
              <div className="flex -mr-2 md:hidden">
                <button
                  onClick={() => {

                    setIsOpen(!isOpen);
                  }}
                  className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            {isOpen == true && (
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {Links.map((link) => (
                  <a
                  key={link.name}
                    className={`text-gray-500 dark:text-white block px-3 py-2 rounded-md text-base font-medium`}
                    href={link.href}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
