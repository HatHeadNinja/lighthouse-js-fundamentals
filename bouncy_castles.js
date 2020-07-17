// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // The volume V of a sphere is four-thirds times pi times the radius cubed. V=43πr3
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // The volume of a cone is \frac { 1 } { 3 } \pi r ^{ 2 } h 3 1 ​ πr 2 h, where rr denotes the radius of the base of the cone, and hh denotes the height of the cone
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Any prism volume is V = BH where B is area of base and H is height of prism, so find area of the base by B = 1/2 h(b1+b2), then multiply by the height of the prism
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.
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