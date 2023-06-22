import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import Dashboard from '@mui/icons-material/Dashboard'
import List from '@mui/icons-material/List'
import { useState } from 'react'
import Dashboardtable from '../subcomponents/Profilecomponents/Dashboardtable'
import tmbdClient from './tmdb'
const Search = () => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    const IMG_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w200'
    const [movieList,setMovieList] = useState(true)
    const [tvShowsList,setTvShowsList] = useState(false)
    const [movie,setMovie] = useState([])
    const [searchResults,setSearchResults] = useState([])
    const [searchTerm,setSearchTerm] = useState('')
    const [searching,setSearching] = useState(false)
    const searchURL = 'https://api.themoviedb.org/3/search/movie?' + apiKey
    const getURL = async (url) => {
        try {
            const response = await tmbdClient.get(url)
            setSearchResults(response.data.results)
        } catch (error) {
            console.error(error)
        }
    }
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getURL(searchURL + '&query=' + searchTerm)
        setSearching(true)
    }
    useEffect(() => {
        const getURL = async () => {
            try {
                const response = await tmbdClient.get('/discover/movie?sort_by=popularity.desc')
                setMovie(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        getURL()
    },[])
      const handleMovieList = () => {
        setMovieList(true)
        setTvShowsList(false)
      }
      const handleTvShowsList = () => {
        setMovieList(false)
        setTvShowsList(true)
      }
 if (movieList) {
    return (

        <>
            <div className="profile">
            <aside className="sidebar">
                <div className="sidebuttoncontainer">
                <Button variant='contained' onClick={handleMovieList} color="secondary" startIcon={<List />}>Movies</Button>
                <Button onClick={handleTvShowsList} color="secondary" startIcon={<List />}>TvShows</Button>
                </div>
            </aside>
            <div className="movieslist">
                <h1 className='titles'>Search for movies:</h1>
                <form onSubmit={handleSubmit} >
                   <input value={searchTerm} onChange={handleChange} className='searchinput' type="text" placeholder='search movie' />
                   <Button type='submit' className='searchbutton' variant='contained' color='secondary'>Search</Button>
                </form>
                {searching ? searchResults?.map(item => (
                    <div key={item.id} className="searchmovies">
                        <img src={`${IMG_BASE_URL_SMALL}${item.poster_path}`} alt="" />
                        <p>{item.original_title}</p>
                    </div>
                )) : movie?.map(item => (
                    <div key={item.id} className="searchmovies">
                        <img src={`${IMG_BASE_URL_SMALL}${item.poster_path}`} alt="" />
                        <p>{item.original_title}</p>
                    </div>
                ))}
               
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
            <Button onClick={handleMovieList} color="secondary" startIcon={<List />}>Movies</Button>
            <Button variant='contained' onClick={handleTvShowsList} color="secondary" startIcon={<List />}>TvShows</Button>
            </div>
        </aside>
        <div className="movieslist">
            <h1 className='titles'>Search for tvshows:</h1>
            <Dashboardtable />
        </div>
        </div>
        </>
    )
}
}

export default Search