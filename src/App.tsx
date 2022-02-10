import React from 'react';
import { 
  BrowserRouter, 
  Routes,
  Route  
} from "react-router-dom";

import { Home } from './pages/Home/Home';
import { NewRoom } from './pages/NewRoom/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/rooms/new" element={ <NewRoom /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
