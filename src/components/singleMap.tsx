import { useState } from "react";
import Link from "next/link";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface IHouse {
  id: string;
  latitude: number;
  longitude: number;
}

interface IProps {
  house: IHouse;
}

export default function SingleMap({ house }: IProps) {
  const [viewport, setViewport] = useState({
    latitude: house.latitude,
    longitude: house.longitude,
    zoom: 13,
  });

  return (
    <div className="text-black">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="calc(100vh - 64px)"
        onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        mapStyle="mapbox://styles/landon345/ckkihmrqm0vju17o1g4u4n6lk"
        scrollZoom={false}
        minZoom={8}
      >
        <div className="absolute top-0 left-0 p-4">
          <NavigationControl showCompass={false} />
        </div>

        <Marker
          latitude={house.latitude}
          longitude={house.longitude}
          offsetLeft={-15}
          offsetTop={-15}
        >
          <button
            type="button"
            style={{ width: "30px", height: "30px", fontSize: "30px" }}
          >
            <img src="/home-color.svg" alt="selected house" className="w-8" />
          </button>
        </Marker>
      </ReactMapGL>
    </div>
  );
}
