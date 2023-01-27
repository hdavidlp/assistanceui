import React from 'react'
import GroupTableHeader from './GroupTableHeader'
import GroupTableBody from './GroupTableBody'

const GroupsTableDetails = ({groups}) => {

	return (
		<div className='container'>
			<table className='table table-hover'>
				<GroupTableHeader />
				<GroupTableBody groups={groups}/>

			</table>
		</div>
	)
}


export default GroupsTableDetails