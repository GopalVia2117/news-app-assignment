import React, {useState} from 'react';

import { GridView } from '@mui/icons-material';
import { ListAlt } from '@mui/icons-material';

import NewsItem from './NewsItem';
import GridNewsItem from './GridNewsItem';

import Modal from './Modal';
import NewsItemDetail from './NewsItemDetail';


const Items = ({articles}) => {
    const [gridView, setGridView] = useState(false)
    const [modelShow, setModalShow] = useState(false);
    const [index, setIndex] = useState(0);
  
  return (
    <>
       <div className='flex justify-end'>
            <button onClick={() => setGridView(true)} disabled={gridView} title="View in Grid" className={`${gridView ? 'text-gray-400': 'text-black'}`}><GridView /></button> 
            <button onClick={() => setGridView(false)} disabled={!gridView} title="View in List" className={`${!gridView ? 'text-gray-400': 'text-black'}`}><ListAlt/></button>
        </div>

         <Modal show={modelShow} setShow={setModalShow} component={<NewsItemDetail item={articles?.at(index)}/>}/> 

        <div className={`lg:gap-4 ${gridView ? 'grid sm:grid-cols-1 lg:grid-cols-3' : 'grid sm:grid-cols-1 lg:grid-cols-2' }`}>
        {articles?.map((article, index) => {
            return !gridView ? <NewsItem key={"article" + index} index={index} item={article} setShow={setModalShow} setIndex={setIndex} /> : <GridNewsItem key={"article" + index} index={index} item={article} setShow={setModalShow} setIndex={setIndex} /> })}
        </div>

    </>
  ) 
}

export default Items;

