import React from "react";
import Banner from "./Banner/Banner";
import ListMovie from "./ListMovie/ListMovie";

const Home = () => {
    const listMovieHome = [
        {
            id: 1,
            type: "now_playing",
            title: "Now Playing Movie",
        },
        {
            id: 2,
            type: "upcoming",
            title: "Upcoming Movie",
        },
        {
            id: 3,
            type: "top_rated",
            title: "Top Rated Movie",
        },
    ];
    return (
        <>
            <Banner></Banner>
            {listMovieHome.map((item) => (
                <ListMovie key={item.id} type={item.type} title={item.title}></ListMovie>
            ))}
        </>
    );
};

export default Home;
