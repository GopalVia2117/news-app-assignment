import React from 'react';
import { categories } from '@/data/categories';

const SideNav = () => {
  return (
    <div className='w-3/12'>
        {categories.map(
          (category) => 
            <div className='p-2 hover:bg-gray-50 rounded-md flex gap-1'>
              <span>{category.icon}</span> <span>{category.title}</span>
            </div>
          )}
    </div>
  )
}

export default SideNav;