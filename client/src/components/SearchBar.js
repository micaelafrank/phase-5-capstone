import React from "react";

function SearchBar({ search, handleSearch }){
    return(
        <div className="searchbar" style={{alignItems: 'center', textAlign:"center", justifyContent: 'center'}}>
            <label className="searchBar" htmlFor="search">Search for an expense by name or category:</label>
            <input
            type="text"
            id="search"
            value={search}
            name="search"
            placeholder="Start typing..."
            onChange={(e) => (handleSearch(e.target.value))}
            />
        </div>
    )
}

export default SearchBar;