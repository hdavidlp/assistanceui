import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PeriodsTableDetail from './TableDetails/PeriodsTableDetail'


import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"


import _defaultMaxTime, {_APIAssistence} from '../../../API/APIConfig'


const PeriodsShortTable = () => {

	const [hasData, sethasData] = useState(false)
	const [periods, setPeriods] = useState([])

	const getPeriods = () => {
		axios.get(_APIAssistence+'Period')
		.then(res => {
				setPeriods(res)
				sethasData(true)
				console.log(res)
		})
		.catch(err=>{
			console.log(err)
		})
	}

	useEffect(()=>{
		!hasData && getPeriods()
	})

	



  return (
    <div>
      <h1 className='text-center'>Periods</h1> 
        {hasData&& <PeriodsTableDetail periods={periods}/>}
        <div className='col text-center'>
        <Button className='button' onClick={getPeriods}>Reload Periods	</Button>
      	</div>
    </div>
  )
}

export default PeriodsShortTable


