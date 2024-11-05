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
  return (
    <div className="main">
      <div className="bg-indigo-600 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          This website is currently in development phase, heavy changes are
          being made. So, hang tight.
        </p>
      </div>
    </div>
  );
};

export default Header;
