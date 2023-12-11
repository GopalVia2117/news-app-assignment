import React, { useState } from 'react'
import Link from 'next/link';
import addData from '@/firebase/firestore/addData';
import { useSelector } from 'react-redux';

import { ArrowForward } from '@mui/icons-material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const NewsItemDetail = ({item}) => {
  const user = useSelector(state => state.user.user);
  const [liked, setLiked] = useState(false);
  const addFavorite = () => {
    addData("favorites", {
      ...item,
      user: user?.uid
    });
    setLiked(!liked);
  }

  return (
    <div>
      <article className='w-full p-2'>
        <div className="flex flex-col-reverse">
            <div className='w-full mt-2'>
                <h2 className='font-medium text-2xl'>{item?.title}</h2>
                <p className="my-2">{item?.description}</p>
                <Link className='text-blue-500' href={item?.url || '#'}>Read More <ArrowForward/> </Link>
            </div>

            <div className="w-full relative">
               {user && <button onClick={addFavorite} className='absolute right-6 top-6 bg-white rounded-full p-2'>{liked ? <Favorite/> :<FavoriteBorder/>}</button> }
                <img className='rounded-sm w-full object-cover' src={item?.urlToImage} alt={item?.title} />
            </div>

        </div>
      </article>
    </div>
  )
}

export default NewsItemDetail;