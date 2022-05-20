import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import VM from "components/VM/VM";
import Wallet from "components/Wallet/Wallet";
import InputStore from "store/InputStore";
import MessageStore from "store/MessageStore";
import WalletStore from "store/WalletStore";
import MenuStore from "store/MenuStore";
import TimerStore from "store/TimerStore";

function App() {
  return (
    <BrowserRouter>
      <TimerStore>
        <NavBar />

        <WalletStore>
          <InputStore>
            <MessageStore>
              <MenuStore>
                <Routes>
                  <Route path="/" element={<VM />} />
                  <Route path="/wallet" element={<Wallet />} />
                  {/* TODO: 없는 페이지 들어갔을 때 NotFound 페이지 출력 후 몇 초 후 홈으로 리다이렉트 되는 식으로 처리 */}
                  {/* <Route path="/*" element={<NotFound />} /> */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </MenuStore>
            </MessageStore>
          </InputStore>
        </WalletStore>
      </TimerStore>
    </BrowserRouter>
  );
}

export default App;
