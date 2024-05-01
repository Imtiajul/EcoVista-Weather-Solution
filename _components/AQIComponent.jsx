import { getAQIData } from "@/lib/weather-info"
import Image from "next/image"
import Card from "./Card"

const AQIComponent = async ({ lat, lon }) => {
  const { main, components } = await getAQIData(lat, lon)

  //   console.log(main, components)

  const getAQIRating = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good"

      case 2:
        return "Fair"

      case 3:
        return "Moderate"

      case 4:
        return "Poor"
      case 5:
        return "Very Low"
    }
  }

  return (
    <Card>
      {" "}
      <h6 className="feature-name">Air Pollution & Quality</h6>
      {/* <!-- info items --> */}
      <div className="mt-3 space-y-2 lg:space-y-3">
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={20}
              height={20}
            />
            Air Quality Index
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {getAQIRating(main?.aqi)}
          </span>
        </div>
        {/* <!-- item ends -->
    <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              width={18}
              height={18}
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Carbon Monoxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.co} µg/m³
          </span>
        </div>
        {/* <!-- item ends -->
    <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              width={18}
              height={18}
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Nitric Oxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.no} ppm
          </span>
        </div>
        {/* <!-- item ends -->
    <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              width={18}
              height={18}
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Nitrogen Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.no2} ppm
          </span>
        </div>
        {/* <!-- item ends -->
    <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              width={18}
              height={18}
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Ozone
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.o3} µg/m³
          </span>
        </div>
        {/* <!-- item ends -->
    <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              width={18}
              height={18}
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            Sulfur Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.so2} ppm
          </span>
        </div>
        {/* <!-- item ends -->
    <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              width={18}
              height={18}
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
            />
            PM2.5
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components.pm2_5} µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
      </div>
    </Card>
  )
}

export default AQIComponent