import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/Homepage'
import Clients from './pages/Clients'
import Client from './pages/Client'
import ClientHistory from './pages/ClientHistory'
import ClientCustomize from './pages/ClientCustomize'
import DataBase from './pages/DataBase'


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
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

