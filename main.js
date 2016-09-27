/**
  returns sum of all numbers in array
**/
function getSum(numbers){
  let result;
  let convertedNum;

  for(let i = 0; i < numbers.length; i++) {
    convertedNum = new Number(numbers[i])
    result += convertedNum
  }

  return result;
}

/**
  appends summation result to body
**/
function displayResult(result){
  const div = document.createElement('div')
  const text = `the result is ${result}`

  div.innerHTML = text;
  document.body.appendChild(div)
}

/**
  initialize app
**/
function main(){
  // get form
  const form = document.getElementById('calculator');

  // get input field in form
  const input = form.querySelector('#user-input');

  // when form is submitted,
  form.addEventListener('submit', function(e) {
    // prevent default action
    e.preventDefault()

    // 1. parse user input
    const numbers = input.value.split(',');

    // 2. calculate result
    const result = getSum(numbers)

    // 3. display it
    displayResult(result);
  })
}

main();
