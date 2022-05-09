let latitude = 19.0760 , longitude = 72.8777
mapboxgl.accessToken = 'pk.eyJ1Ijoibml5YXRpciIsImEiOiJjbDJ5cXFlN3IwMDNvM2RxdTdlenQ0YTMyIn0.p40IKbjNGF41rNzPGVeLJg'
var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:50
})
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),'top-left'
)