import { combineReducers } from '@reduxjs/toolkit';

import loadingSlice from './Loading/loadingSlice';
import modalNotesSlice from './ModalNotes/modalNotesSlice';
import snackbarSlice from './Snackbar/snackbarSlice';
import usersSlice from './User/usersSlice';

const rootReducer = combineReducers({
	users: usersSlice,
	loading: loadingSlice,
	snackbar: snackbarSlice,
	modal: modalNotesSlice,
});

export default rootReducer;
