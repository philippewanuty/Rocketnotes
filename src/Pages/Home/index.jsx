import { Container, Brand, Menu, NewNote, Search, Content, MenuButtons } from './style';
import { Header } from '../../components/Header';
import { RiAddFill } from 'react-icons/ri';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Input } from '../../components/Input';


export function Home() {
  return (
			<Container>
				<Header title='Philippe Wanuty' />

				<Brand>
					<span>Rocketnotes</span>
				</Brand>

				<Menu>
					<MenuButtons>
						<li>
							<button type='button'>Todos</button>
						</li>
						<li>
							<button type='button'>Frontend</button>
						</li>
						<li>
							<button type='button'>Node</button>
						</li>
						<li>
							<button type='button'>React</button>
						</li>
					</MenuButtons>
				</Menu>

				<NewNote type='button'>
					<RiAddFill />
					Criar nota
				</NewNote>

				<Content>
					<Input placeholder='Digite o texto aqui' />

					<Section title='Minhas notas'>
						<div>
							<h2>React modal</h2>
							<Tag title='React' />
						</div>

						<div>
							<h2>Exemplo de Middleware</h2>
							<Tag title='Express' />
							<Tag title='nodejs' />
						</div>
            
					</Section>
				</Content>
			</Container>
		);
};