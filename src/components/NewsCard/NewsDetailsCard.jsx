import React from 'react'
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
  // console.log(news);
  
  return (
    <div className='space-y-5'>
      <img src={news.image_url} alt="" className='w-full h-[450px] object-cover rounded-md' />
      <h2 className='text-2xl font-semibold'>{news.title}</h2>
      <p>{news.details}</p>
      <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>Back To Category</Link>
    </div>
  )
}

export default NewsDetailsCard
