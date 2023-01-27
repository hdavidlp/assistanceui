import React from 'react'

import StudentShortDetailRow from './StudentShortDetailRow'


const StudentTableBody = ({students}) => {
	return (
		<tbody>
			{students?.data?.map((student) => (
				<StudentShortDetailRow student={student}/>
			))}
				
		</tbody>
	)
}

export default StudentTableBody