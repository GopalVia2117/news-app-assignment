"use client";

import { Provider } from 'react-redux';
import {persistor, store} from '@/redux-store/store';
import { PersistGate } from 'redux-persist/integration/react';

import './globals.css'
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='relative lg:px-24'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar/>
          <TopNav/>
          <main className="relative w-full flex p-4">    
            <SideNav/>
            <div className='sm:w-full lg:w-8/12 px-2 mx-auto'>
            {children}
            </div>

          </main>
          <Footer/>
        </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
