import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
	hideLoading,
	showLoading,
} from '../../../../store/modules/Loading/loadingSlice';
import { showSnackbar } from '../../../../store/modules/Snackbar/snackbarSlice';
import { buscarUsuarios } from '../../../../store/modules/User/usersSlice';

export const LoginForm: React.FC = () => {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	const select = useAppSelector(buscarUsuarios);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	function handleLogin(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault();

		const user = select.find((user) => {
			return user.email === email && user.senha === senha;
		});

		if (!email || !senha) {
			dispatch(
				showSnackbar({
					mensagem: 'Insira um email e senha para continuar',
					tipo: 'warning',
				}),
			);
			return;
		}

		if (!user) {
			dispatch(
				showSnackbar({
					mensagem: 'Alguma coisa está errada',
					tipo: 'error',
				}),
			);
			return;
		}

		const userLogged = {
			usuario: user.usuario,
			email: user.email,
		};

		localStorage.setItem('userLogged', JSON.stringify({ userLogged }));
		dispatch(showLoading());
		setTimeout(() => {
			dispatch(hideLoading());
			navigate('/dashboard');
		}, 3000);
	}

	return (
		<Box
			component={'form'}
			marginX={'auto'}
			width={'80%'}
			display={'flex'}
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'center'}
			onSubmit={(ev) => handleLogin(ev)}
			gap={3}
		>
			<TextField
				label={'Email'}
				variant="standard"
				sx={{
					'&:focus': {
						color: 'black',
					},
				}}
				type="email"
				onChange={(ev) => setEmail(ev.target.value)}
				fullWidth
			></TextField>
			<TextField
				label={'Senha'}
				variant="standard"
				fullWidth
				type="password"
				onChange={(ev) => setSenha(ev.target.value)}
			></TextField>
			<Button
				fullWidth
				type="submit"
				variant="contained"
				sx={{
					padding: '16px',
					borderRadius: '100px',
					background: '#576CA8',

					'&:hover': {
						background: '#F786AA',
					},
				}}
			>
				Entrar
			</Button>
		</Box>
	);
};
