import { useRef, useState, useEffect } from 'react';
import axios from '../Api/axios';
import Logout from './logout';

const LOGIN_URL = '/api/login_check';

const Login = () => {

    const errRef = useRef();
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [username, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username: username, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            const accessToken = response.data;
            const user = { username: username, password: pwd, accessToken: accessToken };


           const storedToken = window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(user)
            );

            console.log(storedToken)


            setUsername('');
            setPwd('');
            setSuccess(true);

            console.log('hecho!')


        } catch (err) {
            console.log('no funciona')
        }
    }

    return (
        <>
            {success ? (
                <section className='success'>
                    <h2>¡Has iniciado sesión!</h2>
                    <a href='#' className='btn-login'>Ve al inicio</a>
                </section> 
            ) : (
                <section>
                    <h1>Plataforma de Fichaje</h1>
                        <div className='box-fichaje'>
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
                                <button className='btn'>Entrar</button>
                            </form>

                            <a href="#" className='btn-password'>Recuperar Contraseña</a>
                        </div>
                </section>
            )}
        </>
    )
}

export default Login;