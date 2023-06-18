import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import Add from "@mui/icons-material/Add"
import Link from "@mui/icons-material/Link"
import { ButtonGroup } from "@mui/material"
import nopfp from "../assets/OIP.jpg"
import tmbdClient from '../Views/tmdb'
const Moviedescription = ({reviews,itsPosters,itsBackdrops,media,cast,homepage,Large,IMG_BASE_URL,backdrop_path,poster_path,original_title,original_language,genres,overview,runtime,release_date,vote_average,status,revenue,budget,production_companies,production_countries}) => {
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
  if (showTrailer) {
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
              <h1>Media:</h1>
              <ButtonGroup variant='text' color='secondary' size='large'>
                <Button onClick={trailer}>Trailer</Button>
                <Button onClick={posters}>Posters</Button>
                <Button onClick={backdrop}>Backdrop</Button>
                <Button onClick={videos}>Videos</Button>
              </ButtonGroup>
              <div className="display-content">
                  {media?.map(item => {
                    if (item.type === 'Trailer') {
                      return (    
                        <div key={item.id} className='youtube-video'>
                           <iframe src={`${YOUTUBE_URL}${item.key}`}
                          title="YouTube video player" frameborder="0" allow="accelerometer; 
                          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowfullscreen></iframe>
                         </div>
                        ) 
                    }
                  })}
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
                      <div className='thereview'>
                        <div className="author-details">
                          <div className="authorpfp">
                            {item.author_details.avatar_path ? 
                            <img className='reviewpfp' src={`${IMG_BASE_URL_SMALL}${item.author_details.avatar_path}`} alt="" /> :
                            <img src={nopfp} alt="nopfp" /> }
                          </div>
                          <div className="author-name">
                            <h1 className='reviewauthor'>{item.author}</h1>
                            <div className="time">
                              <p>{item.author_details.rating}.00</p>
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
  if (showVideos) {
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
              <h1>Media:</h1>
              <ButtonGroup variant='text' color='secondary' size='large'>
                <Button onClick={trailer}>Trailer</Button>
                <Button onClick={posters}>Posters</Button>
                <Button onClick={backdrop}>Backdrop</Button>
                <Button onClick={videos}>Videos</Button>
              </ButtonGroup>
              <div className="display-content">
                  {media?.map(item => {
                    if (item.type !== 'Trailer') {
                      return (    
                        <div key={item.id} className='youtube-video'>
                           <iframe src={`${YOUTUBE_URL}${item.key}`}
                          title="YouTube video player" frameborder="0" allow="accelerometer; 
                          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowfullscreen></iframe>
                         </div>
                        ) 
                    }
                  })}
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
                      <div className='thereview'>
                        <div className="author-details">
                          <div className="authorpfp">
                            {item.author_details.avatar_path ? 
                            <img className='reviewpfp' src={`${IMG_BASE_URL_SMALL}${item.author_details.avatar_path}`} alt="" /> :
                            <img src={nopfp} alt="nopfp" /> }
                          </div>
                          <div className="author-name">
                            <h1 className='reviewauthor'>{item.author}</h1>
                            <div className="time">
                              <p>{item.author_details.rating}.00</p>
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
  if (showPosters) {
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
              <h1>Media:</h1>
              <ButtonGroup variant='text' color='secondary' size='large'>
                <Button onClick={trailer}>Trailer</Button>
                <Button onClick={posters}>Posters</Button>
                <Button onClick={backdrop}>Backdrop</Button>
                <Button onClick={videos}>Videos</Button>
              </ButtonGroup>
              <div className="display-content">
                  {itsPosters?.map(item => {
                      return (    
                        <div key={item.id} className='youtube-video'>
                          <img src={`${IMG_BASE_URL}${item.file_path}`} alt="" />
                         </div>
                        ) 
                  })}
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
                      <div className='thereview'>
                        <div className="author-details">
                          <div className="authorpfp">
                            {item.author_details.avatar_path ? 
                            <img className='reviewpfp' src={`${IMG_BASE_URL_SMALL}${item.author_details.avatar_path}`} alt="" /> :
                            <img src={nopfp} alt="nopfp" /> }
                          </div>
                          <div className="author-name">
                            <h1 className='reviewauthor'>{item.author}</h1>
                            <div className="time">
                              <p>{item.author_details.rating}.00</p>
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
  if (showBackdrop) {
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
              <h1>Media:</h1>
              <ButtonGroup variant='text' color='secondary' size='large'>
                <Button onClick={trailer}>Trailer</Button>
                <Button onClick={posters}>Posters</Button>
                <Button onClick={backdrop}>Backdrop</Button>
                <Button onClick={videos}>Videos</Button>
              </ButtonGroup>
              <div className="display-content">
                  {itsBackdrops?.map(item => {
                      return (    
                        <div key={item.id} className='youtube-video'>
                          <img src={`${IMG_BASE_URL}${item.file_path}`} alt="" />
                         </div>
                        ) 
                  })}
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
                      <div className='thereview'>
                        <div className="author-details">
                          <div className="authorpfp">
                            {item.author_details.avatar_path ? 
                            <img className='reviewpfp' src={`${IMG_BASE_URL_SMALL}${item.author_details.avatar_path}`} alt="" /> :
                            <img src={nopfp} alt="nopfp" /> }
                          </div>
                          <div className="author-name">
                            <h1 className='reviewauthor'>{item.author}</h1>
                            <div className="time">
                              <p>{item.author_details.rating}.00</p>
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
  }

export default Moviedescription