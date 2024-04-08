import React from 'react';
import { userService } from '../_services/user.service'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    let navigate = useNavigate()

    const logout = () => {
        userService.logout()
        navigate('/')
    }

    return (
        <div>
            <ul>
                {!userService.isLogged() && (
                <li><Link to="/login">Connexion</Link></li>
                )}
                {userService.isLogged() && (
                <>
                    <li>Mon profil</li>
                    <Link onClick={logout}><li>Deconnexion</li></Link>
                </>
                )}
            </ul>
        </div>
    );
};

export default Header;