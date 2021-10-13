const bdate = document.querySelector('#date');
const lucky = document.querySelector('#lucky');
const check = document.querySelector('#check');

const display = document.querySelector('.display');

check.addEventListener('click', () => {
  display.style.display = 'none';
  if (lucky.value > 0 && bdate.value != '') {
    checkBday(bdate.value);
  } else {
    displayMessage('Enter positive number and fill the required fields');
  }
});

function checklucky(sum1) {
  if (sum1 % lucky.value == 0) {
    displayMessage('Your bday is lucky');
  } else {
    displayMessage('Oops your bday is unlucky');
  }
}

function checkBday(bdate) {
  const birthDigit = bdate.replaceAll('-', '');
  var sum1 = 0;
  for (let i = 0; i < birthDigit.length; i++) {
    sum1 += Number(birthDigit[i]);
  }
  checklucky(sum1);
}

function displayMessage(message) {
  display.style.display = 'block';
  display.innerText = message;
}
