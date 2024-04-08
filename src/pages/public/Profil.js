import React, { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service';

const Profil = () => {

    const [profil, setprofil] = useState(null)
    const [loaded, setLoaded] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=> {
        userService.getProfil()
            .then(res => {
                console.log(res.data.data)
                setprofil(res.data.data)
                setLoaded(true)
            })
            .catch(error => {
                setError(error)
                setLoaded(true)
            })
    }, [])

    if ( !loaded ) {
        return(
            <div>
                <h2>Chargement...</h2>
            </div>
        )
    } else if ( error ) {
        return(
            <div>
                <h2>Vous avez une erreur de type {error.response.status} : {error.response.statusText}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <h1>Mon profil</h1>
                </div>
                <div>
                    <h3>EMAIL : {profil.email}</h3>
                    <h3>ROLE : {profil.roles}</h3>
                </div>
            </div>
        );
    }

};

export default Profil;