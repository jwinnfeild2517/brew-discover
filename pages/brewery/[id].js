import { useRouter } from 'next/router'
import BreweryList from '../../components/BreweryList'
import useSWR from "swr"
import { API, fetcher,  } from '../../components/GetBrew'
import Layout from '../../components/Layout'


const BrewDetail = () => {

  const router = useRouter()

  const {id} = router.query

  const {data: brew} = useSWR(`${API}/${id}`, fetcher)
  const {data: relatedBrewTypes} = useSWR(() => `${API}?per_page=8&by_type=${brew.brewery_type}`, fetcher);
  const {data: relatedBrewLocations} = useSWR(() => `${API}?per_page=8&by_dist=${brew.latitude},${brew.longitude}`, fetcher);

  if (!brew) return <p>Loading...</p>
  for (const brewItem in brew) {
    if (brew[brewItem] === null) {
      brew[brewItem] = "Not Available"
    }
  }
  return (
    <Layout>
      <div className="detail-page-jumbotron">
        <h1>{brew.name}</h1>
        <ul className="info-list">
          <li><strong>Brewery Type: </strong>{brew.brewery_type}</li>
          <li><strong>Address: </strong>{`${brew.street}, ${brew.city}, ${brew.state}, ${brew.postal_code}`}</li>
          <li><strong>Phone: </strong>{brew.phone}</li>
          <li><strong>Website: </strong>{brew.website_url}</li>
        </ul>
      </div>
      <h1 style={{color: 'white'}}>Related Brew Types</h1>
      {!relatedBrewTypes ? <p>Loading Brews</p> : <BreweryList data={relatedBrewTypes}/>}
      <h1 style={{color: 'white'}}>Related Brew Locations</h1>
      {!relatedBrewLocations ? <p style={{color: 'white'}}>Loading Brews...</p> : <BreweryList data={relatedBrewLocations}/>}
    </Layout>
  )
}


export default BrewDetail;