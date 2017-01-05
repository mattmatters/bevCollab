import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  itemId: PropTypes.number,
  editItem: PropTypes.func,
};

const Item = ({ name, style, itemId, editItem }) => (
  <li>
    <div className="row">
      <div className="col-xs-4 text-left">
        {name}
      </div>
      <div className="col-xs-4 text-left">
        <i>{style}</i>
      </div>
      <div className="col-xs-4 text-right">
        <button className="btn-primary" onClick={() => editItem(itemId)}>
          <i className="fa fa-wrench" aria-hidden="true" />
        </button>
        <button className="btn-danger">
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
      </div>
    </div>
  </li>
);

Item.propTypes = propTypes;

export default Item;
