import { Add } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import Fab from '@mui/material/Fab';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MyAppbar } from '../../shared/components/Appbar';
import MyCard from '../../shared/components/Card';
import { Loading } from '../../shared/components/Loading';
import { ModalNotes } from '../../shared/components/ModalNotes';
import { useAppDispatch } from '../../store/hooks';
import { showModalNotes } from '../../store/modules/ModalNotes/modalNotesSlice';

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
					position: 'relative',
				}}
			>
				<MyAppbar />

				<Grid
					container
					spacing={2}
					padding={2}
					marginTop={1}
					minWidth={'fit-content'}
				>
					<Grid item xs={12} sm={6} md={4}>
						<MyCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<MyCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<MyCard />
					</Grid>
				</Grid>
				<Fab
					sx={{
						position: 'fixed',
						bottom: 0,
						right: 0,
						margin: '30px',
						width: '50px',
						height: '50px',
						background: '#F786AA',

						'&:hover': {
							background: '#576CA8',
						},
					}}
				>
					<IconButton
						onClick={() =>
							dispatch(showModalNotes({ contexto: 'create' }))
						}
					>
						<Add color="action" />
					</IconButton>
				</Fab>
				<Loading />
			</Grid>
			<ModalNotes />
		</>
	);
};
