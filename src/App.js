import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Split from './Pages/Split';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='split' element={<Split />} />
      </Routes>
      </div>
    </Router>
  )
}