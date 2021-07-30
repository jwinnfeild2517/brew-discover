import React from "react";
import useSWR from "swr"
import { API, fetcher,  } from '../components/GetBrew'

const FeaturedBrewery = React.memo(() => {

  let {data: brew} = useSWR(`${API}?by_state=georgia&per_page=1`, fetcher);

  if (!brew) return <p>Loading...</p>
  brew = brew[0]
  return (
    <div className="featured-brew-container"  >
        <h4>{brew.name}</h4>
        <ul className="info-list featured-brew-info">
          <li><strong>Brewery Type: </strong>{brew.brewery_type}</li>
          <li><strong>Address: </strong>{`${brew.street}, ${brew.city}, ${brew.state}, ${brew.postal_code}`}</li>
          <li><strong>Phone: </strong>{brew.phone}</li>
          <li><strong>Website: </strong>{brew.website_url}</li>
        </ul>
    </div>
  )
})

export default FeaturedBrewery