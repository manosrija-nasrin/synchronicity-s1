import themesData from "../../data/themesData";
import SectionTitle from "../lib/SectionTitle";

export default function Themes() {
  return (
    <section
      id="themes"
      className="pt-16 text-white"
      style={{
        backgroundImage: `url(/pattern.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SectionTitle
        title={"Tracks To Hack"}
        titleDescription={
          "Showcase your skills trying to hack different tracks."
        }
      />
      <section className="grid grid-cols-1 gap-8 px-5 md:px-10 py-28 md:grid-cols-2 lg:grid-cols-3">
        {themesData.map((el) => (
          <div
            className="p-8 rounded-md md:p-10 bg-slate-800 bg-opacity-30"
            key={el.themeName}
          >
            <div className="flex items-center justify-center">
              <img src={el.themeImageURL} className="h-20" alt="Icon" />
            </div>
            <h1 className="text-3xl font-bold pt-7 pb-7">{el.themeName}</h1>
            <p className="font-medium leading-relaxed text-justify">
              {el.themeDescription}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
