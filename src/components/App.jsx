import React, { PropTypes } from 'react';
import ItemList from '../containers/itemListContainer';
import NavBar from '../components/NavBar';

const testItems = [
  {
    name: 'poop',
    style: 'poopy',
  },
  {
    name: 'scoop',
    style: 'sldjf',
  },
];

const propTypes = {
  view: PropTypes.string.isRequired,
};

// eslint-disable-next-line
const App = ({ view }) => (
  <div className="App">
    <div className="container-fluid">
      <NavBar />
    </div>
    <div className="display-box">
      <ItemList items={testItems} />
    </div>
  </div>
);

App.propTypes = propTypes;

export default App;
