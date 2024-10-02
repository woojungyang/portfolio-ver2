import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import { ThemeProvider } from 'context/themeProvider';
import { GlobalStyle } from 'theme/GlobalStyle';
import About from 'pages/About';
import Portfolio from 'pages/Portfolio';
import PortfolioDetail from 'pages/PortfolioDetail';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectName" element={<PortfolioDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
