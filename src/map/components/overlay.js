import Overlay from "ol/Overlay";

const createOverlay = () => {
  let container = document.getElementById("popup-container");

  let overlay = new Overlay({
    position: [-10625358.42786578, 3600489.7803449417],
    element: container
  });
  return overlay;
};

export default createOverlay;
// map.on("singleclick", function(evt) {
//     content.innerHTML = "<p>You clicked here";
//     console.log(evt.coordinate);
//     overlay.setPosition(evt.coordinate);
//   });
