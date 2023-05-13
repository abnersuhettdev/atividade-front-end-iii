import { Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import {
	validateConfirmaSenha,
	validateEmail,
	validateSenha,
	validateUsuario,
} from '../../../../configs/Validators';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	borderRadius: '10px',
	boxShadow: 24,
	p: 4,
};

interface ModalProps {
	aberto: boolean;
	fecharModal: () => void;
	cadastraUsuario: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export const ModalCadastro: React.FC<ModalProps> = ({
	aberto,
	fecharModal,
	cadastraUsuario,
}) => {
	const [usuario, setUsuario] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmaSenha, setConfirmaSenha] = useState('');

	function validateInputs() {
		if (
			validateUsuario(usuario) &&
			validateEmail(email) &&
			validateSenha(senha) &&
			validateConfirmaSenha(senha, confirmaSenha)
		) {
			console.log('Cadastro validado');
			return true;
		}
		return false;
	}

	function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault();

		const usuarioValido = validateInputs();

		if (!usuarioValido) {
			console.log('Usuario inválido');
			return;
		}

		const user: IUser = {
			usuario,
			email,
			senha,
		};

		cadastraUsuario((prev) => [...prev, user]);
		setUsuario('');
		setEmail('');
		setSenha('');
		setConfirmaSenha('');
		fecharModal();
	}

	return (
		<div>
			<Modal
				open={aberto}
				onClose={fecharModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Grid
						container
						flexDirection={'column'}
						width={'100%'}
						alignItems={'center'}
						gap={3}
					>
						<Typography
							id="modal-modal-title"
							variant="h5"
							component="h2"
						>
							Cadastre-se
						</Typography>
						<Box
							component={'form'}
							display={'flex'}
							flexDirection={'column'}
							gap={3}
							onSubmit={(ev) => handleSubmit(ev)}
						>
							<TextField
								value={usuario}
								variant="standard"
								label="Usuário"
								onChange={(ev) =>
									setUsuario(ev.currentTarget.value)
								}
							/>
							<TextField
								value={email}
								variant="standard"
								label="Email"
								onChange={(ev) =>
									setEmail(ev.currentTarget.value)
								}
							/>
							<TextField
								variant="standard"
								label="Senha"
								value={senha}
								onChange={(ev) =>
									setSenha(ev.currentTarget.value)
								}
							/>
							<TextField
								variant="standard"
								label="Confirme sua Senha"
								value={confirmaSenha}
								onChange={(ev) =>
									setConfirmaSenha(ev.currentTarget.value)
								}
							/>

							<Button
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
								Cadastrar
							</Button>
						</Box>
					</Grid>
				</Box>
			</Modal>
		</div>
	);
};
