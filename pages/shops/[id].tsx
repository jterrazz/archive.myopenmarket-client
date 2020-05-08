import React from 'react';
import PropTypes from 'prop-types';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import Shop from '../../components/templates/Shop';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            shopInfos: 0,
        },
    };
};

const ShopPage = ({ shopInfos }) => {
    const {
        query: { q: query },
    } = useRouter();

    return <Shop />;
};

ShopPage.propTypes = {
    shopInfos: PropTypes.object.isRequired,
};

export default ShopPage;
