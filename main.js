import './style.css'

function ageValidation (age) {
  if (age >= 18) {
    return 'You may pass'
  }

  return 'You shall not pass'
}

function agePrompt () {
  const age = prompt('What is your age?');

  alert(ageValidation(age));
}

agePrompt();