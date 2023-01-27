//import Reac from "react"
import { useState, useEffect } from "react"
import axios from "axios"

import {_APIAssistence} from    '../../../API/APIConfig'

import GroupsTableDetails from "./TableDetails/GroupsTableDetails"

import Button  from 'react-bootstrap/Button'


const GroupsShortTable = () => {

	const [hasData, setHasData] = useState(false)
	const [groups, setGroups] = useState([])

	const getGroups = () =>{
		axios.get(_APIAssistence + 'Group')
		.then(res=>{
			setGroups(res)
			setHasData(true)
			console.log(res)
		})
		.catch(err=>{
			console.log(err)
		})
	}

	useEffect(() => {
		!hasData && getGroups();
	})


	return (
		<div className="container">
			<h1 className="text text-center">Groups</h1>
			{hasData && <GroupsTableDetails groups={groups}/>}

			<div className="container text-center">
				<Button className="Button" onClick={getGroups} >Load Groups</Button>
			</div>
		</div>
	)
}


export default GroupsShortTable