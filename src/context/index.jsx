import { ProductProvider } from 'context/Product';
import { WalletProvider } from 'context/Wallet';
import { LogProvider } from 'context/Log';

const ContextProvider = ({ children }) => {
  return (
    <>
      <ProductProvider>
        <WalletProvider>
          <LogProvider>{children}</LogProvider>
        </WalletProvider>
      </ProductProvider>
    </>
  );
};

export default ContextProvider;
