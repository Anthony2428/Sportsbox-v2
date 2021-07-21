import React, {useEffect, useState} from "react";
import CardContainer from "../CardContainer";
import NewsContext from "../../utils/newsContext";
import DataServices from "../../utils/DataServices";

function Newsfeed({sport}) {
        const [allNews, setAllNews] = useState([]);

        useEffect(() => {
          const fetchMyData = async () => {
                  const data = await DataServices.newsHandler(sport);
                      setAllNews(data);
          };
      fetchMyData();
          }, [sport]);

          return (
            <NewsContext.Provider value={{ allNews }}>
                  <CardContainer sport={sport}/>
            </NewsContext.Provider>
          );
};
  
export default Newsfeed;
  