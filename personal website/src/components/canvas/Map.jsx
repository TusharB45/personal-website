import React, { useEffect, useRef } from "react";

const MapCanvas = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.H || !mapRef.current) return;

    const platform = new window.H.service.Platform({
      apikey: "BZZqC12ipMSFTXAtDnWS62El56WNf3ak-1YTfet-M3Q", // Replace with your HERE Maps API Key
    });

    const defaultLayers = platform.createDefaultLayers({
      lg: 'en',
      ppi: window.devicePixelRatio > 1 ? 320 : 72,
      style: 'dark',
    });

    const map = new window.H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 19.268906, lng: 73.055277 }, // Coordinates of Kamatghar Road, Bhiwandi
        zoom: 14,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    window.addEventListener("resize", () => map.getViewPort().resize());

    const ui = window.H.ui.UI.createDefault(map, defaultLayers);
    const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));

    const customIcon = new window.H.map.Icon("https://img.icons8.com/emoji/48/round-pushpin-emoji.png"); // Custom marker icon
    const marker = new window.H.map.Marker({ lat: 19.268906, lng: 73.055277 }, { icon: customIcon });
    map.addObject(marker);

    return () => map.dispose();
  }, []);

  return <div ref={mapRef} style={{ width: "500px", height: "400px", marginTop: "140px", marginLeft: "110px" }} />;
};

export default MapCanvas;



