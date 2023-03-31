import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './login';
import Reg from './reg';

export default function RoutesTab() {
  return (
    <div>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Reg />}/>
      </Routes>
    </div>
  )
}