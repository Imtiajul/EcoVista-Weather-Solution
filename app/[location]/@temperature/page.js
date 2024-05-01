import NoLocationInfo from "@/_components/NoLocationInfo";
import TemperatureComponent from "@/_components/TemperatureComponent"
import { getResovedLatLong } from "@/app/api/location/utils-location";

const TemperaturePage = async({params: {location}, searchParams: {latitude, longitude}}) => {
  const resolved = await getResovedLatLong  (location, latitude, longitude);

  // const {lat, lon} = resolved;
// console.log( 'resolved', resolved);

  if(resolved?.lat && resolved?.lon) {
    return (<TemperatureComponent lat={resolved?.lat} lon={resolved?.lon}/>)
  } else {
    return <NoLocationInfo location={location} />
  }
}

export default TemperaturePage
