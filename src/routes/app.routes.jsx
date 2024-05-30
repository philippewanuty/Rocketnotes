import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Perfil } from '../Pages/Perfil';
import { CreateNote } from '../Pages/CreateNote';
import { Details } from '../Pages/Details';
import { SignIn } from '../Pages/SignIn';
import { SignUp } from '../Pages/SignUp';

export function AppRoutes() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
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
				path='/SignIn'
				element={<SignIn />}
			/>
			<Route
				path='/SignUp'
				element={<SignUp />}
			/>
		</Routes>
	);
}
