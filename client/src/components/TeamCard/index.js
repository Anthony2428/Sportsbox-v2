import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function TeamCard({sport, team}) {
        const allJSX = team.map(Team => {
            return (
                <Link key={Team.TeamID} to={`/${sport}/teams/${Team.teamName}`} className="m-5">
                    <article className="tile is-child box team-card" style={{backgroundImage: `linear-gradient(180deg, #${Team.primaryColor}, #${Team.secondaryColor})`}}>
                    <p className="title" style={{color: 'gainsboro' }}>{Team.city} {Team.teamName}</p>
                    <figure className="image is-4by3">
                        <img src={Team.logoURL} alt="Team Logo"/>
                    </figure>
                    </article>
                </Link>
        )});
        return allJSX;
}
export default TeamCard;