import React from 'react'
import axios from '../Api/axios'

const LOGOUT_URL = '/log/out';

function Logout() {

    const storedToken = localStorage.getItem("loggedAppUser");
    const parsedToken = JSON.parse(storedToken);
    const accessToken = parsedToken.accessToken;
    const token = accessToken.token;

    function handleLogout() {
        const headers = {
            Authorization: `Bearer ${token}`,
          };
    
         axios.get(LOGOUT_URL, headers)
        .then(response => {
            if(response.status === 204) {
                localStorage.removeItem('loggedAppUser');
                console.log('funciono')
            }else{
                console.log('no funciono')
            }
        })
    }


  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Logout
