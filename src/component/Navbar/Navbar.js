import React from 'react';
import './Navbar.css';
import profile from '../image/profile.jpg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navbar = ({child}) => {
    const logout = () => {
        signOut(auth);
    }
    const [user] = useAuthState(auth);
    return (
        <div className='navbar'>
            <div className='sideMenu'>
                {child}
            </div>
            <div className='profile'>
                <img src={profile} alt="" />
                <ul>
                    <li>
                        <span className='proName'>Hey, {user?.displayName}</span>
                        {/* <ArrowDropDownIcon/> */}
                        <ul className='dropdown'>
                            <Link to='' className='decoration'><li>
                                About
                            </li>
                            </Link>
                            <Link to='' className='decoration'>
                                <li>
                                    Support
                                </li>
                            </Link>
                            <Link to='' className='decoration'>
                                <li>
                                    Password Change
                                </li>
                            </Link>
                            <Link onClick={logout} to='' className='decoration'>
                                <li>
                                    Logout
                                </li>
                            </Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;