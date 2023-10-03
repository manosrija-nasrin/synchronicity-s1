import themesData from "../../data/themesData";

export default function Theme() {
  return (
    <section class="">
      {themesData.map((el) => (
        <div class="">
          <img src={el.themeImageURL} />
          <br />
          <div class="">{el.themeName}</div>
          <div class="">{el.themeDescription}</div>
        </div>
      ))}
    </section>
  );
}
