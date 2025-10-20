import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'>Login With</h2>
      <div className="space-y-5">
        <button className='btn w-full btn-outline btn-secondary'><FcGoogle size={24} /> Login With Google</button>
        <button className='btn w-full btn-outline btn-primary'><FaGithub size={24} /> Login With GitHub</button>
      </div>
    </div>
  )
}

export default SocialLogin
