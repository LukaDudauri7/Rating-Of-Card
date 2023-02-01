import './App.css';
import React from 'react';
import Rate from './Pages/Rate/Rate';
import Selected from "./Pages/Selected/Selected";
import { BrowserRouter , Route, Routes , HashRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path="/" element={<Rate />} />
                <Route path="/Selected" element={<Selected />} />
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
