import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Modal from '../AddUser/Modal';
import './Table.css';
import EditEmployeeInfo from '../AddUser/EditEmployeeInfo';
import useInfo from '../../../hook/useInfo';

const Table = ({changeInfo}) => {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');
    // const [filter, setFilter] = useInfo('');
    const[show, setShow] = useState(false);
    // console.log(countries);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                setFilter(data)
            })
    }, [])
    const columns = [
        {
            name: 'Country Name',
            selector: (row) => row.name.common,
            sortable: true
        },
        {
            name: 'Country Language',
            selector: (row) => row.languages?.eng
        },
        {
            name: 'Country Capital',
            selector: (row) => row.capital
        },
        {
            name: 'Country Flag',
            selector: (row) => <img width={50} height={50} src={row.flags.png} />
        },
        {
            name: 'Action',
            selector: (row) =>
                <>
                    <Link className='edit' to={`/add-user/edit-employee-info/${row.ccn3}`}><button>Edit</button></Link>
                    <Link className='delete' to=''><button onClick={()=>setShow(true)}>Delete</button></Link>
                </>

        },
    ]

    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.common.toLowerCase().match(search.toLowerCase());
        });
        setFilter(result);
    }, [search])
    return (
        <div className='formDiv content'>
            <div ><Link to='/add-user'><button className='add'>+ Add</button></Link></div>
            <DataTable
                title={`
                Employee List (${filter.length})
                `}
                columns={columns}
                data={filter}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='400px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                subHeader
                subHeaderComponent={
                    <input
                        type='text'
                        className='dataSearch'
                        placeholder='Search here'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                }
            />
            <Modal
            onClose={()=> setShow(false)} 
            show={show}
            ></Modal>
        </div>
    );
};

export default Table;