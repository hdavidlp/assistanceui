import React from "react"


import CourseTableHeader from "./CourseTableHeader"
import CourseTableBody from "./CourseTableBody"



const CoursesTableDetail = ({courses, selectCourseToEdit, selectCourseToDelete} ) => {

	return(
		<div className="container">
			<table className="table table-hover">
				<CourseTableHeader />
				<CourseTableBody courses={courses} selectCourseToEdit={selectCourseToEdit} selectCourseToDelete={selectCourseToDelete} />
			</table>
		</div>
	)
}

export default CoursesTableDetail

