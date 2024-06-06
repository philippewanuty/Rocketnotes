import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Perfil } from '../Pages/Perfil';
import { CreateNote } from '../Pages/CreateNote';
import { Details } from '../Pages/Details';
import { SignIn } from '../Pages/SignIn';
import { SignUp } from '../pages/SignUp';
// import Teste from '../Teste';




export function AppRoutes() {
	return (
		<Routes>
			<Route
				path='/'
				element={<SignIn />}
			/>
			<Route
				path='/details/:id'
				element={<Details />}
			/>
			<Route
				path='/perfil'
				element={<Perfil />}
			/>
			<Route
				path='/create-note'
				element={<CreateNote />}
			/>
			<Route
				path='/home'
				element={<Home />}
			/>
			<Route
				path='/register'
				element={<SignUp />}
			/>
		</Routes>
	);
}
