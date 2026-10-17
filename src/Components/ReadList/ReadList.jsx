import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import {getstrodData} from '../../Utility/Utility'
import ReadListBook from "../ReadListBook/ReadListBook"


const ReadList = () => {
    const booksData = useLoaderData()
    const [readList,setreadList] = useState([])
// console.log(booksData)
    useEffect(() => {
        const data = getstrodData()
      console.log(data)
      const readList = booksData.filter(item => data.includes(item.id))
   
      
      setreadList(readList)
    },[])
    return (
        <div className='grid grid-cols-2 gap-8 p-8 w-6xl mx-auto'>
           
           {
            readList.map(list => <ReadListBook list={list}></ReadListBook>)
           }
        </div>
    );
};

export default ReadList;