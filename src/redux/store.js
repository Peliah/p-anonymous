// store/index.js
import { createStore } from 'redux';
import diaryReducer from './reducer'

const store = createStore(diaryReducer);

export default store;
