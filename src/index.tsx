import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import MyPage from "./MyPage";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/worker");
  worker.start();
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="mypage" element={<MyPage />} />
    </Routes>
  </BrowserRouter>
);
