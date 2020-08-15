import React, { useState } from 'react';
import PropTypes from 'prop-types';

// :focus-within

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
        <div className='flex-fill d-flex ml-3 mr-5 tom-input--gray rounded-pill'>
            <input
                value={searchedValue}
                placeholder='hello'
                onChange={(e) => setSearchedValue(e.target.value)}
                onKeyDown={_handleKeyDown}
                className='flex-fill border-0 bg-transparent p-2 px-4 tom-text--medium input--no-outline'
            />
            {/*<button onClick={() => _handleSearch(searchedValue)}>Find me the best !</button>*/}
        </div>
    );
};

// Propositions
// Store 1
// Store 2
// Search all stores
// Product 1
// Product 2
// Search all products

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
