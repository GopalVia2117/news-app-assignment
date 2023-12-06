import React from 'react';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';

const NewsItem = ({item, index}) => {
  return (
    <article className='p-2'>
        <div className="flex gap-2">
            <div className='w-2/3'>
                <h2 className='font-medium text-sm sm:text-lg text-justify'>{item?.title}</h2>
                <Link className='text-blue-500 mt-4' href={`/articles/${index}`}>Read More <ArrowForward/> </Link>
            </div>

            <div class="w-1/3">
                <img style={{aspectRatio: "1.5"}} className='rounded-sm' src={item?.urlToImage} alt={item?.title} />
            </div>

        </div>
    </article>
  )
}

export default NewsItem;