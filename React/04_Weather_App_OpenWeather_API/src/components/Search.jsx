import { useState } from "react";

export default function Search({ onSearch }) {
  const [text, setText] = useState("");

  return (
    <>
      <div className="flex gap-2 p-4">
        <input
          type="text"
          placeholder="Enter city name..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={() => onSearch(text)} 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Search
        </button>
      </div>
    </>
  );
}
