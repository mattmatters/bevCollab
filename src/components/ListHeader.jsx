import React, { PropTypes } from 'react';

const propTypes = {
  view: PropTypes.string,
  edit: PropTypes.bool,
};

const ListHeader = ({ view, edit }) => (
  <div className="list-header row">
    <div className="col-xs-2">
      {
        view !== 'all' ? <button className="btn-success"><i className="fa fa-floppy-o" aria-hidden="true" /></button>
                       : ''
      }
    </div>
    <div className="col-xs-8">
      <h3> {view} </h3>
      {edit ? <p>edit</p> : ''}
    </div>
    <div className="col-xs-2">
      {
        edit ? <button><i className="fa fa-arrow-left" aria-hidden="true" /> </button>
             : ''
      }
    </div>
  </div>
);

ListHeader.propTypes = propTypes;

export default ListHeader;