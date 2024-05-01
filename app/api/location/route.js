import { getLocations } from "./utils-location";

export async function GET() {
   const locationData = getLocations();

   return Response.json(locationData);
}