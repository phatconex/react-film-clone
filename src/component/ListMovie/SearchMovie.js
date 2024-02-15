import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import CardMovie from "../CardMovie/CardMovie";

const SearchMovie = () => {
    const [page, setpage] = useState(1);
    const { slug: keySearch } = useParams();
    const listMovie = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=e9e9d8da18ae29fc430845952232787c&query=${keySearch}&page=${page}
    `);
    const [listAllMovie, setListALlMovie] = useState([]);
    const handleShowMore = () => {
        setpage(page + 1);
    };
    useEffect(() => {
        setListALlMovie((prevList) => [...prevList, ...listMovie]);
    }, [listMovie]);
    console.log(listAllMovie);
    return (
        <div className="listmovie">
            <Container>
                <div className="title">
                    <h3>ONLINE STREAMING</h3>
                    <h1>Search Movie</h1>
                </div>
                <Row>
                    {listAllMovie.map((item) => (
                        <Col xs={6} md={3} key={item.id}>
                            <CardMovie
                                id={item.id}
                                title={item.original_title}
                                img={item.poster_path}
                                date={item.release_date}
                                star={item.vote_average}
                            ></CardMovie>
                        </Col>
                    ))}
                </Row>
                <div className="show">
                    <button className="show-more" onClick={handleShowMore}>
                        <i className="fa-solid fa-play"></i> SHOW MORE
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default SearchMovie;
