import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Modal from '../AddUser/Modal';
import './Table.css';
import EditEmployeeInfo from '../AddUser/EditEmployeeInfo';
import { PDFViewer } from '@react-pdf/renderer';
import Loader from '../../Loader/Loader';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PdfDocument from './PdfDocument';

const Table = (props) => {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                setFilter(data)
                setLoading(true)
            })
    }, []);

    useEffect(() => {
        setSearch(props.search);
    }, [props.search]);

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
                    <Link className='delete' to=''><button onClick={() => setShow(true)}>Delete</button></Link>
                </>

        },
    ]

    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.common.toLowerCase().match(search.toLowerCase());
        });
        setFilter(result);
    }, [search]);

    const printDocument = () => {
        const input = document.getElementById('tablePdf');
        console.log(input);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('pdf');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.getFontSize(18);
                pdf.addImage(imgData, 'JPEG', 10, 10, 195, 250);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
    }

    if (loading === false) {
        return <Loader></Loader>
    }

    return (
        <div className='formDiv content'>
            <div className='addText' ><Link to='/add-user/users'><button className='add'>+ Add Employee</button></Link></div>
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
            <button onClick={printDocument}>click</button>
            <div className='pdfView'>
            <PDFViewer>
                <PdfDocument></PdfDocument>
            </PDFViewer>
            </div>
            <div id='tablePdf'>
                {
                    filter.map(flt =>
                        <>
                            <p>flt.name.common</p>
                            <br />
                        </>)
                }
            </div>

            <Modal
                onClose={() => setShow(false)}
                show={show}
            ></Modal>
        </div>
    );
};

export default Table;