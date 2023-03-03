import React from 'react'

import StudentShortDetailRow from './StudentShortDetailRow'


const StudentTableBody = ({students, selectStudentToEdit, selectStudentToDelete}) => {
	return (
		<tbody>
			{students?.map((student) => (
				<StudentShortDetailRow student={student} selectStudentToEdit={selectStudentToEdit} selectStudentToDelete={selectStudentToDelete}/>
			))}
				
		</tbody>
	)
}

export default StudentTableBody