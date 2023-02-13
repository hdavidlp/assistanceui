import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import CoursesTableDetail from './TableDetails/CoursesTableDetail'


import { _APIAssistence } from '../../../API/APIConfig'
import Button from 'react-bootstrap/Button'



const CoursesShortTable = () => {

	const [hasData, setHasData] = useState(false)
	const [courses, setCourses] = useState([])
	const [isLoading, setLoading]  =useState(false)

	function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}

	const getCourses = () => {
		axios.get(_APIAssistence+'Course')
		.then(res => {
			setCourses(res)
			setHasData(res!==null)
			setLoading(false)
			console.log(res)
		})
		.catch(err=> {
			console.log(err)
			setLoading(false)
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
			{hasData&& <CoursesTableDetail courses={courses} />}
			<div className="container text-center">
				<Button className='button' onClick={setLoading} disabled={isLoading}>
					Load{isLoading?'ing ':'' } Courses
				</Button>
			</div>
		</div>
  )
}

export default CoursesShortTable