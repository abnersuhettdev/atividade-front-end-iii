import { Add } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import Fab from '@mui/material/Fab';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MyAppbar } from '../../shared/components/Appbar';
import { Loading } from '../../shared/components/Loading';
import { useAppDispatch } from '../../store/hooks';

export const Dashboard = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!localStorage.getItem('userLogged')) {
			navigate('/');
		}
	}, [navigate]);

	return (
		<>
			<Grid
				container
				sx={{
					width: '100vw',
					height: '100vh',
					background: `linear-gradient(to right top, #ff4d80, #e15dac, #b471c6, #8180cd, #5787c1, #4b7fac, #457797, #456d82, #3f5a6a, #384853, #2f363c, #252627);`,
				}}
			>
				<MyAppbar />

				<Fab
					sx={{
						position: 'absolute',
						bottom: 0,
						right: 0,
						margin: '10px',
						width: '50px',
						height: '50px',
						background: '#F786AA',

						'&:hover': {
							background: '#576CA8',
						},
					}}
				>
					<IconButton>
						<Add color="action" />
					</IconButton>
				</Fab>

				<Loading />
			</Grid>
		</>
	);
};
