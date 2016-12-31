import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { editItem, viewList, newItem } from '../actions/index';

const mapStateToProps = state => ({
  view: state.itemReducer.view,
  edit: state.itemReducer.edit,
});

const mapDispatchToProps = dispatch => ({
  viewAll: () => dispatch(viewList()),
  editItem: itemId => dispatch(editItem(itemId)),
  newItem: () => dispatch(newItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
