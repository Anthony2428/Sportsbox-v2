<<<<<<< HEAD
import React from "react";
import "./style.css";

function TeamCard({sport, team}) {
        const allJSX = team.map(Team => {
            return (
                <a key={Team.TeamID} href={`/${sport}/teams/${Team.teamName}`} className="m-5">
                    <article className="tile is-child box team-card" style={{backgroundImage: `linear-gradient(180deg, #${Team.primaryColor}, #${Team.secondaryColor})`}}>
                    <p className="title" style={{color: 'gainsboro' }}>{Team.city} {Team.teamName}</p>
                    <figure className="image is-4by3">
                        <img src={Team.logoURL} alt="Team Logo"/>
                    </figure>
                    </article>
                </a>
        )});
        return allJSX;
}
export default TeamCard;
=======
import React from "react";import "./style.css";function TeamCard({sport,team}){const allJSX=team.map(Team=>{return(<a key={Team.TeamID}href={`/${sport}/teams/${Team.teamName}`}className="m-5"><article className="tile is-child box team-card" style={{backgroundImage:`linear-gradient(180deg, #${Team.primaryColor}, #${Team.secondaryColor})`}}><p className="title" style={{color:'gainsboro'}}>{Team.city}{Team.teamName}</p><figure className="image is-4by3"><img src={Team.logoURL}/></figure></article></a>)});return allJSX}
export default TeamCard
>>>>>>> 09eceb2ec7c4877329cdcd3aaa9b0efe833ab6d9
