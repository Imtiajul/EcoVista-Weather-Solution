import { getTemperatureData } from "@/lib/weather-info"
import Card from "./Card"
import Image from "next/image"

const TemperatureComponent = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTemperatureData(lat, lon)

  // console.log(data);
  return (
    <Card>
      <h6 class="feature-name">Current Temperature</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src="/assets/icons/icon_tempareture.png"
          width={80}
          height={80}
          alt="rain icon"
        />
        <h3 class="feature-title">{temp}°C</h3>

        <span class="feature-name">{feels_like} 244°C</span>
      </div>
    </Card>
  )
}

export default TemperatureComponent
