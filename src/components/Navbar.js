import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { FavoriteBorder } from '@mui/icons-material';

import { countryNames } from '@/data/countries';

const Navbar = () => {
  const [user, setUser] = useState(null);

  const logOut = () => {
    localStorage.removeItem('user');
    location.reload();
  }

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user')) || null;
    setUser(localUser);
  }, []);

  return (
    <header className='px-10 py-5 flex justify-between items-center'>
        <div>
           <Link href="/"><h1 className='text-2xl font-medium text-orange-400'>NewsApp</h1></Link>
        </div>
        <div className='flex items-center gap-4'>
            {!user ? 
            <button className='px-4 py-2 bg-orange-400 text-white rounded-md'><Link href="/auth/login" className="font-medium">Login</Link></button>
            : <div className='flex items-center gap-2'>
            <Link href="#"><FavoriteBorder/></Link>
            <p className='font-medium hidden sm:block'>{user.email}</p>
            <button onClick={logOut} className='px-4 py-2 bg-orange-400 text-white rounded-md'>Log out</button>
            </div>}
            </div>
    </header>
  )
}

// <select defaultValue="in" className='border border-solid border-gray-800 rounded-sm p-2'>
// {Object.keys(countryNames).map(currentCountry => <option value={currentCountry}>{countryNames[currentCountry]}</option>)}
// </select>

export default Navbar;