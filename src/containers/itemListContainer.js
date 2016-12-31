import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

const mapStateToProps = state => ({
  view: state.itemReducer.view,
  edit: state.itemReducer.edit,
});

export default connect(mapStateToProps)(ItemList);
