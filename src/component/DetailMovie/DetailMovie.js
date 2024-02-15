import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import "./DetailMovie.css";

const DetailMovie = () => {
    const { slug: movieId } = useParams();
    const dataDetail = useFetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e9e9d8da18ae29fc430845952232787c`);
    const dataVideo = useFetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e9e9d8da18ae29fc430845952232787c`);

    const [show, setShow] = useState(false);
    const [youtubeLink, setYoutubeLink] = useState();

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
        if (dataVideo) {
            const getTrailer = dataVideo.filter((item) => item.type === "Trailer");
            setYoutubeLink(`https://www.youtube.com/embed/${getTrailer[0].key}`);
        }
    };

    return (
        <div className="detail mb-5">
            <Container>
                <Row>
                    <Col lg={3}>
                        <img src={`https://image.tmdb.org/t/p/w500${dataDetail.poster_path}`} alt={dataDetail.original_title} />
                    </Col>
                    <Col lg={9}>
                        <h1>{dataDetail.original_title}</h1>
                        <div className="yearPro d-flex align-items-center gap-2">
                            <p className="year mb-0">{dataDetail.release_date}</p>
                            <p className="kind">{dataDetail.genres && dataDetail.genres.map((item) => item.name).join(",")}</p>
                            <p className="time mb-0">
                                <i className="fa-regular fa-clock"></i> {dataDetail.runtime} min
                            </p>
                        </div>
                        <div className="rate d-flex align-items-center">
                            <p className="number-rate">{dataDetail.vote_average}%</p>
                            <p className="user">user score</p>
                            <p className="playtrailer" onClick={handleShow}>
                                <i className="fa-solid fa-play"></i> Play trailer
                            </p>
                        </div>
                        <h3>Can You Bury Your Past?</h3>
                        <h2>Overview</h2>
                        <p className="overview">{dataDetail.overview}</p>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Trailer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            width="100%"
                            height="500px"
                            src={youtubeLink}
                            title="YouTube video player"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default DetailMovie;
