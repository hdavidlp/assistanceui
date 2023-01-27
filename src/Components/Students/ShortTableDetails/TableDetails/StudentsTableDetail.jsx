import React from 'react'

import StudentTableHeader	from './StudentsTableHeader'
import StudentTableBody from './StudentsTableBody'


const StudentsTableDetail = ({students}) => {

	return (
		<div className='container'>
			<table className='table table-hover'>		
				<StudentTableHeader />
				<StudentTableBody students={students}/>
			</table>
		</div>
	)
}

export default StudentsTableDetail

