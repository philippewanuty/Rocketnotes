import { Container,TextHeader, InputsNote ,Content } from './styles';

import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from './../../components/Section';
import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Input } from './../../components/Input';

export function CreateNote() {
  return (
			<>
				<Container>
					<Header title='Philippe Wanuty' />
					<main>
						<Content>
							<TextHeader>
								<h1>Criar Notas</h1>
								<a href='/'>Voltar</a>
							</TextHeader>
							<InputsNote>
								<Input placeholder='Título' />
								<TextArea placeholder='Observações' />
							</InputsNote>
							<Section title='Links úteis'>
								<div className='titulo'>
									<NoteItem value='https://www.philippewanuty.com' />
									<NoteItem placeholder='Novo link' isnew='true' />
								</div>
							</Section>
							<Section title='Marcadores'>
								<div className='marcadores'>
									<NoteItem value='React' />
									<NoteItem placeholder='Novo marcador' isnew />
								</div>
							</Section>
							<Button title='Salvar' />
						</Content>
					</main>
				</Container>
			</>
		);
}; 