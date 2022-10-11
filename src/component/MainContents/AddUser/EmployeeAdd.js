import React, { useEffect } from 'react';
import './User.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import picture from '../../image/profile.jpg';

const User = () => {
    const departments = [
        {name:'--select--'},
        {name:'HR '},
        {name:'IOS developer'},
        {name:'Web developer'},
        {name:'Full stack developer'},
    ]

    const divisions = [
        {name:'--select--'},
        {name:'Mymensingha'},
        {name:'Dhaka'},
        {name:'Rajshahi'},
        {name:'Rongpur'},
        {name:'Khulna'},
        {name:'sylhet'},
        {name:'Borishal'},
        {name:'Chattogram'},

    ]
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onsubmit = (data) => {
        const userInformation = {
            name: data.name,
            id: data.id
        }
        toast(`Employee added....`);
        console.log(userInformation);
        alert(JSON.stringify(userInformation));
        reset();

    }

    useEffect(()=>{
        const loginForm = document.getElementById('loginFormContainer');
        const identity = document.getElementById('rate');
        identity.addEventListener('click',function(){
            const clicked = identity.checked;
            if(clicked === true){
                loginForm.classList.remove("displayNone");
                console.log(loginForm);
            }
            else{
                loginForm.classList.add('displayNone');
            }
        })
       
        
        
    },[])
    return (
        <div className=''>
            <p>Add Employee</p>
            <hr />
            <div className='userColumn'>
                <div className='imageField'>
                    <img src={picture} width={150} height={150} alt="" />
                    <p className='para'><small>Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px</small></p>
                </div>
                <form onSubmit={handleSubmit(onsubmit)}>

                    <div>
                        <div class="formContainers formBox">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Employee Name</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    placeholder='Full name'
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Division</span>
                                </label>
                                <br />
                                <select {...register("division")}>
                                    {
                                        divisions.map(division=> 
                                        <option
                                        value ={ division.name}
                                        >
                                            {division.name}
                                        </option>)
                                    }
                                </select>
                                <label class="label">
                                    {errors.division?.type === 'required' && <span class="label-text-alt text-red-500">{errors.division.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Department</span>
                                </label>
                                <br />
                                <select  {...register("department")}>
                                    {
                                        departments.map(department => 
                                            <option
                                            value={department.name}
                                            >
                                                {department.name}
                                            </option>)
                                    }
                                </select>
                                <label class="label">
                                    {errors.department?.type === 'required' && <span class="label-text-alt text-red-500">{errors.department.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Bill Unit</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("bill", {
                                        required: {
                                            value: true,
                                            message: 'Bill is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.bill?.type === 'required' && <span class="label-text-alt text-red-500">{errors.bill.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">NID</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("nid", {
                                        required: {
                                            value: true,
                                            message: 'NID is required..'
                                        },
                                        pattern: {
                                            value: /[0-9]/,
                                            message: 'Provide a valid digit'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.nid?.type === 'required' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
                                </label>
                                <label class="label">
                                    {errors.nid?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Designation</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("designation", {
                                        required: {
                                            value: true,
                                            message: 'designation is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.designation?.type === 'required' && <span class="label-text-alt text-red-500">{errors.designation.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Working place address</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("place", {
                                        required: {
                                            value: true,
                                            message: 'place is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.place?.type === 'required' && <span class="label-text-alt text-red-500">{errors.place.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">House No</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("house", {
                                        required: {
                                            value: true,
                                            message: 'house is required..'
                                        },
                                        pattern: {
                                            value: /[0-9]/,
                                            message: 'Provide a valid digit'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.house?.type === 'required' && <span class="label-text-alt text-red-500">{errors.house.message}</span>}
                                </label>
                                <label class="label">
                                    {errors.house?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.house.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Salary</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("salary", {
                                        required: {
                                            value: true,
                                            message: 'salary is required..'
                                        },
                                        pattern: {
                                            value: /[0-9]/,
                                            message: 'Provide a valid digit'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.salary?.type === 'required' && <span class="label-text-alt text-red-500">{errors.salary.message}</span>}
                                </label>
                                <label class="label">
                                    {errors.salary?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.salary.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Meter Number</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("meter", {
                                        required: {
                                            value: true,
                                            message: 'meter is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.meter?.type === 'required' && <span class="label-text-alt text-red-500">{errors.meter.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Meter book address</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("book", {
                                        required: {
                                            value: true,
                                            message: 'book is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.book?.type === 'required' && <span class="label-text-alt text-red-500">{errors.book.message}</span>}
                                </label>
                            </div>


                        </div>
                        <br /> <hr />
                        <div className='toggle formBox'>
                            <div className='loginToggle'>
                                <p>Create Login Details</p>
                                <label class="switch">
                                    <input id='rate' type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div id='loginFormContainer' className='loginFormContainer displayNone'>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Employee Status</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder='--select--'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("status")}
                                    />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Status</span>
                                    </label>
                                    <br />
                                    <div className='status'>
                                        <div className='radio'>
                                            <input type="radio" id="html" name="fav_language" value="enabled" checked />
                                            <span> Enabled</span>
                                        </div>
                                        <div className='radio'>
                                            <input type="radio" id="html" name="fav_language" value="disabled" />
                                            <span>Disabled</span>
                                        </div>
                                    </div>
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
                                    <input
                                        type="text"
                                        placeholder='--select--'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("title")}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='submitInfo formBox'>
                            <input className='submit submit1' type="submit" value='Cancel' />
                            <input className='submit submit2' type="submit" value='Save' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default User;