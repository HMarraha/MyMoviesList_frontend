import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import tmbdClient from '../Views/tmdb'

export default function Weclomepopular() {
    const [popularMovies,setPopularMovies] = useState([])
    const [popularTvShows,setPopularTvShows] = useState([])
    const [latestMovies,setLatestMovies] = useState([])
    const [latestTvShows,setLatestTvShows] = useState([])
    const [movies,setMovies] = useState([])
    const [tvShows,setTvShows] = useState([])
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
    })
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
            <div className="popular">
            <h1>Popular:</h1>
            <button style={{backgroundColor: 'blueviolet'}} onClick={handlePopularMovies} type="button" className='btn-1'>Movies</button>
            <button onClick={handlePopularTvShows} type="button" className='btn-2'>TV Shows</button>
        </div>
        <div className="card-container">
            {popularMovies.map(popularMovie => <Card key={popularMovie.id} {...popularMovie} show={showPopularMovies} />)}   
        </div>
        </>
    )
  } 
  if (showPopularTvShows) {
    return (
        <>
            <div className="popular">
            <h1>Popular:</h1>
            <button onClick={handlePopularMovies} type="button" className='btn-1'>Movies</button>
            <button style = {{backgroundColor: 'blueviolet'}} onClick={handlePopularTvShows} type="button" className='btn-2'>TV Shows</button>
            </div>
            <div className="card-container">
                {popularTvShows.map(popularTvShow => <Card key={popularTvShow.id} {...popularTvShow} show={showPopularMovies} />)}   
            </div>
        </>
    )
  }
}
