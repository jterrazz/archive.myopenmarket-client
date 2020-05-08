import React from 'react';
import PropTypes from 'prop-types';
import { GetServerSideProps } from 'next';

import Shop from '../../components/templates/Shop';

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
    props: {
        shopInfos: {
            name: 'ok',
            description: 'efef',
            photoUrl: 'def',
            city: 'blyat',
        },
    },
});

const ShopPage = (props) => <Shop {...props} />;

ShopPage.propTypes = {
    shopInfos: PropTypes.object.isRequired,
};

export default ShopPage;
