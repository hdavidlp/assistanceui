import React from "react"


import CourseTableHeader from "./CourseTableHeader"
import CourseTableBody from "./CourseTableBody"



const CoursesTableDetail = ({courses}) => {

	return(
		<div className="container">
			<table className="table table-hover">
				<CourseTableHeader />
				<CourseTableBody courses={courses} />
			</table>
		</div>
	)
}

export default CoursesTableDetail

