import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    const style = {
        background: `url("${props.src}")`,
        borderRadius: props.rounded ? '300px' : 0,
    };

    return <div className={`border ${props.className}`} style={style}></div>;
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    rounded: PropTypes.bool,
};

export default Image;
