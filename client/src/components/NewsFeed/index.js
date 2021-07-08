import React, {useEffect, useState} from "react";
import CardContainer from "../CardContainer";
import NewsContext from "../../utils/newsContext";


function Newsfeed() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [allNews, setAllNews] = useState([]);
      
        useEffect(() => {
          fetch("https://fly.sportsdata.io/v3/nba/scores/json/News?key=9a108b6dad1848478e8b7308446476ea")
            .then(res => res.json())
            .then((result) => {
                result.map( (each) => {
                    return {
                      NewsID: each.NewsID,
                      Title: each.Title,
                      OriginalSourceUrl: each.OriginalSourceUrl,
                      OriginalSourceName: each.OriginalSource,
                      Team: each.Team,
                      TimeAgo: each.TimeAgo,
                      TermsOfUse: each.TermsOfUse,
                      Content: each.Content,
                    }
                })
                setIsLoaded(true);
                setAllNews(result);
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, []);
      
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <NewsContext.Provider value={{ allNews }}>
              <div>
                <h1 className="text-center">Welcome to SportsBox</h1>
                <h3 className="text-center">Here's the latest News!</h3>
                <div>
                    <CardContainer />
                </div>
              </div>
            </NewsContext.Provider>
          );
        };
};
  
export default Newsfeed;
  