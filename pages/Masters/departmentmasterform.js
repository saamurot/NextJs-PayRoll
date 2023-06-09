import React from 'react'
import Styles from '../../styles/DepartmentMasterForm.module.css'
import { useForm } from 'react-hook-form';
import Layout from '@/Components/layout';
import Link from 'next/link';

function DepartmentMasterForm() {



    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;


    return (
        <Layout>
            <h5 className='fw-bold ' id={Styles.h5}>Department Master</h5>
            <form>
                <div className="card shadow-lg mt-4 p-3" id={Styles.card}>
                    <div className="row ">
                        <div className="col-lg-2">
                            <label >Department Name<span id={Styles.span}>*</span></label>
                        </div>
                        <div className="col-lg-4">
                            <label >Department Description<span id={Styles.span}>*</span></label>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-2">
                            <input name="DepartmentMaster" type="text" {...register('DepartmentMaster')} className={`form-control ${errors.DepartmentMaster ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.DepartmentMaster?.message}</div>

                        </div>
                        <div className="col-lg-4">
                            <textarea rows="3" type="text" placeholder="Description" className="form-control"></textarea>

                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-lg-8"></div>

                        <div className="col-lg-2">
                            <Link href="/Masters/DepartmentMasterDashboard" className=" btn btn-primary form-control  shadow-lg" >Cancel</Link>
                        </div>
                        <div className="col-lg-2">
                            <button className=" btn btn-primary form-control shadow-lg ">Submit</button>
                        </div>
                    </div>

                </div>
            </form>
        </Layout>
    )
}

export default DepartmentMasterForm