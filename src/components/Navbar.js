import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { Favorite } from '@mui/icons-material';

import { countryNames } from '@/data/countries';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '@/redux-store/userReducer';

const Navbar = () => {
   const user = useSelector(state => state.user.user);
   const dispatch = useDispatch();
  
  return (
    <header className='px-10 py-5 flex justify-between items-center sticky top-0 z-10 bg-white'>
        <div>
           <Link href="/"><h1 className='text-2xl font-medium text-blue-700 hover:text-blue-600'>NewsMania</h1></Link>
        </div>
        <div className='flex items-center gap-4'>
            {!user ? 
            <button className='px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md'><Link href="/auth/login" className="font-medium">Login</Link></button>
            : <div className='flex items-center gap-2'>
            <Link title='Favorite Articles' href="/favorites"><Favorite/></Link>
            <p className='font-medium hidden sm:block'>{user.email}</p>
            <button onClick={() => dispatch(logOutUser())} className='px-4 py-2 bg-blue-700 text-white rounded-md'>Log out</button>
            </div>}
            </div>
    </header>
  )
}

// <select defaultValue="in" className='border border-solid border-gray-800 rounded-sm p-2'>
// {Object.keys(countryNames).map(currentCountry => <option value={currentCountry}>{countryNames[currentCountry]}</option>)}
// </select>

export default Navbar;