let count = 0;

const increment = (step) => {
  if(typeof step !== 'number') {
    return;
  }

  count += step
}

const decrement = (step) => {
  if(typeof step !== 'number') {
    return;
  }
  
  if(count === 0 || count < step) {
    return count = 0;
  }

  count -= step
}