import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StoreBanner from '../organisms/banner/StoreBanner';
import SectionTags from '../molecules/SectionTags';
import ProductCellsGrid from '../organisms/grid/ProductCells';
import { TObject, TRouter, TLogger } from '@tom';

import r from 'next/router';
const router = new TRouter(r);
const logger = new TLogger(__filename);

const Shop = ({ shopInfos, defaultProducts, getProducts }) => {
    const bannerInfos = TObject.mapKeys(shopInfos, { name: 'title' });
    const tagSections = shopInfos.productTags.map((p) => TObject.mapKeys(p, { count: 'counter' }));
    const [displayedProducts, setDisplayedProducts] = useState([]);

    useEffect(() => {
        setDisplayedProducts(defaultProducts);
    }, []);

    const _onTagFocusChange = async (tag) => {
        logger.info('focus change2222', { extra: 20, heeeee: true });
        getProducts(tag).then(setDisplayedProducts);
        await router.silentlyUpdateQuery({ tag: tag.name });
    };

    return (
        <div className='container'>
            <StoreBanner {...bannerInfos} />
            <SectionTags tags={tagSections} onTagFocusChange={_onTagFocusChange} />
            <ProductCellsGrid products={displayedProducts} />
        </div>
    );
};

Shop.propTypes = {
    shopInfos: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired,
    defaultProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Shop;
