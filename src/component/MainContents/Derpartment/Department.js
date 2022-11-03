import React from 'react';
import './Department.css';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Department = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onsubmit = (data) => {
        const department = {
            name: data.name
        }
        toast(`Department added....`);
        console.log(department);
        alert(JSON.stringify(department));
        reset();

    }
    return (
        <div className='main'>
            <br />
            <div className="formDiv">
                <h1 className='departHeading'>Department Adding</h1>
                <div className="department">
                    <form onSubmit={handleSubmit(onsubmit)}>
                       <div className='content'>
                        <input
                            type="text"
                            class="departname"
                            placeholder='add department name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Department Name is required..'
                                }
                            })}
                        />
                        <input className='departAdd' type="submit" value='Add' />
                       </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Department;