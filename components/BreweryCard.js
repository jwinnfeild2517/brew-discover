import Link from 'next/link'

const BreweryCard = (props) => (
  <div className="brew-card-container">
    <h3>{props.name}</h3>
    <Link href={`/brewery/${props.id}`}>
      <a className="brew-detail-link">Open Brewery</a>
    </Link>
  </div>
)

export default BreweryCard