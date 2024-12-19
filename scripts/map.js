let map;

async function initMap() {
  // Import necessary Google Maps libraries
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Create a new map instance
  map = new Map(document.getElementById("map"), {
    // Set the center of the map (Aarhus coordinates)
    center: { lat: 56.1522, lng: 10.2181 },
    // Set the initial zoom level
    zoom: 13,
    // Use a custom map style (if applicable)
    mapId: "bf94ce1ce96658a0",
    // Disable default UI elements
    disableDefaultUI: true,
    // Enable zoom controls
    zoomControl: true,
  });

  // Define marker data (coordinates, titles, and URLs)
  const marker1 = {
    position: { lat: 56.1540889, lng: 10.2067001 },
    title: "cafe mellemfolk",
    url: "courtyards/cafe-mellemfolk.html",
  };
  const marker2 = {
    position: { lat: 56.1600456, lng: 10.2099313 },
    title: "irma pedersens gade",
    url: "courtyards/irma-pedersens-gade.html",
  };
  const marker3 = {
    position: { lat: 56.1638095, lng: 10.2260133 },
    title: "villa provence hotel",
    url: "courtyards/villa-provence-hotel.html",
  };

  // Create markers from the data
  const markers = [marker1, marker2, marker3].map((location) => {
    // Create a new AdvancedMarkerElement for each location
    const marker = new AdvancedMarkerElement({
      position: location.position,
      map: map, // Add the marker to the map
      title: location.title,
    });

    // Add a click listener to each marker
    marker.addListener("click", () => {
      // Redirect to the specified URL when the marker is clicked
      window.location.href = location.url;
    });

    return marker; // Return the created marker
  });
}

// Initialize the map
initMap();
