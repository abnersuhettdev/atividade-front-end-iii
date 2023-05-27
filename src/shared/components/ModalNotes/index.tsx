/* eslint-disable react/prop-types */
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	TextField,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { hideModalNotes } from '../../../store/modules/ModalNotes/modalNotesSlice';

interface ModalNotesProps {
	contexto: 'create' | 'update' | 'delete';
	aberto: boolean;
}

export const ModalNotes: React.FC = () => {
	const select = useAppSelector((state) => state.modal);
	const dispatch = useAppDispatch();

	return (
		<Dialog
			open={select.open!}
			onClose={() =>
				dispatch(hideModalNotes({ contexto: 'create', open: false }))
			}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{select.contexto === 'delete' && 'Deletar Recado'}
				{select.contexto === 'update' && 'Atualizar Recado'}
				{select.contexto === 'create' && 'Criar Recado'}
			</DialogTitle>
			<DialogContent>
				{select.contexto !== 'delete' && (
					<Grid container spacing={3} marginTop={1}>
						<Grid item xs={12}>
							<TextField label={'Titulo'} type="text" fullWidth />
						</Grid>
						<Grid item xs={12}>
							<TextField
								label={'Descrição'}
								type="text"
								fullWidth
							/>
						</Grid>
					</Grid>
				)}
				{select.contexto === 'delete' &&
					'Tem certeza de que deseja deletar este recado? essa ação é irreversível e não poderá ser desfeita'}
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() =>
						dispatch(
							hideModalNotes({ contexto: 'create', open: false }),
						)
					}
				>
					Cancelar
				</Button>
				<Button autoFocus>Confirmar</Button>
			</DialogActions>
		</Dialog>
	);
};
