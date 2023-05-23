/* eslint-disable react/prop-types */
import { Alert, Snackbar } from '@mui/material';

interface ErroProps {
	mostrarErro: boolean;
	fechaErro: () => void;
	mensagem: string;
	tipo: 'warning' | 'error' | 'success';
}

export const MySnackbar: React.FC<ErroProps> = ({
	fechaErro,
	mensagem,
	mostrarErro,
	tipo,
}) => {
	return (
		<div>
			<Snackbar
				open={mostrarErro}
				autoHideDuration={3000}
				onClose={fechaErro}
			>
				<Alert severity={tipo}>{mensagem}</Alert>
			</Snackbar>
		</div>
	);
};
