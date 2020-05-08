import React from 'react';
import PropTypes from 'prop-types';
import InformationHeader from '../organisms/PresentationBanner';
import MSObject from '../../myshop/ms_object';

const Shop = ({ shopInfos }) => {
    const headerInfos = MSObject.mapKeys(shopInfos, { name: 'title' });

    return (
        <div className='container'>
            <InformationHeader {...headerInfos} />
        </div>
    );
};

Shop.propTypes = {
    shopInfos: PropTypes.object.isRequired,
};

export default Shop;
