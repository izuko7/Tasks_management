import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthLayout } from './components/AuthLayout';
import { SiteLayout } from './components/SiteLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { GuestOnly } from './components/GuestOnly';
import { RequireAuth } from './components/RequireAuth';
import { DashboardPage } from './pages/DashboardPage';


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<SiteLayout/>}>
					<Route path='/' element={<HomePage/>}/>
				</Route>

				<Route element={<GuestOnly/>}>
					<Route element={<AuthLayout/>}>
						<Route path='/login' element={<LoginPage/>}/>
						<Route path='/register' element={<RegisterPage/>}/>
					</Route>
				</Route>

				<Route element={<RequireAuth/>}>
					<Route element={<SiteLayout/>}>
						<Route path='/dashboard' element={<DashboardPage/>}/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}