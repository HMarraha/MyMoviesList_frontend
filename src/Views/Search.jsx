import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import List from '@mui/icons-material/List'
import { useState } from 'react'
import tmbdClient from './tmdb'
import { Link } from 'react-router-dom'
import nopfp from "../assets/noimage.jpg"
import Add from '@mui/icons-material/Add'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'
import axiosClient from './axios'
import {Snackbar, Alert } from '@mui/material'
import { forwardRef } from 'react'
const SnackbarAlert = forwardRef(
    function SnackbarAlert(props,ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)
const Search = () => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    const IMG_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w200'
    const [movieList,setMovieList] = useState(true)
    const [tvShowsList,setTvShowsList] = useState(false)
    const [movie,setMovie] = useState([])
    const [tvShow,setTvShow] = useState([])
    const [searchResults,setSearchResults] = useState([])
    const [searchTerm,setSearchTerm] = useState('')
    const [searching,setSearching] = useState(false)
    const [page,setPage] = useState(1)
    const [tvSearchTerm,setTvSearchTerm] = useState('')
    const [tvSearchResults, setTvSearchResults] = useState([])
    const [tvSearching,setTvSearching] = useState(false)
    const [tvPage,setTvPage] = useState(1)
    const searchTVURL = `https://api.themoviedb.org/3/search/tv?page=${tvPage}?` + apiKey
    const searchURL = `https://api.themoviedb.org/3/search/movie?page=${page}?` + apiKey
    const [isError,setIsError] = useState(false)
    const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
    const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSnackbarVisible(false)
    }
    const addWatchedTvShow = async (e,item) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('watchedtvshowimage', item.poster_path)
        formData.append('watchedtvshowtitle', item.original_name)
        formData.append('watchedtvshowoverview',item.overview)

        try {
            const response = await axiosClient.post('/watchedtvshows', formData)
            setIsError(false)
            setIsSnackbarVisible(true)
        } catch(error) {
            setIsError(true)
            setIsSnackbarVisible(true)
            console.log(error)
        }
    }
    const addWatchingTvShow = async (e,item) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('watchingtvshowimage', item.poster_path)
        formData.append('watchingtvshowtitle', item.original_name)
        formData.append('watchingtvshowoverview', item.overview)

        try {
            const response = await axiosClient.post('/watchingtvshows', formData)
            setIsError(false)
            setIsSnackbarVisible(true)
        } catch (error) {
            setIsError(true)
            setIsSnackbarVisible(true)
            console.error(error)
        }
    }
    const addWantToWatchTvShow = async (e,item) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('wanttowatchtvshowimage', item.poster_path)
        formData.append('wanttowatchtvshowtitle', item.original_name)
        formData.append('wanttowatchtvshowoverview', item.overview)

        try {
            const response = await axiosClient.post('/wanttowatchtvshows', formData)
            setIsError(false)
            setIsSnackbarVisible(true)
        } catch(error) {
            setIsError(true)
            setIsSnackbarVisible(true)
            console.error(error)
        }
    }
    const addWantToWatchMovie = async (e,item) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('wanttowatchimage', item.poster_path)
        formData.append('wanttowatchtitle', item.original_title)
        formData.append('wanttowatchoverview', item.overview)

        try {
            const response = await axiosClient.post('/wanttowatchmovies', formData)
            setIsError(false)
            setIsSnackbarVisible(true)
        } catch(error) {
            setIsError(true)
            setIsSnackbarVisible(true)
            console.error(error)
        }
    }
    const addWatchingMovie = async (e, item) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('watchingimage', item.poster_path)
        formData.append('watchingtitle', item.original_title)
        formData.append('watchingoverview', item.overview)

        try {
            const response = await axiosClient.post('/watchingmovies', formData)
            setIsError(false)
            setIsSnackbarVisible(true)
        } catch(error) {
            setIsError(true)
            setIsSnackbarVisible(true)
            console.error(error)
        }
    }
    const addMovie = async (e, item) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', item.poster_path);
        formData.append('title', item.original_title);
        formData.append('overview', item.overview);
      
        try {
          const response = await axiosClient.post('/movies', formData);
          setIsError(false)
          setIsSnackbarVisible(true)
        } catch (error) {
            setIsError(true)
            setIsSnackbarVisible(true)
          console.error(error);
        }
      };
    const getURL = async (url) => {
        try {
            const response = await tmbdClient.get(url)
            setSearchResults(response.data.results)
        } catch (error) {
            console.error(error)
        }
    }
    const getTVURL = async (url) => {
        try {
            const response = await tmbdClient.get(url)
            setTvSearchResults(response.data.results)
        } catch (error) {
            console.error(error)
        }
    }
    const changeTvPage = (e,p) => {
        setTvPage(p)
    }
    const changePage = (e,p) => {
        setPage(p)
    }
    const handleTvChange = (e) => {
        setTvSearchTerm(e.target.value)
    }
    const handleChange = (e) => {
            setSearchTerm(e.target.value)
    }
    const handleTvSubmit = (e) => {
        e.preventDefault()
        if (tvSearchTerm) {
            getTVURL(searchTVURL + '&query=' + tvSearchTerm)
            setTvSearching(true)
        } else {
            setTvSearching(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchTerm) {
            getURL(searchURL + '&query=' + searchTerm)
            setSearching(true)
        } else {
            setSearching(false)
        }
    }
    useEffect(() => {
        const getURL = async () => {
            try {
                const response = await tmbdClient.get(`/discover/movie?page=${page}&sort_by=popularity.desc`)
                setMovie(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        getURL()
    },[page])
    useEffect(() => {
        const getURL = async () => {
            try {
                const response = await tmbdClient.get(`/discover/tv?page=${tvPage}&sort_by=vote_count.desc`)
                setTvShow(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        getURL()
    },[tvPage])
      const handleMovieList = () => {
        setMovieList(true)
        setTvShowsList(false)
        setTvSearching(false)
        setTvSearchTerm('')
      }
      const handleTvShowsList = () => {
        setMovieList(false)
        setTvShowsList(true)
        setSearching(false)
        setSearchTerm('')
      }
 if (movieList) {
    return (

        <>
            <h1 className='searchtitles'>Search for movies:</h1>
            <form className='searchformovie' onSubmit={handleSubmit} >
                <TextField className='searchinput' onChange={handleChange} id="outlined-basic" label="Search Movie" variant="outlined" />
                <Button type='submit' className='searchbutton' variant='contained' color='secondary'>Search</Button>
            </form>
            <div className="profile">
            <aside className="sidebar">
                <div className="sidebuttoncontainer">
                <Button variant='contained' onClick={handleMovieList} color="secondary" startIcon={<List />}>Movies</Button>
                <Button onClick={handleTvShowsList} color="secondary" startIcon={<List />}>TvShows</Button>
                </div>
            </aside>
            <div className="movieslist">
                {searching ? searchResults?.map(item => (
                    <div key={item.id} className="searchmovies">
                        <Link to={`/description/movies/${item.id}/${item.original_title}`}>
                        {item.poster_path ? <img style={{borderRadius: '10px'}} src={`${IMG_BASE_URL_SMALL}${item.poster_path}`} alt="" /> : <img style={{width: '200px'}} src={nopfp} alt="" />}
                        </Link>
                        <div>
                        <Link style={{textDecoration: 'none',color: 'black'}} to={`/description/movies/${item.id}/${item.original_title}`}>
                            <p className='searchtitle'>{item.original_title}</p>
                        </Link>    
                            <p className='searchoverview'>{item.overview}</p>
                            <div className="buttons">
                                <form onSubmit={(e) => {addMovie(e,item)}} >
                                    <Button onClick={() => setOpenSnackbar(true)}  value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>ًWatched</Button>
                                </form>
                                <form onSubmit={(e) => {addWatchingMovie(e,item)}} >
                                    <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>Watching</Button>
                                </form>
                                <form onSubmit={(e) => {addWantToWatchMovie(e,item)}} >
                                    <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>Want To Watch</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                )) : movie?.map((item,index) => (
                        <div key={item.id} className="searchmovies">
                            <Link to={`/description/movies/${item.id}/${item.original_title}`}>
                                {item.poster_path ? <img id='image' name='image' style={{borderRadius: '10px'}} src={`${IMG_BASE_URL_SMALL}${item.poster_path}`} alt="" /> : <img id='image' name='image' style={{width: '200px'}} src={nopfp} alt="" />}
                            </Link>
                            <div>
                            <Link style={{textDecoration: 'none',color: 'black'}} to={`/description/movies/${item.id}/${item.original_title}`}>
                                <p className='searchtitle' id='title' name="title">{item.original_title}</p>
                            </Link>    
                                <p className='searchoverview' name='overview' id='overview' >{item.overview}</p>
                                <div className="buttons">
                                <form onSubmit={(e) => {addMovie(e,item)}} >
                                        <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>ًWatched</Button>
                                </form>
                                <form onSubmit={(e) => {addWatchingMovie(e,item)}} >
                                        <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>Watching</Button>      
                                </form>
                                <form onSubmit={(e) => {addWantToWatchMovie(e,item)}} >
                                        <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>Want To Watch</Button>
                                </form>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
               <Stack className='stack' spacing={2}>
                    <Pagination onChange={changePage} count={500} color="secondary" />
                </Stack>
                {isError ? 
                <Snackbar open={isSnackbarVisible} 
                          autoHideDuration={4000} 
                          onClose={closeSnackbar} 
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                          }}>
                    <SnackbarAlert onClose={closeSnackbar} severity='error'>
                        Movie Already Added!
                    </SnackbarAlert>
                </Snackbar>
                : <Snackbar open={isSnackbarVisible}
                            autoHideDuration={4000}
                            onClose={closeSnackbar} 
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                              }}>
                    <SnackbarAlert onClose={closeSnackbar} severity='success'>
                        Movie Added Successfully!
                    </SnackbarAlert>
                </Snackbar>
                } 
        </>
 ) 
}
if (tvShowsList) {
    return (
        <>
        <h1 className='searchtitles'>Search for tvshows:</h1>
        <form className='searchformovie' onSubmit={handleTvSubmit} >
                <TextField className='searchinput' onChange={handleTvChange} id="outlined-basic" label="Search TvShow" variant="outlined" />
                <Button type='submit' className='searchbutton' variant='contained' color='secondary'>Search</Button>
        </form>
        <div className="profile">
        <aside className="sidebar">
            <div className="sidebuttoncontainer">
            <Button onClick={handleMovieList} color="secondary" startIcon={<List />}>Movies</Button>
            <Button variant='contained' onClick={handleTvShowsList} color="secondary" startIcon={<List />}>TvShows</Button>
            </div>
        </aside>
        <div className="movieslist">
                {tvSearching ? tvSearchResults?.map(item => (
                    <div key={item.id} className="searchmovies">
                        <Link to={`/description/tvshows/${item.id}/${item.original_name}`}>
                        {item.poster_path ? <img style={{borderRadius: '10px'}} src={`${IMG_BASE_URL_SMALL}${item.poster_path}`} alt="" /> : <img style={{width: '200px'}} src={nopfp} alt="" />}
                        </Link>
                        <div>
                        <Link style={{textDecoration: 'none',color: 'black'}} to={`/description/tvshows/${item.id}/${item.original_name}`}>
                            <p className='searchtitle'>{item.original_name}</p>
                        </Link>    
                            <p className='searchoverview'>{item.overview}</p>
                            <div className="buttons">
                            <form onSubmit={(e) => {addWatchedTvShow(e,item)}} >                       
                                        <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>ًWatched</Button>
                                </form>
                                <form onSubmit={(e) => {addWatchingTvShow(e,item)}} >                    
                                        <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>Watching</Button>
                                </form>
                                <form onSubmit={(e) => {addWantToWatchTvShow(e,item)}} >
                                        <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>Want To Watch</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                )) : tvShow?.map(item => (
                    <div key={item.id} className="searchmovies">
                        <Link to={`/description/tvshows/${item.id}/${item.original_name}`}>
                            {item.poster_path ? <img style={{borderRadius: '10px'}} src={`${IMG_BASE_URL_SMALL}${item.poster_path}`} alt="" /> : <img style={{width: '200px'}} src={nopfp} alt="" />}
                        </Link>
                        <div>
                        <Link style={{textDecoration: 'none',color: 'black'}} to={`/description/tvshows/${item.id}/${item.original_name}`}>
                            <p className='searchtitle'>{item.original_name}</p>
                        </Link>    
                            <p className='searchoverview'>{item.overview}</p>
                            <div className="buttons">
                            <form onSubmit={(e) => {addWatchedTvShow(e,item)}} >                       
                                        <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>ًWatched</Button>
                                </form>
                                <form onSubmit={(e) => {addWatchingTvShow(e,item)}} >                    
                                        <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>Watching</Button>
                                </form>
                                <form onSubmit={(e) => {addWantToWatchTvShow(e,item)}} >
                                        <Button onClick={() => setOpenSnackbar(true)} value={item.id} type='submit' color='secondary' className='watch' startIcon={<Add />} variant='contained' size='large'>Want To Watch</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
                <Stack className='stack' spacing={2}>
                    <Pagination onChange={changeTvPage} count={500} color="secondary" />
                </Stack>
                {isError ? 
                <Snackbar open={isSnackbarVisible} 
                          autoHideDuration={4000} 
                          onClose={closeSnackbar} 
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                          }}>
                    <SnackbarAlert onClose={closeSnackbar} severity='error'>
                        TvShow Already Added!
                    </SnackbarAlert>
                </Snackbar>
                : <Snackbar open={isSnackbarVisible}
                            autoHideDuration={4000}
                            onClose={closeSnackbar} 
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                              }}>
                    <SnackbarAlert onClose={closeSnackbar} severity='success'>
                        TvShow Added Successfully!
                    </SnackbarAlert>
                </Snackbar>
                } 
        </>
    )
}
}

export default Search