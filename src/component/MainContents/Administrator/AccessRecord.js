import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AccessRecord = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState([]);
    const [value, setValue] = useState('');
    // console.log(filter);
    console.log(search);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                setFilter(data);
            })
    }, []);

    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.common.toLowerCase().match(search.toLowerCase());
        });
        setFilter(result);
    }, [search]);

    console.log(search);
    const onSubmit = data => {
        const value = data.name;
        const value1 = data.value;
        // setValue(value1);
        // console.log(value);
        // console.log(value1);
    }
    return (
        <div className='main'>
            <div>
                {/* <NavAdministrator></NavAdministrator>
            <br /><br /><br /><br /> */}
                <br /> <br />
                <div className='formDiv'>
                    <p>Download Personal Data</p>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <div class="formContainer">
                                <div className='pastEmployee'>
                                    <label class="label">
                                        <span class="label-text">Employee Name*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder='Type for hints...'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("name")}
                                        onChange={(e) => setSearch(e.target.value)}
                                        value={value}
                                        contentEditable='true'
                                    />
                                    <select className='accessRecord' onClick={(e)=>setValue(e.target.value)} id=""size={filter.length}>
                                        {
                                            filter.map(flt => <option>
                                                {flt.name.common}
                                            </option>)
                                        }
                                    </select>
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

export default AccessRecord;