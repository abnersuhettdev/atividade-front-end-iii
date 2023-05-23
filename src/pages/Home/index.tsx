import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Logo from '../../assets/croppedLogo.png';
import { LoginForm } from './components/LoginForm';
import { ModalCadastro } from './components/Modal';

const Home: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(() => {
		console.log(users);
	}, [users]);

	return (
		<Grid
			container
			sx={{
				width: '100vw',
				height: '100vh',
				background: `linear-gradient(to right top, #ff4d80, #e15dac, #b471c6, #8180cd, #5787c1, #4b7fac, #457797, #456d82, #3f5a6a, #384853, #2f363c, #252627);`,
			}}
		>
			<Grid
				item
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				xs={12}
			>
				<Grid
					item
					sx={{
						width: '300px',
						height: '400px',
						background: 'white',
						borderRadius: '8px',
						padding: '10px',
					}}
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'space-around'}
				>
					<Box
						component="img"
						width={'220px'}
						alignSelf={'center'}
						src={Logo}
					/>

					<LoginForm />

					<Typography variant="caption" textAlign={'center'}>
						Ainda não tem uma conta?{' '}
						<Typography
							variant="caption"
							component={'span'}
							onClick={() => setOpen(true)}
							sx={{
								color: '#631A86',

								'&:hover': {
									textDecoration: 'underline',
								},
							}}
						>
							Criar conta
						</Typography>
					</Typography>
				</Grid>
			</Grid>

			<ModalCadastro
				aberto={open}
				fecharModal={() => setOpen(false)}
				cadastraUsuario={setUsers}
			/>
		</Grid>
	);
};

export default Home;
