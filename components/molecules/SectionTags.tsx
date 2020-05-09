import React from 'react';
import PropTypes from 'prop-types';

const SectionTags = ({ sections }) => {
    const _renderTag = ({ name, counter, active }) => (
        <div className='d-flex mr-3'>
            <div className={active ? '' : 'text-muted'}>{name}</div>
            <div className='tag ml-2'>{counter}</div>
        </div>
    );

    return <div className='d-flex'>{sections.map(_renderTag)}</div>;
};

SectionTags.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SectionTags;
