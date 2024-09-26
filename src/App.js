import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Connect from './pages/Connect';
import { ThemeProvider } from 'context/themeProvider';
import { GlobalStyle } from 'theme/GlobalStyle';
import About from 'pages/About';
import Portfolio from 'pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
