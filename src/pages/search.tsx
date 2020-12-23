import React from 'react';
import { GetServerSideProps } from 'next';

import { SearchResults } from '~/components/templates/SearchResults';

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
    <div>
        <SearchResults query={Array.isArray(query) ? query[0] : query} products={products} />
    </div>
);

export default SearchPage;
