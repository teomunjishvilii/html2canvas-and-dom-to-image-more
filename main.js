// html2canvas example //

document.getElementById("captureButton").addEventListener("click", function () {
  html2canvas(document.getElementById("capture")).then((canvas) => {
    document.body.appendChild(canvas);
  });
});

// dom-to-image-more example //

function capture() {
  domtoimage
    .toPng(document.getElementById("capture2"))
    .then((dataUrl) => {
      let img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
    .catch((error) => {
      console.error("oops, something went wrong!", error);
    });
}

document.getElementById("captureButton2").addEventListener("click", capture);
