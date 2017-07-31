import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SplitReducer from './SplitReducer';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  auth: AuthReducer,
  albums: SplitReducer,
  books: LibraryReducer
});
