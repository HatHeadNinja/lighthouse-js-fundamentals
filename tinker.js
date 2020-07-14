const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 2
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 7,
    plumpness: 7
  }
]

const judgeVegetable = function(vegetable, metric) {
  let winner = 'C'; // default error state
  let highScore = 0;

  if (metric === 'redness'){
    vegetable.forEach(element => {
      if (element.redness > highScore) {
        highScore = element.redness;
        winner = element.submitter;
      }
    }
  ) } else if (metric === 'plumpness') {
    vegetable.forEach(element => {
      if (element.plumpness > highScore) {
        highScore = element.plumpness;
        winner = element.submitter;
      }
    }
  ) } else if (metric === 'overall'){
    vegetable.forEach(element => {
      if (element.redness + element.plumpness > highScore) {
        highScore = element.redness + element.plumpness;
        winner = element.submitter;
      }
    }
  )}
  return winner;
}

function msg(){  
  alert("Hello from JS file!");  
}  

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));