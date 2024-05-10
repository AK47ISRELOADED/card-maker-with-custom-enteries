import { name } from 'ejs'
import React from 'react'
import { useForm } from 'react-hook-form'

const Footer = ({submithandller}) => {
  const { register, handleSubmit ,reset} = useForm()

    const handleformdata = (data) =>{
        submithandller(data)
        reset();
    }

  return (
    <div className='h-32 min-w-72 p-12 rounded-lg bg-rose-200 mt-4'>
      <form className='flex gap-12'  onSubmit={handleSubmit(data => handleformdata(data) )} >
        <input   {...register("name")}   className='px-2 py-1 bg-slate-50 rounded-lg text-sm font-semibold'           type="text" placeholder='name' />
        <input   {...register("email")}   className='px-2 py-1 bg-slate-50 rounded-lg text-sm font-semibold'           type="text" placeholder='email' />
        <input   {...register("image")}   className='px-2 py-1 bg-slate-50 rounded-lg text-sm font-semibold'          type="text" placeholder='image URL' />
        <input      className='px-2 py-1 bg-rose-300 rounded-lg text-sm font-semibold'          type="submit"  />
      </form>
    </div>
  )
}

export default Footer
