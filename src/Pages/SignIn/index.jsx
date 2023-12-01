import { Container, LoginSection, LoginText, Login, LoginInput, CoverImage, ImageCover } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';

import CoverImg from '../../Assets/CoverImg.jpg';

export function SignIn() {
	return (
		<Container>
			<LoginSection>
				<LoginText>
					<h1>Rocket Notes</h1>
					<p>Aplicação para salvar e gerenciar seus links úteis.</p>
				</LoginText>
				<Login>
					<h2>Faça seu login</h2>
					<LoginInput>
						<Input icon={FiMail} placeholder='E-mail' type='text' />
						<Input icon={FiLock} placeholder='Senha' type='password' />
					</LoginInput>
					<Button title='Entrar' />
					<a href='#'>Criar conta</a>
				</Login>
			</LoginSection>

			<CoverImage>
				<ImageCover />
				<img src={CoverImg} alt='' />
			</CoverImage>
		</Container>
	);
}
