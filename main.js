/**
  get and parse user input numbers
**/
function getUserInput(form){
  const input = form.querySelector('#user-input');

  return input.value.split(',').map(Number);
}

/**
  returns sum of all numbers in array
**/
function getSum(numbers){
  let result;
  let num;

  for(let i = 0; i < numbers.length; i++) {
    num = numbers[i];
    result += num;
  }

  return result;
}

/**
  appends summation result to body
**/
function displayResult(result){
  const div = document.createElement('div');
  const text = `the result is ${result}`;

  div.innerHTML = text;
  document.body.appendChild(div);
}

/**
  initialize app
**/
function main(){
  const form = document.getElementById('calculator');

  // when form is submitted,
  form.addEventListener('submit', function(e) {
    // prevent default action
    e.preventDefault()

    // 1. parse user input
    const numbers = getUserInput(form);

    // 2. calculate result
    const result = getSum(numbers)

    // 3. display it
    displayResult(result);
  })
}

main();









