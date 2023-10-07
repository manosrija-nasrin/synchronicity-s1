import { PrimaryButton } from "../lib/Buttons";
import SectionTitle from "../lib/SectionTitle";

export default function About() {
  return (
    <section id="about" className="pt-16 bg-white">
      <SectionTitle
        title={"What is Synchronicity?"}
        titleDescription={"Get a glimse of our hackathon is about."}
      />
      <div className="grid items-center justify-center grid-cols-1 grid-rows-2 py-10 lg:grid-rows-1 lg:grid-cols-2">
        <div
          className="Image"
          style={{ maxWidth: "100%", display: "block", margin: "auto" }}
        >
          <img
            alt="teamwork logo"
            width="400px"
            src="/illustrations/TeamWork.svg"
          />
        </div>

        <div className="flex flex-col justify-start p-10">
          <p className="pb-4 text-lg font-medium leading-relaxed text-justify">
            It is a hybrid mode hackathon in which all participants can sharpen
            their skills and connect with people to grow together. The Hackathon
            is designed to spark innovation, attract and educate new talent and
            create new channels for collaboration between performance and
            capacity professionals. We want to spread the idea that programming
            is a useful skill that can be enjoyed by anyone. We are planning to
            host approximately 150+ students offline in the college with proper
            arrangement and 850+ students online.
          </p>
          <PrimaryButton
            iconFilePath={"/icons/discord.svg"}
            buttonText={"Join Discord Channel"}
            buttonURL={"www.discord.com"}
            iconAlternativeText={"discord logo"}
          />
        </div>
      </div>
    </section>
  );
}
