import React, {useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './components/Pages/HomePage/HomePage'
import { TitleUpdater } from './components/Pages/TitleUpdater';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth slide to top
    });
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Router>
      <ScrollToTop />
      <TitleUpdater/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <TitleUpdater/> */}
    </Router>
  )
}

export default App
