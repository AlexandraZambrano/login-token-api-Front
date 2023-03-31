import React, { useState, useEffect } from 'react';
import axios from '../Api/axios';


const REGISTER_URL = '/api/register';


function Reg() {

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [username, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{

            const response = await axios.post(REGISTER_URL,
                { 
                    username: username, 
                    password: pwd 
                },
                {
                    headers: { 'Content-Type': 'application/json'},
                    // withCredentials: true
                }
            );

            console.log(response.data)

            setSuccess(true);

        }catch{
            console.log('no funciona')
        }
    }

  return (
    <div>
      {success ? (
                <section className='success'>
                    <h2>¡Registro completado!</h2>
                    <a href='#' className='btn-login'>Ve al inicio de sesión</a>
                </section> 
            ) : (
                <section>
                    <h1>Registro de usuario</h1>
                        <div className='box-registration'>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='username'>username</label>
                                <input
                                    type='text'
                                    id='username'
                                    autoComplete='off'
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                />

                                <label htmlFor='password'>Contraseña</label>
                                <input
                                    type='password'
                                    id='password'
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />
                                <button className='btn'>Registrarse</button>
                            </form>

                            <a href="/login" className='btn-login'>Iniciar sesión</a>
                        </div>
                </section>
            )}
    </div>
  )
}

export default Reg
