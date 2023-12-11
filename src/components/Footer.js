import React from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row flex-1 justify-between p-8 gap-4 bg-blue-800 lg:-mx-24 lg:p-24'>
        <div>
            <div className='text-white'>
                <Link href="/"><h1 className='text-2xl font-medium  hover:text-gray-200'>NewsMania</h1></Link>
                <p>This is a news app which supports the latest <br/> articles supporting different categories. <br/>
                It lets you create account and save your articles.
                </p>
            </div>
        </div>
        <div>
            <h2 className='text-white text-lg'>Quick Links</h2>
            <ul>
            {categories.map((category,index) => {
                return <li key={index} className='text-white'><Link href={`/category/${category.title.toLowerCase()}`}>{category.title}</Link></li>
            })}
            </ul>
        </div>
        <div>
            <div className='text-white'>
            <h2 className='text-lg'>Contact Us</h2>
            <p>Just an email away</p>
            <p>myemail@gmail.com</p>
            </div>
        </div>

        <div className='text-white'>
            <h2 className='text-lg'>What Next?</h2>
            <ul>
                <li>I shall be implementing the feature of Infinite scroll in nearby future.</li>
                <li>I shall be including the feature of getting articles based on the country.</li>
            </ul>
        </div>
        
    </footer>
  )
}

export default Footer