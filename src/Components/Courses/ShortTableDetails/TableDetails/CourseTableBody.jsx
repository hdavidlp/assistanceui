import React from "react"

import CourseLongDetailRow from "./CourseLongDetailRow"


const CourseTableBody = ({courses}) => {


	return (
		<tbody>
			{courses?.data?.map((course) => (
				<CourseLongDetailRow key={course.courseID} course = {course} />
			))}
		</tbody>
	)
}

export default CourseTableBody