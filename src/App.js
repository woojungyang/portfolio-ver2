import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Connect from './pages/Connect';
import { ThemeProvider } from 'context/themeProvider';
import { GlobalStyle } from 'theme/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
