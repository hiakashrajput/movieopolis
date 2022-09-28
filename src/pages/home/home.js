import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bd4f6f1da37a84434cc93c8e423fc532&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link key={movie.id} class='poster-content' to={`/movie/${movie.id}`} >
                                <div className="poster-image">
                                    <img alt='movie-poster' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="poster-image__overlay">
                                    <div className="poster-image__title">{movie ? movie.original_title : ""}</div>
                                    <div className="poster-image__runtime">
                                        {movie ? movie.release_date : "No data"}
                                        <span className="poster-image__rating">
                                            {movie ? movie.vote_average : "No data"}
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                    <div className="poster-image__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home