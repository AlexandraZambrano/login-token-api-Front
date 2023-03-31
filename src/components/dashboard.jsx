import React, { useEffect } from 'react'
import axios from '../Api/axios'

const DASHBOARD_URL = '/dashboard';


function Dashboard() {

    const storedToken = localStorage.getItem("loggedAppUser");
    const parsedToken = JSON.parse(storedToken);
    const accessToken = parsedToken.accessToken;
    const token = accessToken.token;

    console.log(token)

    try{

        useEffect(() => {

            const axiosRequest= async() => {
        
               await axios.get(DASHBOARD_URL, {
                headers:{
                    Authorization: `Bearer ${token}`,
                  }
               })
            //    .then((response) => response.json())
               .then(data => console.log(data.data))
            }

            axiosRequest()
    
            }, [])


    }catch{

        console.log('no funciona')

    }
    
  return (
    <div>
      <h1>ESTE ES EL DASHBOARD</h1>
    </div>
  )
}

export default Dashboard
