import React, {useEffect, useState} from 'react';
import './styles/App.scss';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='homepage' element={<Homepage />}/>
          <Route path="clients" element={<Clients />}>
            <Route path=":id" element={<Client />}>
              <Route path=":history" element={<ClientHistory />} />
              <Route path=":customize" element={<ClientCustomize />} />
            </Route>
          </Route>
          <Route path="database" element={<DataBase />} />
        </Routes>
      </BrowserRouter>
    )
}

