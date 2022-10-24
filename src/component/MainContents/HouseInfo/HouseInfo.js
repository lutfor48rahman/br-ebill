import React from 'react';
import './HouseInfo.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

const HouseInfo = () => {
    return (
        <div className='main'>
            <br />
            <div className="formDiv">
                <div className='house'>
                    <p className='headingHouse'>House Info</p>
                    <div className='formHeading'>
                        <div className='div1'><span>Open By</span></div>
                        <div className='div2'><input type="checkbox" />Colony</div>
                        <div className='div3'><input type="checkbox" />Book</div>
                        <div className='div4'><span>Order By</span></div>
                        <div className='div5'><input type="checkbox" />House No</div>
                        <div className='div6'><input type="checkbox" />Book No</div>
                    </div>
                    <div className='houseColumns'>
                        <div className='column1'>
                            <div><span>Colony:</span></div>
                            <div><span>House No:</span></div>
                            <div><span>Meter No:</span></div>
                            <div><span>Customer ID:</span></div>
                            <div><span>Customer Name:</span></div>
                        </div>
                        <div className='column2'>
                            <div className='col2-section1'>MERINEPARA PXC</div>
                            <div className='col2-section2'>
                                <div></div>
                                <div>House serial</div>
                                <div></div>
                                <div>Page No</div>
                                <div></div>
                                <div>Occupation Date</div>
                            </div>
                            <div className='col2-section3'>&nbsp;</div>
                        </div>
                        <div className='column3'>
                            <div>Book No:</div>
                            <div>736682</div>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>Designation:</div>
                        </div>
                        <div className='column4'>
                            <div className='col2-section1'>&nbsp;</div>
                            <div className='col2-section2'>
                                <div>Is Billing Stop?</div>
                                <div className='no'><input type="checkbox" />No</div>
                                <div>Is Occupied</div>
                                <div className='yes'><input type="checkbox" />Yes</div>
                                <div>Vacation Date</div>
                                <div></div>
                            </div>
                            <div className='col2-section3'>&nbsp;</div>
                        </div>
                    </div>
                    <div className='updateRecord'>
                        <FirstPageIcon className='icon' />
                        <ArrowLeftIcon className='icon' />
                        <input type="text" />
                        <ArrowRightIcon className='icon' />
                        <LastPageIcon className='icon' />
                        <button>Cancel</button>
                        <button>Update</button>
                    </div>
                    <div className='billTable'>
                        <table>
                            <tr>
                                <th>House ID</th>
                                <th>House No</th>
                                <th>House serial</th>
                                <th>Meter No</th>
                                <th>Customer ID</th>
                                <th>Book No</th>
                                <th>Page No</th>
                            </tr>
                            <tr className='data'>
                                <td>2082</td>
                                <td>E/182/B</td>
                                <td>69</td>
                                <td>837437</td>
                                <td>433</td>
                                <td>454</td>
                                <td>5</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HouseInfo;