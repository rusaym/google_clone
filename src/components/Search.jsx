import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import './Search.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Search({ hideButtons = false }) {
  const navigate = useNavigate()

  const [input, setInput] = useState('')

  const search = (e) => {
    e.preventDefault()
    console.log('You hit the button')

    navigate('/search')
  }

  return (
    <form className='search'>
      <div className='searchInput'>
        <SearchIcon className='searchInputIcon' />
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className='searchButtons'>
          <Button type='submit' variant='outlined' onClick={search}>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='searchButtons'>
          <Button
            className='searchButtonHidden'
            type='submit'
            variant='outlined'
            onClick={search}
          >
            Google Search
          </Button>
          <Button className='searchButtonHidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  )
}

export default Search
