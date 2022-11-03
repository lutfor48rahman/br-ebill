import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Temporary = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onsubmit = (data) => {
        const userInformation = {
            name: data.name,
            id: data.id
        }
        console.log(userInformation);
        alert(JSON.stringify(userInformation));
        reset();

    }

    const valueReset = () =>{
        reset();
    }
    return (
        <div className='main'>
            <br />
            <div className='formDiv'>
                <p>Bill Unit</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Unit Code</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("unitCode", {
                                        required: {
                                            value: true,
                                            message: 'House id is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.unitCode?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.unitCode.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Unit Name</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("unitName", {
                                        required: {
                                            value: true,
                                            message: 'House no is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.unitName?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.unitName.message}</span>}
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
            </div>
            <div className='formDiv'>
                <p>Category</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Category ID</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("categoryId", {
                                        required: {
                                            value: true,
                                            message: 'Category id is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.categoryId?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.categoryId.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Category Name</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("categoryName", {
                                        required: {
                                            value: true,
                                            message: 'Category name is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.categoryName?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.categoryName.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Category Code</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("categoryCode", {
                                        required: {
                                            value: true,
                                            message: 'Category code is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.categoryCode?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.categoryName.message}</span>}
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
            </div>
            <div className='formDiv'>
                <p>Office</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Office ID</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("officeId", {
                                        required: {
                                            value: true,
                                            message: 'office id is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.officeId?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.officeId.message}</span>}
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
                                    {...register("officeName", {
                                        required: {
                                            value: true,
                                            message: 'office name is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.officeName?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.officeName.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Office Code</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("bookNo", {
                                        required: {
                                            value: true,
                                            message: 'office code is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.bookNo?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.officeName.message}</span>}
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
            </div>
            <div className='formDiv'>
                <p>Meter Reading</p>
                <hr />
                <form onSubmit={handleSubmit(onsubmit)}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Bill Month</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("billMonth", {
                                        required: {
                                            value: true,
                                            message: 'office id is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.billMonth?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.billMonth.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Year</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("year", {
                                        required: {
                                            value: true,
                                            message: 'office name is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.year?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.year.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Issue Date</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("issueDate", {
                                        required: {
                                            value: true,
                                            message: 'office name is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.issueDate?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.issueDate.message}</span>}
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
                                    {...register("bookNo", {
                                        required: {
                                            value: true,
                                            message: 'Book no. is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.bookNo?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.bookNo.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Initialized for</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("initialized", {
                                        required: {
                                            value: true,
                                            message: 'Initialized is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.initialized?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.initialized.message}</span>}
                                </label>
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Last bill for</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("lastBill", {
                                        required: {
                                            value: true,
                                            message: 'Last bill is required..'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.lastBill?.type === 'required' && <span class="errorText"><ErrorOutlineIcon className='error' />{errors.lastBill.message}</span>}
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
            </div>

        </div>
    );
};

export default Temporary;