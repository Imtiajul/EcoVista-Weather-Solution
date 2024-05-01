"use client"

import { getLocationLatLongList } from "@/lib/location-info"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false)
  const [locations, setLocations] = useState([])

  useEffect(() => {
    (async function fetchLocation() {
      const locations = await getLocationLatLongList();
      // console.log(locations)
      setLocations(locations)
    })()
  }, [])

  return (
    <div className="relative">
      <button onClick={()=> setShowLocationList(!showLocationList)}>
        <Image
          className="size-9"
          width={40}
          height={40}
          src="/assets/icons/link.svg"
          alt="link icon"
        />
      </button>
      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer h-60 overflow-hidden overflow-y-scroll scroll-smooth"
          >
            {locations?.map(info => (
               <li key={info.name+info.lat}><Link href={`/${info.name}?latitude=${info.lat}&longitude=${info.lng}`}>{info.name}</Link></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LocationSwitcher
