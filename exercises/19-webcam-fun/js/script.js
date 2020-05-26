const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => console.error('Oh No!!', err));
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    let pixels = ctx.getImageData(0, 0, width, height);

    // pixels = redEffect(pixels);

    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1;

    pixels = greenScreen(pixels);

    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  snap.currenTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'beautiful');
  link.innerHTML = `<img src="${data}" alt="Beautiful Person" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixel) {
  for (let i = 0; i < pixel.data.length; i += 4) {
    pixel.data[i + 0] = pixel.data[i + 0] + 200; // r
    pixel.data[i + 1] = pixel.data[i + 1] - 50; // g
    pixel.data[i + 2] = pixel.data[i + 2] * 0.5; // b
  }
  return pixel;
}

function rgbSplit(pixel) {
  for (let i = 0; i < pixel.data.length; i += 4) {
    pixel.data[i - 150] = pixel.data[i + 0]; // r
    pixel.data[i + 100] = pixel.data[i + 1]; // g
    pixel.data[i - 200] = pixel.data[i + 2]; // b
  }
  return pixel;
}

function greenScreen(pixel) {
  const levels = {};

  document
    .querySelectorAll('.rgb input')
    .forEach((input) => (levels[input.name] = input.value));

  for (i = 0; i < pixel.data.length; i += 4) {
    red = pixel.data[i + 0];
    green = pixel.data[i + 1];
    blue = pixel.data[i + 2];
    alpha = pixel.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixel.data[i + 3] = 0;
    }
  }

  return pixel;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
