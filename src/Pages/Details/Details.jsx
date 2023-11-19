import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

import { Container, Links, Content } from './styles';

export function Details() {
	return (
		<Container>
			<Header title='Philippe Wanuty' />

			<main>
				<Content>
					<ButtonText title='Excluir a nota' />
					<h1>Introdução ao React</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur fugiat optio vero, veritatis, quod saepe aliquam officia consequuntur pariatur, nemo delectus dolor. Optio, placeat sequi
						magnam nostrum minima rem ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti, sit, aperiam eos mollitia impedit blanditiis velit perferendis unde est commodi dolorem
						nesciunt officiis inventore minus at eum incidunt ut?
					</p>
		
					<Section title='Links úteis'>
						<Links>
							<li>
								<a href='#'>https://www.rocketseat.com.br/</a>
							</li>
							<li>
								<a href='#'>https://www.rocketseat.com.br/</a>
							</li>
						</Links>
					</Section>
					<Section title='Marcadores'>
						<Tag title='express' />
						<Tag title='nodejs' />
					</Section>
					<Button title='Entrar' />
				</Content>
			</main>
		</Container>
	);
}
