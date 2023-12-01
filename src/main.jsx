import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/global';

import { SignUp } from './Pages/SignUp';
// import { SignIn } from './Pages/SignIn';
// import { Details } from './Pages/Details/Details';
// import { Home } from './Pages/Home';
// import { Perfil } from './Pages/Perfil';
// import { CreateNote } from './Pages/CreateNote';


import theme from "./styles/theme"







ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{/* <Home /> */}
			{/* <Details /> */}
			{/* <SignIn /> */}
			<SignUp />
			{/* <Perfil/> */}
			{/* <CreateNote/> */}
		</ThemeProvider>
	</React.StrictMode>
);
