import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import theme from '@/theme';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/Home';
import MyPage from '@/MyPage';

export default function App(): JSX.Element {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch('/test')
  //       .then(response => response.json())
  //       .then(data => console.log(data));
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="mypage" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
