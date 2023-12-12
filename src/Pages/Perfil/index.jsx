import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Header, InputGroup, Form, ArrowLeft, Avatar, ChangePhoto} from './styles';

import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';

export function Perfil() {
	return (
		<Container>
			<Header>
				<ArrowLeft to="/">
					<FiArrowLeft />
				</ArrowLeft>
			</Header>

			<Form>
				<Avatar>
					<img src='http://github.com/philippewanuty.png' alt='Imagem do usuário' />
					<ChangePhoto htmlFor='avatar'>
						<input type='file' id='avatar'/>
						<FiCamera />
					</ChangePhoto>
				</Avatar>

				<InputGroup>
					<Input icon={FiUser} type='text' placeholder='Nome' />
					<Input icon={FiMail} type='text' placeholder='Email' />
					<Input icon={FiLock} type='text' placeholder='Senha Atual' />
					<Input icon={FiLock} type='text' placeholder='Nova senha' />
					<Button title='Salvar' />
				</InputGroup>
			</Form>
		</Container>
	);
}
