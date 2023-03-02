import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';

import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import CoursesTableDetail from './TableDetails/CoursesTableDetail'


import { _APIAssistence } from '../../../API/APIConfig'
import Button from 'react-bootstrap/Button'



const CoursesShortTable = () => {

	
	const [hasData, setHasData] = useState(false)
	const [courses, setCourses] = useState()
	const [isLoading, setLoading]  =useState(false)
	const [currentCourse, setCurrentCourse] = useState({courseID:0, name:''})
	const navigate = useNavigate()


	const [modalDelete, setModalDelete] = useState(false)

	const openCloseModalDelete =()=>{
		setModalDelete(!modalDelete)
	}

	const selectCurrentCourse=(id)=>{
		console.log('imprimiendo courses in selection',courses)

		console.log(typeof(id),'---',typeof(courses[0].courseID))

		const selected = courses.find(item => item.courseID === parseInt(id))
		setCurrentCourse(selected)
	}


	const selectCourseToEdit=(e)=>{
		const id = e.target.name
		selectCurrentCourse(id)
		//openCloseModalDelete()
		navigate('/Courses/edit/'+id)
		console.log('Ya seleccionado, queriendo iniciar edicion aqui se redirecciona ', currentCourse)
	}

	const selectCourseToDelete=(e)=>{

		const id = e.target.name
		selectCurrentCourse(id)
		openCloseModalDelete()
		console.log('Ya seleccionado ', currentCourse)
	}




	function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}

	const getCourses = () => {
		axios.get(_APIAssistence+'Course')
		.then(res => {
			setCourses(res.data)
			setHasData(res!==null)
			setLoading(false)
			console.log(res.data)
		})
		.catch(err=> {
			console.log(err)
			setLoading(false)
		})
	}

	const deleteCourse =async()=>{
		await axios.delete(_APIAssistence + 'Course/id?id='+ currentCourse.courseID)
		.then(response=>{
			setCourses(courses.filter(item=> item.courseID!==currentCourse.courseID))
			openCloseModalDelete()
		})
	}

	useEffect(() => {
		!hasData && getCourses();
		if (isLoading){
			simulateNetworkRequest().then(()=>{
				getCourses()
			})
		}
	}, [isLoading])

	const loadCourses = ()=>{
		setLoading(true)
	}


  return (
    <div className='container'>
			<h1 className='text-center'>Courses</h1>
			{hasData&& <CoursesTableDetail 
				courses={courses} 
				selectCourseToEdit={selectCourseToEdit} 
				selectCourseToDelete={selectCourseToDelete}/>}
			<div className="container text-center">
				<Button className='button' onClick={setLoading} disabled={isLoading}>
					Load{isLoading?'ing ':'' } Courses
				</Button>
			</div>

			<Modal isOpen={modalDelete}>
				<ModalHeader style = {{display:'block'}}>
					<span style={{float:'right'}}>x</span>
				</ModalHeader>
				<ModalBody>
					<p>Press the delete button to confirm Course elimination {currentCourse && currentCourse.name}</p>
				</ModalBody>

				<ModalFooter>
					<button className="btn btn-success" onClick={deleteCourse} >Delete</button>
					<button className="btn btn-danger" onClick={openCloseModalDelete} >Cancelar</button>
				</ModalFooter>

			</Modal>




		</div>

		

		
  )
}

export default CoursesShortTable