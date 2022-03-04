// console.clear();

function sequenceOne() {

  const canvas = document.getElementById('seqOneCan')
  const context = canvas.getContext("2d");

  canvas.width = 960;
  canvas.height = 1080;

  const frameCount = 53;
  const currentFrame = index => (
    `images/iPhoneSequences/sequenceOne/${(index + 1).toString().padStart(4, '0')}.png`
    );

  const images = [];
  const iphone = {
    frame: 0
  };

  // console.log(currentFrame.length)

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  gsap.to(iphone, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      trigger: '#featureOne',
      pin: true,
      start: 'top top',
      end: 'x+=100vh'
    },
    onUpdate: render
  })

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[iphone.frame], 0, 0);
  }

}

function sequenceTwo() {

  const canvas = document.getElementById('seqTwoCan')
  const context = canvas.getContext("2d");

  canvas.width = 960;
  canvas.height = 1080;

  const frameCount = 59;
  const currentFrame = index => (
    `images/iPhoneSequences/sequenceTwo/${(index + 1).toString().padStart(4, '0')}.png`
    );

  const images = [];
  const iphone = {
    frame: 0
  };

  // console.log(currentFrame.length)

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  gsap.to(iphone, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      trigger: '#featureTwo',
      pin: true,
      start: 'top top',
      end: 'x+=100vh'
    },
    onUpdate: render
  })

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[iphone.frame], 0, 0);
  }

}

function sequenceThree() {

  const canvas = document.getElementById('seqThreeCan')
  const context = canvas.getContext("2d");

  canvas.width = 960;
  canvas.height = 1080;

  const frameCount = 53;
  const currentFrame = index => (
    `images/iPhoneSequences/sequenceThree/${(index + 1).toString().padStart(4, '0')}.png`
    );

  const images = [];
  const iphone = {
    frame: 0
  };

  // console.log(currentFrame.length)

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  gsap.to(iphone, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      trigger: '#featureThree',
      pin: true,
      start: 'top top',
      end: 'x+=100vh'
    },
    onUpdate: render
  })

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[iphone.frame], 0, 0);
  }

}

const staticImageArray = [
  './images/iPhoneSequences/sequenceOne/0053.png',
  './images/iPhoneSequences/sequenceTwo/0059.png',
  './images/iPhoneSequences/sequenceThree/0053.png'
]

const loadStaticImages = () => {
  // Canvas 1
  const canvasOne = document.getElementById('seqOneCan')
  const parentOne = canvasOne.parentElement;
  const imgOne = new Image();
  imgOne.src = './images/iPhoneSequences/sequenceOne/0053.png'
  parentOne.appendChild(imgOne)
  canvasOne.remove();

  // Canvas 2
  const canvasTwo = document.getElementById('seqTwoCan')
  const parentTwo = canvasTwo.parentElement;
  const imgTwo = new Image();
  imgTwo.src = './images/iPhoneSequences/sequenceTwo/0059.png'
  parentTwo.appendChild(imgTwo)
  canvasTwo.remove();

  // Canvas 3
  const canvasThree = document.getElementById('seqThreeCan')
  const parentThree = canvasThree.parentElement
  const imgThree = new Image();
  imgThree.src = './images/iPhoneSequences/sequenceThree/0053.png';
  parentThree.appendChild(imgThree)
  canvasThree.remove();
}



function myFunction(x) {
  if (x.matches) {
    loadStaticImages();
  } else {
    loadStaticImages();
    // sequenceOne();
    // sequenceTwo();
    // sequenceThree();
  }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x)

document.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    document.body.style.backgroundColor = '#444444';
    // console.log('gray')
  } else {
    document.body.style.backgroundColor = '#FFFFFF'
    // console.log('white')
  }
})