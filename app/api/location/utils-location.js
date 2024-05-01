import cities from '../cities.json';
const data = [
   {
       name: "London",
       lat: 51.5073219,
       lng: -0.1276474,
   },
   {
       name: "Kolkata",
       lat: 22.5726723,
       lng: 88.3638815,
   },
   {
       name: "Dhaka",
       lat: 23.777176,
       lng: 90.399452,
   },
   {
       name: "Singapore",
       lat: 1.2899175,
       lng: 103.8519072,
   },
   {
       name: "New York",
       lat: 40.7127281,
       lng: -74.0060152,
   },
   {
       name: "Toronto",
       lat: 43.6534817,
       lng: -79.3839347,
   },
];

function getLocations() {
   return cities;
   // return data;
}

function getnamesByCity(city) {
   if(!city) return null;

   console.log(city);
   const found = cities.find((item) => item.name.toLowerCase() === city.toLowerCase())

   return found || {}
}

export { getLocations, getnamesByCity };


export const getResovedLatLong = async (location, lat, lon) => {
//    console.log('location', location, lat, lon);

   if(lat && lon) return {lat, lon};

   const locationLatLong = await getnamesByCity(location);
//    console.log(locationLatLong);

   if(locationLatLong.lat && locationLatLong.lng) {
      const lat = locationLatLong.lat;
      const lon = locationLatLong.lng;
      // console.log(' ttt', lat, lon);

      return {lat, lon};
   } 

}