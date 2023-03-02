import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PeriodsTableDetail from './TableDetails/PeriodsTableDetail'


import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"


import _defaultMaxTime, {_APIAssistence} from '../../../API/APIConfig'


const PeriodsShortTable = () => {

	const [isLoading, setLoading] = useState(false);
	const [hasData, sethasData] = useState(false)
	const [periods, setPeriods] = useState([])

	function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}

	const getPeriods = () => {
		axios.get(_APIAssistence+'Period')
		.then(res => {
				setPeriods(res)
				sethasData(true)
				setLoading(false)
				console.log(res)
		})
		.catch(err=>{
			console.log(err)
			setLoading(false)
		})
	}

	useEffect(()=>{
		!hasData && getPeriods()

		if(isLoading){
			simulateNetworkRequest().then(()=>{
				getPeriods()
			})
		}
	}, [isLoading])

	const loadPeriods = () => {
		setLoading(true)
	}
	
  return (
    <div>
		<div className='clear-fix'></div>
      	<h1 className='text-center'>Periods</h1> 
        {hasData&& <PeriodsTableDetail periods={periods}/>}
        <div className='col text-center'>
        <Button className='button' onClick={loadPeriods} disabled={isLoading} >{isLoading ? 'Loading...':'Reload Periods'}</Button>
      	</div>
    </div>
  )
}

export default PeriodsShortTable


