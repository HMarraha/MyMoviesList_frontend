import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Add from "@mui/icons-material/Add"
import { ButtonGroup } from "@mui/material"
const Tvshowsdescription = ({last_episode_to_air,last_air_date,reviews,revenue,budget,status,media,cast,IMG_BASE_URL,Large,backdrop_path,episode_run_time,first_air_date,genres,number_of_episodes,number_of_seasons,original_name,original_language,vote_average,poster_path,overview,homepage}) => {
  const IMG_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w200'
  const YOUTUBE_URL = 'https://www.youtube.com/embed/'
  const [showTrailer,setShowTrailer] = useState(true)
  const [showPosters,setShowPosters] = useState(false)
  const [showBackdrop,setShowBackdrop] = useState(false)
  const [showVideos,setShowVidoes] = useState(false)
  const trailer = () => {
    setShowTrailer(true)
    setShowPosters(false)
    setShowBackdrop(false)
    setShowVidoes(false)
  }
  const posters = () => {
    setShowTrailer(false)
    setShowPosters(true)
    setShowBackdrop(false)
    setShowVidoes(false)
  }
  const backdrop = () => {
    setShowTrailer(false)
    setShowPosters(false)
    setShowBackdrop(true)
    setShowVidoes(false)
  }
  const videos = () => {
    setShowTrailer(false)
    setShowPosters(false)
    setShowBackdrop(false)
    setShowVidoes(true)
  }  
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
                <div className="seasons">
                  <p>({number_of_seasons}) seasons</p>
                  <p>({number_of_episodes}) episodes</p>
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
        <div className="movie-credits">
            <a href={homepage}><Link sx={{fontSize: '5rem'}} /></a>
            <h1>Cast:</h1>
            <div className="cast-container">
              <div className="cast">
                {cast?.map(item => item.profile_path ?
                  <div key={item.id} className='actor'>
                    <img src={`${IMG_BASE_URL_SMALL}${item.profile_path}`} alt="" />
                    <p>{item.name}</p>
                  </div> :
                  <div key={item.id} className='actor'>
                  <img className='nopfp' src={nopfp} alt="" />
                  <p>{item.name}</p>
                </div>
                )}
              </div>
            </div>
            <div className="media">
              <h1>Last Episode to Air:</h1>
              <div className="lastepisodetoair">
                <img className='lastepisodetoairimg' src={`${IMG_BASE_URL}${last_episode_to_air.still_path}`} alt="" />
                <div className="lastepisodetoairinfo">
                  <div className="letainfo">
                    <div>
                      <p><span>{last_episode_to_air.episode_number}.</span> <span>{last_episode_to_air.name}</span> <span className='letaseason'>(Season {last_episode_to_air.season_number})</span></p>
                    </div>
                    <div className='letaruntime'>
                      <p>{last_episode_to_air.air_date}</p>
                      <p>({last_episode_to_air.runtime}m)</p>
                    </div>
                  </div>
                  <p className='letaoverview'>{last_episode_to_air.overview}</p>
                </div>
              </div>
            </div>

            <div className="additional-info">
              <h1>Additional Info:</h1>
              <div className="additional">
                <div className="status">
                  <h2>Status:</h2>
                  <p>{status}</p>
                </div>
                <div className="budget">
                  <h2>Budget:</h2>
                  <p>{`${budget}$`}</p>
                </div>
                <div className="revenue">
                  <h2>Revenue:</h2>
                  <p>{`${revenue}$`}</p>
                </div>
                <div className="og-language">
                  <h2>Original Language:</h2>
                  <p className='original-language'>{original_language}</p>
                </div>
              </div>
            </div>
            <div className="reviews">
              <h1>Reviews:</h1>
              <div className="reviewflex">
                <div className="review">
                    {reviews?.map(item => (
                      <div key={item.key} className='thereview'>
                        <div className="author-details">
                          <div className="authorpfp">
                            {item.author_details.avatar_path && item.author_details.avatar_path.slice(0,34) === '/https://secure.gravatar.com/avatar' ? 
                            <img className='reviewpfp' src={`${IMG_BASE_URL_SMALL}${item.author_details.avatar_path}`} alt="" /> :
                            <img className='noprofilepic' src={nopfp} alt="nopfp" /> }
                          </div>
                          <div className="author-name">
                            <h1 className='reviewauthor'>{item.author}</h1>
                            <div className="time">
                              <p className='reviewrating'>{item.author_details.rating}.00<Star /></p>
                              <p>{item.created_at.slice(0,10)}</p>
                            </div>
                          </div>
                        </div>
                        <p className='reviewcontent'>{item.content}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
        </div>
      </>
    )
}

export default Tvshowsdescription