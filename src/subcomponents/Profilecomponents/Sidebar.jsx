import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import List from "@mui/icons-material/List"
import Dashboard from "@mui/icons-material/Dashboard"
import Movie from "@mui/icons-material/MovieFilter"
import Tv from "@mui/icons-material/Tv"
import { ButtonGroup} from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import Add from '@mui/icons-material/Add'
import { useStateContext } from '../../contexts/contextprovide'
import axiosClient from '../../Views/axios'
import Empty from '@mui/icons-material/HourglassEmpty'
import { forwardRef } from 'react'
import {Snackbar, Alert} from '@mui/material'
const SnackbarAlert = forwardRef(
  function SnackbarAlert(props,ref) {
      return <Alert elevation={6} ref={ref} {...props} />
  }
)
const Sidebar = () => {
  const IMG_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w200'
  const {watchedMovie,setWatchedMovie} = useStateContext()
  const {watchingMovie,setWatchingMovie} = useStateContext()
  const {wantToWatchMovie,setWantToWatchMovie} = useStateContext()
  const {watchedTvShow, setWatchedTvShow} = useStateContext()
  const {watchingTvShow,setWatchingTvShow} = useStateContext()
  const {wantToWatchTvShow,setWantToWatchTvShow} = useStateContext()
  const [dashboard, setDashboard] = useState(true)
  const [movieList,setMovieList] = useState(false)
  const [tvShowsList,setTvShowsList] = useState(false)
  const totalWatchedMovies = watchedMovie.length
  const totalWatchingMovies = watchingMovie.length
  const totalWantToWatchMovies = wantToWatchMovie.length
  const totalWatchedTvShows = watchedTvShow.length
  const totalWatchingTvShows = watchingTvShow.length
  const totalWantToWatchTvShows = wantToWatchTvShow.length
  const [tvShowsWatched,setTvShowsWatched] = useState(true)
  const [tvShowsWatching,setTvShowsWatching] = useState(false)
  const [moviesWatched, setMoviesWatched] = useState(true)
  const [moviesWatching,setMoviesWatching] = useState(false)
  const totalMovies = totalWantToWatchMovies + totalWatchedMovies + totalWatchingMovies
  const totalTvShows = totalWantToWatchTvShows + totalWatchedTvShows + totalWatchingTvShows
  const [isError,setIsError] = useState(false)
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [isLoading,setIsLoading] = useState(true)
  const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSnackbarVisible(false)
    }
  const deleteWatchedMovie = async (title) => {
    try {
      await axiosClient.delete(`/movies/${encodeURIComponent(title)}`);
      console.log('Movie deleted successfully!');
      setWatchedMovie(prevMovie => prevMovie.filter((movie) => movie.title !== title))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWatchingMovie = async (title) => {
    try {
      await axiosClient.delete(`/watchingmovies/${encodeURIComponent(title)}`);
      console.log('Movie deleted successfully!');
      setWatchingMovie(prevMovie => prevMovie.filter((movie) => movie.watchingtitle !== title))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWantToWatchMovie = async (title) => {
    try {
      await axiosClient.delete(`/wanttowatchmovies/${encodeURIComponent(title)}`);
      console.log('Movie deleted successfully!');
      setWantToWatchMovie(prevMovie => prevMovie.filter((movie) => movie.wanttowatchtitle !== title))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWatchedTvShow = async (title) => {
    try {
      await axiosClient.delete(`/watchedtvshows/${encodeURIComponent(title)}`);
      console.log('Movie deleted successfully!');
      setWatchedTvShow(prevTvShow => prevTvShow.filter((tvshow) => tvshow.watchedtvshowtitle !== title))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWatchingTvShow = async (title) => {
    try {
      await axiosClient.delete(`/watchingtvshows/${encodeURIComponent(title)}`);
      console.log('Movie deleted successfully!');
      setWatchingTvShow(prevTvShow => prevTvShow.filter((tvshow) => tvshow.watchingtvshowtitle !== title))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  const deleteWantToWatchTvShow = async (title) => {
    try {
      await axiosClient.delete(`/wanttowatchtvshows/${encodeURIComponent(title)}`);
      console.log('Movie deleted successfully!');
      setWantToWatchTvShow(prevTvShow => prevTvShow.filter((tvshow) => tvshow.wanttowatchtvshowtitle !== title))
      setIsError(false)
      setIsSnackbarVisible(true)
    } catch (error) {
      setIsError(true)
      setIsSnackbarVisible(true)
      console.error(error);
    }
  };
  useEffect(() => {
    const getWatchedTvShow = async () => {
      try {
        const response = await axiosClient.get('/watchedtvshows')
        setWatchedTvShow(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWatchedTvShow()
  },[])
  useEffect(() => {
    const getWatchingTvShow = async () => {
      try {
        const response = await axiosClient.get('/watchingtvshows')
        setWatchingTvShow(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWatchingTvShow()
  },[])
  useEffect(() => {
    const getWantToWatchTvShow = async () => {
      try {
        const response = await axiosClient.get('/wanttowatchtvshows')
        setWantToWatchTvShow(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWantToWatchTvShow()
  },[])
  useEffect(() => {
    const getWantToWatchMovie = async () => {
      try {
        const response = await axiosClient.get('/wanttowatchmovies')
        setWantToWatchMovie(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWantToWatchMovie()
  },[])
  useEffect(() => {
    const getWatchingMovie = async () => {
      try {
        const response = await axiosClient.get('/watchingmovies')
        setWatchingMovie(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWatchingMovie()
  },[])
  useEffect(() => {
    const getWatchedMovie = async () => {
      try {
        const response = await axiosClient.get('/movies')
        setWatchedMovie(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getWatchedMovie()
  },[])
  const handleDashboard = () => {
    setDashboard(true)
    setMovieList(false)
    setTvShowsList(false)
  }
  const handleMovieList = () => {
    setDashboard(false)
    setMovieList(true)
    setTvShowsList(false)
    setTvShowsWatched(true)
  }
  const handleTvShowsList = () => {
    setDashboard(false)
    setMovieList(false)
    setTvShowsList(true)
    setMoviesWatched(true)
  }
  const showWatched = () => {
    setTvShowsWatched(true)
    setTvShowsWatching(false)
  }
  const showWatching = () => {
    setTvShowsWatched(false)
    setTvShowsWatching(true)
  }
  const showWantToWatch = () => {
    setTvShowsWatched(false)
    setTvShowsWatching(false)
  }
  const displayWatched = () => {
    setMoviesWatched(true)
    setMoviesWatching(false)
  }
  const displayWatching = () => {
    setMoviesWatched(false)
    setMoviesWatching(true)
  }
  const displayWantToWatch = () => {
    setMoviesWatched(false)
    setMoviesWatching(false)
  }
  if (isLoading) {
    return <div></div>
  }
  if (dashboard) {
    return (
      <>
      <div className="profile">
          <aside className="sidebar">
            <div className="sidebuttoncontainer">
              <Button variant='contained' onClick={handleDashboard} color="secondary" startIcon={<Dashboard />}>Dashboard</Button>
              <Button onClick={handleMovieList} color="secondary" startIcon={<List />}>Movie Lists</Button>
              <Button onClick={handleTvShowsList} color="secondary" startIcon={<List />}>TvShows Lists</Button>
            </div>
          </aside>
          <div className="dashboard">
            <h1 className='title'>Dashboard</h1>
            <div className="moviestvshows">
              <div className="moviesdashboard">
                <List  className='list'  />
                <div className="totals">
                  <h1>Total Movies</h1>
                  <p>{totalMovies}</p>
                </div>
              </div>
              <div className="tvshowsdashboard">
                <List className='list2'/>
                <div className="totals">
                  <h1>Total TvShows</h1>
                  <p>{totalTvShows}</p>
                </div>
              </div>
            </div>
            <h1 className='title'>Movies:</h1>
            <div className="wlists">
              <div className="watchedlist">
                <Movie className='list' />
                <div className="totals">
                  <h1>Total Watched</h1>
                  <p>{totalWatchedMovies}</p>
                </div>
              </div>
              <div className="watchinglist">
                <Movie className='list2' />
                <div className="totals">
                  <h1>Total Watching</h1>
                  <p>{totalWatchingMovies}</p>
                </div>
              </div>
              <div className="wanttowatchlist">
                <Movie className='list3' />
                <div className="totals">
                  <h1>Total WtW</h1>
                  <p>{totalWantToWatchMovies}</p>
                </div>
              </div>
            </div>
            <h1 className='title'>Tv Shows:</h1>
            <div className="wlists">
              <div className="watchedlist">
                <Tv className='list' />
                <div className="totals">
                  <h1>Total Watched</h1>
                  <p>{totalWatchedTvShows}</p>
                </div>
              </div>
              <div className="watchinglist">
                <Tv className='list2' />
                <div className="totals">
                  <h1>Total Watching</h1>
                  <p>{totalWatchingTvShows}</p>
                </div>
              </div>
              <div className="wanttowatchlist">
                <Tv className='list3' />
                <div className="totals">
                  <h1>Total WtW</h1>
                  <p>{totalWantToWatchTvShows}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </>
    )
  }
  if (movieList) {
    return (
      <>
      <div className="profile">
          <aside className="sidebar">
            <div className="sidebuttoncontainer">
              <Button onClick={handleDashboard} color="secondary" startIcon={<Dashboard />}>Dashboard</Button>
              <Button variant='contained' onClick={handleMovieList} color="secondary" startIcon={<List />}>Movie Lists</Button>
              <Button onClick={handleTvShowsList} color="secondary" startIcon={<List />}>TvShows Lists</Button>
            </div>
          </aside>
          <div className="movieslist">
            <h1 className='titles'>Movie Lists:</h1>
            {moviesWatched ? 
              <div>
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
              <Button onClick={displayWatched} variant='contained' style={{width: '100%'}}>Watched</Button>
              <Button onClick={displayWatching} style={{width: '100%'}}>Watching</Button>
              <Button onClick={displayWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup>
              <div className='addmovie'>
                <a href="/search"><Button style={{width:'100%',margin:'auto'}} variant='contained' color='secondary' startIcon={<Add />} >Add Movie</Button></a> 
              </div>
              <div className='tableheads'>
                <p className='tableheadsposter'>Poster</p>
                <p className='tableheadstitle'>Title</p>
                <p className='tableheadsoverview'>Overview</p>
                <p className='tableheadsactions'>Actions</p>
               </div>
              {watchedMovie.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem'}} />
                </div>
              ):
                (
                  watchedMovie?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.image}`} alt="" />
                      <p>{item.title}</p>
                      <p>{item.overview}</p>
                      <div className="actions">
                        <Button color='secondary' onClick={() => deleteWatchedMovie(item.title)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }            
            </div>
               : moviesWatching ?
               <div>
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
              <Button onClick={displayWatched} style={{width: '100%'}}>Watched</Button>
              <Button onClick={displayWatching} variant='contained' style={{width: '100%'}}>Watching</Button>
              <Button onClick={displayWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup>
              <div className='addmovie'>
               <a href="/search"><Button style={{width: '100%',margin:'auto'}} variant='contained' color='secondary' startIcon={<Add />}>Add Movie</Button></a>
              </div>
               <div className='tableheads'>
                <p className='tableheadsposter'>Poster</p>
                <p className='tableheadstitle'>Title</p>
                <p className='tableheadsoverview'>Overview</p>
                <p className='tableheadsactions'>Actions</p>
               </div>
               {watchingMovie.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem'}} />
                </div>
              )
               :
                (
                  watchingMovie?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.watchingimage}`} alt="" />
                      <p>{item.watchingtitle}</p>
                      <p>{item.watchingoverview}</p>
                      <div className="actions">
                        <Button  color='secondary' onClick={() => deleteWatchingMovie(item.watchingtitle)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }      
               </div>
               : 
               <div>
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                  <Button onClick={displayWatched} style={{width: '100%'}}>Watched</Button>
                  <Button onClick={displayWatching} style={{width: '100%'}}>Watching</Button>
                  <Button onClick={displayWantToWatch} variant='contained' style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup>
              <div className='addmovie'>
               <a href="/search"><Button style={{width: '100%',margin:'auto'}} variant='contained' color='secondary' startIcon={<Add />}>Add Movie</Button></a>
              </div>
              <div className='tableheads'>
                <p className='tableheadsposter'>Poster</p>
                <p className='tableheadstitle'>Title</p>
                <p className='tableheadsoverview'>Overview</p>
                <p className='tableheadsactions'>Actions</p>
               </div>
              {wantToWatchMovie.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem'}} />
                </div>
              ) 
              :
                (
                  wantToWatchMovie?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.wanttowatchimage}`} alt="" />
                      <p>{item.wanttowatchtitle}</p>
                      <p>{item.wanttowatchoverview}</p>
                      <div className="actions">
                        <Button  color='secondary' onClick={()=>deleteWantToWatchMovie(item.wanttowatchtitle)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }      
              </div>
              }
          </div>
      </div>
       <Snackbar open={isSnackbarVisible} 
                 autoHideDuration={4000} 
                 onClose={closeSnackbar} 
                 anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                 }}>
          <SnackbarAlert onClose={closeSnackbar} severity='success'>
              Movie Deleted Successfully!
          </SnackbarAlert>
      </Snackbar>
      </>
    )
  }
  if (tvShowsList) {
    return (
      <>
      <div className="profile">
          <aside className="sidebar">
            <div className="sidebuttoncontainer">
              <Button onClick={handleDashboard} color="secondary" startIcon={<Dashboard />}>Dashboard</Button>
              <Button onClick={handleMovieList} color="secondary" startIcon={<List />}>Movie Lists</Button>
              <Button variant='contained' onClick={handleTvShowsList} color="secondary" startIcon={<List />}>TvShows Lists</Button>
            </div>
          </aside>
          <div className="movieslist">
            <h1 className='titles'>TvShows Lists:</h1>
              {tvShowsWatched ? 
              <div>
                <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                <Button onClick={showWatched} variant='contained' style={{width: '100%'}}>Watched</Button>
                <Button onClick={showWatching} style={{width: '100%'}}>Watching</Button>
                <Button onClick={showWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
                </ButtonGroup> 
                <div className='addmovie'>
                  <a href="/search"><Button style={{width :'100%',margin: 'auto'}} variant='contained' color='secondary' startIcon={<Add />}>Add TvShow</Button></a>
                </div>
                <div className='tableheads'>
                  <p className='tableheadsposter'>Poster</p>
                  <p className='tableheadstitle'>Title</p>
                  <p className='tableheadsoverview'>Overview</p>
                  <p className='tableheadsactions'>Actions</p>
                </div> 
                {watchedTvShow.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem'}} />
                </div>
              ):
                (
                  watchedTvShow?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.watchedtvshowimage}`} alt="" />
                      <p>{item.watchedtvshowtitle}</p>
                      <p>{item.watchedtvshowoverview}</p>
                      <div className="actions">
                        <Button color='secondary' onClick={()=> deleteWatchedTvShow(item.watchedtvshowtitle)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }  
              </div>
              : tvShowsWatching ?
              <div>
                <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                <Button onClick={showWatched} style={{width: '100%'}}>Watched</Button>
                <Button onClick={showWatching} variant='contained' style={{width: '100%'}}>Watching</Button>
                <Button onClick={showWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
                </ButtonGroup> 
                <div className='addmovie'>
                  <a href="/search"><Button style={{width :'100%',margin: 'auto'}} variant='contained' color='secondary' startIcon={<Add />}>Add TvShow</Button></a>
                </div> 
                <div className='tableheads'>
                  <p className='tableheadsposter'>Poster</p>
                  <p className='tableheadstitle'>Title</p>
                  <p className='tableheadsoverview'>Overview</p>
                  <p className='tableheadsactions'>Actions</p>
                </div>
                {watchingTvShow.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem'}} />
                </div>
              ):
                (
                  watchingTvShow?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.watchingtvshowimage}`} alt="" />
                      <p>{item.watchingtvshowtitle}</p>
                      <p>{item.watchingtvshowoverview}</p>
                      <div className="actions">
                        <Button color='secondary' onClick={()=>deleteWatchingTvShow(item.watchingtvshowtitle)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }  
              </div> 
              :
              <div>
                <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                    <Button onClick={showWatched} style={{width: '100%'}}>Watched</Button>
                    <Button onClick={showWatching} style={{width: '100%'}}>Watching</Button>
                    <Button onClick={showWantToWatch} variant='contained' style={{width: '100%'}}>Want to Watch</Button>
                </ButtonGroup>
                <div className='addmovie'>
                  <a href="/search"><Button style={{width :'100%',margin: 'auto'}} variant='contained' color='secondary' startIcon={<Add />}>Add TvShow</Button></a>
                </div>
                <div className='tableheads'>
                  <p className='tableheadsposter'>Poster</p>
                  <p className='tableheadstitle'>Title</p>
                  <p className='tableheadsoverview'>Overview</p>
                  <p className='tableheadsactions'>Actions</p>
                </div>
                {wantToWatchTvShow.length === 0 ? (
                <div>
                <h1 className='nomovieadded'>Wow! a very empty list you have here.</h1>
                <Empty style={{fontSize : '10rem',marginLeft: '30.5rem'}} />
                </div>
              ):
                (
                  wantToWatchTvShow?.map(item => (
                    <div key={item.id} className="addedmoviedetails">
                      <img src={`${IMG_BASE_URL_SMALL}${item.wanttowatchtvshowimage}`} alt="" />
                      <p>{item.wanttowatchtvshowtitle}</p>
                      <p>{item.wanttowatchtvshowoverview}</p>
                      <div className="actions">
                        <Button color='secondary' onClick={()=>deleteWantToWatchTvShow(item.wanttowatchtvshowtitle)}><Delete /></Button>
                      </div>
                    </div>
                  ))
                )
              }  
              </div>
              }
          </div>
      </div>
      <Snackbar open={isSnackbarVisible} 
                 autoHideDuration={4000} 
                 onClose={closeSnackbar} 
                 anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                 }}>
          <SnackbarAlert onClose={closeSnackbar} severity='success'>
              TvShow Deleted Successfully!
          </SnackbarAlert>
      </Snackbar>
      </>
    )
  }
}

export default Sidebar