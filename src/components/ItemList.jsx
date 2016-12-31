import React, { PropTypes } from 'react';
import Item from '../components/item';
import ListHeader from '../components/ListHeader';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    style: PropTypes.string,
  })),
  view: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
};

const ItemList = ({ view, edit, items }) => (
  <div className="container">
    <ListHeader view={view} edit={edit} />
    <ul className="center-block item-list">
      {items.map(item => <Item {...item} />)}
    </ul>
  </div>
);


ItemList.propTypes = propTypes;

export default ItemList;
