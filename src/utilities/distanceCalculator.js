// distanceCalculator.js

/**
 * Calculates the distance between two points on the Earth.
 * @param {number} lat1 Latitude of the first point
 * @param {number} lon1 Longitude of the first point
 * @param {number} lat2 Latitude of the second point
 * @param {number} lon2 Longitude of the second point
 * @returns {number} The distance between the two points in miles
 */
export default function getDistanceFromLatLonInMiles(lat1, lon1, lat2, lon2) {

    function deg2rad(deg) {
        return deg * (Math.PI/180);
    }
    const R = 3958.8; // Radius of the Earth in miles
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);

    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distance in miles
    return distance;
}
  

  

  