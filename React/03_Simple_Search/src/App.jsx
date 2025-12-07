import { useState } from 'react'
import './App.css'

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Papaya',
  'Quince',
  'Raspberry',
  'Strawberry',
  'Tomato',
  'Watermelon',
  'Blueberry',
  'Blackberry'
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredItems, setFilteredItems] = useState(items)

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    
    if (value === '') {
      setFilteredItems(items)
    } else {
      const filtered = items.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredItems(filtered)
    }
  }

  return (
    <div className="app">
      <div className="search-container">
        <h1>Simple Search</h1>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="results">
          {filteredItems.length > 0 ? (
            <ul className="items-list">
              {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="no-results">No items found</p>
          )}
        </div>
        <p className="results-count">
          {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
        </p>
      </div>
    </div>
  )
}

export default App

