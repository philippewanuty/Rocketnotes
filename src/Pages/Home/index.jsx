import { Container, Brand, Menu, NewNote, Search, Content, MenuButtons } from './style';
import { Header } from '../../components/Header';
import { RiAddFill } from 'react-icons/ri';


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

				<Search></Search>
				<Content></Content>
			</Container>
		);
};