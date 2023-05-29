/* eslint-disable no-case-declarations */
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
import { useEffect, useState } from 'react';
import { v4 as gerarId } from 'uuid';

import { IsValidCredentials } from '../../../configs/types/IsValidCredentials';
import { INotes } from '../../../configs/types/Notes';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { hideModalNotes } from '../../../store/modules/ModalNotes/modalNotesSlice';
import { createNote } from '../../../store/modules/Notes/notesSlice';

interface ModalNotesProps {
	emailUsuarioLogado: string;
}

export const ModalNotes: React.FC<ModalNotesProps> = ({
	emailUsuarioLogado,
}) => {
	const [titulo, setTitulo] = useState('');
	const [descricao, setDescricao] = useState('');

	const [erroTitulo, setErroTitulo] = useState<IsValidCredentials>({
		helperText: '',
		isValid: true,
	});

	const [erroDescricao, setErroDescricao] = useState<IsValidCredentials>({
		helperText: '',
		isValid: true,
	});

	const select = useAppSelector((state) => state.modal);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (titulo && titulo.length < 3) {
			setErroTitulo({
				helperText: 'Insira um titulo válido',
				isValid: false,
			});
		} else {
			setErroTitulo({
				helperText: '',
				isValid: true,
			});
		}
	}, [titulo]);

	useEffect(() => {
		if (descricao && descricao.length < 3) {
			setErroDescricao({
				helperText: 'Insira uma descrição válida',
				isValid: false,
			});
		} else {
			setErroDescricao({
				helperText: '',
				isValid: true,
			});
		}
	}, [descricao]);

	function handleConfirm() {
		if (!erroTitulo.isValid || !erroDescricao.isValid) {
			return;
		}

		switch (select.contexto) {
			case 'create':
				const novoRecado: INotes = {
					id: gerarId(),
					criadoEm: gerarData(),
					titulo: titulo,
					descricao: descricao,
					criadoPor: emailUsuarioLogado,
				};
				dispatch(createNote(novoRecado));
				break;
		}
	}

	function gerarData() {
		return new Date().toLocaleDateString('pt-BR', {
			month: '2-digit',
			day: '2-digit',
			year: 'numeric',
		});
	}

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
								helperText={erroTitulo.helperText}
								error={!erroTitulo.isValid}
								onChange={(ev) => setTitulo(ev.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label={'Descrição'}
								type="text"
								fullWidth
								helperText={erroDescricao.helperText}
								error={!erroDescricao.isValid}
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
					onClick={handleConfirm}
				>
					Confirmar
				</Button>
			</DialogActions>
		</Dialog>
	);
};
