"use client"

import { useState, useEffect } from "react"
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import Image from "next/image";

const LocationDetecotr = () => {
   const [loading, setLoading] = useState(false);

   const searchParams = useSearchParams();
   const pathName = usePathname();
   const router = useRouter();

   useEffect(()=> {
      setLoading(true);
      const params = new URLSearchParams(searchParams);

      if(navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
            params.set('latitude', position.coords.latitude);
            params.set('longitude', position.coords.longitude);
            setLoading(false);

            router.push(`/current?${params.toString()}`);
         });
      }

   }, [searchParams, pathName])
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700 text-white">

      {loading && (
         <>
            <Image
               src="/network.gif"
               alt="Loading..."
               height={500}
               width={500}
               className="rounded-md border my-4"
            />
            <p className="text-4xl text-center">Detecting location...</p>
         </>
      )}
      
    </div>
  )
}

export default LocationDetecotr
