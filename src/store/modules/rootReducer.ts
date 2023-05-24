import { combineReducers } from '@reduxjs/toolkit';

import loadingSlice from './Loading/loadingSlice';
import snackbarSlice from './Snackbar/snackbarSlice';
import usersSlice from './User/usersSlice';

const rootReducer = combineReducers({
	users: usersSlice,
	loading: loadingSlice,
	snackbar: snackbarSlice,
});

export default rootReducer;
