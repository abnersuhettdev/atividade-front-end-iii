export const validateUsuario = (usuario: string) => {
	if (usuario.trim().length < 5) {
		console.log('usuario inválido');
		return;
	}

	return usuario;
};

export const validateEmail = (email: string) => {
	if (!email.includes('@' && '.com')) {
		console.log('email Inválido');
		return;
	}

	return email;
};

export const validateSenha = (senha: string) => {
	if (senha.trim().length < 5) {
		console.log('A Senha deve conter no minimo 5 caracteres');
		return;
	}

	return senha;
};

export const validateConfirmaSenha = (senha: string, confirmaSenha: string) => {
	if (confirmaSenha !== senha) {
		console.log('As senhas não são idênticas');
		return;
	}
	return confirmaSenha;
};
