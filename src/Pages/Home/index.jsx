import { Container, Brand, Menu, NewNote, Search, Content } from './styles';
import { Header } from '../../components/Header';
import { FiPlus } from 'react-icons/fi';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Note } from '../../components/Note';

export function Home() {
	return (
		<Container>
			<Header title='Philippe Wanuty' />

			<Brand>
				<h1>Rocketnotes</h1>
			</Brand>

			<Menu>
				<li>
					<ButtonText title='Todos' $isactive />
				</li>
				<li>
					<ButtonText title='Frontend' />
				</li>
				<li>
					<ButtonText title='Node' />
				</li>
				<li>
					<ButtonText title='React' />
				</li>
			</Menu>

			<NewNote to="/create-note">
				<FiPlus />
				Criar nota
			</NewNote>

			<Search>
				<Input placeholder='Digite o texto aqui' />
			</Search>

			<Content>
				<Section title='Minhas notas'>
					<Note
						data={{
							title: 'React',
							tags: [
								{ id: '1', name: 'react' },
							
							],
						}}
					/>
					<Note
						data={{
							title: 'Exemplo de Middleware',
							tags: [
								{ id: '1', name: 'Express' },
								{ id: '2', name: 'nodejs' },
							],
						}}
					/>
				</Section>
			</Content>
		</Container>
	);
}
