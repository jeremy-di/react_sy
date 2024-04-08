import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateLayout from './PrivateLayout';
import Jackpot from './Jackpot';

const PrivateRouter = () => {
    return (
        <Routes>
            <Route element={<PrivateLayout />}>
                <Route path="jackpot" element={<Jackpot />} />
            </Route>
        </Routes>
    );
};

export default PrivateRouter;