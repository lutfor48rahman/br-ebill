import React from 'react';
import Table from '../Table/Table';
import SubNavbar from './SubNavbar';

const Employee = () => {
    return (
        <div className='main'>
            <div className='employeeContents'>
                <SubNavbar></SubNavbar>
                <br /> <br /> <br /><br />
            <Table></Table>
            </div>
        </div>
    );
};

export default Employee;