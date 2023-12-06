"use client"
import {useState, useEffect} from 'react';

import getData from "@/firebase/firestore/getData";
import Items from '@/components/Items';


function Page(){
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("Having errors");
     const fetchArticles = async () => {
        try{
          const data = await getData("favorites");
          console.log(data);
          setArticles(data.docs);
        }
        catch(error){
          console.log(error.message);
        }
     }
     fetchArticles();
  }, []);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user')) || null;
    console.log(localUser);
    setUser(localUser);
  }, []);

  return (
    <div>
       {!user && <h2>Please Login to get favorite articles</h2>}
       {user && <Items articles={articles} /> }
    </div>
  )
}

export default Page;