export function avarageCounter(scores){
  let Sum = 0;
 scores.map(el => Sum+=parseInt(el));
 if (scores.length===0){
   return 0;
 }
 return `${((Sum/scores.length)/Sum)*100}%`;
}

