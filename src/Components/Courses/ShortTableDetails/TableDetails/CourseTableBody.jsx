import React from "react"

import CourseLongDetailRow from "./CourseLongDetailRow"


const CourseTableBody = ({courses}) => {


	return (
		<tbody>
			{courses?.data?.map((course) => (
				<CourseLongDetailRow course = {course} />
			))}
		</tbody>
	)
}

export default CourseTableBody