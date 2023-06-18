import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmbdClient from './tmdb'
import { Button } from '@mui/material'
import Moviedescription from '../subcomponents/Moviedescription'
import Tvshowsdescription from '../subcomponents/Tvshowsdescription'
const Description = () => {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'
  const Large = 'https://image.tmdb.org/t/p/original'
  const { id } = useParams()
  const [movies,setMovies] = useState({})
  const [shows,setShows] = useState({})
  const [cast,setCast] = useState([])
  const [media, setMedia] = useState([])
  const [itsBackdrops,setItsBackdrops] = useState([])
  const [itsPosters,setItsPosters] = useState([])
  const [reviews,setReviews] = useState([])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/movie/${id}/reviews`)
        setReviews(response.data.results)
      } catch(error) {
        console.log(error)
      }
    }
    getURL()
  },[])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/movie/${id}/images`)
        setItsBackdrops(response.data.backdrops)
        setItsPosters(response.data.posters)
      } catch(error) {
        console.log(error)
      }
    }
    getURL()
  },[])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/movie/${id}/videos`)
        setMedia(response.data.results)
      } catch(error) {
        console.log(error)
      }
    }
    getURL()
  },[])
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/movie/${id}/credits`)
        setCast(response.data.cast)
      } catch(error) {
        console.log(error)
      }
    }
    getURL()
  },[])
  useEffect(() => {
    const getURL = async () => {   
        try {
          const response = await tmbdClient.get(`/movie/${id}`)
          setMovies(response.data)
        } catch(error) {
          console.error(error)
        }
    }
    getURL()
  },[])
  useEffect(() => {
    const getURL = async () => {
        try {
          const response = await tmbdClient.get(`/tv/${id}`)
          setShows(response.data)
        } catch(error) {
          console.error(error)
        }
    }
    getURL()
  },[id])
  if (movies.original_title) {
    return (
      <>
          <Moviedescription {...movies} Large={Large} IMG_BASE_URL={IMG_BASE_URL} cast={cast} 
          media={media} itsBackdrops={itsBackdrops} itsPosters={itsPosters} reviews={reviews}/>
      </>
    )
  }
  else if (shows.original_name) {
    return (
      <>     
        <Tvshowsdescription {...shows} Large={Large} IMG_BASE_URL={IMG_BASE_URL}/>
      </>
    )
  } 
}

export default Description