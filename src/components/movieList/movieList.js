import React, { useEffect, useState } from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=bd4f6f1da37a84434cc93c8e423fc532&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList