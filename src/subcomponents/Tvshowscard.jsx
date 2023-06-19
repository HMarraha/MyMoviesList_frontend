import React from 'react'
import { Link } from 'react-router-dom'

const Tvshowscard = ({id,first_air_date,original_name,poster_path}) => {
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200'
    return (
     <>  
         <section>
             <Link to={`/description/tvshows/${id}/${original_name}`}><img className='movieimage' src={`${IMG_BASE_URL}${poster_path}`} alt="img" /></Link>
             <Link style={{textDecoration : 'none', color: 'black'}} to={`/description/tvshows/${id}/${original_name}`}><h1 className='movietitle'>{original_name}</h1></Link>
             <p className='moviedate'>{first_air_date}</p>
         </section>
     </>
   )
}

export default Tvshowscard