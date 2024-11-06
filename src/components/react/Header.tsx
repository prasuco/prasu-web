import { useState } from "react";
import { Github, Menu, X } from "lucide-react";

interface Link {
  name: string;
  href: string;
}

const Links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
];

interface IHeaderProps {
  data: {
    active: string;
  };
}

const Header = ({ data }: IHeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 font-semibold text-xl">
            Prasu Labs
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {Links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                data.active === item.href
                  ? "text-indigo-600"
                  : "text-gray-900 hover:text-indigo-600"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://github.com/prasuco"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

export const TopNotice = () => {
  return (
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        This website is currently in development phase, heavy changes are being
        made. So, hang tight.
      </p>
    </div>
  );
};
