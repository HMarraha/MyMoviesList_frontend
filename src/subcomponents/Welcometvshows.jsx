import React, { useEffect, useState } from 'react'
import tmbdClient from '../Views/tmdb'
import Button from "@mui/material/Button"
import Tvshowscard from './Tvshowscard'

const Welcometvshows = () => {
    const [airingToday,setAiringToday] = useState([])
    const [onTheAir,setOnTheAir] = useState([])
    const [topRated,setTopRated] = useState([])
    const [showAiringToday,setShowAiringToday] = useState(true)
    const [showOnTheAir,setShowOnTheAir] = useState(false)
    const [showTopRated,setShowTopRated] = useState(false)
    useEffect(()=> {
      const getURL = async () => {
        try {
          const response = await tmbdClient.get('/tv/airing_today')
          setAiringToday(response.data.results)
        } catch(error) {
          console.error(error)
        }
      }
      getURL()
    },[])
    useEffect(()=> {
      const getURL = async () => {
        try {
          const response = await tmbdClient.get('/tv/on_the_air')
          setOnTheAir(response.data.results)
        } catch(error) {
          console.error(error)
        }
      }
      getURL()
    },[])
    useEffect(()=> {
      const getURL = async () => {
        try {
          const response = await tmbdClient.get('/tv/top_rated')
          setTopRated(response.data.results)
        } catch(error) {
          console.error(error)
        }
      }
      getURL()
    },[])
    const handleShowAiringToday = () => {
      setShowAiringToday(true)
      setShowOnTheAir(false)
      setShowTopRated(false)
    }
    const handleShowOnTheAir = () => {
      setShowOnTheAir(true)
      setShowAiringToday(false)
      setShowTopRated(false)
    }
    const handleShowTopRated = () => {
      setShowTopRated(true)
      setShowAiringToday(false)
      setShowOnTheAir(false)
    }
    if (showAiringToday) {
      return (
        <>
            <div id="welcometvshowsid" className="popular">
                <h1>Shows:</h1>
                <Button onClick={handleShowAiringToday} variant='contained' color='secondary' size='small'>Airing Today</Button>
                <Button onClick={handleShowOnTheAir} color='secondary' size="small">On The Air</Button>
                <Button onClick={handleShowTopRated} color='secondary' size='small'>Top Rated</Button>
            </div>
            <div className="card-container">
              {airingToday.map(airingTodayShow => <Tvshowscard key={airingTodayShow.id} {...airingTodayShow}/>)}
            </div>
        </>
      )
    }
    if (showOnTheAir) {
      return (
        <>
            <div id="welcometvshowsid" className="popular">
                <h1>Shows:</h1>
                <Button onClick={handleShowAiringToday} color='secondary' size='small'>Airing Today</Button>
                <Button onClick={handleShowOnTheAir} variant='contained' color='secondary' size='small'>On The Air</Button>
                <Button onClick={handleShowTopRated} color='secondary' size='small'>Top Rated</Button>
            </div>
            <div className="card-container">
              {onTheAir.map(onTheAirShow => <Tvshowscard key={onTheAirShow.id} {...onTheAirShow} />)}
            </div>
        </>
      )
    }
    if (showTopRated) {
      return (
        <>
            <div id="welcometvshowsid" className="popular">
                <h1>Shows:</h1>
                <Button onClick={handleShowAiringToday} color='secondary' size='small'>Airing Today</Button>
                <Button onClick={handleShowOnTheAir} color='secondary' size='small'>On The Air</Button>
                <Button onClick={handleShowTopRated} variant='contained' color='secondary' size='small'>Top Rated</Button>
            </div>
            <div className="card-container">
              {topRated.map(topRatedShow => <Tvshowscard key={topRatedShow.id} {...topRatedShow}/>)}
            </div>
        </>
      )
    }
}

export default Welcometvshows