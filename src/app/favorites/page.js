"use client"
import {useState, useEffect} from 'react';

import getData from "@/firebase/firestore/getData";
import Items from '@/components/Items';
import { useSelector, useDispatch } from 'react-redux';
import { setFavorites } from '@/redux-store/favoritesReducer';

function Page(){
  const articles = useSelector(state => state.favorites.favorites);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
     async function fetchFavorites() {
      const {result, error} = await getData("favorites");
      let favorites = [];
      if(result){
        result?.forEach(favorite => {
          if(favorite.data().user === user.uid) 
          favorites.push(favorite.data());
        }
          );
      }
      else{
        console.log(error);
      }
      dispatch(setFavorites(favorites));
     }
     fetchFavorites();
  }, []);

 
  return (
    <div>
       <h2 className='text-gray-400 text-lg lg:text-2xl'>Favorites</h2>
       {!user && <h2 className='mt-10 text-xl text-gray-800'>Please Login to get favorite articles</h2>}
       {user && <Items articles={articles} /> }
    </div>
  )
}

export default Page;