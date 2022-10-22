import React from 'react';
import './BillingPage.css';
import logo from '../../image/profile.jpg';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

const BillingPage = () => {

    const printDocument = () => {
        const input = document.getElementById('divToPrint');
        console.log(input);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('pdf');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', -10, 10);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
    }

    return (
        <div className='main'>
            <br />
            <div className='formDiv'>
                <div id='divToPrint'>
                    <div className="billHeading">
                        <div className="billLogo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="title">
                            <p>Office of the Divisiona Electrical Engineer <br /> Bangladesh Railway, Paksey. <br /><u>Electric Bill.</u></p>
                        </div>
                    </div>
                    <div className="billContent">
                        <div className="billName">
                            <p className='name'>Name: &nbsp;&nbsp;<span><sup>md riad ahmed</sup></span></p>
                            <p className='bill'>Bill No: &nbsp;&nbsp;<span><sup>153.027</sup></span></p>
                            <p className=''>House No: &nbsp;&nbsp;<span><sup>E/005</sup></span></p>
                            <p className='office'>Office: &nbsp;&nbsp;<span><sup>dd/lkm/aka/proj</sup></span></p>
                            <p className='location'>Location: &nbsp;&nbsp;<span><sup>Dhaka</sup></span></p>
                        </div>
                        <div className="billDesignation">
                            <p className='dsgPera'>Designation: &nbsp;<span><sup>dd/lkm/aka/proj</sup></span></p>
                            <div className="officeInfo">
                                <div className='month'>
                                    <p>Bill Month: &nbsp;<span><sup>November-2022</sup></span></p>
                                    <p>Meter No: &nbsp;<span><sup>0019048</sup></span></p>
                                    <p>Salary Unit: &nbsp;<span><sup>officer</sup></span></p>
                                    <p>Bill Unit: &nbsp;<span><sup>railbhabon dhaka</sup></span></p>
                                </div>
                                <div className='costSystem'>
                                    <p className='cumtomer'>Customer ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><sup>2,507</sup></span></p>
                                    <p className='colony'>colony: &nbsp;&nbsp;&nbsp;&nbsp;<span><sup>officers pxc</sup></span></p>
                                    <p className='meter'>Meter Reader: &nbsp;&nbsp;&nbsp;<span><sup>zakir</sup></span></p>
                                    <p className='bill'>Bill Issue Dt: &nbsp;&nbsp;&nbsp;<span><sup>17/10/2022</sup></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="billMiddle">
                        <div className='meterNumber'>
                            <div className="numberAlign">
                                <p>Book No - page No:&nbsp;</p>
                                <p className='meterDigit'> 022- 1</p>
                            </div>
                            <div className="numberAlign">
                                <p>Previous Reading/Date:&nbsp; </p>
                                <p className='dateNumber'>40,069 &nbsp;&nbsp;&nbsp;&nbsp; 01/10/2022</p>
                            </div>
                            <div className="numberAlign">
                                <p>Present Reading/Date:&nbsp; </p>
                                <p className='dateNumber'>40,769 &nbsp;&nbsp;&nbsp;&nbsp; 01/11/2022</p>
                            </div>
                            <div className="numberAlign">
                                <p>Energy USed:&nbsp; </p>
                                <p className='unit'>300</p>
                            </div>
                        </div>
                        <div className='meterCharge'>
                            <div className='chargeAlign'>
                                <p>Energy Charge: &nbsp; </p>
                                <p><span>1551.00</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>Demand USed: &nbsp; </p>
                                <p><span>25.00</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>Service USed: &nbsp; </p>
                                <p><span>10.00</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>Meter Rent: &nbsp;</p>
                                <p><span>10.00</span></p>
                            </div>
                            <hr className='underline' />
                            <div className="chargeAlign">
                                <p>New Amount: &nbsp;</p>
                                <p><span>1596.25</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>VAT: &nbsp;</p>
                                <p> <span>79.81</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>Adjustment: &nbsp;</p>
                                <p><span> 0.00</span></p>
                            </div>
                            <hr className='underline' />
                            <div className="chargeAlign">
                                <p>Total Amount: &nbsp;</p>
                                <p> <span>1676.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='BillFooter'>
                        <p>Taka (in words) one thousand six hundred seventy-six only</p>
                        <p>Economic Code:-3121 (Electricity)</p>
                        <p><small>Unit Upto-75/200/300/400/600/Above=@Tk 4.0/5.45/5.70/6.02/9.30/10.70, Service/Demand/Meter @ Tk. 10/15/5, VAT=5%</small></p>
                        <p>Copy to: Consumer/Bill Unit/Salary Unit/Office Copy</p>
                        <h4>Prepared By : NASREN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Checked by:</h4>

                    </div>
                    <br /><br />
                    <hr className='highphen' />
                    <br />
                    <div className="billHeading">
                        <div className="billLogo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="title">
                            <p>Office of the Divisiona Electrical Engineer <br /> Bangladesh Railway, Paksey. <br /><u>Electric Bill.</u></p>
                        </div>
                    </div>
                    <div className="billContent">
                        <div className="billName">
                            <p className='name'>Name: &nbsp;&nbsp;<span><sup>md riad ahmed</sup></span></p>
                            <p className='bill'>Bill No: &nbsp;&nbsp;<span><sup>153.027</sup></span></p>
                            <p className=''>House No: &nbsp;&nbsp;<span><sup>E/005</sup></span></p>
                            <p className='office'>Office: &nbsp;&nbsp;<span><sup>dd/lkm/aka/proj</sup></span></p>
                            <p className='location'>Location: &nbsp;&nbsp;<span><sup>Dhaka</sup></span></p>
                        </div>
                        <div className="billDesignation">
                            <p className='dsgPera'>Designation: &nbsp;<span><sup>dd/lkm/aka/proj</sup></span></p>
                            <div className="officeInfo">
                                <div className='month'>
                                    <p>Bill Month: &nbsp;<span><sup>November-2022</sup></span></p>
                                    <p>Meter No: &nbsp;<span><sup>0019048</sup></span></p>
                                    <p>Salary Unit: &nbsp;<span><sup>officer</sup></span></p>
                                    <p>Bill Unit: &nbsp;<span><sup>railbhabon dhaka</sup></span></p>
                                </div>
                                <div className='costSystem'>
                                    <p className='cumtomer'>Customer ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><sup>2,507</sup></span></p>
                                    <p className='colony'>colony: &nbsp;&nbsp;&nbsp;&nbsp;<span><sup>officers pxc</sup></span></p>
                                    <p className='meter'>Meter Reader: &nbsp;&nbsp;&nbsp;<span><sup>zakir</sup></span></p>
                                    <p className='bill'>Bill Issue Dt: &nbsp;&nbsp;&nbsp;<span><sup>17/10/2022</sup></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="billMiddle">
                        <div className='meterNumber'>
                            <div className="numberAlign">
                                <p>Book No - page No:&nbsp;</p>
                                <p className='meterDigit'> 022- 1</p>
                            </div>
                            <div className="numberAlign">
                                <p>Previous Reading/Date:&nbsp; </p>
                                <p className='dateNumber'>40,069 &nbsp;&nbsp;&nbsp;&nbsp; 01/10/2022</p>
                            </div>
                            <div className="numberAlign">
                                <p>Present Reading/Date:&nbsp; </p>
                                <p className='dateNumber'>40,769 &nbsp;&nbsp;&nbsp;&nbsp; 01/11/2022</p>
                            </div>
                            <div className="numberAlign">
                                <p>Energy USed:&nbsp; </p>
                                <p className='unit'>300</p>
                            </div>
                        </div>
                        <div className='meterCharge'>
                            <div className='chargeAlign'>
                                <p>Energy Charge: &nbsp; </p>
                                <p><span>1551.00</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>Demand USed: &nbsp; </p>
                                <p><span>25.00</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>Service USed: &nbsp; </p>
                                <p><span>10.00</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>Meter Rent: &nbsp;</p>
                                <p><span>10.00</span></p>
                            </div>
                            <hr className='underline' />
                            <div className="chargeAlign">
                                <p>New Amount: &nbsp;</p>
                                <p><span>1596.25</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>VAT: &nbsp;</p>
                                <p> <span>79.81</span></p>
                            </div>
                            <div className="chargeAlign">
                                <p>Adjustment: &nbsp;</p>
                                <p><span> 0.00</span></p>
                            </div>
                            <hr className='underline' />
                            <div className="chargeAlign">
                                <p>Total Amount: &nbsp;</p>
                                <p> <span>1676.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='BillFooter'>
                        <p>Taka (in words) one thousand six hundred seventy-six only</p>
                        <p>Economic Code:-3121 (Electricity)</p>
                        <p><small>Unit Upto-75/200/300/400/600/Above=@Tk 4.0/5.45/5.70/6.02/9.30/10.70, Service/Demand/Meter @ Tk. 10/15/5, VAT=5%</small></p>
                        <p>Copy to: Consumer/Bill Unit/Salary Unit/Office Copy</p>
                        <h4>Prepared By : NASREN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Checked by:</h4>

                    </div>
                </div>
                <div className='pdf' onClick={printDocument}><span className='text'>Download Pdf</span></div>
            </div>
            <br /><br />
        </div>
    );
};

export default BillingPage;