import React from 'react'
import { Link } from '@mui/material'
const Card = ({id,poster_path,original_title,release_date,original_name,first_air_date,show}) => {
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200'
   return (
    <>  
        <section>
            <Link to={`/description/${id}`}><img className='movieimage' src={`${IMG_BASE_URL}${poster_path}`} alt="img" /></Link>
            <Link style={{textDecoration : 'none', color: 'black'}} to={`/description/${id}`}><h1 className='movietitle'>{show ? original_title : original_name}</h1></Link>
            <p className='moviedate'>{show ? release_date : first_air_date}</p>
        </section>
    </>
  )
}
export default Card
