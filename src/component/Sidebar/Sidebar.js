import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SearchIcon from '@mui/icons-material/Search';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import { Link } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Navbar from '../Navbar/Navbar';

const Sidebar = () => {
    const [expand, setExpand] = useState(false);
    const [child, setChild] = useState('Dashboard');
    

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
    }, [expand]);


    useEffect(() => {
        const values = document.querySelectorAll('.child');
        for(const child of values){
            child.addEventListener('click',function(){
                setChild(child.innerText);
            })
        }

    }, [child])

    return (
        <>
        <Navbar child={child}></Navbar>
        <div id='sidebar' className='sidebar'>
            <ChevronLeftIcon onClick={() => setExpand(!expand)} className='toggleIcon' />
            <div className='top'>
                <p>BR E<span>-Bill</span></p>
            </div>
            <div id='middle' className='middle'>
                <ul>

                    <div className='search'>
                        <SearchIcon className='icon'></SearchIcon>
                        <input type="text" placeholder='Search' />
                    </div>
                    <hr />
                    <Link className='decoration child' to='/dashboard'>
                        <li className='change select'>
                            <HomeOutlinedIcon className='icon'></HomeOutlinedIcon>
                            <span >Dashboard</span>
                        </li>
                    </Link>
                    <Link className='decoration child' to='/employee'>
                        <li className='select'>
                            <ManageAccountsOutlinedIcon className='icon'></ManageAccountsOutlinedIcon>
                            <span >Employee</span>
                        </li>
                    </Link>
                    <Link className='decoration child' to='/house-info'>
                        <li className='select'>
                            <AccessTimeIcon className='icon'></AccessTimeIcon>
                            <span >Meter Book</span>
                        </li>
                    </Link>
                    <Link className='decoration child' to='/pdf-view'>
                        <li className='select'>
                            <TravelExploreIcon className='icon'></TravelExploreIcon>
                            <span >Bill</span>
                        </li>
                    </Link>
                    <Link className='decoration child' to='/division'>
                        <li className='select'>
                            <SupervisedUserCircleOutlinedIcon className='icon'></SupervisedUserCircleOutlinedIcon>
                            <span >Division</span>
                        </li>
                    </Link>
                    <Link className='decoration child' to='/department'>
                        <li className='select'>
                            <AdminPanelSettingsOutlinedIcon className='icon'></AdminPanelSettingsOutlinedIcon>
                            <span >Department</span>
                        </li>
                    </Link>
                    <Link className='decoration child' to='/report'>
                        <li className='select'>
                            <FolderSharedOutlinedIcon className='icon'></FolderSharedOutlinedIcon>
                            <span >Report</span>
                        </li>
                    </Link>
                    <Link className='decoration child' to='/mainAdministrator'>
                        <li className='select'>
                            <EngineeringOutlinedIcon className='icon'></EngineeringOutlinedIcon>
                            <span >Setting</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Sidebar;