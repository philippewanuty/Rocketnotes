import { Container, LoginSection, LoginText, Login, LoginInput, CoverImage, ImageCover } from './styles';

import { api } from '../../services/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import CoverImg from '../../Assets/CoverImg.jpg';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

export function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSignUp() {
		if (!name || !email || !password) {
			return alert('Preencha todos os campos!');
		}

		api.post('/users', { name, email, password })
			.then(() => {
				alert('Usuário cadastrado com sucesso!');
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert('Não foi possível cadastrar');
				}
			});
	}

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
						<Input
							type='text'
							icon={FiUser}
							placeholder='Nome'
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							type='email'
							icon={FiMail}
							placeholder='E-mail'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							type='password'
							icon={FiLock}
							placeholder='Senha'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</LoginInput>
					<Button
						title='Cadastrar'
						onClick={handleSignUp}
					/>
					<Link to='/'>Voltar para o login</Link>
				</Login>
			</LoginSection>

			<CoverImage>
				<ImageCover />
				<img
					src={CoverImg}
					alt=''
				/>
			</CoverImage>
		</Container>
	);
}
