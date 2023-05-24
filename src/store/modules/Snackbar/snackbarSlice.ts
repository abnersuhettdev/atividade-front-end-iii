import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SnackbarProps {
	show: boolean;
	mensagem: string;
	tipo: 'warning' | 'error' | 'success';
}

interface SnackAction {
	mensagem: string;
	tipo: 'warning' | 'error' | 'success';
}

const initialState: SnackbarProps = {
	show: false,
	mensagem: '',
	tipo: 'warning',
};

const snackbarSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		showSnackbar: (state, action: PayloadAction<SnackAction>) => {
			return {
				show: true,
				mensagem: action.payload.mensagem,
				tipo: action.payload.tipo,
			};
		},
		hideSnackbar: (state, action: PayloadAction<SnackAction>) => {
			return {
				show: false,
				mensagem: action.payload.mensagem,
				tipo: action.payload.tipo,
			};
		},
	},
});
export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
