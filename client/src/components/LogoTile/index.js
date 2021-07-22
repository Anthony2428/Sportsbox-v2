<<<<<<< HEAD
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
=======
import React from "react";const LogoTile=({name,logo,content,subtitle})=>{return(<div className="tile is-parent flex-col mt-4" style={{textAlign:'center',width:'150%'}}><article className="tile is-child"><p className="title has-text-white">{name}</p><figure className="image is-4by3"><img src={logo}/></figure></article><article className="tile is-child" style={{textAlign:"center"}}><p className="title has-text-white">{content}</p><p className="subtitle has-text-grey">{subtitle}</p></article></div>)};export default LogoTile
>>>>>>> 09eceb2ec7c4877329cdcd3aaa9b0efe833ab6d9
