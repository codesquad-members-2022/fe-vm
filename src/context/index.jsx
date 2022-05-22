import { ProductProvider } from 'context/Product';
import { WalletProvider } from 'context/Wallet';

const ContextProvider = ({ children }) => {
  return (
    <>
      <ProductProvider>
        <WalletProvider>{children}</WalletProvider>
      </ProductProvider>
    </>
  );
};

export default ContextProvider;
