import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import Add from "@mui/icons-material/Add"
import Link from "@mui/icons-material/Link"
import { ButtonGroup } from "@mui/material"
import tmbdClient from '../Views/tmdb'
const Moviedescription = ({cast,homepage,Large,IMG_BASE_URL,backdrop_path,poster_path,original_title,original_language,genres,overview,runtime,release_date,vote_average}) => {
  const IMG_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w200'
  return (
    <>
      <div className="movie-description">
        <img className='backdropimage' src={`${Large}${backdrop_path}`} alt="" />
          <div className="description-container">
            <img src={`${IMG_BASE_URL}${poster_path}`} alt="" />
            <div>
              <div className="movietitle">
                <h1>{original_title}</h1>
                <p>({runtime}min)</p>
              </div>
              <h1 className='vote'>{vote_average}/10</h1>
              <div className='genres'>
                <p>{release_date} ({original_language})</p>
                {genres?.map(genre => <span key={genre.id}>{genre.name}</span>)}
              </div>
              <div className="summary">
                <p>Summary:</p>
                <p>{overview}</p>
              </div>
              <div className="list">
               <p>Add to a List:</p>
              </div>
              <div className="buttons">
                <Button className='watch' startIcon={<Add />} variant='contained' size='large'>ًWatched</Button>
                <Button className='watch' startIcon={<Add />} variant='contained' size='large'>ًWatching</Button>
                <Button className='watch' startIcon={<Add />} variant='contained' size='large'>ًWant To Watch</Button>
              </div>
            </div>
          </div>
      </div>
      <div className="movie-credits">
          <a href={homepage}><Link sx={{fontSize: '5rem'}} /></a>
          <h1>Cast:</h1>
          <div className="cast">
            {cast?.map(item => 
            <div>
              <img src={`${IMG_BASE_URL_SMALL}${item.profile_path}`} alt="" />
              <p>{item.name}</p>
            </div>
            )}
          </div>
          <div className="media">
            <h1>Media:</h1>
            <ButtonGroup variant='text' color='secondary' size='large'>
              <Button>Trailer</Button>
              <Button>Posters</Button>
              <Button>Backdrop</Button>
              <Button>Videos</Button>
            </ButtonGroup>
          </div>
      </div>
    </>
  )
}

export default Moviedescription