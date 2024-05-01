import AQIComponent from "@/_components/AQIComponent";
import NoLocationInfo from "@/_components/NoLocationInfo";
import { getResovedLatLong } from "@/app/api/location/utils-location";

const AqiPage = async ({params: {location}, searchParams: {latitude, longitude}}) => {
  const resolved = await getResovedLatLong(location, latitude, longitude);

  // const {lat, lon} = resolved;
// console.log( 'resolved', resolved);

  if(resolved?.lat && resolved?.lon) {
    return (<AQIComponent lat={resolved?.lat} lon={resolved?.lon}/>)
  } else {
    return <NoLocationInfo location={location} />
  }
}

export default AqiPage
