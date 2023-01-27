import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'

import {_APIAssistence} from '../../../API/APIConfig'
import  Button  from 'react-bootstrap/Button'

import StudentsTableDetail from './TableDetails/StudentsTableDetail'



const StudentsShortTable = () => {

	const [students, setStudents] = useState([])
	const [hasData, setHasData] = useState(false)


	const getStudents = () => {
		axios.get(_APIAssistence + 'Student')
		.then(res => {
			setStudents(res)
			setHasData(true)
			console.log (res)
		})
		.catch(err => {
			console.log(err)
		} )
	}

	useEffect(() => {
		!hasData && getStudents();
	})



	return(
		<div className='container'>
			<h1 className='text text-center'>Students</h1>
			{hasData && <StudentsTableDetail students={students} />}
			<div className='contaniner text-center'>
				<Button className='Button'  onClick={getStudents}>Load Students</Button>
			</div>
		</div>
	)

}

export default StudentsShortTable