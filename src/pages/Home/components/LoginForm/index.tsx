import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

export const LoginForm: React.FC = () => {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	function VerificarUsuarioExiste() {}

	function handleLogin(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault();

		VerificarUsuarioExiste();
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
