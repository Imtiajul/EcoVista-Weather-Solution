import NoLocationInfo from "@/_components/NoLocationInfo";
import WindComponent from "@/_components/WindComponent"
import { getResovedLatLong } from "@/app/api/location/utils-location";

const WindPage = async ({params: {location}, searchParams: {latitude, longitude}}) => {
  const resolved = await getResovedLatLong(location, latitude, longitude);

  // const {lat, lon} = resolved;
// console.log( 'resolved', resolved);

  if(resolved?.lat && resolved?.lon) {
    return (<WindComponent lat={resolved?.lat} lon={resolved?.lon}/>)
  } else {
    return <NoLocationInfo location={location} />
  }
}

export default WindPage
