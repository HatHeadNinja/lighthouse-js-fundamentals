const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'poof';

function judgeVegetable (vegetable, metric) {
  let winner = 'No clear winner yet!';
  let highScore = 0;

  if (metric === 'redness'){
    for (let i = 0; i < vegetable.length; i++) {
      if (vegetable[i].redness > highScore){
        highScore = vegetable[i].redness;
        winner = vegetable[i].submitter;
      }
    }
  } else if (metric === 'plumpness'){
    for (let i = 0; i < vegetable.length; i++) {
      if (vegetable[i].plumpness > highScore){
        highScore = vegetable[i].plumpness;
        winner = vegetable[i].submitter;
      }
    }
  } else if (metric === 'overall') {
    for (let i = 0; i < vegetable.length; i++) {
      if (vegetable[i].redness + vegetable[i].plumpness > highScore){
        highScore = vegetable[i].redness + vegetable[i].plumpness;
        winner = vegetable[i].submitter;
      }        
    }
  } else {
    //return requested error code
    winner = "C";
  }
  return winner;
};

rednessWinner = judgeVegetable(vegetables, metric);

console.log(rednessWinner);