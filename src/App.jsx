import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Themes from "./components/themes/Themes.jsx";
import Timeline from "./components/timeline/Timeline.jsx";
import Sponsors from "./components/sponsors/Sponsors.jsx";
import Footer from "./components/footer/Footer";
import Prizes from "./components/prizes/Prizes";
import Accordion from "./components/FAQ/faq.jsx";

import pattern from "./pattern.png";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Navbar />
      <main style={{ backgroundImage: `url(${pattern})` }}>
        <Hero />
        <About />
        <Themes />
        <Prizes />
        <Timeline />
        <Sponsors />

        {/* <h1 className="">Design & Media Partners</h1> */}
        {/* {designlogo.map(SponsorGroup)} */}

        {/* <h1 className="">Food Sponsors</h1> */}
        {/* {FoodLogos.map(SponsorGroup)} */}

        <Accordion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
