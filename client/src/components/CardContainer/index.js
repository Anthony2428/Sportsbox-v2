import React, { useContext } from "react";
import NewsContext from "../../utils/newsContext";
import NewsLogo from "../NewsLogo";
function CardContainer({sport}) {
    const { allNews } = useContext(NewsContext);

    const allJSX = allNews.map(news => {
        return (
      <div key={news.NewsID} className="column is-6 mb-5">
        <div className="columns is-multiline box">
          <NewsLogo sport={sport} teamName={news.Team}/>
          <div className="column is-8">
            <span><small className="has-text-grey-dark">{news.TimeAgo}</small></span>
            <h2 className="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">{news.Title}</h2>
            <p className="subtitle has-text-grey">{news.Content}</p>
            <a href={news.OriginalSourceUrl}>Read More</a>
          </div>
        </div>
      </div>
        )
    });
    return allJSX;
};
export default CardContainer;
