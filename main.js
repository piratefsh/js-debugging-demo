/**
  returns sum of all numbers in array
**/
function getSum(numbers){
  let result;

  for(let i = 0; i < numbers.length; i++) {
    result += numbers[i]
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
  const input = form.querySelector('#user_input');

  // when form is submitted,
  form.addEventListener('submit', function(e) {
    // prevent default action
    e.preventDefault()

    // 1. get user input
    const weight = input.value.split(',');

    // 2. calculate result
    const result = getSum(weight)

    // 3. display it
    displayResult(result);
  })
}

main();
