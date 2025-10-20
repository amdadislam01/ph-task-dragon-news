import React from 'react'
import SocialLogin from './SocialLogin'
import FindUs from '../FindUs/FindUs'
import Qzone from './Qzone'

const RightAside = () => {
  return (
    <div className='space-y-8'>
      <SocialLogin />
      <FindUs />
      <Qzone />
    </div>
  )
}

export default RightAside
