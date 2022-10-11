import React from 'react';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const Modal = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e=> e.stopPropagation()}>
            <ClearOutlinedIcon onClick={props.onClose} className='icon'/>
                <div className='modal-header'>
                    <h2 className='modal-title'>Are you sure?</h2>
                </div>
                <div className='modal-body'>
                    employee information are deleted

                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='button1'>No,Cancel</button>
                    <button className='button'>Yes,Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;