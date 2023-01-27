
import React from 'react'

const GroupShortDetailRow = ({group}) => {
	return (
		<tr id={group.groupID}>
			<th scope="row">{group.groupID}</th>
			<td >{group.name}</td>
			<td >{group.periodID}</td>
		</tr>
	)
}

export default GroupShortDetailRow