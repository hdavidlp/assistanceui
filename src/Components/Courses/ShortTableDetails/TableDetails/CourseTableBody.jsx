import React from "react"

import CourseLongDetailRow from "./CourseLongDetailRow"


const CourseTableBody = ({courses, selectCourseToEdit, selectCourseToDelete}) => {


	return (
		<tbody>
			{courses?.map((course) => (
				<CourseLongDetailRow 
					key={course.courseID} 
					course = {course} 
					selectCourseToEdit = {selectCourseToEdit}
					selectCourseToDelete={selectCourseToDelete}/>
			))}
		</tbody>
	)
}

export default CourseTableBody