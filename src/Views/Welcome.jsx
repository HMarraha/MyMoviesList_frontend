import { useEffect, useState } from 'react'
import Welcomenavbar from '../subcomponents/Welcomenavbar'
import Welcomehero from '../subcomponents/Welcomehero'
import Welcomepopular from '../subcomponents/Welcomepopular'
import { useStateContext } from '../contexts/contextprovide'
import axiosClient from './axios'
import About from '../subcomponents/About'
import Welcomemovies from '../subcomponents/Welcomemovies'
import Faq from '../subcomponents/Faq'
import Welcometvshows from '../subcomponents/Welcometvshows'
import Footer from '../subcomponents/Footer'
export default function Welcome() {
      return (
      <>
      <Welcomehero />
      <Welcomepopular />
      <About />
      <Welcomemovies />
      <Faq />
      <Welcometvshows />
      </>
      )
}
