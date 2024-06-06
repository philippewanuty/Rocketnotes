# Tema Global


Para criar um tema global para o projeto com styled-components  primeiramente voce deve criar uma pasta com o nome **Styles** e dentro dela criar dois arquivos o Global.js e o theme.js.

**No arquivo Global.js:** 

Voce deve importar a funçao creacteGlobalStyle do Styled-components e dentro da exportação adicionar os estilos desejados como no exemplo:

    export default createGlobalStyle`
          * {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            background-color: ${({ theme }) => theme.COLORS.  BACKGROUND_900};
          }
      `;

**No arquivo Theme:**

Deverá conter as cores do projeto como no exemplo a baixo

    export default {
        COLORS: {
          BACKGROUND_900: "#232129",
          BACKGROUND_800: "#312E38",

          RED_900: "#721408",

        },
      };

**Aplicando:**
 
**No arquivo Main:**

Fazer as devidas importações.

Deverá incluir a tag **ThemeProvider** logo após do React.StrictMode
seguindo o exemplo a baixo, referenciando o **theme** que foi importado.

```javascript
import theme from './styles/theme.js';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
```

```javascript 

   ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <Routes/>
        </ThemeProvider>
      </React.StrictMode>
    );
```
Logo após ele deverá incluir o estilo global **GlobalStyles.**

finalizando assim a inclusão do tema global no projeto.