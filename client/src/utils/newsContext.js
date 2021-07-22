import React from "react";

const NewsContext = React.createContext({
  NewsID: '',
  Title: '',
  OriginalSourceUrl: '',
  OriginalSourceName: '',
  Team: '',
  TimeAgo: '',
  TermsOfUse: '',
  Content: ''
});

export default NewsContext;
