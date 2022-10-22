import React from 'react';
import './ForgetPassword.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../firebase.init';

const ForgetPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {

       sendPasswordResetEmail(auth,data.email)
       .then(()=>{
        toast('Please check your email.....!');
       })
    };

    return (
        <div className='forgetPassword'>
            <div className='forget'>
                <h2>Forget Password</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            class="inputText"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a vailid email'
                                }
                            })}
                        />
                    </div>
                    <br />
                    <input className='forgetButton' type="submit" value='Send' />
                </form>
            </div>
        </div >
    );
};

export default ForgetPassword;