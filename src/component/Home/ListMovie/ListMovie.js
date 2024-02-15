import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CardMovie from "../../CardMovie/CardMovie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../../../useFetch";
const ListMovie = ({ title, type }) => {
    const listMovie = useFetch(`https://api.themoviedb.org/3/movie/${type}?api_key=e9e9d8da18ae29fc430845952232787c&page=1
    `);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="listmovie">
            <Container>
                <div className="title">
                    <h3>ONLINE STREAMING</h3>
                    <h1>{title}</h1>
                </div>
                <Slider {...settings}>
                    {listMovie.map((item) => (
                        <CardMovie
                            key={item.id}
                            id={item.id}
                            title={item.original_title}
                            img={item.poster_path}
                            date={item.release_date}
                            star={item.vote_average}
                        ></CardMovie>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default ListMovie;
