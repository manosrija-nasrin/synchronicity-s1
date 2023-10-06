import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the corresponding CSS file

import logo from './Logo.png'
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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [width,setWidth]=useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  if(width>700){
  return (
    <nav
      className="flex flex-row justify-between p-3"
      style={{ backgroundColor: "#121930", padding:"10px 60px", alignItems:"center", position:"sticky", top:0, zIndex:100 }}
    >
      <div className="navbar-brand">
      <span className="headerlogo_container">
        
        <div className="header_logo">
          <img alt="img" className="percentlogomain" width="75px" src={logo} />
        </div> 
       
      </span>
        </div>
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
  );}
  else
  {
    return(
      <div style={{position:"sticky", top:0, zIndex:100,alignItems:"center", display:"flex",flexDirection:"column"}}>
      <nav
      className="flex flex-row justify-between p-3"
      style={{ backgroundColor: "#121930", padding:"10px 50px"}}
    >
      <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", width:"79.5vw"}}>
      <div>
          <img alt="img" className="percentlogomain" width="75px" src={logo} />
        </div> 
        <button
          className="navbar-toggle"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
        </div>
        
      </nav>
      <div>
      {isNavOpen &&
        <ul className="" style={{backgroundColor:"black", color:"white", marginLeft:"-9px", width:"100vw"}}>
        {navbarLinks.map((el) => (
          <li className="p-4" key={el.link} style={{textAlign:"center", border:"1px solid white", width:"100%"}}>
            <a href={el.link}>
              <span className="links">{el.name}</span>
            </a>
          </li>
        ))}
      </ul>}
      </div>
      </div>
    )
  }
};

export default Navbar;
// Navbar.js
// list-none flex flex-row h-12 text-gray-200 justify-center items-center

// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from './Logo.png';

// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const navbarLinks = [
//     {
//       link: "#about",
//       name: "About",
//     },
//     {
//       link: "#themes",
//       name: "Themes",
//     },
//     {
//       link: "#sponsors",
//       name: "Sponsors",
//     },
//     {
//       link: "#teams",
//       name: "Teams",
//     },
//     {
//       link: "#faqs",
//       name: "FAQs",
//     },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <span className="headerlogo_container">
//           <div className="header_logo">
//             <img alt="img" className="percentlogomain" width="75px" src={logo} />
//           </div>
//         </span>

//         <button
//           className="navbar-toggle"
//           onClick={toggleNav}
//           aria-label="Toggle navigation"
//         >
//           &#9776;
//         </button>
//       </div>

//       <ul className={`navbar-links ${isNavOpen ? 'open' : ''}`}>
//         {navbarLinks.map((el) => (
//           <li className="p-4" key={el.link}>
//             <a href={el.link}>
//               <span className="links">{el.name}</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

