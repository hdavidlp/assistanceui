import axios from "axios";
import React, { useEffect, useState } from   "react";
import { useParams, useNavigate } from "react-router-dom";
import { _APIAssistence } from "../../../API/APIConfig";

const InsertEdit =(props)=>{

    const params = useParams();

		const [isReadyToSave, setReadyToSave] = useState(true)
		const [isSaving, setSaving] = useState(false)
		const [isLoading, setLoading]  =useState(false)
		const [periods, setPeriods] = useState()
		const [currentGroup, setCurrentGroup] = useState()

		const navigate = useNavigate()

		function simulateNetworkRequest() {
			return new Promise((resolve) => setTimeout(resolve, 2000));
		}


		useEffect(()=>{
			params.id ? getGroup() : getPeriods()
		},[])

		useEffect(()=>{
			currentGroup && getPeriods()
		},[currentGroup])

		useEffect(()=>{
			if (isSaving){
				setReadyToSave(false)
				simulateNetworkRequest().then(()=>{
						Save()      
				})
			}
		}, [isSaving])

		const getPeriods = async() =>{
			await axios.get(_APIAssistence + 'period')
			.then(response=>{
				console.log('getPeriods response:',response.data)
				setPeriods(response.data)
			})
			.catch(err=>{
				console.log('Error', err)
				isLoading(false)
			})
		}

		const getGroup = () =>{
			axios.get(_APIAssistence + 'group/id?id='+params.id)
			.then(response=>{
				console.log('Dentro del getGroup',response.data)
				if(response.data){
					setCurrentGroup(response.data)
					//getPeriods()
				}else{
					console.log('sin datos')
				}
			})
			.catch(err=>{
				console.log('Error', err)
				isLoading(false)
			})
		}

		const postGroup=async()=>{
			console.log('Adding Post')
			await axios.post(_APIAssistence + 'group' ,{
				groupID : currentGroup.groupID,
				name: currentGroup.name,
				periodID : currentGroup.periodID
			})
			.then(()=>{
				console.log('Group saved')
				navigate('/groups')
			})
			.catch((error)=>{
				console.log ('Save error detected')
			})

			setSaving(false)
			
		}
		
		const putGroup=async()=>{
			console.log('Adding Put')

			await axios.put(_APIAssistence + 'group/id?id=' + params.id,{
				groupID : currentGroup.groupID,
				name: currentGroup.name,
				periodID : currentGroup.periodID
			})
			.then(()=>{
				console.log('Group saved')
				navigate('/groups')
			})
			.catch((error)=>{
				console.log ('Save error detected')
			})

			setSaving(false)
		}

		const Save=async()=>{
			params.id ? putGroup() : postGroup()
		}

		const handleSave=()=>{
			setSaving(true)
		}

		const handleCancel=()=>{
			navigate('/groups')
		}


		const handleChange =(e)=>{
			const {name, value} = e.target
			console.log('Changing', name, ' - ', value)
			setCurrentGroup(prevState=>({
				...prevState, [name]:value
			}))
		}

		

    return (
			<div className="container">
				{/* Edicion {props.acction} {params.id} */}
				<div className="request-container">
					<div className="request-head-container">Request {props.title} Group {params.id}</div>
						<div className="request-body-container">
							<form>
								<div className="mb-3">
									<label className="form-label">Period</label>
									<select className="form-select" aria-label="Default select example"
										name="periodID"
										onChange={handleChange}>
											{periods?.map((period)=>(
												<option selected={period.periodID===currentGroup?.periodID} value={period.periodID} key={period.id}>{period.longDescription}</option>
											))}
									</select>
								</div>
								<div className="mb-3">
									<label className="from-label">Group name</label>
									<input type="text" className="form-control"
										name="name"
										value={currentGroup?.name}
										onChange={handleChange}>
									</input>
								</div>
								<div >
									<button type="button" className="btn btn-primary" onClick={handleSave}
										disabled = {!isReadyToSave}>
										Sav{isSaving ? 'ing ...':'e'}
									</button>

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