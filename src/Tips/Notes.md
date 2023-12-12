## Routes

Para criar uma rota voce deve criar os arquivos <code>seunome.routes.jsx</code>

importar o Routes e Route do react-router-dom

<code>import { Routes, Route } from 'react-router-dom';</code>

Dentro do arquivo de rotas fazer as devidas importações, e colocar no Route os paths importados.

<code>	`<Route path='/' element={} />`</code>

Criar um index importar o BrowserRouter do RRD, importar os arquivos de rotas

e colocar a funcao das rotas dentro do BrowserRouter.

## Usando

Para usar as rotas voce deve importar do RRD o Link

<code>`import { Link } from 'react-router-dom';`</code>

E usar a tag <code> `<Link to="/rota">Seu Link</Link>` </code>

para a navegação.