let counterValue = 0;
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counterEl = document.getElementById('counter');

const ulElement = document.getElementById('list-item');

function incrementCounter() {
    counterValue++;
    counterEl.innerHTML = counterValue;
    const li = document.createElement('li');

    li.setAttribute('data-counter', counterValue);

    li.innerHTML = '<b>Something </b>' + counterValue;
    ulElement.appendChild(li)
    
}

function decrementCounter() {
    const li = ulElement.querySelector('[data-counter="'+counterValue+'"]')
    // li.remove()

    const number = parseInt(li.getAttribute('data-counter'), 10);
    if (number %2 === 0) {
        li.remove();
    }
    counterValue--;
    counterEl.innerHTML = counterValue;
    
}

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);

const para = document.getElementById('para');
