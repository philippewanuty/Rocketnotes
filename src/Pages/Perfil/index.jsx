import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Header, InputGroup, Content, ArrowLeft, Avatar, ChangePhoto} from './styles';

import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';

export function Perfil() {
	return (
		<Container>
			<ArrowLeft>
				<FiArrowLeft />
			</ArrowLeft>
			<Header>
				<Avatar>
					<img src='http://github.com/philippewanuty.png' alt='Imagem do usuário' />
					<ChangePhoto>
						<FiCamera />
					</ChangePhoto>
				</Avatar>
			</Header>

			<Content>
				<InputGroup>
					<Input icon={FiUser} placeholder='Nome' />
					<Input icon={FiMail} placeholder='Email' />
					<Input icon={FiLock} placeholder='Senha Atual' />
					<Input icon={FiLock} placeholder='Nova senha' />
					<Button title='Salvar' />
				</InputGroup>
			</Content>
		</Container>
	);
}
