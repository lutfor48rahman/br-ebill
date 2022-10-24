import React, { useEffect, useState } from 'react';
// import './Employee.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Modal from '../AddUser/Modal';
import Table from '../Table/Table';
import SubNavbar from './SubNavbar';

const Employee = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [search,setSearch] = useState('')

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
    const onSubmit =(data)=>{
        setSearch(data.name)
    }
    const valueReset = () =>{
        reset();
    }
    console.log(search);

    return (
        <div className='main'>
            <div className='employeeContents'>
                <SubNavbar></SubNavbar>
                <br /> <br /> <br /><br />
                <div className='formDiv'>
                    <p>Employee Information</p>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <div class="formContainer">
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Employee Name</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder='Search please'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("name",{
                                            onChange: (e) => {setSearch(e.target.value)},
                                          })}
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
                            </div>
                            <hr />
                            <div className='submitInfo'>
                                <input className='submit submit1' onClick={valueReset} type="button" value='Reset' />
                                <input className='submit submit2' type="submit" value='Search' />
                            </div>
                        </div>
                    </form>
                </div>
                <br /> <br />
            <Table search={search}></Table>
            </div>
            {/* <Modal></Modal> */}
        </div>
    );
};

export default Employee;