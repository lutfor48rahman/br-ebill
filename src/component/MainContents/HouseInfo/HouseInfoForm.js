import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './HouseInfo.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const HouseInfoForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [meters, setMeters] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log('Filter', filter);
    console.log('meters', meters);
    console.log('search', search);

    const valueReset = () => {
        reset();
    }
    const meterInfo = [
        {
            customerId: 1,
            name: 'abul',
            bookNo: 1,
            houseNo: 23,
            meterNo: 1,
            office: 'uttara',
            billUnite: 'Railbhabon Dhaka'
        },
        {
            customerId: 2,
            name: 'kabul',
            bookNo: 2,
            houseNo: 33,
            meterNo: 2,
            office: 'gulshan',
            billUnite: 'Railbhabon Dhaka'
        },
        {
            customerId: 3,
            name: 'babul',
            bookNo: 3,
            houseNo: 13,
            meterNo: 3,
            office: 'bonani',
            billUnite: 'Railbhabon Dhaka'
        },
        {
            customerId: 4,
            name: 'jamal',
            bookNo: 4,
            houseNo: 53,
            meterNo: 4,
            office: 'gulisthan',
            billUnite: 'Railbhabon Dhaka'
        },
        {
            customerId: 5,
            name: 'kamal',
            bookNo: 5,
            houseNo: 223,
            meterNo: 5,
            office: 'malibag',
            billUnite: 'Railbhabon Dhaka'
        },
    ]
    useEffect(() => {
        setFilter(meterInfo);
        setMeters(meterInfo);
        // setLoading(true);

    }, []);

    useEffect(() => {
        const result = filter.filter(meter => {
            return meter.name.toLowerCase().match(search.toLowerCase());
        });
        setMeters(result);
    }, [search])

    // if (loading) {
    //     return <Loader></Loader>
    // }

    return (
        <div className='main'>
            <br />
            <div className='formDiv'>
                <p>House Information</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Colony</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("colony", {
                                        required: {
                                            value: true,
                                            message: 'Colony is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.colony?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.colony.message}</span>}
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
                                    {...register("houseNo", {
                                        required: {
                                            value: true,
                                            message: 'House no is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.houseNo?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.houseNo.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Meter No</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("meterNo", {
                                        required: {
                                            value: true,
                                            message: 'Meter no is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.meterNo?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.meterNo.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Customer ID</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("id", {
                                        required: {
                                            value: true,
                                            message: 'Id is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.id?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.id.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Customer Name</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("name", {
                                        onChange: (e) => { setSearch(e.target.value) },
                                        required: {
                                            value: true,
                                            message: 'Name is required..'
                                        },

                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">House Serial</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("serial", {
                                        required: {
                                            value: true,
                                            message: 'House serial is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.serial?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.serial.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Page No</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("page", {
                                        required: {
                                            value: true,
                                            message: 'Page no is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.page?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.page.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Occupation Date</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("data", {
                                        required: {
                                            value: true,
                                            message: 'Occupation date is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.data?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.data.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Book No</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("book", {
                                        required: {
                                            value: true,
                                            message: 'Book no is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.book?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.book.message}</span>}
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
                                            message: 'Designation is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.designation?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.designation.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Vacation Date</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("vacation", {
                                        required: {
                                            value: true,
                                            message: 'Vacation date is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.vacation?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.vacation.message}</span>}
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div className='submitInfo'>
                            <input className='submit submit1' onClick={valueReset} type='button' value='Reset' />
                            <input className='submit submit2' type="submit" value='Search' />
                        </div>
                    </div>
                </form>
                <hr />
                <div className='billTable'>
                    <table>
                        <tr>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Book No</th>
                            <th>House serial</th>
                            <th>Meter No</th>
                            <th>Office</th>
                            <th>Bill Unit</th>
                        </tr>
                        {
                            meters.map(meter =>
                                <tr className='data'>
                                    <td>{meter.customerId}</td>
                                    <td>{meter.name}</td>
                                    <td>{meter.bookNo}</td>
                                    <td>{meter.houseNo}</td>
                                    <td>{meter.meterNo}</td>
                                    <td>{meter.office}</td>
                                    <td>{meter.billUnite}</td>

                                </tr>
                            )
                        }
                    </table>
                </div>
                {/* <div className='billTable'>
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
                </div> */}
            </div>

        </div>
    );
};

export default HouseInfoForm;