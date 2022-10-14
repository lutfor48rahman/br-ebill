import React from 'react';
import { useForm } from 'react-hook-form';

const Report = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className='main'>
            <br />
            <div className='formDiv'>
                <p>Report Information</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='field'>
                                <label class="label">
                                    <span class="label-text"> Electric bill</span>
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
                                    <span class="label-text">TEMP</span>
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
                                    <span class="label-text">Control office</span>
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
                                    <span class="label-text">Salary office</span>
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
                                    <span class="label-text">Customer list</span>
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
                                    <span class="label-text">Location list</span>
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
                                    <span class="label-text">Colony list</span>
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
                                    <span class="label-text">E bill preparing office</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("data\e")}
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

export default Report;