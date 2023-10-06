import { prizesData } from "../../data/prizesData";
import SectionTitle from "../lib/SectionTitle";

import "./Prizes.css";

export default function Prize() {
  return (
    <section>
      <SectionTitle
        title={"Exciting Prizes"}
        titleDescription={
          "Checkout what different prizes synchronicity has to offer to you."
        }
      />
      <div className="grid grid-cols-3 px-10 py-8">
        {/* <h1>{props.type}</h1> */}
        {prizesData.map((element) => (
          <PrizeItem prize={element} />
        ))}
      </div>
    </section>
  );
}

function PrizeItem({ prize }) {
  return (
    <div className="p-8">
      <div className="flex items-center justify-center">
        <img src={prize.icon} className="h-16" alt="Icon" />
      </div>
      <h2 className="py-3 text-3xl">{prize.type}</h2>
      {Number.parseInt(prize.cashComponent) > 0 && (
        <strong className="text-4xl">&#8377; {prize.cashComponent}</strong>
      )}
      <p className="pt-6 text-center">{prize.content}</p>
    </div>
  );
}
