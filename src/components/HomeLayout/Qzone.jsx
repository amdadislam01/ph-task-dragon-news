import React from 'react'
import swimming from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playground from '../../assets/playground.png';

const Qzone = () => {
  return (
    <div className='bg-base-200 p-3'>
      <h2 className='font-bold mb-5'>Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimming} alt="" />
        <img src={classImage} alt="" />
        <img src={playground} alt="" />
      </div>
    </div>
  )
}

export default Qzone
