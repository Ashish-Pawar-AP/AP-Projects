import React from 'react'

function MovieCard({ movie, onClick }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} alt={movie.Title} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.Title}</h3>
                    <p className="text-sm text-gray-600">{movie.Year}</p>
                </div>
        </div>
    )
}

export default MovieCard