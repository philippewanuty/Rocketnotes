import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Details } from './Pages/Details/Details'
import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/global';
import { Home } from './Pages/Home';

import theme from "./styles/theme"






ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	</React.StrictMode>
);
