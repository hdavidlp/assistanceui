import React from 'react'
import RowLongDetail from './RowLongDetail'

function PeriodsTableBody({periods}) {
  return (
    <tbody>
        {periods?.data?.map((period) =>(
            <RowLongDetail period = {period} />
        ))}
    </tbody>
  )
}

export default PeriodsTableBody
