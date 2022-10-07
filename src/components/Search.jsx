import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import './Search.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Search({ hideButtons = false, defaultValue = '' }) {
  const navigate = useNavigate()

  const [state, dispatch] = useStateValue()

  const [input, setInput] = useState(defaultValue)

  const search = (e) => {
    e.preventDefault()

    dispatch({ type: actionTypes.SET_SEARCH_TERM, term: input })

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
