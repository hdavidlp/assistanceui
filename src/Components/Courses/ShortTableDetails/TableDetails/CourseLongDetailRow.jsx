import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";



const CourseLongDetailRow = ({course, selectCourseToEdit, selectCourseToDelete}) => {

	
	

	return (
		<tr id={course.courseID}>
			<th scope="row">{course.courseID}</th>
			<td>{course.name}</td>
			<td>
				<button 
					key={'E' + course.courseID}
					name={course.courseID}
					className="btn btn-primary"
					onClick={selectCourseToEdit}
					>
					Edit &nbsp;
					<FontAwesomeIcon icon={faEdit}/> 
				</button>
				{"   "}
				<button 
					key={'D' + course.courseID}
					name={course.courseID}
					onClick={selectCourseToDelete}
					className="btn btn-danger"
					>
					Delete &nbsp;
					<FontAwesomeIcon icon={faTrashAlt}/>
				</button>


			</td>
		</tr>
	)
}


export default CourseLongDetailRow
