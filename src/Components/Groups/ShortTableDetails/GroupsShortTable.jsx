//import Reac from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import {_APIAssistence} from    '../../../API/APIConfig'

import GroupsTableDetails from "./TableDetails/GroupsTableDetails"

import Button  from 'react-bootstrap/Button'


const GroupsShortTable = () => {

	const [hasData, setHasData] = useState(false)
	const [groups, setGroups] = useState([])
	const [currentGroup, setCurrentGroup] = useState()
	const navigate = useNavigate()

	const [modalDelete, setModalDelete] = useState(false)

	const openCloseModalDelete =()=>{
		setModalDelete(!modalDelete)
	}

	const getGroups = () =>{
		axios.get(_APIAssistence + 'Group/full')
		.then(res=>{
			setGroups(res.data)
			setHasData(true)
			console.log(res)
		})
		.catch(err=>{
			console.log(err)
		})
	}

	useEffect(() => {
		!hasData && getGroups();
	})


	const selectGroupToEdit=(e)=>{
		const id = e.target.name
		navigate('/groups/edit/'+id)
	}

	const selectCurrentGroup=(id)=>{
		const selected = groups.find(item => item.groupID === parseInt(id))
		setCurrentGroup(selected)
	}

	const selectGroupToDelete=(e)=>{
		const id = e.target.name
		selectCurrentGroup(id)
		openCloseModalDelete()
	}

	const deleteGroup=async()=>{
		//https://localhost:7179/api/Group/id?id=12
		await axios.delete(_APIAssistence + 'group/id?id='+ currentGroup.groupID)
		.then(response=>{
			setGroups(groups.filter(item=> item.groupID!==currentGroup.groupID))
			openCloseModalDelete()
		})
	}


	return (
		<div className="container">
			<h1 className="text text-center">Groups</h1>
			{hasData && <GroupsTableDetails groups={groups} selectGroupToEdit={selectGroupToEdit} selectGroupToDelete={selectGroupToDelete}/>}

			<div className="container text-center">
				<Button className="Button" onClick={getGroups} >Load Groups</Button>
			</div>

			<Modal isOpen={modalDelete}>
				<ModalHeader style = {{display:'block'}}>
					<span style={{float:'right'}}>x</span>
				</ModalHeader>
				<ModalBody>
					<p>Press the delete button to confirm Group elimination {currentGroup && currentGroup.name}</p>
				</ModalBody>

				<ModalFooter>
					<button className="btn btn-success" onClick={deleteGroup} >Delete</button>
					<button className="btn btn-danger" onClick={openCloseModalDelete} >Cancelar</button>
				</ModalFooter>

			</Modal>

		</div>
		
	)
}


export default GroupsShortTable