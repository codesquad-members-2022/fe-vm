import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'Styles/theme';
import Reset from 'Styles/Reset';
import Normalize from 'Styles/Normalize';
import Home from 'Components/Home/Home';
import VendingMachine from 'Components/Home/VendingMachine/VendingMachine';
import Wallet from 'Components/Home/Wallet/Wallet';
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
							<Route index element={<VendingMachine />} />
							<Route path="wallet" element={<Wallet />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
};

export default App;
