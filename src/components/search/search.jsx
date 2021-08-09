import React from 'react'


function Search({change_handler}) {
    return (
        <div className="text-center border-none outline-none p-4" style={{}} >
            <input type="search"  placeholder="Search Monsters" onChange={e => change_handler(e.target.value)}/>
      </div>
    )
}

export default Search
