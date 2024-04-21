import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useState } from "react";

export default function Map() {
  mapboxgl.accessToken = process.env.REACT_APP_MAP;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-80.137314);
  const [lat, setLat] = useState(26.122438);
  const [zoom, setZoom] = useState(9);
  const size = 200;
  const pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),

    // When the layer is added to the map,
    // get the rendering context for the map canvas.
    onAdd: function () {
      const canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
      this.context = canvas.getContext("2d");
    },

    // Call once before every frame where the icon will be used.
    render: function () {
      const duration = 1000;
      const t = (performance.now() % duration) / duration;

      const radius = (size / 2) * 0.3;
      const outerRadius = (size / 2) * 0.7 * t + radius;
      const context = this.context;

      // Draw the outer circle.
      context.clearRect(0, 0, this.width, this.height);
      context.beginPath();
      context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
      context.fill();

      // Draw the inner circle.
      context.beginPath();
      context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
      context.fillStyle = "rgba(255, 100, 100, 1)";
      context.strokeStyle = "white";
      context.lineWidth = 2 + 4 * (1 - t);
      context.fill();
      context.stroke();

      // Update this image's data with data from the canvas.
      this.data = context.getImageData(0, 0, this.width, this.height).data;

      // Continuously repaint the map, resulting
      // in the smooth animation of the dot.
      map.current.triggerRepaint();

      // Return `true` to let the map know that the image was updated.
      return true;
    },
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("load", () => {
        map.current.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });
      map.current.addSource("dot-point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                title: 'Fort Lauderdale, Fl',
                description:
                  "<strong>Fort Lauderdale, Florida</strong><p>We service over 100 kids in the city of Fort Lauderdale. We have over 50 mentors in the city of Fort Lauderdale.</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [-80.137314, 26.122438], // icon position [lng, lat]
              },
            },
          ],
        },
      });
        map.current.addLayer({
            id: 'layer-with-pulsing-dot',
            type: 'symbol',
            source: 'dot-point',
            layout: {
            'icon-image': 'pulsing-dot',
            'text-field': ['get', 'title']

            }
        });
   
      // Create a popup, but don't add it to the map yet.
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      map.current.on("mouseenter", "layer-with-pulsing-dot", (e) => {
        // Change the cursor style as a UI indicator.
        map.current.getCanvas().style.cursor = "pointer";

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
      });

      map.current.on("mouseleave", "layer-with-pulsing-dot", () => {
        map.current.getCanvas().style.cursor = "";
        popup.remove();
      });
    });

    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // end of use effect
  });
  return (
    <div className="relative">
      {/* <div className="sidebar absolute">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}

      <h1 className="sidebar absolute text-white top-0 left-0 m-3 rounded text-6xl">Impact & Reach</h1>
      <p className="mini-sidebar absolute top-24 left-0 m-3 rounded text-4xl font-bold">More than 100+ <br/> Children Benefited <br/>  From Our Program</p>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
