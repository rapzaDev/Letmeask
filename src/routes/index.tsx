import React from 'react';

import { 
    BrowserRouter, 
    Routes,
    Route,  
} from "react-router-dom";
  
import { Home } from '../pages/Home/Home';
import { NewRoom } from '../pages/NewRoom/NewRoom';
import { Room } from '../pages/Room/Room';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home /> } />
                <Route path="/rooms/new" element={ <NewRoom /> } />
                <Route path="/rooms/:id" element={ <Room /> } />
            </Routes>
        </BrowserRouter>
    );
};

export { Router };