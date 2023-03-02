
import React, { useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const GroupShortDetailRow = ({group, selectGroupToEdit, selectGroupToDelete}) => {

	useEffect(()=>{
		console.log('En renglon de tabla',group.period.longDescription)
	},[])

	return (
		<tr id={group.groupID}>
			<th scope="row">{group.groupID}</th>
			<td >{group.name}</td>
			<td >{group.period.longDescription}</td>
			<td >
				<button 
					key={'E' + group.groupID}
					name={group.groupID}
					className="btn btn-primary"
					onClick={selectGroupToEdit}
					>
					Edit &nbsp;
					<FontAwesomeIcon icon={faEdit}/> 
				</button>
				{"  "}
				
				<button 
					key={'D' + group.groupID}
					name={group.groupID}
					className="btn btn-danger"
					onClick={selectGroupToDelete}
					>
					Delete &nbsp;
					<FontAwesomeIcon icon={faTrashAlt}/> 
				</button>

				
			</td>
		</tr>
	)
}

export default GroupShortDetailRow