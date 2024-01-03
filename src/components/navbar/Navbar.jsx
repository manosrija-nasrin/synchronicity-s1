import { useState, useEffect } from "react";

const navbarLinks = [
  {
    link: "#about",
    name: "About",
    icon: '/icons/about.svg'
  },
  {
    link: "#themes",
    name: "Themes",
    icon: '/icons/themes.svg'
  },
  {
    link: "#sponsors",
    name: "Sponsors",
    icon: '/icons/Sponsor.svg'
  },
  /*{
    link: "#teams",
    name: "Teams",
  },*/
  {
    link: "#faqs",
    name: "FAQs",
    icon: '/icons/FAQS.svg'
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className="flex flex-row justify-between sticky top-0 z-50 items-center py-2.5 px-8 md:px-14 bg-gray-900"
    >
      <div className="flex items-center justify-center h-full font-semibold text-white">
        synchronicity - s1
      </div>
      <ul className="hidden md:flex flex-row items-center justify-center h-12 text-gray-200 list-none">
        {navbarLinks.map((el) => (
          <li className="p-4" key={el.link}>
            <a href={el.link}>
              <span className="links">{el.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <button
        className="md:hidden p-0 m-0 text-2xl text-white border-none cursor-pointer bg-none"
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <img src="/icons/hamburger.svg" alt="Menu" className="h-6"/>
      </button>
      <ul
        className={`fixed md:hidden bg-gray-900 top-0 ${
          isNavOpen ? "right-0" : "right-[-300px]"
        } w-3/5 h-screen pt-14 text-white`}
      >
        <button className="text-3xl absolute top-6 right-6" onClick={toggleNav}>
          &#10006;
        </button>
        {navbarLinks.map((el) => (
          <li className="p-4 text-xl font-semibold" key={el.link}>
            <a href={el.link}>
              <div className="flex flex-row items-center">
                <img src={el.icon} alt={el.name} className="h-6 mr-2"/>
                {/* <span className="h-6">{el.icon}</span> */}
                <span className="links">{el.name}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
