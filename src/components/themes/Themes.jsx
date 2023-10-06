import themesData from "../../data/themesData";
import SectionTitle from "../lib/SectionTitle";

export default function Themes() {
  return (
    <section>
      <SectionTitle
        title={"Tracks To Hack"}
        titleDescription={
          "Showcase your skills trying to hack different tracks."
        }
      />
      <section className="grid grid-cols-3 px-10">
        {themesData.map((el) => (
          <div className="p-8">
            <div className="flex items-center justify-center">
              <img src={el.themeImageURL} className="h-16" alt="Icon" />
            </div>
            <h1 className="py-3 text-3xl">{el.themeName}</h1>
            <p className="text-justify ">{el.themeDescription}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
