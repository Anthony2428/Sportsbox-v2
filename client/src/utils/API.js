
function getNews() {
    fetch("https://fly.sportsdata.io/v3/nba/scores/json/News?key=9a108b6dad1848478e8b7308446476ea")
      .then(res => res.json())
      .then(news => {
          news.map( (each) => {
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
      })
}

export default getNews;