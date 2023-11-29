import { Container,TextHeader, InputsNote ,Content } from './styles';

import { Header } from "../../components/Header";
import {ButtonText} from "../../components/ButtonText";
import { Input } from './../../components/Input';
import { Section } from './../../components/Section';
import { Button } from '../../components/Button';

export function CreateNote() {
  return (
    <>
      <Container>
        <Header title="Philippe Wanuty" />

        <Content>
          <TextHeader>
            <h1>Criar Notas</h1>
            <ButtonText title="voltar" />
          </TextHeader>

          <InputsNote>
            <Input placeholder="Título" />
            <Input placeholder="Observações" />
          </InputsNote>

          <Section title="Links úteis">
            <div>
              <Input placeholder="Novo link" />
              <Input />
            </div>
          </Section>

          <Section title="Marcadores">
            <div>
              <Input />
              <Input placeholder="Novo marcador"/>
            </div>
          </Section>

          <Button title ="Salvar"/>

        </Content>

      </Container>
    </>
  );
}; 