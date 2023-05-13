import { Box, Button, TextField } from '@mui/material';

export const LoginForm: React.FC = () => {
	return (
		<Box
			component={'form'}
			marginX={'auto'}
			width={'80%'}
			display={'flex'}
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'center'}
			gap={3}
		>
			<TextField
				label={'Usuário'}
				variant="standard"
				sx={{
					'&:focus': {
						color: 'black',
					},
				}}
				fullWidth
			></TextField>
			<TextField label={'Senha'} variant="standard" fullWidth></TextField>
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
