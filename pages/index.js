import { useState } from "react"
import useSWR from "swr"
import { API, fetcher,  } from '../components/GetBrew'
import Layout from '../components/Layout'
import BreweryList from '../components/BreweryList'
import FeaturedBrewery from '../components/FeaturedBrewery'

const Home = (props) => {

  const [brewType, setType] = useState('')
  const {data: brewData} = useSWR(`${API}?by_type=${brewType}`, fetcher, { initialData: props.brews });

  const changeBrewType = (e) => {
    setType(e.target.value)
  }

  const types = [
    'Nano',
    'Regional',
    'Large',
    'Planning',
    'Bar',
    'Contract',
    'Closed',
  ];

  if (!brewData) return <p>Loading...</p>
  return (
    <Layout>
      <div className="filter">
        <label htmlFor="dropdown">Brewery Type:</label>
        <select id="dropdown" value={brewType} onChange={changeBrewType}>
            <option defaultValue value="Micro">Micro</option>
            {
              types.map(type => <option key={`${type} option`} value={`${type}`}>{`${type}`}</option>)
            }
          </select>
      </div>
      <FeaturedBrewery />
      <BreweryList data={brewData}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const brews = await fetcher(`${API}`)
  // console.log(brewData);
  return {
    props: {
      brews
    }
  }
}

export default Home
