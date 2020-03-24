import React, {useState} from "react";
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const [searchedValue, setSearchedValue] = useState("");

    const _handleKeyDown = e => {
        if (e.key === 'Enter') {
            props.handleSearch(searchedValue);
        }
    }

    return (
        <input
            value={searchedValue}
            placeholder="hello"
            onChange={e => setSearchedValue(e.target.value)}
            onKeyDown={_handleKeyDown}
            className="flex-fill bg-transparent border-0 text-white mt-5"
        />
    )
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;