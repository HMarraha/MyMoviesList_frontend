import React, { useEffect, useState } from 'react'
import tmbdClient from '../Views/tmdb'
import Card from './Card'
import Button from "@mui/material/Button"
import { useStateContext } from '../contexts/contextprovide'
import Moviescard from './Moviescard'

const Welcomemovies = () => {
    const [nowPlayingMovies,setNowPlayingMovies] = useState([])
    const [topRatedMovies,setTopRatedMovies] = useState([])
    const [upcomingMovies,setUpcomingMovies] = useState([])
    const [showNowPlayingMovies,setShowNowPlayingMovies] = useState(true)
    const [showTopRatedMovies,setShowTopRatedMovies] = useState(false)
    const [showUpcomingMovies,setShowUpcomingMovies] = useState(false)
    useEffect(()=> {
      const getURL = async () => {
        try {
          const response = await tmbdClient.get('/movie/now_playing')
          setNowPlayingMovies(response.data.results)
        } catch(error) {
          console.error(error)
        }
      }
      getURL()
    },[])
    useEffect(()=> {
      const getURL = async () => {
        try {
          const response = await tmbdClient.get('/movie/top_rated')
          setTopRatedMovies(response.data.results)
        } catch(error) {
          console.error(error)
        }
      }
      getURL()
    },[])
    useEffect(()=> {
      const getURL = async () => {
        try {
          const response = await tmbdClient.get('/movie/upcoming')
          setUpcomingMovies(response.data.results)
        } catch(error) {
          console.error(error)
        }
      }
      getURL()
    },[])
    const handleShowNowPlayingMovies = () => {
      setShowNowPlayingMovies(true)
      setShowTopRatedMovies(false)
      setShowUpcomingMovies(false)
    }
    const handleShowTopRatedMovies = () => {
      setShowTopRatedMovies(true)
      setShowNowPlayingMovies(false)
      setShowUpcomingMovies(false)
    }
    const handleShowUpcomingMovies = () => {
      setShowUpcomingMovies(true)
      setShowNowPlayingMovies(false)
      setShowTopRatedMovies(false)
    }
    if (showNowPlayingMovies) {
      return (
        <>
          <div id='welcomemoviesid' className="popular-container">
            <div className="popular">
                <h1>Movies:</h1>
                <Button className='filterbutton' onClick={handleShowNowPlayingMovies} variant='contained' color='secondary' >Now Playing</Button>
                <Button className='filterbutton' onClick={handleShowTopRatedMovies} color='secondary' >Top Rated</Button>
                <Button className='filterbutton' onClick={handleShowUpcomingMovies} color='secondary' >Up coming</Button>
            </div>
            <div className="card-container">
              {nowPlayingMovies.map(nowPlayingMovie => <Moviescard key={nowPlayingMovie.id} {...nowPlayingMovie}/>)}
            </div>
          </div>
        </>
      )
    }
    if (showTopRatedMovies) {
      return (
        <>
        <div id='welcomemoviesid'  className="popular-container">
            <div className="popular">
                <h1>Movies:</h1>
                <Button onClick={handleShowNowPlayingMovies} color='secondary' size='small'>Now Playing</Button>
                <Button onClick={handleShowTopRatedMovies} variant='contained' color='secondary' size='small'>Top Rated</Button>
                <Button onClick={handleShowUpcomingMovies} color='secondary' size='small'>Up coming</Button>
            </div>
            <div className="card-container">
              {topRatedMovies.map(topRatedMovie => <Moviescard key={topRatedMovie.id} {...topRatedMovie}/>)}
            </div>
        </div>
        </>
      )
    }
    if (showUpcomingMovies) {
      return (
        <>
        <div id='welcomemoviesid'  className="popular-container">
            <div className="popular">
                <h1>Movies:</h1>
                <Button onClick={handleShowNowPlayingMovies} color='secondary' size='small'>Now Playing</Button>
                <Button onClick={handleShowTopRatedMovies} color='secondary' size='small'>Top Rated</Button>
                <Button onClick={handleShowUpcomingMovies} variant='contained' color='secondary' size='small'>Up coming</Button>
            </div>
            <div className="card-container">
              {upcomingMovies.map(upcomingMovie => <Moviescard key={upcomingMovie.id} {...upcomingMovie}/>)}
            </div>
        </div>
        </>
      )
    }
}

export default Welcomemovies