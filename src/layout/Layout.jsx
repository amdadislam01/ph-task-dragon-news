import React from 'react'
import { Outlet } from 'react-router'
import LatestNews from '../components/LatestNews/LatestNews'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import LeftAside from '../components/HomeLayout/LeftAside'
import RightAside from '../components/HomeLayout/RightAside'

const Layout = () => {
  return (
     <div>
      <Header></Header>
      <section className='w-11/12 mx-auto my-3'>
        <LatestNews />
      </section>
      <nav className='w-11/12 mx-auto my-3'>
        <Navbar />
      </nav>
      <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-6'>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <LeftAside />
        </aside>
        <section className='main col-span-6'>
            <Outlet />
        </section>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <RightAside />
        </aside>
      </main>
    </div>
  )
}

export default Layout
