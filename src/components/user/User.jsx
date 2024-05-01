// import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
  return (
    <div className='text-center text-6xl bg-slate-600 p-4 text-white'>
        user:{id}
    </div>
  )
}

export default User