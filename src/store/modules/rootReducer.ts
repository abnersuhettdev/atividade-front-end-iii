import { combineReducers } from '@reduxjs/toolkit';

import usersSlice from './User/usersSlice';

const rootReducer = combineReducers({
	users: usersSlice,
});

export default rootReducer;
