import React, { PropTypes } from 'react';

const propTypes = {
  edit: PropTypes.bool.isRequired,
  item: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    style: PropTypes.string,
    instructions: PropTypes.string,
  })),
};

// eslint-disable-next-line
const ItemFullView = ({ edit, item }) => (
  <div>
    <div className="row">
      <div className="col-xs-8">
        <h3>{item.name}</h3>
      </div>
      <div className="col-xs-4">
        <p>{item.style}</p>
      </div>
    </div>
    <h5>Instructions</h5>
    <p>{item.instructions}</p>
  </div>
);

ItemFullView.propTypes = propTypes;

export default ItemFullView;
