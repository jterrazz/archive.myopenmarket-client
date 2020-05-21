import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StoreBanner from '../organisms/banner/StoreBanner';
import SectionTags from '../molecules/SectionTags';
import ProductCellsGrid from '../organisms/grid/ProductCells';
import { TOMObject, TOMRouter } from '@tom';

const Shop = ({ shopInfos, defaultProducts, getProducts }) => {
    const bannerInfos = TOMObject.mapKeys(shopInfos, { name: 'title' });
    const tagSections = shopInfos.productTags.map((p) => TOMObject.mapKeys(p, { count: 'counter' }));
    const [displayedProducts, setDisplayedProducts] = useState([]);

    // TODO Use only for fetching when clicking another tag, else use default
    useEffect(() => {
        setDisplayedProducts(defaultProducts);
    }, []);

    const _onTagFocusChange = async (tag) => {
        getProducts(tag).then(setDisplayedProducts);
        await TOMRouter.silentlyUpdateQuery({ tag: tag.name });
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
