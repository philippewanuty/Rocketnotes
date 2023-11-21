import { Container, CoverImage, ImageCover, LoginSection, Login, LoginText, LoginInput } from './styles';

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
					<span>Aplicação para salvar e gerenciar seus links úteis.</span>
				</LoginText>
				<Login>
					<ButtonText title='Faça seu login' />
					<LoginInput>
						<Input icon={FiMail} placeholder='E-mail' />
						<Input icon={FiLock} placeholder='Senha' />
					</LoginInput>
					<Button title='Entrar' />
					<ButtonText title='Criar conta' />
				</Login>
			</LoginSection>

			<CoverImage>
				<ImageCover />
				<img src={CoverImg} alt='' />
			</CoverImage>
		</Container>
	);
}
