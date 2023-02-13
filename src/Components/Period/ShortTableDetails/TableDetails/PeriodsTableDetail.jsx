import React from 'react'

import PeriodTableHeader from './PeriodTableHeader'
import PeriodsTableBody from './PeriodsTableBody'


function PeriodsTableDetail({periods}) {
  return (
    <div className='container'>
        <table className="table table-hover">
          <PeriodTableHeader />
          <PeriodsTableBody periods={periods}/>
        </table>
    </div>
  )
}

export default PeriodsTableDetail
