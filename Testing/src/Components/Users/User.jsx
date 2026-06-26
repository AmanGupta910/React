import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
     const {id}=useParams()
  return (
    <div className='bg-gray-900 text-white text-3l'>

       
      user:{id}  
    </div>
  )
}

export default User
