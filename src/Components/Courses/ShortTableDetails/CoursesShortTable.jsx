import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import CoursesTableDetail from './TableDetails/CoursesTableDetail'


import { _APIAssistence } from '../../../API/APIConfig'
import Button from 'react-bootstrap/Button'



const CoursesShortTable = () => {

	const [hasData, setHasData] = useState(false)
	const [courses, setCourses] = useState([])

	const getCourses = () => {
		axios.get(_APIAssistence+'Course')
		.then(res => {
			setCourses(res)
			setHasData(res!==null)
			console.log(res)
		})
		.catch(err=> {
			console.log(err)
		})
	}

	useEffect(() => {
		!hasData && getCourses();
	})


  return (
    <div className='container'>
			<h1 className='text-center'>Courses</h1>
			{hasData&& <CoursesTableDetail courses={courses} />}
			<div className="container text-center">
				<Button className='button' onClick={getCourses} >Load Courses</Button>
			</div>

		</div>
  )
}

export default CoursesShortTable