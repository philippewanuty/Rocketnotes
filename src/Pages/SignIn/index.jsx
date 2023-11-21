import { Container, CoverImage, Login } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import  CoverImg  from '../../Assets/CoverImg.jpg';



export function SignIn() {
  return (
			<Container>
				<Login>
					<div>
						<h1>Rocket Notes</h1>
						<span>Aplicação para salvar e gerenciar seus links úteis.</span>
						<ButtonText title='Faça seu login' />
					</div>
					<div>
						<Input />
						<Input />
						<Button title='Entrar' />
						<ButtonText title='Criar conta' />
					</div>
				</Login>

				<CoverImage>
					<img src={CoverImg} alt='' />
				</CoverImage>
			</Container>
		);
};