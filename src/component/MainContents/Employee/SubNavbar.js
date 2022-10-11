import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SubNavbar = () => {

    useEffect(() => {
        const sideMenus = document.querySelectorAll('.subNav');
        sideMenus.forEach(sideMenu => {
            sideMenu.addEventListener('click', function () {
                sideMenus.forEach(lnk => lnk.classList.remove('navColor'))
                this.classList.add('navColor')
            })
        })
    }, [])
    return (
        <div className='itemContainer'>
            <div className='items'>
                <Link className='decoration' to=''><div className='item item1 subNav '>Configuration</div></Link>
                <Link className='decoration' to='/employee'><div className='item subNav navColor'>Employee List</div></Link>
                <Link className='decoration' to='/add-user/users'><div className='item subNav'>Add Employee</div></Link>
                <Link className='decoration' to=''><div className='item subNav'> Reports
                </div></Link>
            </div>
        </div >
    );
};

export default SubNavbar;