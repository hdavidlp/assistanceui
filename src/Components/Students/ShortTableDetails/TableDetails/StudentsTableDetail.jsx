import React from 'react'

import StudentTableHeader	from './StudentsTableHeader'
import StudentTableBody from './StudentsTableBody'


const StudentsTableDetail = ({students, selectStudentToEdit, selectStudentToDelete}) => {

	return (
		<div className='container'>
			<table className='table table-hover'>		
				<StudentTableHeader />
				<StudentTableBody students={students} selectStudentToEdit={selectStudentToEdit} selectStudentToDelete={selectStudentToDelete}/>
			</table>
		</div>
	)
}

export default StudentsTableDetail

