import React from 'react'
import { Button } from '@mui/material'
import Add from "@mui/icons-material/Add"
const Tvshowsdescription = ({IMG_BASE_URL,Large,backdrop_path,episode_run_time,first_air_date,genres,number_of_episodes,number_of_seasons,original_name,original_language,vote_average,poster_path,overview}) => {
    return (
      <>
        <div className="movie-description">
          <img className='backdropimage' src={`${Large}${backdrop_path}`} alt="" />
            <div className="description-container">
              <img src={`${IMG_BASE_URL}${poster_path}`} alt="" />
              <div>
                <div className="movietitle">
                  <h1>{original_name}</h1>
                  <p>({episode_run_time}min)</p>
                </div>
                <h1 className='vote'>{vote_average}/10</h1>
                <div className='genres'>
                  <p>{first_air_date} ({original_language})</p>
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
                  <Button className='watch' startIcon={<Add/>} variant='contained' size='large'>ًWatched</Button>
                  <Button className='watch' startIcon={<Add/>} variant='contained' size='large'>ًWatching</Button>
                  <Button className='watch' startIcon={<Add/>} variant='contained' size='large'>ًWant To Watch</Button>
                </div>
              </div>
            </div>
        </div>
      </>
    )
}

export default Tvshowsdescription