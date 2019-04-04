import Map from '@/components/map';

window.addEventListener('DOMContentLoaded', () => {
  $.each('.js-map', el => {
    const map = new Map({ map: el });

    map.renderMarker({
      location: {
        position: { lat: 43.258711, lng: 76.844779 },
        icon: `${window.location.origin}/img/map-icon.svg`
      }
    });
  });
});
