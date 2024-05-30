import { Container,Profile,Button } from './styles';
import { RiShutDownLine } from 'react-icons/ri';

export function Header({title}) {
	return (
		<>
			<Container>

				<Profile to="/perfil">
					<img src='http://github.com/philippewanuty.png' alt='avatar do usuário' />
					<div>
						<span>Bem-vindo,</span>
						<strong>{title}</strong>
					</div>
				</Profile>

				<Button to="/SignUp">
					<RiShutDownLine />
				</Button>
			</Container>
		</>
	);
}
