import React from 'react';
import PropTypes from 'prop-types';
import { GetServerSideProps } from 'next';

import Shop from '../../components/templates/Shop';

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
    props: {
        shopInfos: {
            name: 'ok',
            description: 'efef',
            photoUrl: 'https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png',
            city: 'blyat',
            productTags: [
                { name: 'tag1', count: 23 },
                { name: 'tag2', count: 23 },
                { name: 'tag3', count: 23 },
            ],
        },
    },
});

const ShopPage = (props) => <Shop {...props} />;

ShopPage.propTypes = {
    shopInfos: PropTypes.object.isRequired,
};

export default ShopPage;
