import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import tmbdClient from '../Views/tmdb'

export default function Weclomepopular() {
    const [cards,setCards] = useState([])
    useEffect(()=> {
        const getURL = async () => {
            try {
                const response = await tmbdClient.get('/movie/popular')
                setCards(response.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        getURL()
    },[])
  return (
    <>
        <div className="popular">
            <h1>Popular:</h1>
            <button type="button" className='btn-1'>Movies</button>
            <button type="button" className='btn-2'>TV Shows</button>
        </div>
        <div className="card-container">
            {cards.map(card => <Card key={card.id} {...card} />)}   
        </div>
    </>
  )
}
