import axios from "axios";
import React, { useState, useEffect } from "react"

import { useParams, useNavigate, Navigate } from "react-router-dom";
import { _APIAssistence } from "../../../API/APIConfig";

const InsertEdit =(props) =>{
	const params = useParams()
	const navigate = useNavigate()

	const [isReadyToSave, setReadyToSave] = useState(true)
	const [isLoading, setLoading]  =useState(false)
	const [isSaving, setSaving] = useState(false)

	const [currentStudent, setCurrentStudent] = useState()

	function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}

	useEffect(()=>{
		params.id && getStudent() //: getPeriods()
	},[])


	useEffect(()=>{
		if (isSaving){
			setReadyToSave(false)
			simulateNetworkRequest().then(()=>{
				Save()      
			})
		}
	}, [isSaving])

	const getStudent = () =>{
		axios.get(_APIAssistence + 'student/id?id='+params.id)
		.then(response=>{
			console.log('Dentro del getStudent',response.data)
			if(response.data){
				setCurrentStudent(response.data)
			}else{
				console.log('sin datos')
			}
		})
		.catch(err=>{
			console.log('Error', err)
			isLoading(false)
		})
	}


	const postStudent = async() =>{
		await axios.post(_APIAssistence + 'student',{
			name:currentStudent.name
		})
		.then(()=>{
			console.log('Saved')
			navigate('/students')
			
		})
		.catch((error)=>{
			console.log('Error al salvar',error)
		})
	}

	const putStudent=async()=>{
		console.log('Adding Put')
		//https://localhost:7179/api/Student/id?id=2'
		await axios.put(_APIAssistence + 'student/id?id=' + params.id,{
			name: currentStudent.name,
		})
		.then(()=>{
			console.log('Student saved')
			navigate('/students')
		})
		.catch((error)=>{
			console.log ('Save error detected')
		})

		setSaving(false)
	}



	const Save =()=>{
		console.log('Save process began')
		params.id ? putStudent() :postStudent()
	}
    

	const handleChange=(e)=>{
		const {name, value} = e.target

		setCurrentStudent(prevState=>({
			...prevState, [name]:value
		}))
	}

	const handleSave=()=>{
		setSaving(true)
	}

	const handleCancel=()=>{
		navigate('/students')
	}

	return (
		<div className="container">
			{/* Edicion {props.acction} {params.id} */}
			<div className="request-container">
				<div className="request-head-container">Request {props.title} Student {params.id}</div>
					<div className="request-body-container">
						<form>
							<div className="mb-3">
								<label className="from-label">Name</label>
								<input type="text" className="form-control"
									name="name"
									value={currentStudent?.name}
									onChange={handleChange}>
								</input>
							</div>
							<div >
								<button type="button" className="btn btn-primary" onClick={handleSave}
									disabled = {!isReadyToSave}>
									Sav{isSaving ? 'ing ...':'e'}
								</button>
								{" "}
								<button type='button' className='btn btn-secondary' 
									onClick={handleCancel}>
									Cancel 
								</button>
								
							</div>
						</form>
					</div>


			</div>
		</div>



	)
}

export default InsertEdit