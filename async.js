function badCallback(e){
  e.preventDefault();

  // make bad things happen
  const x = nonExistent/0;
}

function okCallback(e){
  e.preventDefault();

  e.target.classList.add('clicked');
  e.target.innerHTML = 'hello'
}


const container = document.querySelector('.card-container')

// make many buttons with one faulty one
for (let i = 0; i < 49; i++) {
  const card = document.createElement('a');
  card.href = '';
  card.classList.add('card');
  card.innerHTML = 'pick me';

  const btnCallback = Math.random() < 0.2 ? badCallback : okCallback;
  card.addEventListener('click', btnCallback);

  container.appendChild(card);
}

const cards = container.querySelectorAll('.card')
document.querySelector('.random-btn').addEventListener('click', function(e){
  e.preventDefault();
  // click on a random card
  const random = cards[Math.floor(Math.random() * cards.length)];
  random.click();
})