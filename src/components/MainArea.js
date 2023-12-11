"use client";

import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchArticles } from '@/redux-store/articlesReducers';

import Items from './Items';



const MainArea = () => {
     const articles = useSelector(state => state.article.articles);
     const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchArticles());
      // localStorage.setItem('articles', JSON.stringify(articles));
      console.log(articles);
    }, []);


  return (
    <div className=''>
      <Items articles={articles} />
    </div>
  )
}

export default MainArea;

