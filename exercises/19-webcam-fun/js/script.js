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

    pixels = redEffect(pixels);

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

function redEffect(px) {
  for (let i = 0; i < px.data.length; i += 4) {
    px.data[i + 0] = px.data[i + 0] + 100; // r
    px.data[i + 1] = px.data[i + 1] - 50; // g
    px.data[i + 2] = px.data[i + 2] * 0.5; // b
  }
  return px;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
