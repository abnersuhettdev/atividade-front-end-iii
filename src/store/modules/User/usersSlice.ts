import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../..';

const usersAdapter = createEntityAdapter<IUser>({
	selectId: (estado) => estado.email,
});

export const { selectAll: buscarUsuarios } = usersAdapter.getSelectors(
	(global: RootState) => global.users,
);

const usersSlice = createSlice({
	name: 'users',
	initialState: usersAdapter.getInitialState(),
	reducers: {
		adicionarUsuario: usersAdapter.addOne,
	},
});

export const { adicionarUsuario } = usersSlice.actions;

export default usersSlice.reducer;
