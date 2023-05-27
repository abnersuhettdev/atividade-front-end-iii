import { Logout } from '@mui/icons-material';
import {
	AppBar,
	Box,
	Button,
	Divider,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../store/hooks';
import {
	hideLoading,
	showLoading,
} from '../../../store/modules/Loading/loadingSlice';

export const MyAppbar = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	function logout() {
		localStorage.removeItem('userLogged');

		dispatch(showLoading());
		setTimeout(() => {
			dispatch(hideLoading());
			navigate('/');
		}, 3000);
	}

	return (
		<Box sx={{ flexGrow: 1, height: '10vh' }}>
			<AppBar
				position="static"
				sx={{
					background: 'transparent',
					boxShadow: 0,
				}}
			>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Olá $usuário
					</Typography>
					<Button
						color="inherit"
						sx={{
							'&:hover': {
								background: '#F786AA',
							},
						}}
					>
						Concluídas
					</Button>
					<IconButton
						onClick={logout}
						color="inherit"
						sx={{
							'&:hover': {
								background: '#576CA8',
							},
						}}
					>
						<Logout />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Divider sx={{ height: '2px', background: '#fff' }} />
		</Box>
	);
};
