import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
};

const Item = ({ name, style }) => (
  <li>
    <div className="row">
      <div className="col-xs-4 text-left">
        {name}
      </div>
      <div className="col-xs-4 text-left">
        {style}
      </div>
      <div className="col-xs-4 text-right">
        <button className="btn-primary">
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
