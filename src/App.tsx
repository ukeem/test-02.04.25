import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import CompanyPage from './pages/CompanyPage';
import OrganizationsPage from './pages/OrganizationsPage';
import HomePage from './pages/HomePage';

export default function App() {

	return (

		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/companies" element={<OrganizationsPage />} />
					<Route path="companies/:id" element={<CompanyPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

