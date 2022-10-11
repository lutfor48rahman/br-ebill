import React from 'react';
import './Navbar.css';
import profile from '../image/profile.jpg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Navbar = () => {
    const logout = () => {
        signOut(auth);
    }
    return (
        <div className='navbar'>
            <div className='sideMenu'>
                admin
            </div>
            <div className='profile'>
                <img src={profile} alt="" />
                <ul>
                    <li>
                       <span className='proName'>Hey, ZeroDevs</span>
                        {/* <ArrowDropDownIcon/> */}
                        <ul className='dropdown'>
                            <li>
                            <Link onClick={logout} to='' className='decoration'>About</Link>
                            </li>
                            <li>
                            <Link onClick={logout} to='' className='decoration'>Support</Link>
                            </li>
                            <li>
                            <Link onClick={logout} to='' className='decoration'>Password Change</Link>
                            </li>
                            <li>
                                <Link onClick={logout} to='' className='decoration'>Logout</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;