import React from 'react'
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';

const GridNewsItem = ({item, index, setShow, setIndex}) => {
  return (
    <article className='p-2'>
        <div className="flex flex-col-reverse">
            <div className='w-full'>
                <h2 className='font-medium text-sm sm:text-lg text-justify'>{item?.title}</h2>
                <span onClick={() => {setIndex(index); setShow(true)}} className='text-blue-500 mt-4 cursor-pointer'>Read More <ArrowForward/> </span>
            </div>

            <div className="w-full">
                <img style={{aspectRatio: "1.5"}} className='rounded-sm' src={item?.urlToImage} alt={item?.title} />
            </div>

        </div>
    </article>
  )
}

export default GridNewsItem;