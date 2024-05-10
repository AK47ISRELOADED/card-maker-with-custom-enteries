import React from 'react'

const Card = ({user,id,removeHandler}) => {
    // console.log(index);
  return (
    <div className=' w-42 bg-rose-100 p-2 rounded-lg flex flex-col  justify-center items-center' >
        <img className='h-[80px] w-[80px] object-cover bg-rose-100 rounded-full'  src={user.image} alt="" />
        <h1 className='text-l uppercase font-semibold'>{user.name}</h1>
        <h4 className='text-xs font-semibold' >{user.email}</h4>
        <button onClick={()=> removeHandler(id)} className='text-xs font-semibold bg-red-500 p-2 text-white mt-2 rounded-xl'>remove</button>
    </div>
  )
}

export default Card
