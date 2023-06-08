import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Card({poster_path,original_title,release_date,original_name,first_air_date,show}) {
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200'
   return (
    <>  
        <section>
            <img className='movieimage' src={`${IMG_BASE_URL}${poster_path}`} alt="img" />
            <Link style={{textDecoration : 'none', color: 'black'}} to="/Description"><h1 className='movietitle'>{show ? original_title : original_name}</h1></Link>
            <p className='moviedate'>{show ? release_date : first_air_date}</p>
        </section>
    </>
  )
}
