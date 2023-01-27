import React from 'react'

const StudentShortDetailRow = ({student}) => {
	return (
		<tr >
			<th >{student.studentId}</th>
			<td>{student.name}</td>
		</tr>
	)
}


export default StudentShortDetailRow