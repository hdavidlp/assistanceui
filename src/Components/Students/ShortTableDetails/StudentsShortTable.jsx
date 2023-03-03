import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import axios from 'axios'

import {_APIAssistence} from '../../../API/APIConfig'
import  Button  from 'react-bootstrap/Button'

import StudentsTableDetail from './TableDetails/StudentsTableDetail'



const StudentsShortTable = () => {

	const [students, setStudents] = useState([])
	const [hasData, setHasData] = useState(false)
	const navigate = useNavigate()

	const [modalDelete, setModalDelete] = useState(false)
	const [currentStudent, setCurrentStudent] = useState()
	const [isLoading, setLoading] = useState(false);

	function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}


	const getStudents = () => {
		
		simulateNetworkRequest();

		axios.get(_APIAssistence + 'Student')
		.then(res => {
			setStudents(res.data)
			setHasData(true)
			setLoading(false)
			console.log (res)
		})
		.catch(err => {
			console.log(err)
			setLoading(false)
		} )
	}

	useEffect(() => {
		!hasData && getStudents();
	})

	useEffect(()=>{

		if(isLoading){
			simulateNetworkRequest().then(()=>{
				getStudents()
			})
		}
		
	},[isLoading])

	const loadStudents=()=>{
		setLoading(true)
	}


	const selectStudentToEdit=(e)=>{
		const id = e.target.name
		navigate('/students/edit/'+id)
	}




	const selectCurrentStudent=(id)=>{
		const selected = students.find(item => item.studentId === parseInt(id))
		setCurrentStudent(selected)
	}

	const selectStudentToDelete=(e)=>{
		const id = e.target.name
		selectCurrentStudent(id)
		openCloseModalDelete()
		console.log('Seleccionado para borrar', id)
	}


	const openCloseModalDelete=()=>{
		setModalDelete(!modalDelete)
	}

	const deleteStudent =async()=>{
		console.log('Delete request')
		//https://localhost:7179/api/Student/id?id=11' \
		console.log('id seleccionado', currentStudent.studentId)
		console.log(_APIAssistence + 'student/id?id='+ currentStudent.studentId)

		await axios.delete(_APIAssistence + 'student/id?id='+ currentStudent.studentId)
		.then(response=>{
			console.log('Ya lo borro')
			setStudents(students.filter(item=> item.studentId!==currentStudent.studentId))
			openCloseModalDelete()
		})
		.catch((error)=>{
			console.log('Error al borarr ', error)
		})
		
		openCloseModalDelete()
		console.log('Listo borrado')
	}

	return(
		<div className='container'>
			<h1 className='text text-center'>Students</h1>
			{hasData && <StudentsTableDetail students={students} selectStudentToEdit={selectStudentToEdit}selectStudentToDelete={selectStudentToDelete}/>}
			<div className='contaniner text-center'>
				<Button className='Button'  onClick={loadStudents} disabled={isLoading} >{isLoading ? 'Loading...':'Reload Periods'}</Button>
				
			</div>

			<Modal isOpen={modalDelete}>
				<ModalHeader style = {{display:'block'}}>
					<span style={{float:'right'}}>x</span>
				</ModalHeader>
				<ModalBody>
					<p>Press the delete button to confirm Group elimination {currentStudent && currentStudent.name}</p>
				</ModalBody>

				<ModalFooter>
					<button className="btn btn-success" onClick={deleteStudent} >Delete</button>
					<button className="btn btn-danger" onClick={openCloseModalDelete} >Cancelar</button>
				</ModalFooter>
			</Modal>
		</div>
	)

}

export default StudentsShortTable