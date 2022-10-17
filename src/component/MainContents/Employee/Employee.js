import React, { useEffect } from 'react';
// import './Employee.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Modal from '../AddUser/Modal';
import Table from '../Table/Table';
import SubNavbar from './SubNavbar';

const Employee = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const status = [
        {name:'--select--'},
        {name:'Full time'},
        {name:'Part time'},
    ]

    const titles = [
        {name:'--select--'},
        {name:'IOS Developer'},
        {name:'Web Develovelper'},
        {name:'UI UX Designer'},
    ]

    return (
        <div className='main'>
            <div className='employeeContents'>
                <SubNavbar></SubNavbar>
                <br /> <br /> <br /><br />
                <div className='formDiv'>
                    <p>Employee Information</p>
                    <hr />
                    <form onSubmit={handleSubmit()}>

                        <div>
                            <div class="formContainer">
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Employee Name</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("name")}
                                    />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Employee Id</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("id")}
                                    />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Employee Status</span>
                                    </label>
                                    <br />
                                    <select {...register("status")}>
                                        {
                                            status.map(st=> <option 
                                            value={st.name}
                                            >
                                                {st.name}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Include</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder='Current Employees Only'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("include")}
                                    />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">SuperVisor Name</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder='Type for hints..'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("supervisor")}
                                    />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Job Title</span>
                                    </label>
                                    <br />
                                    <select {...register('title')}>
                                        {
                                            titles.map(title=> <option 
                                            value={title.name}
                                            >
                                                {title.name}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Sub Unit</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        class="input input-border border-black w-full max-w-xs"
                                        placeholder='--select--'
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
                <br /> <br />
            <Table></Table>
            </div>
            {/* <Modal></Modal> */}
        </div>
    );
};

export default Employee;