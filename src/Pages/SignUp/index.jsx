import { Container, LoginSection, LoginText, Login, LoginInput, CoverImage, ImageCover } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiMail, FiLock,FiUser } from 'react-icons/fi';

import CoverImg from '../../Assets/CoverImg.jpg';

export function SignUp() {
	return (
		<Container>
			<LoginSection>
				<LoginText>
					<h1>Rocket Notes</h1>
					<p>Aplicação para salvar e gerenciar seus links úteis.</p>
				</LoginText>
				<Login>
					<h2>Crie sua conta</h2>
					<LoginInput>
						<Input icon={FiUser} placeholder='E-mail' />
						<Input icon={FiMail} placeholder='E-mail' />
						<Input icon={FiLock} placeholder='Senha' />
					</LoginInput>
					<Button title='Cadastrar' />
					<a href='#'>Voltar para o login</a>
				</Login>
			</LoginSection>

			<CoverImage>
				<ImageCover />
				<img src={CoverImg} alt='' />
			</CoverImage>
		</Container>
	);
}
