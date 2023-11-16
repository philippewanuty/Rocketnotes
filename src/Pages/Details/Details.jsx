import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';

import { Container, Links } from './styles';

export function Details() {
	return (
		<Container>
			<Header title='Philippe Wanuty' />
			<Section title='Links Úteis'>
				<Links>
					<li>
						<a href='#'>https://www.rocketseat.com.br/</a>
					</li>
					<li>
						<a href='#'>https://www.rocketseat.com.br/</a>
					</li>
				</Links>
			</Section>

			<Section title='Marcadores' />
			<Button title='Entrar' />
		</Container>
	);
}
