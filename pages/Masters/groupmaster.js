import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import Layout from '@/Components/layout';

function GroupMaster() {

    const [groupMaster, setGroupMasterData] = useState([]);

    useEffect(() => {
        async function getData() {
            let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
          let res = await axios.get(
            hostURL +"Master/GetGroupMaster"
          );
          setGroupMasterData(res.data);
        }
        getData();
      }, [1]);

    const deleteGroupData = async (id) => {
        let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
        await axios.get(hostURL + "Master/DeleteGroupMaster?ID=" + id);
        let res = await axios.get(hostURL + "Master/GetGroupMaster");
        setDashboardData(res.data);
    }
    const edit = async (id)=>{
        sessionStorage.setItem("groupMasterID", id);
      }

    return (
        <Layout>
            <div>
                <h3 className='text-primary fs-5 mt-3'>Group Master</h3>
                <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                    <div className='row p-3'>
                        <div className='col-lg-1'>
                            <p>Filter By</p>
                        </div>

                        <div className='col-lg-5'>
                            <input type="text" className='form-control' placeholder='Search...' />
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-2 text-primary fs-6 fw-bold'>
                        <h6>SHOWING RESULTS</h6>
                    </div>
                    <div className='col-lg-8'></div>
                    <div className='col-lg-2 mt-2 text-end'>
                        <Link href="/Masters/groupmasterform" id='AddButton' className='btn btn-primary'>
                            <button onClick={resetID.bind()} >Add</button>
                        </Link>
                    </div>
                </div>

                <table className='table table-hover mt-4 '>
                    <thead className='bg-info text-white '>
                        <tr>
                            <th>Short</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            GroupData.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.short}</td>
                                        <td>{data.description}</td>
                                        <td>
                                            <Link href='/Masters/groupmasterform'>
                                                <button onClick={getGroupTax.bind(this, data)} >Edit</button>
                                            </Link>
                                            <button onClick={DeleteGroupData.bind(this, data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default GroupMaster