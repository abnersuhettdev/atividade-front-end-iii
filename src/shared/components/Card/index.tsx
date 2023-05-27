import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Divider, Grid, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { useAppDispatch } from '../../../store/hooks';
import { showModalNotes } from '../../../store/modules/ModalNotes/modalNotesSlice';

export default function MyCard() {
	const dispatch = useAppDispatch();

	return (
		<Card sx={{ minWidth: 260 }}>
			<CardContent>
				<Typography
					variant="h5"
					component={'h3'}
					sx={{
						marginBottom: 1,
					}}
				>
					Titulo
				</Typography>
				<Divider />
				<Typography variant="body1" component={'p'} marginTop={1}>
					Descrição
				</Typography>
			</CardContent>
			<Divider />
			<CardActions>
				<Grid container alignItems={'center'}>
					<Grid item flexGrow={1}>
						<Typography
							variant="caption"
							color={'text.secondary'}
							component={'span'}
						>
							Criado Em : 05/04/2023
						</Typography>
					</Grid>
					<Grid item justifyContent={'flex-end'}>
						<IconButton
							onClick={() =>
								dispatch(showModalNotes({ contexto: 'update' }))
							}
						>
							<EditIcon color="primary" />
						</IconButton>
						<IconButton
							onClick={() =>
								dispatch(showModalNotes({ contexto: 'delete' }))
							}
						>
							<DeleteIcon color="error" />
						</IconButton>
					</Grid>
				</Grid>
			</CardActions>
		</Card>
	);
}
