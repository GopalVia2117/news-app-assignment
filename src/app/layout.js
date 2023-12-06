"use client";

import './globals.css'
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import AdvertisementArea from '@/components/AdvertisementArea';
import { Provider } from 'react-redux';
import store from '@/redux-store/store';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='lg:px-24'>
      <Provider store={store}>
          <Navbar/>
          <main className="relative w-full flex p-4">
            <div className='sm:w-full lg:w-8/12 px-2 mx-auto'>
            {children}
            </div>
          </main>
        </Provider>
      </body>
    </html>
  )
}
