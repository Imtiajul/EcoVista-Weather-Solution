export const getLocationData = async(lat, lon) => {
   try {
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`);
                                    
      const data = await response.json();
      // console.log('res', lat, lon, data);
      return data;

      
   } catch (error) {
         console.error(error);
   }
}

export const getLocationLatLongList = async () => {
   try {
      const response = await fetch(`http://localhost:3000/api/location`);

      const data = await response.json();

      return data;
   } catch (error) {
      console.error(error);
   }
}