import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ModalNotesProps {
	open?: boolean;
	contexto: 'create' | 'update' | 'delete';
}

const initialState: ModalNotesProps = {
	open: false,
	contexto: 'create',
};

const modalNotesSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		showModalNotes: (state, action: PayloadAction<ModalNotesProps>) => {
			return {
				open: true,
				contexto: action.payload.contexto,
			};
		},
		hideModalNotes: (state, action: PayloadAction<ModalNotesProps>) => {
			return {
				open: false,
				contexto: action.payload.contexto,
			};
		},
	},
});
export const { showModalNotes, hideModalNotes } = modalNotesSlice.actions;

export default modalNotesSlice.reducer;
