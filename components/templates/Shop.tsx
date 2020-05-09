import React from 'react';
import PropTypes from 'prop-types';

import StoreBanner from '../molecules/banner/StoreBanner';
import SectionTags from '../molecules/SectionTags';
import MSObject from '../../myshop/ms_object';

const Shop = ({ shopInfos }) => {
    const bannerInfos = MSObject.mapKeys(shopInfos, { name: 'title' });
    const tagSections = shopInfos.productTags.map((p) => MSObject.mapKeys(p, { count: 'counter' }));

    return (
        <div className='container'>
            <StoreBanner {...bannerInfos} />
            <SectionTags sections={tagSections} />
        </div>
    );
};

Shop.propTypes = {
    shopInfos: PropTypes.object.isRequired,
};

export default Shop;
