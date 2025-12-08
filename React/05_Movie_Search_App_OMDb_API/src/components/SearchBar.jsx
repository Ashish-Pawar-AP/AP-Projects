import React from "react";

function SearchBar({ onSearch }) {
    const [input, setInput] = React.useState("");
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSearch = () => {
        onSearch(input);
    };

    return (
        <div className="flex gap-2 p-4">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search movies..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleSearch} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Search
            </button>
        </div>
    );
}

export default SearchBar;
