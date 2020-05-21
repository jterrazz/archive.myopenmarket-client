import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TODO HandleSearch is promise
const SearchBar = ({ handleSearch }) => {
    const [searchedValue, setSearchedValue] = useState('');

    // TODO Handle errors ??? If not, remove this internal ft
    // (Router.push is a promise but should never bug ? So find why it's a promise)
    const _handleSearch = (searchedValue: string) => {
        handleSearch(searchedValue).then().catch();
    };

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') _handleSearch(searchedValue);
    };

    return (
        <>
            <input
                value={searchedValue}
                placeholder='hello'
                onChange={(e) => setSearchedValue(e.target.value)}
                onKeyDown={_handleKeyDown}
                className='flex-fill bg-transparent border-0 text-white mt-5'
            />
            <button onClick={() => _handleSearch(searchedValue)}>Find me the best !</button>
        </>
    );
};

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
