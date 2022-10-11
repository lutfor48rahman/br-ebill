import React from 'react';
import { Outlet } from 'react-router-dom';
import NavAdministrator from './NavAdministrator';

const MainAdministrator = () => {
    return (
        <div className='main'>
            <NavAdministrator></NavAdministrator>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainAdministrator;