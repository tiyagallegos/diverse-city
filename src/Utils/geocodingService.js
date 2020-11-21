
const BASE_URL='https://nominatim.openstreetmap.org/search/'
const format='?format=json&addressdetails=1&limit=1&polygon_svg=1'


export function getCustomLocation({address, city, state}) {
    address = encodeURI(address);
    city = encodeURI(city);
    state = encodeURI(state);
    const url =  `${BASE_URL}${address}%20${city}%20${state}${format}`
    console.log(url);
    return fetch(url, { mode: 'cors' })
    .then(res => res.json())
    
}
