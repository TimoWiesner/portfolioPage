import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from './pages/Projects';
import CV from './pages/CV';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<Projects />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
    </Router>
  )
}

export default App
