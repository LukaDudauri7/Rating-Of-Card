import './App.css';
import React from 'react';
import Rate from './Pages/Rate/Rate';
import Selected from "./Pages/Selected/Selected";
import { BrowserRouter , Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className='test' > test </div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Rate />} />
                <Route path="/Selected" element={<Selected />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
