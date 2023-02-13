import React from 'react'

function RowLongDetail({period}) {
  return (
    <tr id={period.periodID}  >
      <th scope="row" >{period.periodID}</th>
      <td>{period.longDescription}</td>
      <td>{period.shortDescription}</td>
      <td>{period.isActive?'Si':'No'}</td>
    </tr>
  )
}

export default RowLongDetail
