import React from 'react'
import './SearchPage.css'

import { Link } from 'react-router-dom'
import Search from '../components/Search'
import useGoogleSearch from '../hooks/useGoogleSearch'
import { useStateValue } from '../StateProvider'

import SearchIcon from '@mui/icons-material/Search'
import DescriptionIcon from '@mui/icons-material/Description'
import ImageIcon from '@mui/icons-material/Image'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import RoomIcon from '@mui/icons-material/Room'
import MoreVertIcon from '@mui/icons-material/MoreVert'

function SearchPage() {
  const [{ term }, dispatch] = useStateValue()
  const { data } = useGoogleSearch(term)
  console.log(data)
  return (
    <div className='searchPage'>
      <div className='searchPageHeader'>
        <Link to='/'>
          <img
            className='searchPageLogo'
            src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
            alt=''
          />
        </Link>
        <div className='searchPageHeaderBody'>
          <Search hideButtons defaultValue={term} />
          <div className='searchPageOptions'>
            <div className='searchPageOptionsLeft'>
              <div className='searchPageOption'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPageOption'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPageOption'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchPageOption'>
                <LocalOfferIcon />
                <Link to='/shopping'>shopping</Link>
              </div>
              <div className='searchPageOption'>
                <RoomIcon />
                <Link to='/maps'>maps</Link>
              </div>
              <div className='searchPageOption'>
                <MoreVertIcon />
                <Link to='/more'>more</Link>
              </div>
            </div>
            <div className='searchPageOptionsRight'>
              <div className='searchPageOption'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPageOption'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className='searchPageResults'>
          <p className='searchPageResultsCount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className='searchPageResult'>
              <a href={item.link} target='_blank'>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className='searchPageResultImage'
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=''
                    />
                  )}
                {item.displayLink}
              </a>
              <a
                href={item.link}
                target='_blank'
                className='searchPageResultTitle'
              >
                <h2>{item.title}</h2>
              </a>
              <p className='searchPageResultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
