import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import Search from '../components/templates/Search';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            products: [1, 4, 2],
        },
    };
};

const SearchPage = ({ products }) => {
    const {
        query: { q: query },
    } = useRouter();

    return <Search query={Array.isArray(query) ? query[0] : query} products={products} />;
};

SearchPage.propTypes = {
    products: PropTypes.array,
};

export default SearchPage;
