import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Entry from './components/Entry';
import Chats_Space from './components/Chats_Space';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/interface' element={<Chats_Space />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
