import React from 'react';
import PropTypes from 'prop-types';

const SectionTags = ({ tags, onTagFocusChange }) => {
    const _onTagClick = async (i) => onTagFocusChange(tags[i]);

    const _renderTag = ({ name, counter, active }, i: number) => (
        <div className='d-flex mr-3' key={name} onClick={() => _onTagClick(i)}>
            <div className={active ? '' : 'text-muted'}>{name}</div>
            <div className='tag ml-2'>{counter}</div>
        </div>
    );

    return <div className='d-flex'>{tags.map(_renderTag)}</div>;
};

SectionTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    onTagFocusChange: PropTypes.func,
};

export default SectionTags;
