import React, { useEffect, useState } from 'react';
import './Division.css';

const Division = () => {
    const [names, setNames] = useState([]);
    console.log(names);
    const divisions = [
        { name: 'Mymensingha' },
        { name: 'Dhaka' },
        { name: 'Rajshahi' },
        { name: 'Rongpur' },
        { name: 'Khulna' },
        { name: 'sylhet' },
        { name: 'Borishal' },
        { name: 'Chattogram' },

    ]
    useEffect(() => {
        setNames(divisions);
    }, [])

    const handleDivision = e => {
        e.preventDefault();
        const value = e.target.division.value;
        const newValue = {name:value}
        setNames([...names,newValue])
        e.target.division.value ='';

    }
    return (
        <div className='main'>
            <br />
            <div className="formDiv">
                <h1 className='diviHeading'>Division Adding</h1>
                <div className="division">
                    <form onSubmit={handleDivision}>
                        <input className='divisionField' type="text" name='division' placeholder='Add Division' />
                        <input className='divisionAdd' type="submit" value='Add' />
                    </form>
                </div>
                <div className='showDivision'>
                    <h2>Divisions:</h2>
                    {
                        names.map(division => {
                            return (
                                <div>
                                    <p>{division.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Division;