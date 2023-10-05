import themesData from "../../data/themesData";
import './Themes.css'
export default function Theme() {
  return (
    <section class="grid">
      {themesData.map((el) => (
        <div class="theme_item">
          <div className="icon">{el.themeImageURL}</div>
          <br />
          <div class=""><strong style={{fontSize:"larger"}}>{el.themeName}</strong></div>
          <div class="">{el.themeDescription}</div>
        </div>
      ))}
    </section>
  );
}
