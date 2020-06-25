import React from 'react'

const Searcher = ({searchValue, setSearchValue}) => {

    const handleSearch = (event) => {
        console.log(`searching... ${event.target.value}`)
        setSearchValue(event.target.value)
      }

    return (
        <div>
            search: <input
                value={searchValue}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Searcher