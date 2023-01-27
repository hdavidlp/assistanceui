import React from 'react'

import GroupShortDetailRow from './GroupShortDetailRow'

const GroupTableBody = ({groups}) => {

	return (
		<tbody>
			{groups?.data?.map((group) =>(
				<GroupShortDetailRow group={group} />
			))}

		</tbody>
	)
}

export default GroupTableBody