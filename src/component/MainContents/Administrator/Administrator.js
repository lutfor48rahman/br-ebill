import React from 'react';
import './Administrator.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import NavAdministrator from './NavAdministrator';

const Administrator = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className='main'>
            <div>
                {/* <NavAdministrator></NavAdministrator>
                <br /><br /><br /><br /> */}
                <br /> <br />
                <div className='formDiv'>
                    <p>Purge Employee Records</p>
                    <hr />
                    <form onSubmit={handleSubmit()}>

                        <div>
                            <div class="formContainer">
                                <div className='pastEmployee'>
                                    <label class="label">
                                        <span class="label-text">Past Employee*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder='Type for hints...'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("pastEmployee")}
                                    />
                                </div>
                            </div>
                            <br />
                            <hr />
                            <p><small>*Required</small></p>
                            <div className='pastInfo'>
                                <input className='submit submit2' type="submit" value='Search' />
                            </div>
                        </div>
                    </form>
                </div>
                <br />
                <div className='formDiv note'>
                    <p className='notePara'>Note</p>
                    <p className='notePara'> <small> Users who seek access to their data, or who seek to correct, amend, or delete the given information should direct their requests to Data@orangehrm.com with the subject "Purge Records (Instance Identifier: <br /> T3JhbmdlSFJNX3Rlc3RAb3JhbmdlaHJtLmNvbV9PcmFuZ2VfVGVzdF9vcGVuc291cmNlLWRlbW8tbWFzdGVyLm9yYW5nZWhybWxpdmUuY29tX180LjU=)"</small></p>
                </div>
            </div>
        </div>
    );
};

export default Administrator;