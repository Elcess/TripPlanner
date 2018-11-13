const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

function buildMarker(type, location) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  if (type === 'activity') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.activities})`;
  } else if (type === 'hotel') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.hotels})`;
  } else markerDomEl.style.backgroundImage = `url(${iconURLs.restaurants})`;
  new mapboxgl.Marker(markerDomEl).setLngLat(location).addTo(map);
}

module.exports = buildMarker;
