import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./team.css";
import { useHistory } from "react-router";
const Team = (props) => {
  const { idTeam, strTeam, strSport, strTeamBadge } = props.team;
  const history = useHistory();
  const showExplore = teamId => {
  const url = `teamdetail/${teamId}`;
  history.push(url);
  }
  return (
    <div className="container col-md-4">
      <div className=" text-center team-style container card" style={{ width: "18rem", height:"450px" }}>
        <img src={strTeamBadge} className="  card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{strTeam}</h5>
          <p className="card-text"></p>
          <p>Sports type: {strSport}</p>
          <button onClick={() => showExplore(idTeam)} className="btn btn-primary"> Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </div>
  );
};

export default Team;
