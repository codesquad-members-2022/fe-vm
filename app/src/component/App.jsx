import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../common/theme';
import GlobalStyle from '../common/GlobalStyle';
import Gnb from './gnb/Gnb';
import VendingMachine from './content/VendingMachine/VendingMachine';
import Wallet from './content/Wallet/Wallet';
import Stock from './content/Inventory/Stock';

const GNB_ITEMS = {
  vendingMachine: {
    title: '자판기',
    content: <VendingMachine />,
  },
  wallet: {
    title: '지갑',
    content: <Wallet />,
  },
  stock: {
    title: '재고현황',
    content: <Stock />,
  },
};

const gnbItems = Object.entries(GNB_ITEMS);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Gnb items={gnbItems} />
      <Routes>
        {gnbItems.map(item => {
          const [itemKey, { content }] = item;
          return (
            <Route path={`/${itemKey}`} key={itemKey} element={content}></Route>
          );
        })}
        <Route path="/*" element={<div>{`not found`}</div>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
