import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from './PublicLayout';
import Home from './Home';
import Login from './Login';
import Profil from './Profil';
import Gardien from '../../_helpers/Gardien';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="profil" element={<Gardien><Profil /></Gardien>} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;