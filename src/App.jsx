import React, { useState } from 'react'
import Cards from './component/Cards'
import Footer from './component/Footer'
import { set } from 'react-hook-form'

const App = () => {

  const [users , setUsers] = useState([])

  const submithandller = (data) =>{
    setUsers([...users, data])
  }

  const removeHandler = (id) => {
    // console.log(id);
    setUsers(()=> users.filter((item, index)=>index!=id))
  }

  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center p-3 bg-rose-100'>
      < Cards users={users} removeHandler={removeHandler}  />
      < Footer  submithandller={submithandller} />
    </div>
  )
}

export default App
