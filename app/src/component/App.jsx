import { Routes, Route } from 'react-router-dom';
import TabMenu from './TabMenu/TabMenu';
import VendingMachine from './TabContent/VendingMachine/VendingMachine';
import Wallet from './TabContent/Wallet/Wallet';
import Stock from './TabContent/Stock/Stock';

const TABS = {
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

const tabs = Object.entries(TABS);

function App() {
  return (
    <>
      <TabMenu tabs={tabs} />
      <Routes>
        {tabs.map(tab => {
          const [tabKey, { content }] = tab;
          return <Route
            path={`/${tabKey}`}
            key={tabKey}
            element={content}
          ></Route>;
        })}
        <Route path="/*" element={<div>{`not found`}</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
