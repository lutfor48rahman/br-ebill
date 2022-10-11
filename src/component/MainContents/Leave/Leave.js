import React, { useState } from 'react';
// import './Leave.css';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from '../Table/Table';

const Leave = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState('');

    return (
        <div className='main'>
            <div className=''>
                <div className='itemContainer'>
                    <div className='items'>
                        <div className='item item1'>Apply</div>
                        <div className='item'>My Leave</div>
                        <div className='item'>Entitlements</div>
                        <div className='item'>Reports</div>
                        <div className='item'>Configure</div>
                        <div className='item'>Leave List</div>
                        <div className='item'>Assign Leave</div>
                    </div>
                </div>
                <br /> <br /> <br /><br />
                <div className='formDiv'>
                    <p>Leave List</p>
                    <hr />
                    <form onSubmit={handleSubmit()}>

                        <div>
                            <div class="formContainer">
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">From Date</span>
                                    </label>
                                    <br />
                                    <DatePicker
                                    className='date'
                                    selected={startDate}
                                    onChange={(date)=>setStartDate(date)}
                                    showTimeSelect
                                    dateFormat="Pp"
                                />
                                </div>
                               
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">To Date</span>
                                    </label>
                                    <br />
                                    <DatePicker
                                    className='date'
                                    selected={endDate}
                                    onChange={(date)=>setEndDate(date)}
                                    showTimeSelect
                                    dateFormat="Pp"
                                />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Show Leave With Status*</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder='select'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("statusLeave")}
                                    />
                                    <label class="label">
                                        <span class="label-text">Daynami hobe</span>
                                    </label>
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Leave Type</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder='--select--'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("type")}
                                    />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Employee Name</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder='Type for hints..'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("name")}
                                    />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Sub Unit</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder='--select--'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("unit")}
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className='submitInfo'>
                                <input className='submit submit1' type="submit" value='Reset' />
                                <input className='submit submit2' type="submit" value='Search' />
                            </div>
                        </div>
                    </form>
                </div>
                <br /><br />
                <Table></Table>
            </div>
        </div>
    );
};

export default Leave;