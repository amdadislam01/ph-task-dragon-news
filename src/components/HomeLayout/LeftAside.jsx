import React, { Suspense } from 'react'
import Categories from '../Categories/Categories'

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-3xl"></span>
            }>
                <Categories />
            </Suspense>
        </div>
    )
}

export default LeftAside
