import { useState } from "react"
import useSWR from "swr"
import { API, fetcher,  } from '../components/GetBrew'
import Layout from '../components/Layout'
import BreweryList from '../components/BreweryList'
import FeaturedBrewery from '../components/FeaturedBrewery'

const Home = () => {

  const [brewType, setType] = useState('micro')
  const {data: brewData} = useSWR(`${API}?by_type=${brewType}`, fetcher);

  const changeBrewType = (e) => {
    setType(e.target.value)
  }

  if (!brewData) return <p>Loading...</p>
  return (
    <Layout>
      <div className="filter">
        <label htmlFor="dropdown">Brewery Type:</label>
        <select id="dropdown" value={brewType} onChange={changeBrewType}>
            <option defaultValue value="micro">Micro</option>
            <option value="nano">Nano</option>
            <option value="regional">Regional</option>
            <option value="brewpub">BrewPub</option>
            <option value="large">Large</option>
            <option value="planning">Planning</option>
            <option value="bar">Bar</option>
            <option value="contract">Contract</option>
            <option value="closed">Closed</option>
          </select>
      </div>
      <FeaturedBrewery />
      <BreweryList data={brewData}/>
    </Layout>
  )
}

export default Home
