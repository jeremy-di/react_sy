import React, { useState } from 'react';
import { userService } from '../../_services/user.service' 
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username : "",
        password : ""
    })

    const onChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        userService.login(credentials)
            .then(res => {
                console.log(res.data)
                userService.saveToken(res.data.token)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <h1>Connexion</h1>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username">Votre email</label>
                        <input type="text" name="username" value={credentials.username} id="username" onChange={onChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Votre mot de passe</label>
                        <input type="password" name="password" value={credentials.password} id="password" onChange={onChange} />
                    </div>
                    <div>
                        <button type="submit">Valider</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;