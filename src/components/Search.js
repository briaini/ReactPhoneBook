import React from 'react'



const Search = () => {
    const [searchValue, setSearchValue] = useState('')

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

export default Search