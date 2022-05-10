import { ThemeProvider } from 'styled-components';
import theme from 'Styles/theme';
import Reset from 'Styles/Reset';
import Normalize from 'Styles/Normalize';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'Components/Home/Home';
import VendingMachine from 'Components/Home/VendingMachine/VendingMachine';
import NotFound from 'Components/NotFound';

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Reset />
				<Normalize />
				<BrowserRouter>
					<Routes>
						<Route path="*" element={<NotFound />} />
						<Route path="/" element={<Home />}>
							<Route path="/" element={<VendingMachine />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
};

export default App;
