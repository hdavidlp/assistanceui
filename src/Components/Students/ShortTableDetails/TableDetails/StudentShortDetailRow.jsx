import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const StudentShortDetailRow = ({student, selectStudentToEdit, selectStudentToDelete}) => {
	return (
		<tr >
			<th >{student.studentId}</th>
			<td>{student.name}</td>
			<td>
				<button 
					key={'E' + student.studentId}
					name={student.studentId}
					className="btn btn-primary"
					onClick={selectStudentToEdit}
					>
					Edit &nbsp;
					<FontAwesomeIcon icon={faEdit}/> 
				</button>
				{" "}
				 <button 
					key={'D' + student.studentId}
					name={student.studentId}
					className="btn btn-danger"
					onClick={selectStudentToDelete}
					>
					Delete &nbsp;
					<FontAwesomeIcon icon={faTrashAlt}/> 
				</button>
			</td>
		</tr>
	)
}


export default StudentShortDetailRow