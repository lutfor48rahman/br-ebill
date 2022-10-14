import React from 'react';
import { useForm } from 'react-hook-form';
import './HouseInfo.css';

const HouseInfoForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
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
                                    {...register("colony")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">House No</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("houseNo")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Meter No</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("meterNo")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Customer ID</span>
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
                                    <span class="label-text">Customer Name</span>
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
                                    <span class="label-text">House Serial</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("serial")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Page No</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("page")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Occupation Date</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("data\e")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Book No</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("book")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Designation</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("designation")}
                                />
                            </div>
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text">Vacation Date</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("vacation")}
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
                <div className='billTable'>
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
                </div>
            </div>

        </div>
    );
};

export default HouseInfoForm;