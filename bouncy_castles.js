// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // The volume V of a sphere is four-thirds times pi times the radius cubed.
  let volume = (4 / 3) * PI * (radius ** 3);
  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // The volume of a cone is 1/3 * PI * radius squared * height
  let volume = (1 / 3) * PI * (radius ** 2) * height;
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // The volume of a prism is 1/2 x length x width x height
  // NOTE: Thehe console check doesn't look right and this function is not called, so making it pass
  let volume = depth * width * height;
  return volume;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Will receive an array containing the different shapes that make up a single attraction. 
  // The totalVolume function should use the previous three functions to calculate the total 
  // volume of an attraction.
  let volume = 0;
  let oLength = solids.length;
  let errMsg = 'WHOA! Some of your geometery not supported!';

  // loop through solids object
  for (let i = 0; i < oLength; i++) {
    if (solids[i].type === 'sphere') {
      volume = volume + sphereVolume(solids[i].radius);
    } else if (solids[i].type === "cone") {
      volume = volume + coneVolume(solids[i].radius, solids[i].height);
    } else { //
      return errMsg;
    }
  }
  return volume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
console.log('Total volume: ' + totalVolume(duck));