import React from "react";
import PropTypes from "prop-types";

const Search = ({query, products}) => (
    <div>
        <h1>Results for {query}</h1>
        <ul>
            {products.map(product => (
                <li>{product}</li>
            ))}
        </ul>
    </div>
);

Search.propTypes = {
    query: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired
};

export default Search