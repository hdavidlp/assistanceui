import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import { _APIAssistence } from '../../API/APIConfig'

const MAXSimulatedTime = 1

const AllInOne = ()=> {


	const [hasData, setHasData] = useState(false)
	const [data, setData] = useState()

	const [modalInsert, setModalInsert] = useState(false) 
	const [modalEdit, setModalEdit] = useState(false) 
	const [modalDelete, setModalDelete] = useState(false) 

	const [currentPeriod, setCurrentPeriod] = useState({
		longDescription:'',
		shortDescription:''
	})

	const openCloseModalInsert = () =>{
		setModalInsert(!modalInsert)
	}

	const openCloseModalEdit = () =>{
		setModalEdit(!modalEdit)
	}

	const openCloseModalDelete = () =>{
		setModalDelete(!modalDelete)
	}

	function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, MAXSimulatedTime));
	}


	const handleChange =(e)=>{
		const {name, value} = e.target
		setCurrentPeriod(prevState=>({
			...prevState,
			[name]:value
		}))
		//console.log(currentPeriod)
	}


	const selectCurrentPeriod=(id)=>{
		console.log('imprimiendo courses in selection',data)
		const selected = data.find(item => item.periodID === parseInt(id))
		setCurrentPeriod(selected)
	}

	const selectPeriodToEdit =(e)=>{
		const id = e.target.name
		selectCurrentPeriod(id)
		setModalEdit(true)
		//console.log('CurrentPeriod',currentPeriod)
	}

	const selectPeriodToDelete =(e)=>{
		const id = e.target.name
		selectCurrentPeriod(id)
		//console.log('selecting to delete')
		setModalDelete(true)
		//console.log('CurrentPeriod',currentPeriod)
	}


	const getPeriods=async()=>{
		await axios.get(_APIAssistence+'Period')
		.then(response=>{
			setData(response.data)
			//console.log(response.data)
			setHasData(response!==null)
		})
	}

	const postPeriod=async()=>{
		//console.log(currentPeriod)
		await axios.post (_APIAssistence+'Period', currentPeriod)
		.then(response=>{
			setData(data.concat(response.data))
			openCloseModalInsert()
		})
	}

	const putPeriod=async()=>{
		//console.log('Put', _APIAssistence+'Period/id?id='+currentPeriod.periodID,  currentPeriod)
		await axios.put(_APIAssistence+'Period/id?id='+currentPeriod.periodID,  currentPeriod)
		.then(response=>{
			setData(p => p.map(item =>
				(item.periodID !== currentPeriod.periodID) ? item : currentPeriod ))
			//console.log('Updated')
			openCloseModalEdit()
		})
	}

	const deletePeriod= async()=>{
		//console.log('Delete-', _APIAssistence+'Period/id?id='+currentPeriod.periodID,  currentPeriod)
		await axios.delete(_APIAssistence + 'Period/id?id='+currentPeriod.periodID)
		.then(response=>{
			setData(data.filter(item=> item.periodID!==currentPeriod.periodID))
			openCloseModalDelete()
		})
	}

	useEffect(()=>{
		simulateNetworkRequest().then(()=>{
			getPeriods()
		})

		//!hasData && getPeriods()
	},[])


	return (
		<div className="container">
			<button className="btn btn-success" onClick={openCloseModalInsert}>Agregar Periodo</button>
			<table className="table">
				<thead>
					<tr>
						<th>Period id</th>
						<th>Short</th>
						<th>Long</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((period)=> (
						<tr>
							<td>{period.periodID}</td>
							<td>{period.shortDescription}</td>
							<td>{period.longDescription}</td>
							<td>
								<button 
									key={'E' + period.periodID}
									name={period.periodID}
									className="btn btn-primary"
									onClick={selectPeriodToEdit}
									>
									Edit &nbsp;
									<FontAwesomeIcon icon={faEdit}/> 
								</button>
								{"   "}
								<button 
									key={'D' + period.periodID}
									name={period.periodID}
									onClick={selectPeriodToDelete}
									className="btn btn-danger"
									>
									Delete &nbsp;
									<FontAwesomeIcon icon={faTrashAlt}/>
								</button>

							</td>
						</tr>
					))}

				</tbody>

			</table>


			<Modal isOpen={modalInsert}>
				<ModalHeader style = {{display:'block'}}>
					<span style={{float:'right'}}>x</span>
				</ModalHeader>
				<ModalBody>
					<div className="form-group">
						<label htmlFor="id">ID</label>
						<input className="form-control" type="text" name="periodID" id="periodID" readOnly/>
						<br />
						<label htmlFor="shortDescription">Short Description</label>
						<input className="form-control" type="text" name="shortDescription" id="shortDescription" onChange={handleChange}/>
						<br />
						<label htmlFor="longDescription">Long Description</label>
						<input className="form-control" type="text" name="longDescription" id="longDescription" onChange={handleChange}/>
					</div>
				</ModalBody>

				<ModalFooter>
					<button className="btn btn-success" onClick={postPeriod} >Insertar</button>
					<button className="btn btn-danger" onClick={openCloseModalInsert} >Cancelar</button>
				</ModalFooter>

			</Modal>


			<Modal isOpen={modalEdit}>
				<ModalHeader style = {{display:'block'}}>
					<span style={{float:'right'}}>x</span>
				</ModalHeader>
				<ModalBody>
					<div className="form-group">
						<label htmlFor="id">IDs</label>
						<input className="form-control" type="text" name="periodID" 
							   id="periodID" readOnly
							   value={currentPeriod && currentPeriod.periodID}/>
						<br />
						<label htmlFor="shortDescription">Short Description</label>
						<input className="form-control" type="text" name="shortDescription" 
							   id="shortDescription" onChange={handleChange}
							   value={currentPeriod && currentPeriod.shortDescription}/>
						<br />
						<label htmlFor="longDescription">Long Description</label>
						<input className="form-control" type="text" name="longDescription" 
						       id="longDescription" onChange={handleChange}
							   value={currentPeriod && currentPeriod.longDescription}/>
					</div>
				</ModalBody>

				<ModalFooter>
					<button className="btn btn-success" onClick={putPeriod} >Update</button>
					<button className="btn btn-danger" onClick={openCloseModalEdit} >Cancelar</button>
				</ModalFooter>

			</Modal>

			<Modal isOpen={modalDelete}>
				<ModalHeader style = {{display:'block'}}>
					<span style={{float:'right'}}>x</span>
				</ModalHeader>
				<ModalBody>
					<p>Press the delete button to confirm the elimination of the period {currentPeriod && currentPeriod.longDescription}</p>
				</ModalBody>

				<ModalFooter>
					<button className="btn btn-success" onClick={deletePeriod} >Delete</button>
					<button className="btn btn-danger" onClick={openCloseModalDelete} >Cancelar</button>
				</ModalFooter>

			</Modal>
		</div>
	)
}

export default  AllInOne



// Video con BootStrap
// https://www.youtube.com/watch?v=tk61nYJzCA8

// Video con MaterialDesign
// https://www.youtube.com/watch?v=XAAl8IDwMiw
// 15:37
// Seguimiento ya inserta

