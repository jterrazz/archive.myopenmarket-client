import React from 'react';
import PropTypes from 'prop-types';
import InformationHeader from '../organisms/PresentationBanner';

const Shop = ({ shopInfos }) => {
    const headerInfos = {
        title: 'ok',
        description: 'yo',
        photoUrl: 'yo',
        city: 'blyat',
    };

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
