import PropTypes from 'prop-types';
import React from 'react';
import { GetServerSideProps } from 'next';

import SearchResults from '../components/templates/SearchResults';

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
    props: {
        products: [1, 4, 2],
        query: ctx.query.q,
    },
});

const SearchPage = ({ products, query }) => (
    <SearchResults query={Array.isArray(query) ? query[0] : query} products={products} />
);

SearchPage.propTypes = {
    products: PropTypes.array,
    query: PropTypes.string.isRequired,
};

export default SearchPage;
