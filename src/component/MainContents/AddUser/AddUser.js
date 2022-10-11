import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SubNavbar from '../Employee/SubNavbar';

const AddUser = () => {
    return (
        <div className='main'>
            <SubNavbar></SubNavbar>
            <br /> <br /> <br /><br />
            <div className='formDiv'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AddUser;