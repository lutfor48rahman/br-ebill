import React, { useEffect } from 'react';
import './User.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import picture from '../../image/profile.jpg';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const User = () => {
    const departments = [
        { name: '--select--' },
        { name: 'HR ' },
        { name: 'IOS developer' },
        { name: 'Web developer' },
        { name: 'Full stack developer' },
    ]

    const divisions = [
        { name: '--select--' },
        { name: 'Mymensingha' },
        { name: 'Dhaka' },
        { name: 'Rajshahi' },
        { name: 'Rongpur' },
        { name: 'Khulna' },
        { name: 'sylhet' },
        { name: 'Borishal' },
        { name: 'Chattogram' },

    ]

    const categories = [
        { name: '--select--' },
        { name: 'Entry Level' },
        { name: 'Junior' },
        { name: 'Mid Level' },
        { name: 'Senior' }
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

    const valueReset = () =>{
        reset();
    }

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
                                    {errors.name?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <br />
                                <input
                                    type="email"
                                    class="input input-border border-black w-full max-w-xs"
                                    placeholder='your email'
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.email.message}</span>}
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
                                    {errors.division?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.division.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Category</span>
                                </label>
                                <select {...register("division")}>
                                    {
                                        categories.map(category =>
                                            <option
                                                value={category.name}
                                            >
                                                {category.name}
                                            </option>)
                                    }
                                </select>
                                <label class="label">
                                    {errors.department?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.department.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Bill Unit</span>
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
                                    {errors.bill?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.bill.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Salary Unit</span>
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
                                    {errors.bill?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.bill.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Office Name</span>
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
                                    {errors.bill?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.bill.message}</span>}
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
                                    {errors.nid?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.nid.message}</span>}
                                </label>
                                <label class="label">
                                    {errors.nid?.type === 'pattern' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.nid.message}</span>}
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
                                    {errors.designation?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.designation.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Billing Stoped ?</span>
                                </label>
                                <br />
                                <div className='billingStop'>
                                    <div className='radio'>
                                        <input type="radio" id="html" name="fav_language" value="yes" checked />
                                        <span> Yes</span>
                                    </div>
                                    <div className='radio'>
                                        <input type="radio" id="html" name="fav_language" value="no" />
                                        <span>No</span>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Status</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("status", {
                                        required: {
                                            value: true,
                                            message: 'Status is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.status?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.status.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Book No</span>
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
                                    {errors.bookNo?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.bookNo.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Book Name</span>
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
                                    {errors.bookname?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.bookname.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Book Page</span>
                                </label>
                                <br />
                                <select {...register("bookPage")}>
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
                                    {errors.bookPage?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.bookPage.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Book Sequence</span>
                                </label>
                                <br />
                                <select {...register("location")}>
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
                                    {errors.place?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.place.message}</span>}
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
                                    {errors.house?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.house.message}</span>}
                                </label>
                                <label class="label">
                                    {errors.house?.type === 'pattern' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.house.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Colony</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("colony", {
                                        required: {
                                            value: true,
                                            message: 'colony is required..'
                                        },
                                        pattern: {
                                            value: /[0-9]/,
                                            message: 'Provide a valid digit'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.colony?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.colony.message}</span>}
                                </label>
                                <label class="label">
                                    {errors.salary?.type === 'pattern' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.salary.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">OCC Date</span>
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
                                    {errors.book?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.book.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Loacation</span>
                                </label>
                                <br />
                                <select {...register("location")}>
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
                                    {errors.bill?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.bill.message}</span>}
                                </label>
                            </div><div className='field'>
                                <label class="label">
                                    <span class="label-text">Station</span>
                                </label>
                                <br />
                                <select {...register("station")}>
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
                                    {errors.bill?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.bill.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    placeholder='Phone Number'
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.phone?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error'/>{errors.phone.message}</span>}
                                </label>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <div className='submitInfo formBox'>
                            <input className='submit submit1' onClick={valueReset} type="button" value='Cancel' />
                            <input className='submit submit2' type="submit" value='Save' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default User;