import React from 'react';
import { categories } from '@/data/categories';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ios from "../images/ios.svg";
import playStore from "../images/playStore.svg";
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


const SideNav = () => {
  const params = useParams();
  return (
    <div className='hidden lg:block lg:w-3/12 sticky top-24 max-h-screen'>
        {categories.map(
          (category, index) => 
          <Link key={index} href={`/categories/${category.title.toLowerCase()}`}>
            <div className={`p-2 rounded-md flex gap-1 transition-all ${(!params.slug && category.title.toLowerCase() === "general") || params.slug === category.title.toLowerCase() ? 'bg-blue-700 text-white hover:bg-blue-600': 'hover:bg-gray-50'}`}>
             <span>{category.icon}</span> <span>{category.title}</span>
            </div>
            </Link> 
          )}


          <div className='flex flex-col items-center mt-10 gap-2'>
            <p className='text-center text-sm'>Download App From</p>
            <div><img src={playStore.src}/></div>
            <div><img src={ios.src} /></div>
          </div>

          <div className='flex flex-col items-center mt-10 gap-2'>
            <p className='text-center text-sm'>Follow Us On</p>
            <div className='flex gap-3 items-center'>
              <span className=' hover:text-blue-700 transition-all p-2'><Facebook/></span>
               <span className='hover:text-blue-700 transition-all'><Twitter/></span>
                <span className='hover:text-blue-700 transition-all'><Instagram/></span>
            </div>
          </div>
    </div>
  )
}

export default SideNav;