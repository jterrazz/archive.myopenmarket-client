import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ query, products }) => (
    <div>
        <h1>Results for {query}</h1>
        <ul>
            {products.map((product) => (
                <li key={product}>{product}</li>
            ))}
        </ul>
    </div>
);

SearchResults.propTypes = {
    query: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
};

export default SearchResults;
