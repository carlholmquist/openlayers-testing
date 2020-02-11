import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import createOverlay from "./overlay";

const initMap = () => {
  let layer = new TileLayer({
    source: new XYZ({
      url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    })
  });

  let map = new Map({
    target: "map",
    layers: [layer],
    view: new View({
      center: [0, 0],
      zoom: 2
    }),
    overlays: [createOverlay()]
  });
  return map;
};
export default initMap;
