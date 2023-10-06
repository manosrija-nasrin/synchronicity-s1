import themesData from "../../data/themesData";
import './Themes.css'
export default function Theme() {
  return (
    <section class="grid grid-cols-auto minmax-400 w-98vw gap-8 items-center p-2">
      {themesData.map((el) => (
        <div class="border-2 border-customBlue rounded-lg p-5 block mx-auto text-center h-full w-full">
          <div className="icon"><img src={el.themeImageURL} width="100" alt="Icon"/></div>
          <br />
          <div class=""><strong style={{fontSize:"larger"}}>{el.themeName}</strong></div>
          <div class="">{el.themeDescription}</div>
        </div>
      ))}
    </section>
  );
}
