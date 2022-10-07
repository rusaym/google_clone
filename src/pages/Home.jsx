import React from 'react'
import AppsIcon from '@mui/icons-material/Apps'

import './Home.css'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import Search from '../components/Search'

function Home() {
  return (
    <div className='home'>
      <div className='homeHeader'>
        <div className='headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className='homeBody'>
        <img
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          alt=''
        />
        <div className='home_inputContainer'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
