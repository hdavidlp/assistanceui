import React from 'react'

import GroupShortDetailRow from './GroupShortDetailRow'

const GroupTableBody = ({groups, selectGroupToEdit, selectGroupToDelete}) => {

	return (
		<tbody>
			{groups?.map((group) =>(
				<GroupShortDetailRow group={group} selectGroupToEdit={selectGroupToEdit} selectGroupToDelete={selectGroupToDelete}/>
			))}
		</tbody>
	)
}

export default GroupTableBody