import { SecondaryButton } from "../lib/Buttons";

const TOP_SECTION = {
  TITLE: "Synchronicity - S1",
  MOBILE_TITLE: ["Synchronicity", "Season 01"],
  Typed_effect: [
    "25 & 26 November, 2023",
    "36 hours of creation",
    "Win awesome prizes",
    "Events And Sessions",
  ],
  SHORT_DESCRIPTION:
    "Join us on 25th and 26th of November, 2023 for 36 hours of creation, innovation, & fun with over 750+ students.",
  DISCORD_LINK: "https://discord.gg/cvHPEK7U3v",
  HACKATHON_DEVFOLIO_PAGE_URL: "https://duhacks.devfolio.co/",
  HACKERS_REGISTRATION_FORM_LINK: "#Hackers Registration devfolio link",
  COVER_IMAGE_URL: "/hackathon-crowd.jpeg",
};

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center grid-cols-1 grid-rows-2 px-10 py-8 text-white md:grid lg:py-24 lg:grid-rows-1 lg:grid-cols-2"
      style={{
        backgroundImage: `url(/pattern.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center p-3 md:p-6 lg:pr-20 lg:items-start">
        <strong>{TOP_SECTION.Typed_effect[0]}</strong>
        <h1 className="hidden py-4 text-4xl font-bold md:block md:text-6xl lg:text-4xl xl:text-5xl">
          {TOP_SECTION.TITLE}
        </h1>
        <h1 className="flex flex-col py-4 text-center md:hidden">
          <span className="pb-4 text-3xl font-semibold">
            {TOP_SECTION.MOBILE_TITLE[0]}
          </span>
          <span className="text-5xl font-semibold">
            {TOP_SECTION.MOBILE_TITLE[1]}
          </span>
        </h1>
        <div className="flex flex-col text-lg gap-x-4 md:flex-row">
          <span className="pb-2 font-semibold">
            {TOP_SECTION.Typed_effect[1]}
          </span>
          <span className="pb-2 font-semibold">
            {TOP_SECTION.Typed_effect[2]}
          </span>
        </div>
        <p className="max-w-lg pb-3 font-medium text-center lg:text-left">
          {TOP_SECTION.SHORT_DESCRIPTION}
        </p>
        <section className="grid w-full grid-cols-1 gap-4 px-6 pt-5 md:grid-cols-2 lg:px-0 gap-x-5">
          <SecondaryButton
            // iconFilePath={"/icons/discord.svg"}
            buttonText={"Learn More"}
            buttonURL={TOP_SECTION.HACKATHON_DEVFOLIO_PAGE_URL}
            iconAlternativeText={"click to register for synchronicity"}
          />
          <SecondaryButton
            // iconFilePath={"/icons/discord.svg"}
            buttonText={"Register Now"}
            buttonURL={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}
            iconAlternativeText={"click to register for synchronicity"}
          />
        </section>
      </div>
      <div className="py-6 overflow-hidden rounded-md">
        <img
          src={TOP_SECTION.COVER_IMAGE_URL}
          alt="Cover Image Of Synchronicity"
        />
      </div>
    </section>
  );
}
