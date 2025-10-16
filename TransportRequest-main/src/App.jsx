import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import TransportRequestPage from './components/IncidentReportPage'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<TransportRequestPage />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  )
}
