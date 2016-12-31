import React, { PropTypes } from 'react';

const propTypes = {
  edit: PropTypes.bool.isRequired,
  item: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    style: PropTypes.string,
    instructions: PropTypes.string,
  })),
  submitItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

// eslint-disable-next-line
const ItemFullView = ({ edit, item, submitItem, editItem, deleteItem }) => (
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
    <div className="right-block">
      {
        edit ?
          <button className="btn-success" onClick={submitItem()}>
            <i className="fa fa-floppy" aria-hidden="true" />
          </button>
             :
          <button className="btn-primary" onClick={editItem()}>
            <i className="fa fa-wrench" aria-hidden="true" />
          </button>
      }
      <button className="btn-danger" onClick={deleteItem()}>
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </div>
  </div>
);

ItemFullView.propTypes = propTypes;

export default ItemFullView;
