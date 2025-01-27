import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [LoggedInUser , setLoggedInUser] = useState('');
    const navigate = useNavigate()
    useEffect(()=>{
        setLoggedInUser(localStorage.getItem('LoggedInUser'))
    },[])

    const handleLogoutClick =(e) =>{
        localStorage.removeItem('token')
        localStorage.removeItem('LoggedInUser')
        setTimeout(()=>{
            navigate('/login')
        },1000)
    }
  return (
    <div>
        <h1>Welcome , {LoggedInUser}</h1>
        <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

export default Main