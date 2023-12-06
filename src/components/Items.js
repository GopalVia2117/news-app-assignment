import React, {useState} from 'react';

import { GridView } from '@mui/icons-material';
import { ListAlt } from '@mui/icons-material';

import NewsItem from './NewsItem';
import GridNewsItem from './GridNewsItem';



const Items = ({articles}) => {
    const [gridView, setGridView] = useState(false);

  return (

    <>
    <div className='flex justify-end'>
            <button onClick={() => setGridView(true)} disabled={gridView} title="View in Grid" className={`${gridView ? 'text-gray-400': 'text-black'}`}><GridView /></button> 
            <button onClick={() => setGridView(false)} disabled={!gridView} title="View in List" className={`${!gridView ? 'text-gray-400': 'text-black'}`}><ListAlt/></button>
        </div>
        <div className={`lg:gap-4 ${gridView ? 'grid sm:grid-cols-1 lg:grid-cols-3' : 'grid sm:grid-cols-1 lg:grid-cols-2' }`}>
        {articles?.map((article, index) => {
            return !gridView ? <NewsItem key={"article" + index} index={index} item={article} /> : <GridNewsItem key={"article" + index} index={index} item={article} /> })}
        </div>
    </>
  )
}

export default Items