import React from 'react';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import brand from '../image/ohrm_branding.png';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password);

        navigate('/admin');
        toast('Successfully login...!');

    };


    return (
        <div className='bgImage'>
            <div>
                <div className='heading'>
                    <img src={brand} alt="" />
                </div>
                <div className='form'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label class="label">
                                <PersonOutlineOutlinedIcon />
                                <span class="label-text">Username</span>
                            </label>
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
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt">{errors.email.message}</span>}
                            </label>
                            <br />
                            <label class="label">
                                <KeyOutlinedIcon />
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                class="inputText"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Provide minimum 6 charecters password'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt">{errors.password.message}</span>}
                            </label>

                        </div>
                        <br />
                        {/* {signError} */}
                        <input className='formSubmit' type="submit" value='Login' />
                    </form>
                    <Link className='link'><p className='forgot'> Forgot your password?</p></Link>
                    {/* <Link to='/signup' className='link'><p className='createNew'> Create a new account?</p></Link> */}
                </div>
            </div>
            <img className='logo' src="https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png" alt="" />
            <br /><br /><br />
            <div class="formCopyright">
                <div class="copyright">
                    &copy; Copyright <strong>ZeroDevs</strong>. All Rights Reserved
                </div>
                <div class="credits">

                    Designed by <a href="https://zerodevs.com/" target='_blank'>Zerodevs</a>
                </div>
            </div>
        </div>
    );
};

export default Login;