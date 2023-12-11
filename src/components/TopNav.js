import React from 'react'
import { categories } from '@/data/categories';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const TopNav = () => {
  const params = useParams();

  return (
    <div className='lg:hidden w-full overflow-auto flex items-center flex-nowrap space-x-4 px-4'>
        {categories.map(
          (category, index) => 
          <Link key={index} href={`/categories/${category.title.toLowerCase()}`}>
            <div className={`text-sm px-2 py-1 rounded-full flex gap-1 ${(!params.slug && category.title.toLocaleLowerCase() === "general") || params.slug === category.title.toLowerCase() ? 'bg-blue-700 text-white hover:bg-blue-600': 'hover:bg-gray-50'}`}>
             <span>{category.icon}</span> <span>{category.title}</span>
            </div>
            </Link> 
          )}
    </div>
  )
}

export default TopNav