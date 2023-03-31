import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import RoutesTab from './components/routes';
import Logout from './components/logout';

function App() {
  return (
    <div className="App">

        {/* <Logout /> */}

      <BrowserRouter>
        <ul className='navbar__links'>
          <li className='navbar__item'>
            <Link to='/dashboard'>Dashboard</Link>
          </li>

          <li className='navbar__item'>
            <Link to='/login'>Login</Link>
          </li>

          <li className='navbar__item'>
            <Link to='/register'>register</Link>
          </li>

        </ul>

        <RoutesTab />
      </BrowserRouter>
    </div>
  );
}

export default App;
