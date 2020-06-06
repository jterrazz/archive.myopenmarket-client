import React from 'react';
import PropTypes from 'prop-types';
import { GetServerSideProps } from 'next';
import { TObject, TRouter, TLogger } from '@tom';

import Shop from '../../components/templates/Shop';

const tLogger = new TLogger(__filename);

const _getProducts = async (tag) => {
    return [{ name: tag.name }];
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const shopInfos = {
        name: 'ok',
        description: 'efef',
        photoUrl: 'https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png',
        city: 'blyat',
        productTags: [
            { name: 'tag0', count: 23 },
            { name: 'tag1', count: 23 },
            { name: 'tag2', count: 23 },
        ],
    };
    let selectedTagIndex = shopInfos.productTags.findIndex((p) => p.name == ctx.query.tag);
    if (selectedTagIndex === -1) selectedTagIndex = 0;

    return {
        props: {
            shopInfos,
            defaultProducts: await _getProducts(shopInfos.productTags[selectedTagIndex]),
        },
    };
};

const ShopPage = (props) => <Shop {...props} getProducts={_getProducts} />;

ShopPage.propTypes = {
    shopInfos: PropTypes.object.isRequired,
};

export default ShopPage;
