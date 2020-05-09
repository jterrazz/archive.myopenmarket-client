import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../atoms/Image';

const StoreBanner = ({ title, city, description, photoUrl }) => (
    <div className='d-flex'>
        <Image src={photoUrl} className='x-5em y-5em' rounded />
        <div>
            <h1>{title}</h1>
            <div>{city}</div>
            <p>{description}</p>
        </div>
    </div>
);

StoreBanner.propTypes = {
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
};

export default StoreBanner;
