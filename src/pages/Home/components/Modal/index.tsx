import { Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import { IsValidCredentials } from '../../../../configs/types/IsValidCredentials';
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

	const [errorUsuario, setErrorUsuario] = useState<IsValidCredentials>({
		helperText: '',
		isValid: true,
	});

	const [errorEmail, setErrorEmail] = useState<IsValidCredentials>({
		helperText: '',
		isValid: true,
	});
	const [errorSenha, setErrorSenha] = useState<IsValidCredentials>({
		helperText: '',
		isValid: true,
	});

	const [errorConfirmaSenha, setErrorConfirmaSenha] =
		useState<IsValidCredentials>({
			helperText: '',
			isValid: true,
		});

	useEffect(() => {
		if (usuario && !validateUsuario(usuario)) {
			setErrorUsuario({
				helperText: 'Insira no minimo 5 caracteres',
				isValid: false,
			});
		} else {
			setErrorUsuario({
				helperText: '',
				isValid: true,
			});
		}
	}, [usuario]);

	useEffect(() => {
		if (email && !validateEmail(email)) {
			setErrorEmail({
				helperText: 'Insira um email válido',
				isValid: false,
			});
		} else {
			setErrorEmail({
				helperText: '',
				isValid: true,
			});
		}
	}, [email]);

	useEffect(() => {
		if (senha && !validateSenha(senha)) {
			setErrorSenha({
				helperText: 'Insira no minimo 5 caracteres',
				isValid: false,
			});
		} else {
			setErrorSenha({
				helperText: '',
				isValid: true,
			});
		}

		if (confirmaSenha && !validateConfirmaSenha(senha, confirmaSenha)) {
			setErrorConfirmaSenha({
				helperText: 'As senhas não são idênticas',
				isValid: false,
			});
		} else {
			setErrorConfirmaSenha({
				helperText: '',
				isValid: true,
			});
		}
	}, [senha, confirmaSenha]);

	useEffect(() => {
		limpaModal();
	}, [fecharModal]);

	function validateInputs() {
		if (
			validateUsuario(usuario) &&
			validateEmail(email) &&
			validateSenha(senha) &&
			validateConfirmaSenha(senha, confirmaSenha)
		) {
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
		limpaModal();
		fecharModal();
	}

	function limpaModal() {
		setUsuario('');
		setEmail('');
		setSenha('');
		setConfirmaSenha('');
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
								variant="standard"
								label="Usuário"
								helperText={errorUsuario.helperText}
								error={!errorUsuario.isValid}
								onChange={(ev) =>
									setUsuario(ev.currentTarget.value)
								}
							/>
							<TextField
								variant="standard"
								label="Email"
								type="email"
								helperText={errorEmail.helperText}
								error={!errorEmail.isValid}
								onChange={(ev) =>
									setEmail(ev.currentTarget.value)
								}
							/>
							<TextField
								variant="standard"
								label="Senha"
								type="password"
								helperText={errorSenha.helperText}
								error={!errorSenha.isValid}
								onChange={(ev) =>
									setSenha(ev.currentTarget.value)
								}
							/>
							<TextField
								variant="standard"
								type="password"
								label="Confirme sua Senha"
								helperText={errorConfirmaSenha.helperText}
								error={!errorConfirmaSenha.isValid}
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
