import React from 'react';
import { useForm } from 'react-hook-form';

const Entitys = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='main'>
            <div className='formDiv'>
                <p>Code</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Office</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("office")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Bill Unit</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("billunit")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Office Unit</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("officeunit")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Salary Unit</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("salaryunit")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Customer Category</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("category")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Location</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("location")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Colony</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("colony")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Book Info</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("book")}
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
                <hr />
                <p>Customer Info</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Resident</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("resident")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Other</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("other")}
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
                <hr />
                <p>Reading</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Meter Reading</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("meterReading")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Initialise</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("initialise")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Posting</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("posting")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Master Bill</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("masterBill")}
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
                <hr />
                <p>Non Railway</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Pore</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("pore")}
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
                <hr />
                <p>Query</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Customer</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("customer")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Bill</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("bill")}
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
                <hr />
                <p>Utility</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Office</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("office")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Bill Unit</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("billunit")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Office Unit</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("officeunit")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Salary Unit</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("salaryunit")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Customer Category</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("category")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Location</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("location")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Colony</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("colony")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Book Info</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("book")}
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
        </div>
    );
};

export default Entitys;