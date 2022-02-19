import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/homepage' element={<Homepage />}>
          <Route path="clients" element={<Clients />}>
              <Route path=":id" element={<Client />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    )
}

