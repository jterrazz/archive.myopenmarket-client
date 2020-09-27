import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StoreBanner from '~/components//molecules/banners/StoreBanner';
import SectionTags from '~/components/molecules/SectionTags';
import ProductCellsGrid from '~/components/organisms/grids/ProductCells';

const Shop = ({ shopInfos, defaultProducts, getProducts }) => {
    // const bannerInfos = Object.prototype.mapKeys(shopInfos, { name: 'title' });
    // const tagSections = shopInfos.productTags.map((p) => Object.prototype.mapKeys(p, { count: 'counter' }));
    const [displayedProducts, setDisplayedProducts] = useState([]);

    useEffect(() => {
        setDisplayedProducts(defaultProducts);
    }, []);

    const _onTagFocusChange = async (tag) => {
        getProducts(tag).then(setDisplayedProducts);
        // await router.silentlyUpdateQuery({ tag: tag.name });
    };

    return (
        <div className='container'>
            {/*<StoreBanner {...bannerInfos} />*/}
            {/*<SectionTags tags={tagSections} onTagFocusChange={_onTagFocusChange} />*/}
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
