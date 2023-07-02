import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmbdClient from './tmdb'
import { Button } from '@mui/material'
import Moviedescription from '../subcomponents/Moviedescription'
import Tvshowsdescription from '../subcomponents/Tvshowsdescription'
const Shows = () => {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'
  const Large = 'https://image.tmdb.org/t/p/original'
  const { id } = useParams()
  const [shows,setShows] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const getURL = async () => {
      try {
        const response = await tmbdClient.get(`/tv/${id}`)
        setShows(response.data)
        setIsLoading(false)
      } catch(error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    getURL()
  },[])
 console.log(shows)
   return (
     <>     
      <Tvshowsdescription {...shows} Large={Large} IMG_BASE_URL={IMG_BASE_URL}/>    
     </>
   ) 
   }
export default Shows