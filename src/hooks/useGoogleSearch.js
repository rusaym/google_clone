import axios from 'axios'
import { useEffect, useState } from 'react'
import API_KEY from '../keys'

const CONTEXT_KEY = 'd42f234176fed4de6'

const useGoogleSearch = (term) => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [term])

  return { data }
}

export default useGoogleSearch
