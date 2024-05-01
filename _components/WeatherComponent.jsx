import Image from "next/image"
import Card from "./Card"
import { getWeatherData } from "@/lib/weather-info"

const WeatherComponent = async ({ lat, lon }) => {
   const data = await getWeatherData(lat, lon);
  	// console.log('data', data);
  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          width={70}
          height={70}
          src="/assets/icons/icon_rain.png"
          alt="rain icon"
        />
        <h3 className="feature-title">{data?.main}</h3>
        <span className="feature-name">{data?.description}</span>
      </div>
    </Card>
  )
}

export default WeatherComponent
