import React, { useEffect } from 'react';
import './AdminContent.css';
import { useForm } from "react-hook-form";

const AdminContent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(()=>{
        const sideMenus = document.querySelectorAll('.subNav');
        sideMenus.forEach(sideMenu=>{
            sideMenu.addEventListener('click', function(){
                sideMenus.forEach(lnk => lnk.classList.remove('navColor'))
        this.classList.add('navColor')
            })
        })
    },[])

    const userRoles = [
        {name:'--select--'},
        {name:'Contributor'},
        {name:'Author'},
        {name:'Administrator'},
        {name:'Super Admin'},
    ]

    const status = [
        {name:'--select--'},
        {name:'Active'},
        {name:'Inactive'},
    ]

    return (
        <div className='main'>
            <div className='adminContents'>
                <div className='itemContainer'>
                    <div className='items'>
                        <div className='item item1 subNav navColor'>User Management</div>
                        <div className='item subNav'>Organization</div>
                        <div className='item subNav'>Job</div>
                        <div className='item subNav'>Qualifications</div>
                        <div className='item subNav'>Nationalities</div>
                        <div className='item subNav'>Corporate Branding</div>
                        <div className='item subNav'>Configuration</div>
                    </div>
                </div>
                <br /> <br /> <br /><br />
                <div className='formDiv'>
                    <p>System Users</p>
                    <hr />
                    <form onSubmit={handleSubmit()}>

                        <div>
                            <div class="formContainer">
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Username</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("name")}
                                    />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">User Role</span>
                                    </label>
                                    <br />
                                    <select {...register("role")}>
                                        {
                                            userRoles.map(role=> <option
                                            value={role.name}
                                            >
                                                {role.name}
                                            </option>)
                                        }
                                    </select>
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Employee Name</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder='Type for hints..'
                                        class="input input-border border-black w-full max-w-xs"
                                        {...register("empName")}
                                    />
                                </div>
                                <div className='field'>
                                    <label class="label">
                                        <span class="label-text">Status</span>
                                    </label>
                                    <br />
                                    <select {...register("status")}>
                                        {
                                            status.map(st=> <option
                                            value={st.name}
                                            >
                                                {st.name}
                                            </option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <hr />
                            <div className='submitInfo'>
                                <input className='submit submit1' type="submit" value='Reset' />
                                <input className='submit submit2' type="submit" value='Search' />
                            </div>
                        </div>
                    </form>
                </div>
                {/* <Table></Table> */}
            </div>
        </div>
    );
};

export default AdminContent;