import "./Team.css";

function JoinTeam({ placeholder, formLink, content }) {
  return (
    <div className="joinT">
      <h3>{content} </h3>
    </div>
  );
}

function Member({ info }) {
  const { github, role, Name, img, linkedin } = info;
  return (
    <div className="member">
      <img src={img} alt="DUHacks"></img>
      <div className="members-link">
        <h3>{Name}</h3>
        <p>{role}</p>
        <a href={github} rel="noreferrer" target="_blank">
          <i class="fab fa-2x fa-github"></i>
        </a>
        <a href={linkedin} rel="noreferrer" target="_blank">
          <i class="fab fa-2x fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export { Member, JoinTeam };
