import React from "react";

const LogoTile = ({name, logo, secondColor}) => {
    return (
        <article className="tile is-parent is-vertical p-5" style={{alignItems: "center", textAlign: "center", margin: "auto"}}>
            <p className="title" style={{color: secondColor}}>{name}</p>
            <figure className="p-5 image is-fullwidth">
                <img src={logo}/>
            </figure>
        </article>
    )
};
export default LogoTile;