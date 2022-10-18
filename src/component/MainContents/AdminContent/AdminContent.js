import React, { useEffect } from 'react';
import './AdminContent.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminContent = () => {

    useEffect(() => {
        const sideMenus = document.querySelectorAll('.subNav');
        sideMenus.forEach(sideMenu => {
            sideMenu.addEventListener('click', function () {
                sideMenus.forEach(lnk => lnk.classList.remove('navColor'))
                this.classList.add('navColor')
            })
        })
    }, [])
    let percentage = 55;

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='main'>
            <div className='adminContents'>
                <div className='itemContainer'>
                    <div className='items'>
                        <div className='item item1 subNav navColor'>User Management</div>
                        <div className='item subNav'>Organization</div>
                        <div className='item subNav'>Job</div>
                        <div className='item subNav'>Qualifications</div>
                        <div className='item subNav'>Nationalities</div>
                        <div className='item subNav'>Corporate Branding</div>
                        <div className='item subNav'>Configuration</div>
                    </div>
                </div>
                <br /> <br /> <br /><br />
                <div className='formDiv'>
                    <div className='charts'>
                        <div className='pieProggress'>
                            <div>
                            <CircularProgressbar
                                className='paiChart'
                                value={percentage}
                                strokeWidth={6}
                                text={`${percentage}%`}
                            />
                            </div>
                            <p className='title'>Total amount gain today</p> 
                            <p className='amount'>$580</p>
                            <p className='desc'> When you enter this token number into your electricity meter, your electricity bill payment will be completed</p>
                        </div>
                        <div>
                            
                                <AreaChart
                                    width={650}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminContent;