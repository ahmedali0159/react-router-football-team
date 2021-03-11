import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faFutbol, faFlag, faMars  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import './TeamDetail.css';
import malePicture from '../../images/male.png';
import femalePicture from '../../images/female.png';

import { useParams } from 'react-router';

const TeamDetail = () => {
    const {teamId} = useParams();
    const[details, setDetails] = useState([]);

    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.teams[0]))
    }, [teamId])

   
    return (
        <div className="bg-color">
             <img style={{ width:"100%"}} src={details.strTeamBanner} alt=""/>
            <div class="details-div card mb-3">
  <div className="row g-0">
    <div className="col-md-7">
      <div className="card-body">
        <h2 className="card-title">{details.strTeam}</h2>
        <p className="card-text"><FontAwesomeIcon icon={faHistory} /> Founded: {details.intFormedYear}</p>
        <p className="card-text"><FontAwesomeIcon icon={faFlag} /> Country: {details.strCountry}</p>
        <p className="card-text"><FontAwesomeIcon icon={faFutbol} /> Sport Type: {details.strSport}</p>
        <p className="card-text"><FontAwesomeIcon icon={faMars} /> Gender: {details.strGender}</p>
      </div>
      </div>
    <div class="col-md-5">
        {
            details.strGender === "Male" ? ( <img  style={{ width:"100%",padding:"10px"}} src={malePicture} alt=""/>):
            ( <img  style={{ width:"100%",padding:"10px"}} src={femalePicture} alt=""/>)
        }
     
    </div>
  </div>
</div>
       <div className="description-box">
        <p>{details.strDescriptionEN}</p>   
     </div>
     <div className="social-style  row d-flex justify-content-center align-items-center" style={{marginTop:"5%"}}>
         <a href={`https://${details.strTwitter}`} target="blank">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={`https://${details.strFacebook}`} target="blank">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a  href={`https://${details.strYoutube}`} target="blank">
          <FontAwesomeIcon icon={faYoutube} />
          </a>
     </div>
    </div>
    );
};

export default TeamDetail;