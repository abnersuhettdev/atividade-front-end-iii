export const validateUsuario = (usuario: string) => {
	if (usuario.trim().length < 5) {
		return false;
	}

	return true;
};

export const validateEmail = (email: string) => {
	if (!email.includes('@' && '.com')) {
		return false;
	}

	return true;
};

export const validateSenha = (senha: string) => {
	if (senha.trim().length < 5) {
		return false;
	}

	return true;
};

export const validateConfirmaSenha = (senha: string, confirmaSenha: string) => {
	if (confirmaSenha !== senha) {
		return false;
	}
	return true;
};
