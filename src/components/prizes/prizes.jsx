import "./Prizes.css";
import { Prizeinfo } from "../../data/prizesData";
export function Prize() {
  return (
    <div className="grid">
      {/* <h1>{props.type}</h1> */}
      {
        Prizeinfo.map((element)=>(
          <PrizeItem prize={element}/>
        ))
      }
    </div>
  );
}

function PrizeItem({prize}) {
  return (
    <div className="theme_item" style={{height:"200px"}}>
      <div className="icon" >{prize.icon}</div>
      <h2>{prize.type}</h2>
      <p>{prize.content}</p>
    </div>
  );
}
