import Link from "next/link"
import Card from "./Card"

const NoLocationInfo = ({ location }) => {
  return (
    <Card className="">
      <div className="">
        <p>Sorry, we did not find the city {location} in our database.</p>
        <Link
          className="mt-2 py-1 px-2 border border-amber-600 inline-block rounded-sm"
          href="/"
        >
          Back to current location
        </Link>
      </div>
    </Card>
  )
}

export default NoLocationInfo
