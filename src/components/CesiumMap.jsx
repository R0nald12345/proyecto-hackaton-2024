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

import tiff2019 from "../assets/Forestacion_co2_2019-12-30.tif";
import tiff2020 from "../assets/Forestacion_co2_2020-12-26.tif";
import tiff2021 from "../assets/Forestacion_co2_2021-12-30.tif";
import tiff2022 from "../assets/Forestacion_co2_2022-09-30.tif";
import ModalCapas from "./Modal/ModalCapas.jsx";
import ModalInfoCountry from "./Modal/ModalInfoCountry.jsx";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNWNkMDcyYS1iOTI3LTQ5OTEtYmRlNy04MTQyMWVjNWZkNTIiLCJpZCI6MjQ2MTYyLCJpYXQiOjE3MjgxNzU2OTh9.o2e8nIJUFQ_JIehvPGBb0ra6Jhms_qSzGYMrDv7JlY4";

const Globe3D = ({ getPlace, loading, error, place }) => {
  const globeContainer = useRef(null);
  const viewer = useRef(null);
  const [openModalGrafico, setOpenModalGrafico] = useState(false);

  const [debugInfo, setDebugInfo] = useState("");

  const [year, setYear] = useState(2019);
  const [mapType, setMapType] = useState("default");
  const [currentMapYear, setCurrentMapYear] = useState(tiff2019);

  console.log(year);

  useEffect(() => {
    if (year === 2020) {
      setCurrentMapYear(tiff2020);
    } else if (year === 2021) {
      setCurrentMapYear(tiff2021);
    } else if (year == 2019) {
      setCurrentMapYear(tiff2019);
    } else {
      setCurrentMapYear(tiff2022);
    }
  }, [year]);

  useEffect(() => {
    if (viewer.current) {
      addTifOverlay();
    }
  }, [currentMapYear]);

  function handleYear(incomingYear) {
    setYear(incomingYear);
  }

  function handleMapType(incomingMapType) {
    setMapType(incomingMapType);
  }

  useEffect(() => {
    if (place.length > 0) {
      flyTo(place[0], place[1]);
      setOpenModalGrafico(true);
    }
  }, [place]);

  const color_ranges_with_values = [
    { rgb: [160, 32, 240], range: [0, 0.007621728] }, // Purple
    { rgb: [145, 30, 220], range: [0.007621728, 0.026676049] },
    { rgb: [130, 28, 200], range: [0.026676049, 0.053352097] },
    { rgb: [115, 26, 180], range: [0.053352097, 0.080082146] },
    { rgb: [100, 24, 160], range: [0.080082146, 0.115015509] },
    { rgb: [85, 22, 140], range: [0.115015509, 0.144812836] },
    { rgb: [70, 20, 120], range: [0.144812836, 0.182921471] },
    { rgb: [60, 18, 110], range: [0.182921471, 0.224840982] }, // Dark Purple ends here
    { rgb: [0, 0, 139], range: [0.224840982, 0.274382115] }, // Dark Blue starts here
    { rgb: [0, 0, 200], range: [0.274382115, 0.327734313] }, // Blue
    { rgb: [30, 144, 255], range: [0.327734313, 0.384897274] }, // Dodger Blue
    { rgb: [100, 149, 237], range: [0.384897274, 0.43848846] }, // Cornflower Blue
    { rgb: [135, 206, 250], range: [0.43848846, 0.492223972] }, // Light Sky Blue
    { rgb: [173, 216, 230], range: [0.492223972, 0.555275495] }, // Light Blue
    { rgb: [180, 238, 255], range: [0.555275495, 0.650972327] }, // Light Cyan
    { rgb: [224, 255, 255], range: [0.650972327, 0.718606642] }, // Pale Turquoise
    { rgb: [240, 255, 255], range: [0.718606642, 0.778602703] }, // Azure
    { rgb: [255, 255, 255], range: [0.778602703, 0.776305314] }, // White
  ];

  const getColor = (value) => {
    if (value >= 0 && value < 0.007621728) {
      return [0, 0, 0, 0]; // Fully transparent for the first range
    }

    for (let range of color_ranges_with_values) {
      if (value >= range.range[0] && value < range.range[1]) {
        return [...range.rgb, 255]; // Add alpha value of 255
      }
    }
    return [0, 0, 0, 0]; // Fully transparent for values outside all ranges
  };

  useEffect(() => {
    if (viewer.current) return; // initialize globe only once

    const initViewer = async () => {
      try {
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
        await addTifOverlay();
      } catch (error) {
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
          if (queuedTileCount === 0) {
            removeListener();
            resolve();
          }
        }
      );
    });
  };

  const clampLatitude = (latitude) => {
    const minLatitude = -90 + Cesium.Math.EPSILON5;
    const maxLatitude = 90 - Cesium.Math.EPSILON5;
    return Math.max(minLatitude, Math.min(maxLatitude, latitude));
  };

  const clampLongitude = (longitude) => {
    const minLongitude = -180 + Cesium.Math.EPSILON5;
    const maxLongitude = 180 - Cesium.Math.EPSILON5;
    return Math.max(minLongitude, Math.min(maxLongitude, longitude));
  };

  const addTifOverlay = async () => {
    try {
      // Clear existing overlay
      viewer.current.entities.removeAll();

      const response = await fetch(currentMapYear);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();

      const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);

      const image = await tiff.getImage();

      const rasters = await image.readRasters();

      const tiePoints = image.getTiePoints();
      if (!tiePoints || tiePoints.length === 0) {
        throw new Error("No tie points found in the GeoTIFF");
      }

      const tiepoint = tiePoints[0];

      const fileDirectory = image.getFileDirectory();
      if (!fileDirectory.ModelPixelScale) {
        throw new Error("ModelPixelScale not found in the file directory");
      }

      const pixelScale = fileDirectory.ModelPixelScale;

      const geoTransform = [
        tiepoint.x,
        pixelScale[0],
        0,
        tiepoint.y,
        0,
        -1 * pixelScale[1],
      ];

      const width = image.getWidth();
      const height = image.getHeight();

      let west = geoTransform[0];
      let north = geoTransform[3];
      let east = west + width * geoTransform[1];
      let south = north + height * geoTransform[5];

      // Clamp latitude and longitude values
      west = clampLongitude(west);
      east = clampLongitude(east);
      south = clampLatitude(south);
      north = clampLatitude(north);

      const rectangle = Cesium.Rectangle.fromDegrees(west, south, east, north);

      // Create canvas and populate it with image data
      const canvasElement = document.createElement("canvas");
      canvasElement.width = width;
      canvasElement.height = height;
      const context = canvasElement.getContext("2d");

      const imageData = context.createImageData(width, height);

      // Assuming single-band data for simplicity
      // Adjust this part based on your actual data structure
      const band = rasters[0];

      for (let i = 0; i < width * height; i++) {
        const [red, green, blue, alpha] = getColor(band[i]);
        imageData.data[i * 4] = red;
        imageData.data[i * 4 + 1] = green;
        imageData.data[i * 4 + 2] = blue;
        imageData.data[i * 4 + 3] = alpha;
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
    } catch (error) {
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
      <div
        style={{ position: "fixed", zIndex: "10", right: "10px" }}
        className="flex gap-10 justify-center"
      >
        <ModalCapas handleMapType={handleMapType} />
      </div>
      <ModalEleccion yearFunction={handleYear} />

      <ModalGrafico
        open={openModalGrafico}
        position={place}
        onClose={() => setOpenModalGrafico(false)}
      />

      {/* <ModalInfoCountry
        open={openModalGraficoInfo}
        onClose={() => setOpenGraficoInfo(false)}
        place={place}
      /> */}

      <div className="absolute top-4 left-4 z-10">
        <Buscador onSearch={(lat, lon) => flyTo(lat, lon)} />
      </div>

      <div className="relative">
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
