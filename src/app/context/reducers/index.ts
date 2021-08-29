import { combineReducers } from 'redux';
import { AppResizeReducers } from './appResize.reducers';
import { HomeReducers } from './home.reducer';
const mainReducers = combineReducers({
  HOME: HomeReducers.startHomeReducer,
  resizeApp: AppResizeReducers.reducersResizeApp,
});

export default mainReducers;
