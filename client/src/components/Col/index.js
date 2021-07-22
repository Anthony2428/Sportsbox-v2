import React from 'react';

const Col = ({content1, content2, content3, content4, subtitle1, subtitle2, subtitle3, subtitle4}) => {
    return (
        <div className="tile is-parent is-vertical">
            <article className="tile is-child box" style={{textAlign: "center"}}>
            <p className="title">{content1}</p>
            <p className="subtitle">{subtitle1}</p> 
            </article>
            <article className="tile is-child box" style={{textAlign: "center"}}>
                <p className="title">{content2}</p>
                <p className="subtitle">{subtitle2}</p>        
            </article>
            <article className="tile is-child box" style={{textAlign: "center"}}>
            <p className="title">{content3}</p>
            <p className="subtitle">{subtitle3}</p> 
            </article>
            <article className="tile is-child box" style={{textAlign: "center"}}>
            <p className="title">{content4}</p>
            <p className="subtitle">{subtitle4}</p> 
            </article>
        </div>
    )
};
export default Col;