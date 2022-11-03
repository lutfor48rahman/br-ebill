import React, { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [customError,setCustomError] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    if (loading) {
        return <Loader></Loader>
    }

    const onSubmit = async (data) => {

        try {
            var res = await signInWithEmailAndPassword(data.email, data.password);
            if (res) {
                console.log("Loged in");
                toast('Login successfully...');
            } else {
                console.log("not Loged in");
            }
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
        

    };

    const passwordShow = () =>{
        setShowPassword(showPassword ? false : true)
    };

    return (
        <div className='full'>
            <div className='bgImage'>
                <div>
                    <div className='heading'>
                        <p>BR E<span>-Bill</span> Management <br /> <small>Pakshi Division Rajshahi</small></p>
                        
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
                                <div className='pass-wrap'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
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
                                <VisibilityIcon className='eye'
                                onClick={passwordShow}
                                />
                                </div>
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text-alt">{errors.password.message}</span>}
                                </label>

                            </div>

                            <p className='loginError'> {error?.message}</p>

                            <br />
                            <input className='formSubmit' type="submit" value='Login' />
                        </form>
                        <Link className='link' to='/forget-password'><p className='forgot'> Forgot your password?</p></Link>
                    </div>
                </div>
                <img className='logo' src="https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png" alt="" />
                <br /><br /><br />
                <div class="formCopyright">
                    <div class="copyright">
                        &copy; Copyright <strong>ZeroDevs</strong>. All Rights Reserved Designed by <a href="https://zerodevs.com/" target='_blank'>Zerodevs</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;