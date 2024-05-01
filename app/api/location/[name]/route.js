import { getLocationsByCity } from "../utils-location";

export async function GET(request, {params}) {
   const locationData = getLocationsByCity(params?.name);

   return Response.json(locationData);
}