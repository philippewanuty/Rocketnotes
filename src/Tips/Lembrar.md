# Criação e exportação

Para criarmos um componente ou pages 

devemos exportar a função escolhida diretamente.

   - A função é definida como uma função regular.

   - Ao importar esse módulo em outro arquivo JavaScript, você deve usar o nome exato MainPage para importar essa função.

   Exemplo de exportação

    export function MainPage({}) {
    // Implementação da função MainPage
    }
  
  Exemplo de importação

      import { MainPage } from './MainPage';

A importação sempre deve vir dentro de chaves.


# Estilização de componente já criado

Para estilizar um componente externo já criado usamos o método **Styled**

O método styled é uma função que permite criar um novo componente estilizado baseado em um componente existente.

    export const Seucomponente = styled(ComponenteExterno)

    color: White;
    text-decoration: none;
    font-weight: bold;

  não esquecer de importar o componente

      import ComponenteExterno from '../components/ComponenteExterno';

nesta importação é sem chaves