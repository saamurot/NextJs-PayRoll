import React from 'react'
import * as Yup from 'yup';
import Link from 'next/link'
import Styles from '../../styles/dailyrateadd.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
function dailyrateadd() {
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),

        Philhealth: Yup.string()
            .required('Philhealth is required')
            .min(6, 'Philhealth must be at least 6 characters'),
        highLimit: Yup.string()
            .required('Philhealth is required')
            .min(6, 'Philhealth must be at least 6 characters'),
        Philhealth: Yup.string()
            .required('Philhealth is required')
            .min(6, 'Philhealth must be at least 6 characters'),


    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }
    return (
        <div>
            <br />
            <p id={Styles.p}>Daily Rate Configuration Form</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id={Styles.card} className='card shadow-lg p-3'>

                    <div className='row'>
                        <div className='col-lg-2'>


                            <label>Staffid <span id={Styles.span}>*</span></label>
                            <input name="lowLimit" type="text" {...register('lowLimit')} className={`form-control mt-2 ${errors.lowLimit ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lowLimit?.message}</div>

                        </div>
                        <div className='col-lg-2'>

                            <label>Working_Days_Year <span id={Styles.span}>*</span></label>
                            <input name="highLimit" type="text" {...register('highLimit')} className={`form-control mt-2 ${errors.highLimit ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.highLimit?.message}</div>
                        </div>
                        <div className='col-lg-2'>

                            <label>Working_Days_Month <span id={Styles.span}>*</span></label>
                            <input name="Philhealth" type="text" {...register('Philhealth')} className={`form-control mt-2 ${errors.Philhealth ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.Philhealth?.message}</div>
                        </div>
                        <div className='col-lg-2'>

                            <label>Working_Hours_Day <span id={Styles.span}>*</span></label>
                            <input name="Philhealth" type="text" {...register('Philhealth')} className={`form-control mt-2 ${errors.Philhealth ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.Philhealth?.message}</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-10'></div>
                        <div className='col-lg-1'>
                            <button id={Styles.Save}>Save</button>
                        </div>
                        <div className='col-lg-1'>
                            <Link href='/Philhealthdash'><button id={Styles.Cancel}>Cancel</button></Link>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default dailyrateadd