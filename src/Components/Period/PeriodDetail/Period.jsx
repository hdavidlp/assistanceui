import React from 'react'
import { useParams } from 'react-router-dom'


const Period = () =>{ 
    const {id} = useParams()

    return (
        <div className='container'>
            Hola Mundo Period {id}
        </div>
    )
}

export default  Period