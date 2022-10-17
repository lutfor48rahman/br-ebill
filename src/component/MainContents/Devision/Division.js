import React, { useState } from 'react';
import './Division.css';

const Division = () => {
    const [name, setName] = useState('');
    // console.log(names);
    const divisions = [
        { name: '--select--' },
        { name: 'Mymensingha' },
        { name: 'Dhaka' },
        { name: 'Rajshahi' },
        { name: 'Rongpur' },
        { name: 'Khulna' },
        { name: 'sylhet' },
        { name: 'Borishal' },
        { name: 'Chattogram' },

    ]

    const handleDivision = e => {
        e.preventDefault();
        setName(e.target.division.value);


    }
    return (
        <div className='main'>
            <br />
            <div className="formDiv">
                <h1 className='diviHeading'>Division Adding</h1>
                <div className="division">
                    <form onSubmit={handleDivision}>
                        <select name="division" id="">
                            {
                                divisions.map(division => <option
                                    value={division.name}
                                >
                                    {division.name}
                                </option>)
                            }
                        </select>
                        <input type="submit" value='Add' />
                    </form>
                </div>
                    <h2>Division : {name}</h2>
            </div>

        </div>
    );
};

export default Division;