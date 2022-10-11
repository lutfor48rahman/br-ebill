import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavAdministrator = () => {
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
            <div className='navAmi'>
                <ul>
                    <li>
                       <span className='proName item item1 subNav navColor'>Purge Records</span>
                        {/* <ArrowDropDownIcon/> */}
                        <ul className='dropdown'>
                            <li>
                            <Link to='/mainAdministrator' className='decoration'>Employee Records</Link>
                            </li>
                            <li>
                            <Link to='/mainAdministrator/vacancy' className='decoration'>Candidate Records</Link>
                            </li>
                            <br />
                        </ul>
                    </li>
                </ul>
            </div>
            <Link className='decoration' to='/mainAdministrator/access-record'><div className='item subNav '>Access Record</div></Link>
        </div>
    </div >
    );
};

export default NavAdministrator;