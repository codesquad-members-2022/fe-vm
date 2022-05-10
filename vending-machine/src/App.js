import Nav from "./components/Nav";
import VendingMachine from "./components/VendingMachine";
import Wallet from "./components/Wallet";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <VendingMachine></VendingMachine>
      <Wallet></Wallet>
    </div>
  );
}

export default App;
