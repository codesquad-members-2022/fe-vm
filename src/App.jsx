import { Routes, Route } from "react-router-dom";
import Test from "./Test";

const Message = () => {
  return (
    <div>
      <div>첫번째 페이지입니다. App.jsx</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Message />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
