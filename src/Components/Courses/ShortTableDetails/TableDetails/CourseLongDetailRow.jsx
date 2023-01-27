import React from "react"


const CourseLongDetailRow = ({course}) => {

	return (
		<tr id={course.courseID}>
			<th scope="row">{course.courseID}</th>
			<td>{course.name}</td>
		</tr>
	)
}


export default CourseLongDetailRow
