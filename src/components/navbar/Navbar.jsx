import { useState, useEffect } from "react";

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
  /*{
    link: "#teams",
    name: "Teams",
  },*/
  {
    link: "#faqs",
    name: "FAQs",
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  if (width > 700) {
    return (
      <nav
        className="flex flex-row justify-between p-3"
        style={{
          backgroundColor: "#121930",
          padding: "10px 60px",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div className="flex items-center justify-center h-full font-semibold text-white">
          synchronicity - s1
          {/* <img alt="img" className="" width="75px" src={logoURL} /> */}
        </div>
        <ul className="flex flex-row items-center justify-center h-12 text-gray-200 list-none">
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
  } else {
    return (
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <nav
          className="flex flex-row justify-between w-full p-3"
          style={{ backgroundColor: "#121930", padding: "10px 50px" }}
        >
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center h-full font-semibold text-white">
              synchronicity - s1
              {/* <img alt="img" width="75px" src={logoURL} /> */}
            </div>
            <button
              className="p-0 m-0 text-2xl text-white border-none cursor-pointer bg-none"
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              &#9776;
            </button>
          </div>
        </nav>
        <div>
          {isNavOpen && (
            <ul
              className=""
              style={{
                backgroundColor: "black",
                color: "white",
                marginLeft: "-9px",
                width: "100vw",
              }}
            >
              {navbarLinks.map((el) => (
                <li
                  className="p-4"
                  key={el.link}
                  style={{
                    textAlign: "center",
                    border: "1px solid white",
                    width: "100%",
                  }}
                >
                  <a href={el.link}>
                    <span className="links">{el.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
};

export default Navbar;
