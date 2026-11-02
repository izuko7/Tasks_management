import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthLayout } from './components/AuthLayout';
import { SiteLayout } from './components/SiteLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './home/LoginPage';
import { RegisterPage } from './pages/RegisterPage';


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<SiteLayout />}>
					<Route path="/" element={<HomePage />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}