import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import KeyIcon from '@mui/icons-material/Key';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import { Link } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Sidebar = () => {
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        const sideMenus = document.querySelectorAll('.select');
        sideMenus.forEach(sideMenu => {
            sideMenu.addEventListener('click', function () {
                sideMenus.forEach(lnk => lnk.classList.remove('change'))
                this.classList.add('change')
            })
        })
    }, []);

    useEffect(() => {
        //     const toggle = document.getElementById('middle');
        const tops = document.getElementsByClassName('main');
        if (expand === true) {
            document.getElementById('sidebar').classList.add('hide');
            for (const box of tops) {
                box.classList.add('hide');
            }
        }
        else {
            document.getElementById('sidebar').classList.remove('hide');
            for (const box of tops) {
                box.classList.remove('hide');
            }
        }
    }, [expand])

    return (
        <div id='sidebar' className='sidebar'>
            <ChevronLeftIcon onClick={() => setExpand(!expand)} className='toggleIcon' />
            <div className='top'>
                <p>BR E<span>-Bill</span></p>
            </div>
            <div id='middle' className='middle'>
                <ul>

                    <div className='search'>
                        <KeyIcon className='icon'></KeyIcon>
                        <input type="text" placeholder='Search' />
                    </div>
                    <hr />
                    <Link className='decoration' to='/admin'>
                        <li className='change select'>
                            <HomeOutlinedIcon className='icon'></HomeOutlinedIcon>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link className='decoration' to='/employee'>
                        <li className='select'>
                            <ManageAccountsOutlinedIcon className='icon'></ManageAccountsOutlinedIcon>
                            <span>Employee</span>
                        </li>
                    </Link>
                    <Link className='decoration' to='/leave'>
                        <li className='select'>
                            <PeopleOutlineIcon className='icon'></PeopleOutlineIcon>
                            <span>Leave</span>
                        </li>
                    </Link>
                    <Link className='decoration' to='/time'>
                        <li className='select'>
                            <AccessTimeIcon className='icon'></AccessTimeIcon>
                            <span>Meter Book</span>
                        </li>
                    </Link>
                    <Link className='decoration' to='/bill'>
                        <li className='select'>
                            <TravelExploreIcon className='icon'></TravelExploreIcon>
                            <span>Bill</span>
                        </li>
                    </Link>
                    <Link className='decoration' to='/division'>
                        <li className='select'>
                            <SupervisedUserCircleOutlinedIcon className='icon'></SupervisedUserCircleOutlinedIcon>
                            <span>Division</span>
                        </li>
                    </Link>
                    <Link className='decoration' to='/department'>
                        <li className='select'>
                        <AdminPanelSettingsOutlinedIcon className='icon'></AdminPanelSettingsOutlinedIcon>
                            <span>Department</span>
                        </li>
                    </Link>
                    <Link className='decoration' to='/directory'>
                        <li className='select'>
                            <FolderSharedOutlinedIcon className='icon'></FolderSharedOutlinedIcon>
                            <span>Report</span>
                        </li>
                    </Link>
                    <Link className='decoration' to='/mainAdministrator'>
                        <li className='select'>
                            <EngineeringOutlinedIcon className='icon'></EngineeringOutlinedIcon>
                            <span>Setting</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;