import React, { useEffect } from 'react';
import './User.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import picture from '../../image/profile.jpg';
import { Link } from 'react-router-dom';

const EditEmployeeInfo = ({row}) => {
    console.log(row);
    const departments = [
        { name: 'HR ' },
        { name: 'IOS developer' },
        { name: 'Web developer' },
        { name: 'Full stack developer' },
    ]

    const divisions = [
        { name: 'Mymensingha' },
        { name: 'Dhaka' },
        { name: 'Rajshahi' },
        { name: 'Rongpur' },
        { name: 'Khulna' },
        { name: 'sylhet' },
        { name: 'Borishal' },
        { name: 'Chattogram' },

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

    useEffect(() => {
        const loginForm = document.getElementById('loginFormContainer');
        const identity = document.getElementById('rate');
        identity.addEventListener('click', function () {
            const clicked = identity.checked;
            if (clicked === true) {
                loginForm.classList.remove("displayNone");
                console.log(loginForm);
            }
            else {
                loginForm.classList.add('displayNone');
            }
        })



    }, [])
    return (
        <div>
            <div className='userColumn'>
                <div className='imageField'>
                    <img src={picture} width={150} height={150} alt="" />
                    <div className='categoryInfo'>
                        <Link className='decoration stle' to=''>Personal Details</Link>
                        <Link className='decoration stle' to=''>Contact Details</Link>
                        <Link className='decoration stle' to=''>Emergency Contact</Link>
                        <Link className='decoration stle' to=''>Dependents</Link>
                        <Link className='decoration stle' to=''>Immigration</Link>
                        <Link className='decoration stle' to=''>Job</Link>
                        <Link className='decoration stle' to=''>Salary</Link>
                        <Link className='decoration stle' to=''>Tex Exemptions</Link>
                        <Link className='decoration stle' to=''>Report-to</Link>
                        <Link className='decoration stle' to=''>Qualifications</Link>
                        <Link className='decoration stle' to=''>Memberships</Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onsubmit)}>

                    <div className='formBox'>
                        <p>Personal Details</p>
                        <hr />
                        <div class="detailContainers">
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
                                        divisions.map(division =>
                                            <option
                                                value={division.name}
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
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.nid?.type === 'required' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
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
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.house?.type === 'required' && <span class="label-text-alt text-red-500">{errors.house.message}</span>}
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
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.salary?.type === 'required' && <span class="label-text-alt text-red-500">{errors.salary.message}</span>}
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
                                    <span class="label-text">Meter bank address</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("bank", {
                                        required: {
                                            value: true,
                                            message: 'bank is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.bank?.type === 'required' && <span class="label-text-alt text-red-500">{errors.bank.message}</span>}
                                </label>
                            </div>


                        </div>
                        <br /> <hr />
                        <div className='toggle'>
                            <div className='loginToggle'>
                                <p>Create Login Details</p>
                                <label class="switch">
                                    <input id='rate' type="checkbox" />
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
                        <div className='submitInfo'>
                            <input className='submit submit1' type="submit" value='Cancel' />
                            <input className='submit submit2' type="submit" value='Save' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEmployeeInfo;