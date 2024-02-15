import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [listMovie, setListMovie] = useState([]);
    const fetchMovie = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setListMovie(data.results ? data.results : data);
    };
    useEffect(() => {
        fetchMovie();
    }, [url]);
    return listMovie;
};

export default useFetch;
