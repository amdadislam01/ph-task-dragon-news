import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../context/AuthProvider'

const Navbar = () => {
  const {user, logoutuser} = use(AuthContext);
  const handleLogout = () => {
    logoutuser()
    .then(()=>{alert('Your Account Logout')})
    .catch((error)=>{console.log(error);
    })
  }
  return (
    <div className='flex justify-between items-center'>
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={`${user ?  user.photoUrl : userIcon}`} alt="" className='w-12 h-12 rounded-full' />
        {
          user ? <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button> : <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link>
        }
      </div>
    </div>
  )
}

export default Navbar
