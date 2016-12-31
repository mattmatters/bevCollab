import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { editItem, viewList } from '../actions/index';

const mapStateToProps = state => ({
  view: state.itemReducer.view,
  edit: state.itemReducer.edit,
});

const mapDispatchToProps = dispatch => ({
  viewAll: () => dispatch(viewList()),
  editItem: itemId => dispatch(editItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
