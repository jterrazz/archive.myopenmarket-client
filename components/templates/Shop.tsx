import React from 'react';
import PropTypes from 'prop-types';
import InformationHeader from '../molecules/PresentationBanner';
import MSObject from '../../myshop/ms_object';
import SectionTags from '../molecules/SectionTags';

const Shop = ({ shopInfos }) => {
    const headerInfos = MSObject.mapKeys(shopInfos, { name: 'title' });
    const sections = shopInfos.productTags.map((p) => MSObject.mapKeys(p, { count: 'counter' }));

    return (
        <div className='container'>
            <InformationHeader {...headerInfos} />
            <SectionTags sections={sections} />
        </div>
    );
};

Shop.propTypes = {
    shopInfos: PropTypes.object.isRequired,
};

export default Shop;
