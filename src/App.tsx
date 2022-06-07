import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import Page1 from './components/pages/page1/Page1';
import Page1Child from './components/pages/page1Child/Page1Child';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="page1" element={<Layout />}>
					<Route index element={<Page1 />} />
					<Route path="page1Child" element={<Page1Child />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
