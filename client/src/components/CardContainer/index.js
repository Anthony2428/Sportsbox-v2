import React, { useContext } from "react";
import NewsContext from "../../utils/newsContext";

function CardContainer() {
    const { allNews } = useContext(NewsContext);
    const allJSX = allNews.map(news => {

        return (
            <div className="mt-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=448&q=80" alt="A cat"/>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{news.TimeAgo}</div>
                    <a href={news.OriginalSourceUrl} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{news.Title}</a>
                    <p className="mt-2 text-gray-500">{news.Content}</p>
                </div>
            </div>
        </div>
        )
    });
    return allJSX;
};
export default CardContainer;
