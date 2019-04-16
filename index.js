
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1 class="heading">Average mean of a RGB in Hex</h1>`;

const form = document.querySelector('form');
const inputRGB1 = document.querySelector('input[name="inputRGB1"]');
const inputRGB2 = document.querySelector('input[name="inputRGB2"]');
const result = document.querySelector('.result');
const resultRGB = document.querySelector('input[name="resultRGB"]');

// set an initial value;
inputRGB1.value="#0000cc";
inputRGB2.value="#00cc00";

const calcAverageRGB = (hex1, hex2) => {

  return parseInt(Math.floor((hex1+hex2) / 2)).toString(16).padStart(2, '0');
  
}

const calcAverageRGBs = (inputRGB1, inputRGB2) => {
  const hex1 = parseInt(inputRGB1.value.replace('#', '0x'), 16);
  const hex2 = parseInt(inputRGB2.value.replace('#', '0x'), 16);
  

  const b1 = calcAverageRGB(hex1 & 0xff, hex2 & 0xff);
  const b2 = calcAverageRGB(hex1 >> 8 & 0xff, hex2 >> 8 & 0xff);
  const b3 = calcAverageRGB(hex1 >> 16 & 0xff, hex2 >> 16 & 0xff);
  return `0x${b3}${b2}${b1}`
  
}

const processForm = (event) => {
  event.preventDefault();
  let avgRGB, resultText;

  if (inputRGB1 && inputRGB2) {
    avgRGB = calcAverageRGBs(inputRGB1, inputRGB2);
    resultText = `${avgRGB}`;
    resultRGB.value = avgRGB.toString().replace('0x','#');
    resultRGB.className=""
    
  }
  else {
    resultText = `Invalid Input`;

  }
  result.innerHTML=resultText;
}

form.addEventListener('submit', processForm);
inputRGB1.addEventListener('change', (event) => {
  document.querySelector('.rgb1').innerHTML=inputRGB1.value
})
inputRGB2.addEventListener('change', (event) => {
  document.querySelector('.rgb2').innerHTML=inputRGB2.value
})
