import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



import { _APIAssistence } from '../../../API/APIConfig'

const InsertEdit =(props)=>{

	const params = useParams(); 

	
	const [currentCourse, setCurrentCourse] = useState()


	const [hasData, setHasData] = useState(false)
	const [isSaving, setSaving] = useState(false)
	const [isLoading, setLoading]  =useState(false)
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

	useEffect(()=>{
		params.id && getCourse()
	}, [params])


	const getCourse = async() => {
		await axios.get(_APIAssistence+'Course/id?id='+params.id)
		.then(res => {
			setCurrentCourse({
				name : res.data.name
			})

			setHasData(res!==null)
			setLoading(false)
		})
		.catch(err=> {
			console.log(err)
			setLoading(false)
		})
	}

	const postCourse=async()=>{
		await axios.post(_APIAssistence + 'Course',{
			name : currentCourse.name
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

	const putCourse=async()=>{
		await axios.put(_APIAssistence + 'Course/id?id='+params.id,{
			name : currentCourse.name
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

	const Save=async()=>{
		params.id ? putCourse() : postCourse()
	}


	const handleSave = () =>{
		setSaving(true)
	}

	const handleCancel = () =>{
		navigate('/Courses')
	}

	const handleChange = (e) => {
		const {name, value} = e.target
		setCurrentCourse(prevState=>({
			...prevState,[name]:value
		}))
	}

	const selectAll =(e)=>{
		e.target.select()
	}


	return (
		<div className='request-container'>
			<div className='request-head-container'>Request {props.title} course</div>
			<div className='request-body-container'>
				<form>
					<div className='mb-3'>
						<label className='from-label'>Course name</label>
						<input type="text" className='form-control'
						placeholder='course name' 
						name="name"
						value = {currentCourse?.name}
						onChange={handleChange}
						onFocus={selectAll}/>
					</div>

					<div className='mb-3'>
						<button type='button' className='btn btn-primary' 
							onClick={handleSave}
							disabled={isSaving}>
							Sav{isSaving?'ing ...': 'e'} 
						</button>
						<button type='button' className='btn btn-secondary' 
							onClick={handleCancel}
							>
							Cancel 
						</button>
					</div>
					
				</form>
			</div>
		</div>
	)
}

export default InsertEdit

