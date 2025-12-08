import React from "react";

function MovieDetails({ movie, close }) {
    if (!movie) {
        return <div>No movie details available.</div>;
    }
    console.log(movie.Title);
    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
                <button
                    onClick={close}
                    className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Close
                </button>
                <div className="flex flex-col md:flex-row gap-6 ">
                    <img
                        src={
                            movie.Poster !== "N/A"
                                ? movie.Poster
                                : "https://via.placeholder.com/150"
                        }
                        alt={movie.Title}
                        className="w-48 h-auto rounded shadow-md"
                    />
                    <div className="flex-1 text-gray-800">
                        <h2 className="text-3xl font-bold mb-4 pl-10"> {movie.Title}</h2>
                        <p className="mb-2"><strong>Year:</strong> {movie.Year}</p>
                        <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
                        <p className="mb-2"><strong>Director:</strong> {movie.Director}</p>
                        <p className="mb-2"><strong>Actors:</strong> {movie.Actors}</p>
                        <p className="mb-2"><strong>Plot:</strong> {movie.Plot}</p>
                        <p className="mb-2"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
