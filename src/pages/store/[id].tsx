import React from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';

import Shop from '../../components/templates/ShopOverview';
import { TheNavBarContainerWithState } from '~/components/organisms/TheNavBar';
import { Head, HeadProps } from '~/components/atoms/Head';

const _getProducts = async (tag) => {
    return [{ name: tag.name }];
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const shop = {
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
    let selectedTagIndex = shop.productTags.findIndex((p) => p.name == ctx.query.tag);
    if (selectedTagIndex === -1) selectedTagIndex = 0;

    return {
        props: {
            shop,
            defaultProducts: await _getProducts(shop.productTags[selectedTagIndex]),
        },
    };
};

const ShopPage = ({ head, shop }) => (
    <TheNavBarContainerWithState>
        <Head {...head} />
        {JSON.stringify(shop)}
        {/*<Shop {...shop} getProducts={_getProducts} />*/}
    </TheNavBarContainerWithState>
);

export default ShopPage;
