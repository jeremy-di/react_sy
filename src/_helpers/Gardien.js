import React from 'react';
import { userService } from '../_services/user.service';
import { Navigate } from 'react-router-dom';

const Gardien = ({children}) => {
    if ( !userService.isLogged() ) {
       return <Navigate to="/login" /> 
    }

    return children
};

export default Gardien;