import React, { useEffect, useState } from 'react'
import Card from './Card'
import tmbdClient from '../Views/tmdb'
import { Button } from '@mui/material'
import Moviescard from './Moviescard'
import Tvshowscard from './Tvshowscard'

export default function Weclomepopular() {
    const [popularMovies,setPopularMovies] = useState([])
    const [popularTvShows,setPopularTvShows] = useState([])
    const [showPopularMovies,setShowPopularMovies] = useState(true)
    const [showPopularTvShows,setShowPopularTvShows] = useState(false)
    useEffect(()=> {
        const getURL = async () => {
            try {
                const response = await tmbdClient.get('/movie/popular')
                setPopularMovies(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        getURL()
    },[])
    useEffect(()=> {
        const getURL = async () => {
            try {
                const response = await tmbdClient.get('/tv/popular')
                setPopularTvShows(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        getURL()
    },[])
    const handlePopularMovies = () => {
        setShowPopularMovies(true)
        setShowPopularTvShows(false)
    }
    const handlePopularTvShows = () => {
        setShowPopularMovies(false)
        setShowPopularTvShows(true)
    }
    
  if (showPopularMovies) {
    return (
        <>
        <div id="welcomepopularid" className="popular-container">
            <div className="popular">
                <h1>Popular:</h1>
                <Button onClick={handlePopularMovies} variant='contained' color='secondary'>Movies</Button>
                <Button onClick={handlePopularTvShows} color='secondary'>TV Shows</Button>
            </div>
            <div className="card-container">
                {popularMovies.map(popularMovie => <Moviescard key={popularMovie.id} {...popularMovie} show={showPopularMovies} />)}   
            </div>
        </div>
        </>
    )
  } 
  if (showPopularTvShows) {
    return (
        <>
            <div id="welcomepopularid" className="popular-container">
                <div className="popular">
                <h1>Popular:</h1>
                <Button onClick={handlePopularMovies} color='secondary'>Movies</Button>
                <Button onClick={handlePopularTvShows} variant='contained' color='secondary'>TV Shows</Button>
                </div>
                <div className="card-container">
                    {popularTvShows.map(popularTvShow => <Tvshowscard key={popularTvShow.id} {...popularTvShow} show={showPopularMovies} />)}   
                </div>
            </div>
        </>
    )
  }
}
