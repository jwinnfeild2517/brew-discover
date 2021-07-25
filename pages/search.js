import { useState } from "react"
import Layout from "../components/Layout"
import SearchForm from "../components/searchForm"
import useSWR from "swr"
import { API, fetcher,  } from '../components/GetBrew'
import BreweryList from "../components/BreweryList"

const BrewerySearch = () => {

  const [query, setQuery] = useState('dog')

  const {data: brewData} = useSWR(`${API}/search?query=${query}`, fetcher)

  const performSearch = (value) => {
    setQuery(value)
  }

  return (
    <Layout>
      <SearchForm onSearch={performSearch}/>
      { !brewData || !brewData.length > 0 ?
        <h3 style={{color: 'white'}}>No Results Found. Please Try Something Else</h3>
        : <BreweryList data={brewData}/>
      }
    </Layout>
  )
}

export default BrewerySearch
