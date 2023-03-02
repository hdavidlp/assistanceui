import React, { useState, useEffect } from "react";
import {_APIAssistence} from '../../../API/APIConfig'

import axios from "axios";



const initValues = {
	periodID: 0,
	name: ''
}

const RequestNewGroup =()=>{


	const [data, setData] = useState(initValues)
	const [isReadyToSave, setReadyToSave] = useState(false)
	const [isSaving, setSaving] = useState(false)

	function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}

	useEffect (()=>{

		if (isSaving){
			setReadyToSave(false)
			simulateNetworkRequest().then(()=>{
				Save()
			})
		}

	},[isSaving])

	const Save = () =>{
		axios.post(_APIAssistence + 'Group',{
			periodID: data['periodID'],
			name : data['name']
		})
		.then(()=>{
			console.log('salvado')
			setSaving(false)
		})
		.catch(()=>{
			console.log('error en guarar')
			setSaving(false)
		})
	}


	const handleSave =()=>{
		setSaving(true)
	}
	



	const handleChange = (e) => {
		const { name, value } = e.target
		console.log(value)
		console.log(data)

		setData((current) => ({
			...current, ...{ [name]: value }
		}))

		setReadyToSave(data['periodID']>0 && data['periodID'] !=='')
	}


	return(
		<div className="request-container">
			<div className="request-head-container">Request new Group</div>
			<div className="request-body-container">
				<form>
					<div className="mb-3">
						<label className="form-label">Period</label>
						<select className="form-select" aria-label="Default select example"
							name="periodID"
							onChange={handleChange}>
							<option value="0">Select one</option>
							<option value="1">Ene-Jun 2023</option>
							<option value="2">Ene-Jun 2022</option>
						</select>
					</div>
					<div className="mb-3">
						<label className="from-label">Group name</label>
						<input type="text" className="form-control"
							name="name"
							value={data['name']}
							onChange={handleChange}>

						</input>
					</div>
					<div >
						<button type="button" className="btn btn-primary" onClick={handleSave}
							disabled = {!isReadyToSave}>
							Sav{isSaving ? 'ing ...':'e'}
						</button>

						
					</div>
				</form>
			</div>
				
				
		</div>

	)
}


export default RequestNewGroup

