import { SecondaryButton } from "../lib/Buttons";

const TOP_SECTION = {
  TITLE: "Synchronicity - S1",
  MOBILE_TITLE: ["Synchronicity", "Season 01"],
  Typed_effect: [
    "January 20, 2024",
    "10+ hours of creation!",
    "Win awesome prizes!",
    "Events And Sessions",
  ],
  SHORT_DESCRIPTION:
    "Join us for a marathon of CREATION, INNOVATION & FUN with over 100+ students! It's all happenning here at Jadavpur University, Salt Lake campus!",
  HACKATHON_UNSTOP_URL: "https://unstop.com/o/FjWX0sO?lb=5lXdRXXV",
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
          {/* <SecondaryButton
            buttonText={"Learn More"}
            buttonURL={TOP_SECTION.HACKATHON_UNSTOP_URL}
            iconAlternativeText={"click to register for synchronicity"}
          /> */}
          <SecondaryButton
            buttonText={"Register Now"}
            buttonURL={TOP_SECTION.HACKATHON_UNSTOP_URL}
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
