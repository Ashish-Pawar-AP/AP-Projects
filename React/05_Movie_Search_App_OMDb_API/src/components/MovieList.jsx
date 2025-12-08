import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onMovieSelect }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onClick={() => onMovieSelect(movie.imdbID)}
                />
            ))}
        </div>
    );
}

export default MovieList;
