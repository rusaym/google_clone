import React from 'react'
import { useStateValue } from '../StateProvider'

import './SearchPage.css'

function SearchPage() {
  const [{ term }, dispatch] = useStateValue()

  return (
    <div className='searchPage'>
      <div className='searchPageHeader'>
        <h1>{term}</h1>
      </div>
      <div className='searchPageResults'></div>
    </div>
  )
}

export default SearchPage
