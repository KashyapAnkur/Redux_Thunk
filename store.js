import {createStore, applyMiddleware, combineReducers} from 'redux';
import Reducer from './reducer';
import Reducer2 from './reducer2';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({reducer1:Reducer, reducer2:Reducer2});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;