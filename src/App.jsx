import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Themes from "./components/themes/Themes";
import Timeline from "./components/timeline/Timeline";
import Sponsors from "./components/sponsors/Sponsors";
import Footer from "./components/footer/Footer";
import Prizes from "./components/prizes/Prizes";
import Accordion from "./components/faq/FAQ";

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
