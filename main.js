
function sum(numbers){

  let result;

  for(let i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }

  return result;
}

function displayResult(result){
  const div = document.createElement('div')
  const text = `the result is ${result}`
  div.innerHTML = text;
  document.body.appendChild(div)
}

// form
const form = document.getElementById('calculator');

// input field
const input = document.getElementById('user_input');

debugger;

form.addEventListener('submit', function(e) {
  // prevent default action
  e.preventDefault()

  // 1. get user input
  const weight = input.value.split(' ');

  // 2. calculate result
  const result = sum(weight)

  // 3. display it
  displayResult(result);
})

