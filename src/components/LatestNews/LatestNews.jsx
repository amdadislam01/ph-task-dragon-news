import React from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
    return (
        <div className='flex items-center gap-6 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2 rounded-md'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true}>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    )
}

export default LatestNews
