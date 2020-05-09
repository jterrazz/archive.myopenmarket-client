import React from 'react';
import PropTypes from 'prop-types';

const _renderProductCell = ({ name }) => <div key={name}>{name}</div>;

const ProductCellsGrid = ({ products }) => {
    return <div>{products.map(_renderProductCell)}</div>;
};

ProductCellsGrid.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCellsGrid;
