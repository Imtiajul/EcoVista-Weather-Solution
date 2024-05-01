import NoLocationInfo from "@/_components/NoLocationInfo";
import WeatherComponent from "@/_components/WeatherComponent";
import { getResovedLatLong } from "@/app/api/location/utils-location";


const WeatherPage = async({params: {location}, searchParams: {latitude, longitude}}) => {

  const resolved = await getResovedLatLong(location, latitude, longitude);

  // const {lat, lon} = resolved;
// console.log( 'resolved', resolved);

  if(resolved?.lat && resolved?.lon) {
    return (<WeatherComponent lat={resolved?.lat} lon={resolved?.lon}/>)
  } else {
    return <NoLocationInfo location={location} />
  }

}

export default WeatherPage
