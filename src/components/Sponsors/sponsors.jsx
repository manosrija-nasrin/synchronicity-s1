import titleSponsors from "../../data/sponsorsData/titleSponsors";
import goldSponsors from "../../data/sponsorsData/goldSponsors";
import silverSponsors from "../../data/sponsorsData/silverSponsors";
import bronzeSponsors from "../../data/sponsorsData/bronzeSponsors";
import genericSponsors from "../../data/sponsorsData/genericSponsors";

import "./Sponsors.css";

const sponsorLists = [
  {
    name: "Title Sponsors",
    list: titleSponsors,
  },
  {
    name: "Gold Sponsors",
    list: goldSponsors,
  },
  {
    name: "Silver Sponsors",
    list: silverSponsors,
  },
  {
    name: "Bronze Sponsors",
    list: bronzeSponsors,
  },
  {
    name: "Other Sponsors",
    list: genericSponsors,
  },
];

function Sponsor(props) {
  return (
    <div className="flex justify-center items-center">
      <a href={props.sponsorWebsiteURL} rel="noreferrer" target="_blank">
        <img src={props.sponsorLogoURL} alt={props.name} className="w-60" />
      </a>
    </div>
  );
}

function SponsorList({ name, list }) {
  return (
    <>
      <h1 className="">{name}</h1>
      <section className="flex flex-wrap p-8 gap-16 items-center justify-center">
        {list.map(Sponsor)}
      </section>
    </>
  );
}

export default function Sponsors() {
  return (
    <section className="flex flex-col items-center justify-center">
      {sponsorLists.map(SponsorList)}
    </section>
  );
}
