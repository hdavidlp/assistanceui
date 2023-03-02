import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../css/baseExtra.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from 'bootstrap'
import axios from 'axios'
import { _APIAssistence } from '../../../API/APIConfig'

const RequestNewCourse =() =>{

    /*const [data,setData ] = useState({'courseName' : ''})*/
    const [data,setData ] = useState('')
    const [isSaving, setSaving] = useState(false)
    const [readyToSave, setReadyToSave] = useState(false)
    const navigate = useNavigate()

    function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}

    useEffect(()=>{
        if (isSaving){
            setReadyToSave(false)
            simulateNetworkRequest().then(()=>{
                Save()      
            })
        }
    }, [isSaving])

    const Save = () =>{
        axios.post(_APIAssistence + 'Course',{
            name : data
        })
        .then(()=>{
            console.log ('Data saved')
            setSaving(false)
            navigate('/Courses')
        })
        .catch((error)=>{
            console.log ('Save error detected')
            setSaving(false)
        })
    }


    const handleSave = () =>{
        setSaving(true)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setData(value)
    }

    const selectAll =(e)=>{
        e.target.select()
    }


    return (
        <div className='request-container'>
            <div className='request-head-container'>Request new Course</div>
            <div className='request-body-container'>
                <form>
                    <div className='mb-3'>
                        <label className='from-label'>Course name</label>
                        <input type="text" className='form-control'
                        placeholder='course name' 
                        value = {data}
                        onChange={handleChange}
                        onFocus={selectAll}/>
                    </div>

                    <div className='mb-3'>
                        <button type='button' className='btn btn-primary' 
                            onClick={handleSave}
                            disabled={isSaving}>
                            Sav{isSaving?'ing ...': 'e'} 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestNewCourse