import LocationInfo from "@/_components/LocationInfo";
import NoLocationInfo from "@/_components/NoLocationInfo";
import { getResovedLatLong } from "../api/location/utils-location";


const WindPage = async({params: {location}, searchParams: {latitude, longitude}}) => {
  // console.log('latttt: ' + latitude, 'longgggg: ' + longitude);
  const resolved = await getResovedLatLong(location, latitude, longitude);

  // const {lat, lon} = resolved;
// console.log( 'resolved', resolved);

  if(resolved?.lat && resolved?.lon) {
    return (<LocationInfo lat={resolved?.lat} lon={resolved?.lon}/>)
  } else {
    return null;
  }

}

export default WindPage
