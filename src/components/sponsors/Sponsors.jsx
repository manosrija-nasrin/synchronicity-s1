import SectionTitle from "../lib/SectionTitle";

//import titleSponsors from "../../data/sponsorsData/titleSponsors";
//import goldSponsors from "../../data/sponsorsData/goldSponsors";
//import silverSponsors from "../../data/sponsorsData/silverSponsors";
//import bronzeSponsors from "../../data/sponsorsData/bronzeSponsors";
//import genericSponsors from "../../data/sponsorsData/genericSponsors";
import newSponsors from "../../data/sponsorsData/newSponsors";

/*const sponsorLists = [
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
];*/

const sponsorLists = [
    {
      name: "Sponsors",
      list: newSponsors,
    }
];

function Sponsor(props) {
  return (
    <div className="flex items-center justify-center">
      <a href={props.sponsorWebsiteURL} rel="noreferrer" target="_blank">
        <img src={props.sponsorLogoURL} alt={props.name} className="w-96" />
      </a>
    </div>
  );
}

function SponsorList({ name, list }) {
  return (
    <>
      {/* <SectionTitle title={name} fontSize={"28"} /> */}
      <section className="flex flex-wrap items-center justify-center gap-16 p-8">
        {list.map(Sponsor)}
      </section>
    </>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="pt-16">
      <SectionTitle title={"Our Sponsors"} />
      <section className="flex flex-col items-center justify-center">
        {sponsorLists.map(SponsorList)}
      </section>
    </section>
  );
}
