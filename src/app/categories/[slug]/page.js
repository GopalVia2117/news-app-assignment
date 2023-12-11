"use client";

import React, {useEffect} from 'react';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '@/redux-store/articlesReducers';
import { useSelector } from 'react-redux';
import Items from '@/components/Items';

const page = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const articles = useSelector(state => state.article.articles);

  useEffect(() => {
    dispatch(fetchArticles(params.slug));
  }, [params.slug]);

  return (
    <div>
       <h2 className='text-gray-400 text-lg lg:text-2xl'>{params.slug[0].toUpperCase() + params.slug.substring(1)}</h2>
        <Items articles={articles} />
    </div>
  )
}

export default page;