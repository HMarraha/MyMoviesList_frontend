import React, { useEffect, useState } from 'react'
import logo from "../assets/smalllogo.png"
import tmbdClient from '../Views/tmdb'
export default function About() {
    const [img,setImg] = useState([]) 
    useEffect(()=> {
        const getURL = async () => {
            try {
                const response = await tmbdClient.get('/popular/movie')
                setImg(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        getURL()
    })
  return (
    <>
        <div className="about-container">
            <div>
            <h1>About</h1>
            <p>MyMoviesList or MML for short, is a website for movies/tvshows tracking where you can track what movies/tvshows you're currently watching, you're planning to watch later or you've already watched.</p>
            <p>It was developped by Haytam Marraha, with the use of the TMDB api to provide a variety of movies/tvshows</p>
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    </>
  )
}
