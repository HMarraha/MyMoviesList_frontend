import React from 'react'
import { Link } from 'react-router-dom'

const Moviescard = ({release_date,original_title,poster_path}) => {
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200'
    return (
     <>  
         <section>
             <img className='movieimage' src={`${IMG_BASE_URL}${poster_path}`} alt="img" />
             <Link style={{textDecoration : 'none', color: 'black'}} to="/Description"><h1 className='movietitle'>{original_title}</h1></Link>
             <p className='moviedate'>{release_date}</p>
         </section>
     </>
   )
}

export default Moviescard