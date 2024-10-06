import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { getPlace } from "../actions/place";
import ModalGrafico from "./Modal/ModalGrafico";
import ModalEleccion from "./Modal/ModalEleccion";
import Buscador from "./Search/Buscador.jsx";
import * as GeoTIFF from "geotiff";

import tiffExample from "../assets/example.tif";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNWNkMDcyYS1iOTI3LTQ5OTEtYmRlNy04MTQyMWVjNWZkNTIiLCJpZCI6MjQ2MTYyLCJpYXQiOjE3MjgxNzU2OTh9.o2e8nIJUFQ_JIehvPGBb0ra6Jhms_qSzGYMrDv7JlY4";

const Globe3D = ({ getPlace, loading, error, place }) => {
  const globeContainer = useRef(null);
  const viewer = useRef(null);
  const [openModalGrafico, setOpenModalGrafico] = useState(false);
  const [debugInfo, setDebugInfo] = useState("");

  useEffect(() => {
    if (viewer.current) return; // initialize globe only once

    const initViewer = async () => {
      try {
        console.log("Initializing Cesium viewer...");
        viewer.current = new Cesium.Viewer(globeContainer.current, {
          terrainProvider: await Cesium.createWorldTerrainAsync(),
          geocoder: false,
          homeButton: false,
          sceneModePicker: false,
          baseLayerPicker: false,
          navigationHelpButton: false,
          animation: false,
          timeline: false,
          fullscreenButton: false,
        });
        console.log("Cesium viewer initialized successfully");

        // Set up click event handler
        const handler = new Cesium.ScreenSpaceEventHandler(
          viewer.current.scene.canvas
        );
        handler.setInputAction((movement) => {
          const cartesian = viewer.current.camera.pickEllipsoid(
            movement.position,
            viewer.current.scene.globe.ellipsoid
          );
          if (cartesian) {
            const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            const longitude = Cesium.Math.toDegrees(cartographic.longitude);
            const latitude = Cesium.Math.toDegrees(cartographic.latitude);

            getPlace({ position: [latitude, longitude] });
            setOpenModalGrafico(true);
          }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        // Enable lighting based on sun/moon positions
        viewer.current.scene.globe.enableLighting = true;

        // Enable depth testing so things behind the terrain disappear.
        viewer.current.scene.globe.depthTestAgainstTerrain = true;

        // Add debug info
        setDebugInfo(
          `Cesium version: ${Cesium.VERSION}, ` +
            `Terrain Provider: ${
              viewer.current.terrainProvider
                ? viewer.current.terrainProvider.constructor.name
                : "Not available"
            }, ` +
            `Imagery Provider: ${
              viewer.current.imageryLayers.length > 0 &&
              viewer.current.imageryLayers.get(0).imageryProvider
                ? viewer.current.imageryLayers.get(0).imageryProvider
                    .constructor.name
                : "Not available"
            }`
        );

        // Wait for the globe to be fully loaded before adding the TIF overlay
        await waitForGlobeToLoad(viewer.current);
        console.log("Globe fully loaded. Adding TIF overlay...");
        await addTifOverlay();
      } catch (error) {
        console.error("Error initializing Cesium viewer:", error);
        setDebugInfo(`Error: ${error.message}`);
      }
    };

    initViewer();

    return () => {
      if (viewer.current) {
        viewer.current.destroy();
      }
    };
  }, [getPlace]);

  const waitForGlobeToLoad = (viewer) => {
    return new Promise((resolve) => {
      const tilesLoadedEvent = viewer.scene.globe.tileLoadProgressEvent;
      const removeListener = tilesLoadedEvent.addEventListener(
        (queuedTileCount) => {
          console.log(`Tiles remaining: ${queuedTileCount}`);
          if (queuedTileCount === 0) {
            console.log("All tiles loaded.");
            removeListener();
            resolve();
          }
        }
      );
    });
  };

  const addTifOverlay = async () => {
    try {
      console.log("Fetching TIF file...");
      const response = await fetch(tiffExample);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("TIF file fetched successfully");

      const arrayBuffer = await response.arrayBuffer();
      console.log("ArrayBuffer created, size:", arrayBuffer.byteLength);

      const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
      console.log("GeoTIFF parsed successfully");

      const image = await tiff.getImage();
      console.log(
        "Image retrieved, dimensions:",
        image.getWidth(),
        "x",
        image.getHeight()
      );

      const rasters = await image.readRasters();
      console.log("Rasters read, count:", rasters.length);

      const tiePoints = image.getTiePoints();
      console.log("Tie points:", tiePoints);
      if (!tiePoints || tiePoints.length === 0) {
        throw new Error("No tie points found in the GeoTIFF");
      }

      const tiepoint = tiePoints[0];
      console.log("First tie point:", tiepoint);

      const fileDirectory = image.getFileDirectory();
      console.log("File directory:", fileDirectory);
      if (!fileDirectory.ModelPixelScale) {
        throw new Error("ModelPixelScale not found in the file directory");
      }

      const pixelScale = fileDirectory.ModelPixelScale;
      console.log("Pixel scale:", pixelScale);

      const geoTransform = [
        tiepoint.x,
        pixelScale[0],
        0,
        tiepoint.y,
        0,
        -1 * pixelScale[1],
      ];
      console.log("Geographic information retrieved:", geoTransform);

      const width = image.getWidth();
      const height = image.getHeight();

      const west = geoTransform[0];
      const north = geoTransform[3];
      const east = west + width * geoTransform[1];
      const south = north + height * geoTransform[5];

      console.log("Calculated bounds:", { west, south, east, north });

      const rectangle = Cesium.Rectangle.fromDegrees(west, south, east, north);

      const canvasElement = document.createElement("canvas");
      canvasElement.width = width;
      canvasElement.height = height;
      const context = canvasElement.getContext("2d");

      const imageData = context.createImageData(width, height);

      if (rasters.length < 3) {
        console.warn(
          `Expected at least 3 raster bands, but got ${rasters.length}. Using available bands.`
        );
      }

      const band1 = rasters[0] || new Array(width * height).fill(0);
      const band2 = rasters[1] || band1;
      const band3 = rasters[2] || band1;

      const transparencyThreshold = 0;

      // Function to map value to color using a rainbow-like scale
      const getColor = (value) => {
        const hue = (1 - value) * 240; // Maps 0 to 240 (blue) and 1 to 0 (red)
        return hslToRgb(hue / 360, 1, 0.5);
      };

      // Helper function to convert HSL to RGB
      const hslToRgb = (h, s, l) => {
        let r, g, b;

        if (s === 0) {
          r = g = b = l; // achromatic
        } else {
          const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          };

          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
      };

      // Efficiently find min and max values
      let minValue = Infinity;
      let maxValue = -Infinity;

      for (let i = 0; i < width * height; i++) {
        const value = (band1[i] + band2[i] + band3[i]) / 3;
        minValue = Math.min(minValue, value);
        maxValue = Math.max(maxValue, value);
      }

      console.log("Min value:", minValue, "Max value:", maxValue);

      for (let i = 0; i < width * height; i++) {
        const r = band1[i];
        const g = band2[i];
        const b = band3[i];

        // Check if the pixel should be transparent
        if (
          r <= transparencyThreshold &&
          g <= transparencyThreshold &&
          b <= transparencyThreshold
        ) {
          // Set fully transparent
          imageData.data[i * 4] = 0;
          imageData.data[i * 4 + 1] = 0;
          imageData.data[i * 4 + 2] = 0;
          imageData.data[i * 4 + 3] = 0;
        } else {
          // Normalize the average value and get the corresponding color
          const avgValue = (r + g + b) / 3;
          const normalizedValue = (avgValue - minValue) / (maxValue - minValue);
          const [red, green, blue] = getColor(normalizedValue);

          imageData.data[i * 4] = red;
          imageData.data[i * 4 + 1] = green;
          imageData.data[i * 4 + 2] = blue;
          imageData.data[i * 4 + 3] = 255; // Full opacity
        }
      }

      context.putImageData(imageData, 0, 0);

      viewer.current.entities.add({
        rectangle: {
          coordinates: rectangle,
          material: new Cesium.ImageMaterialProperty({
            image: canvasElement,
          }),
        },
      });

      viewer.current.camera.flyTo({
        destination: rectangle,
      });

      console.log("TIF overlay added successfully");
    } catch (error) {
      console.error("Error adding TIF overlay:", error);
      setDebugInfo(
        `Error adding TIF overlay: ${error.message}\nStack: ${error.stack}`
      );
    }
  };

  // Function to fly to a specific location
  const flyTo = (lat, lon) => {
    viewer.current.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(lon, lat, 1000000),
      duration: 3,
    });
  };

  return (
    <>
      <ModalGrafico
        open={openModalGrafico}
        position={place}
        onClose={() => setOpenModalGrafico(false)}
      />

      <div className="absolute top-4 left-4 z-10">
        <Buscador onSearch={(lat, lon) => flyTo(lat, lon)} />
      </div>

      <div className="relative">
        <ModalEleccion />

        <div ref={globeContainer} style={{ height: "100vh", width: "100%" }} />
      </div>

      <div className="absolute bottom-4 left-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded">
        {debugInfo}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.place.loading,
  place: state.place.place,
  error: state.place.error,
});

Globe3D.propTypes = {
  getPlace: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
  place: PropTypes.array,
};

export default connect(mapStateToProps, { getPlace })(Globe3D);
