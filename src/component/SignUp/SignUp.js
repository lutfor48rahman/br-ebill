import React from 'react';
import brand from '../image/ohrm_branding.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    //Menualy Create a new User
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();

      //Update Profile
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      
    let signError;
    if(error ||updateError){
         signError = <p className='text-red-500'>{error?.message || updateError?.message}</p>
    }

      const onSubmit =async data => {
       await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({ displayName:data.name});
        // navigate('/');
          toast('Successfully create user.....!');

    };
    return (
        <div className='bgImage'>
            <div>
                <div className='heading'>
                    <img src={brand} alt="" />
                </div>
                <div className='form'>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message:'Name is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}</label>
                                 <br />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
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
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
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
                        {signError}
                        <br />
                        <input className='formSubmit' type="submit" value='Sign Up' />
                    </form>
                        <p><small>Already have an account <Link className='createNew' to='/'>Login</Link></small></p>
                    
                </div>
            </div>
            <img className='logo' src="https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png" alt="" />
        </div>
    );
};

export default Signup;