export function getCurrentLatLng() {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(loc => resolve({
      lat: loc.coords.latitude.toFixed(2),
      lng: loc.coords.longitude.toFixed(2)
    }));
  });
}