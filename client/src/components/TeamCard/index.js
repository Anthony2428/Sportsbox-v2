import React from "react";
import "./style.css";

function TeamCard({sport, team}) {
        const allJSX = team.map(Team => {
            return (
                <a key={Team.TeamID} href={`/${sport}/teams/${Team.teamName}`} className="m-5">
                    <article className="tile is-child box team-card" style={{backgroundImage: `linear-gradient(180deg, #${Team.primaryColor}, #${Team.secondaryColor})`}}>
                        <i style={{float: 'right'}} className="fas fa-star fa-lg"></i>
                    <p className="title" style={{color: 'gainsboro' }}>{Team.city} {Team.teamName}</p>
                    <figure className="image is-4by3">
                        <img src={Team.logoURL}/>
                    </figure>
                    </article>
                </a>
        )});
        return allJSX;
}
export default TeamCard;