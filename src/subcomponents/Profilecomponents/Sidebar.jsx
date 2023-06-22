import React, { useState } from 'react'
import Button from '@mui/material/Button'
import List from "@mui/icons-material/List"
import Dashboard from "@mui/icons-material/Dashboard"
import Movie from "@mui/icons-material/MovieFilter"
import Tv from "@mui/icons-material/Tv"
import { ButtonGroup, Link } from '@mui/material'
import nopfp from '../../assets/noimage.jpg'
import Edit from '@mui/icons-material/Edit'
import Delete from '@mui/icons-material/Delete'
import Dashboardtable from './Dashboardtable'
import Add from '@mui/icons-material/Add'
const Sidebar = () => {
  const [dashboard, setDashboard] = useState(true)
  const [movieList,setMovieList] = useState(false)
  const [tvShowsList,setTvShowsList] = useState(false)
  const [totalWatchedMovies,setTotalWatchedMovies] = useState(0)
  const [totalWatchingMovies,setTotalWatchingMovies] = useState(0)
  const [totalWantToWatchMovies,setTotalWantToWatchMovies] = useState(0)
  const [totalWatchedTvShows,setTotalWatchedTvShows] = useState(0)
  const [totalWatchingTvShows,setTotalWatchingTvShows] = useState(0)
  const [totalWantToWatchTvShows,setTotalWantToWatchTvShows] = useState(0)
  const [tvShowsWatched,setTvShowsWatched] = useState(true)
  const [tvShowsWatching,setTvShowsWatching] = useState(false)
  const [moviesWatched, setMoviesWatched] = useState(true)
  const [moviesWatching,setMoviesWatching] = useState(false)
  const [tvShow, setTvShow] = useState([])
  const [movie,setMovie] = useState([])
  const totalMovies = totalWantToWatchMovies + totalWatchedMovies + totalWatchingMovies
  const totalTvShows = totalWantToWatchTvShows + totalWatchedTvShows + totalWatchingTvShows
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
    setTvShowsWantToWatch(false)
  }
  const showWatching = () => {
    setTvShowsWatched(false)
    setTvShowsWatching(true)
    setTvShowsWantToWatch(false)
  }
  const showWantToWatch = () => {
    setTvShowsWatched(false)
    setTvShowsWatching(false)
    setTvShowsWantToWatch(true)
  }
  const displayWatched = () => {
    setMoviesWatched(true)
    setMoviesWatching(false)
    setMoviesWantToWatch(false)
  }
  const displayWatching = () => {
    setMoviesWatched(false)
    setMoviesWatching(true)
    setMoviesWantToWatch(false)
  }
  const displayWantToWatch = () => {
    setMoviesWatched(false)
    setMoviesWatching(false)
    setMoviesWantToWatch(true)
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
              <a href="/search"><Button startIcon={<Add />} className='addmovie'>Add Movie</Button></a>
              <Dashboardtable {...movie} />             
            </div>
               : moviesWatching ?
               <div>
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
              <Button onClick={displayWatched} style={{width: '100%'}}>Watched</Button>
              <Button onClick={displayWatching} variant='contained' style={{width: '100%'}}>Watching</Button>
              <Button onClick={displayWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup>
               <a href="/search"><Button startIcon={<Add />} className='addmovie'>Add Movie</Button></a>
               <Dashboardtable {...movie} />
               </div>
               : 
               <div>
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                  <Button onClick={displayWatched} style={{width: '100%'}}>Watched</Button>
                  <Button onClick={displayWatching} style={{width: '100%'}}>Watching</Button>
                  <Button onClick={displayWantToWatch} variant='contained' style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup>
              <a href="/search"><Button startIcon={<Add />} className='addmovie'>Add Movie</Button></a>
              <Dashboardtable {...movie} />
              </div>
              }
          </div>
      </div>
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
          <div className="tvshowslist">
            <h1 className='titles'>TvShows Lists:</h1>
              {tvShowsWatched ? 
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
              <Button onClick={showWatched} variant='contained' style={{width: '100%'}}>Watched</Button>
              <Button onClick={showWatching} style={{width: '100%'}}>Watching</Button>
              <Button onClick={showWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup> : tvShowsWatching ?
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
              <Button onClick={showWatched} style={{width: '100%'}}>Watched</Button>
              <Button onClick={showWatching} variant='contained' style={{width: '100%'}}>Watching</Button>
              <Button onClick={showWantToWatch} style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup> : 
              <ButtonGroup style={{width: '100%',padding: '2rem'}} color='secondary'>
                  <Button onClick={showWatched} style={{width: '100%'}}>Watched</Button>
                  <Button onClick={showWatching} style={{width: '100%'}}>Watching</Button>
                  <Button onClick={showWantToWatch} variant='contained' style={{width: '100%'}}>Want to Watch</Button>
              </ButtonGroup>
              }
          </div>
      </div>
      </>
    )
  }
}

export default Sidebar