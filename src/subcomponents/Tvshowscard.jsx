import React from 'react'
import { Link } from 'react-router-dom'

const Tvshowscard = ({first_air_date,original_name,poster_path}) => {
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200'
    return (
     <>  
         <section>
             <img className='movieimage' src={`${IMG_BASE_URL}${poster_path}`} alt="img" />
             <Link style={{textDecoration : 'none', color: 'black'}} to="/Description"><h1 className='movietitle'>{original_name}</h1></Link>
             <p className='moviedate'>{first_air_date}</p>
         </section>
     </>
   )
}

export default Tvshowscard