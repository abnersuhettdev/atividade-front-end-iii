/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/prop-types */
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Grid,
	TextField,
} from '@mui/material';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { hideModalNotes } from '../../../store/modules/ModalNotes/modalNotesSlice';

export const ModalNotes: React.FC = () => {
	const [titulo, setTitulo] = useState('');
	const [descricao, setDescricao] = useState('');

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
			<Divider />
			<DialogContent>
				{select.contexto !== 'delete' && (
					<Grid container spacing={3} marginTop={1}>
						<Grid item xs={12}>
							<TextField
								label={'Titulo'}
								type="text"
								fullWidth
								onChange={(ev) => setTitulo(ev.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label={'Descrição'}
								type="text"
								fullWidth
								onChange={(ev) => setDescricao(ev.target.value)}
							/>
						</Grid>
					</Grid>
				)}
				{select.contexto === 'delete' &&
					'Tem certeza de que deseja deletar este recado? essa ação é irreversível e não poderá ser desfeita'}
			</DialogContent>
			<DialogActions>
				<Button
					variant="outlined"
					onClick={() => dispatch(hideModalNotes({ open: false }))}
				>
					Cancelar
				</Button>
				<Button
					autoFocus
					variant="contained"
					sx={{
						background: '#F786AA',
						'&:hover': { background: '#576CA8' },
					}}
				>
					Confirmar
				</Button>
			</DialogActions>
		</Dialog>
	);
};
