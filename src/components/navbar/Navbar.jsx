const navbarLinks = [
  {
    link: "#about",
    name: "About",
  },
  {
    link: "#themes",
    name: "Themes",
  },
  {
    link: "#sponsors",
    name: "Sponsors",
  },
  {
    link: "#teams",
    name: "Teams",
  },
  {
    link: "#faqs",
    name: "FAQs",
  },
];

const Navbar = () => {
  return (
    <nav
      className="flex flex-row justify-between p-3"
      style={{ backgroundColor: "#121930" }}
    >
      <span className="headerlogo_container">
        {/* 
        <div className="header_logo">
          <img alt="img" className="percentlogomain" src={mainlogo} />
        </div> 
        */}
      </span>

      <ul className="list-none flex flex-row h-12 text-gray-200 justify-center items-center">
        {navbarLinks.map((el) => (
          <li className="p-4" key={el.link}>
            <a href={el.link}>
              <span className="links">{el.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
