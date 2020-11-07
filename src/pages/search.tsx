import PropTypes from 'prop-types';
import React from 'react';
import { GetServerSideProps } from 'next';

import { SearchResults } from '~/components/templates/SearchResults';
import { TheNavBarWithState } from '~/components/organisms/TheNavBar';

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
    props: {
        products: [1, 4, 2],
        query: ctx.query.q,
    },
});

export interface SearchResultsProps {
    query: string;
    products: any[];
}

const SearchPage: React.FC<SearchResultsProps> = ({ products, query }) => (
    <>
        <TheNavBarWithState />
        <SearchResults query={Array.isArray(query) ? query[0] : query} products={products} />
    </>
);

export default SearchPage;
