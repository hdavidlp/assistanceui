import React from 'react'
import GroupTableHeader from './GroupTableHeader'
import GroupTableBody from './GroupTableBody'

const GroupsTableDetails = ({groups, selectGroupToEdit, selectGroupToDelete}) => {

	return (
		<div className='container'>
			<table className='table table-hover'>
				<GroupTableHeader />
				<GroupTableBody groups={groups} selectGroupToEdit={selectGroupToEdit} selectGroupToDelete={selectGroupToDelete}/>
			</table>
		</div>
	)
}


export default GroupsTableDetails