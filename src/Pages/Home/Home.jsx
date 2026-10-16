
import React, { useEffect, useState } from 'react';
import HeroBanner from '../../Components/HeroBanner/HeroBanner';
import { Suspense } from 'react';
import Books from './../../Components/Books/Books';
const Home = () => {
const [books,setBooks] = useState([])
    useEffect( ()=> {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
     <div>
          <HeroBanner></HeroBanner>
         <Suspense fallback={<p>Data is Loading..........</p>}>
         <h1 className='text-center py-10 text-4xl font-bold'>All Books are here!</h1>
           <div className='md:grid grid-cols-4 gap-5'>
             {
                books.map( book => <Books book={book}></Books>)
            }
           </div>
         </Suspense>
     </div>
      
    )
};

export default Home;


