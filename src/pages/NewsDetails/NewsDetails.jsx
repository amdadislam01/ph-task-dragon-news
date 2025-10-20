import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import RightAside from '../../components/HomeLayout/RightAside'
import NewsDetailsCard from '../../components/NewsCard/NewsDetailsCard'
import { useLoaderData, useParams } from 'react-router'

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState([]);

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails)
    },[data,id])
    // console.log(data, id);
    
  return (
    <div>
      <header className='py-5'>
        <Header />
      </header>
      <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
      <section className='col-span-9'>
        <h2 className='text-xl font-bold mb-5'>News Details</h2>
        <NewsDetailsCard news={news} />
      </section>
        <aside className='col-span-3'>
            <RightAside />
        </aside>
      </main>
    </div>
  )
}

export default NewsDetails
