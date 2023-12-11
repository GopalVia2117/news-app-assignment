import React from 'react';
import { Cancel } from '@mui/icons-material';

const Modal = ({show, component, setShow}) => {
  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}} className={`${!show && 'hidden'} ${show && 'flex justify-center items-center'} fixed top-0 left-0 z-50 w-full h-screen`}>
        <div className='bg-white backdrop-blur-xl w-full p-4 lg:p-32 lg:w-1/2'>
            <div className='text-end'><button onClick={() => setShow(false)}><Cancel/></button></div>
            {component}
        </div>
    </div>
  )
}

export default Modal;