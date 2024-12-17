let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: { lat: 56.1522, lng: 10.2181 },
    zoom: 13,
    mapId: "bf94ce1ce96658a0",
    disableDefaultUI: true,
    zoomControl: true,
  });

  const marker1 = {
    position: { lat: 56.1540889, lng: 10.2067001 },
    title: "Courtyard A",
    url: "courtyard1.html",
  };
  const marker2 = {
    position: { lat: 56.1600456, lng: 10.2099313 },
    title: "Courtyard B",
    url: "courtyard1.html",
  };
  const marker3 = {
    position: { lat: 56.1638095, lng: 10.2260133 },
    title: "Courtyard C",
    url: "courtyard1.html",
  };

  const markers = [marker1, marker2, marker3].map((location) => {
    const marker = new AdvancedMarkerElement({
      position: location.position,
      map: map,
      title: location.title,
    });

    marker.addListener("click", () => {
      window.location.href = location.url;
    });

    return marker;
  });
}

initMap();
