import React from 'react';
import { useForm } from 'react-hook-form';

const Candidate = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className='main'>
        <div>
            <br /> <br />
            <div className='formDiv'>
                <p>Purge Candidate Records</p>
                <hr />
                <form onSubmit={handleSubmit()}>

                    <div>
                        <div class="formContainer">
                            <div className='pastEmployee'>
                                <label class="label">
                                    <span class="label-text">Vacancy*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Type for hints...'
                                    class="input input-border border-black w-full max-w-xs"
                                    {...register("vacancy")}
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

export default Candidate;