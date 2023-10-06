import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Themes from "./components/themes/Themes.jsx";
import Timeline from "./components/timeline/Timeline.jsx";
import Sponsors from "./components/sponsors/Sponsors.jsx";
import Footer from "./components/footer/Footer";
import { Prize } from "./components/prizes/prizes";
import { Accordion } from "./components/FAQ/faq.jsx";
import { frequentlyAskedQuestions } from "./data/FAQ.js";

import pattern from "./pattern.png";

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center"}}>
      <Navbar />
      <main style={{ backgroundImage: `url(${pattern})` }}>
        <Hero />

        <About />

        <h1>Hackathon Themes</h1>
        <Themes />

        <h1>Prizes</h1>
        <Prize/>
        <h1>Hackathon TimeLine</h1>
        <Timeline />

        <h1>Sponsors</h1>
        <Sponsors />

        <h1 className="">Design & Media Partners</h1>
        {/* {designlogo.map(SponsorGroup)} */}

        <h1 className="">Food Sponsors</h1>
        {/* {FoodLogos.map(SponsorGroup)} */}

        <h1 id="faqs">FAQs</h1>
        {frequentlyAskedQuestions.map((el, idx) => (
          <Accordion panel={el} key={idx} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
