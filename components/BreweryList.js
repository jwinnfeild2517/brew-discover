
import React from "react"
import BreweryCard from './BreweryCard'

const BreweryBrowse = (props) => (

  <div className="browse-container">
    {props.data.map(brewery =>
      <BreweryCard
        key={brewery.id}
        id={brewery.id}
        name={brewery.name}
        phone={brewery.phone}
        city={brewery.city}
        state={brewery.state}
        brewType={brewery.brewery_type}
      />
    )}
  </div>
)

export default BreweryBrowse