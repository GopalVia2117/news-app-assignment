"use client"

import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { fetchArticles } from '@/redux-store/articlesReducers';


import NewsItemDetail from '@/components/NewsItemDetail';
import Items from '@/components/Items';

const Detail = () => {
  const params = useParams();
  const [dispatched, setDispatched] = useState(false);
  const articles = useSelector(state => state.articlesState.articles.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
    setDispatched(true);
  }, []);


  return (
    <div>
      {dispatched ? <NewsItemDetail item={articles?.at(params.id)} /> : "Loading..."}
      <div className="py-4"></div>
      {dispatched ? <Items articles={articles}/> : "Loading..."}
    </div>
  )
}

export default Detail;