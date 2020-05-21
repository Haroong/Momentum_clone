const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greetings = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(name){
  // save name to a local storage
  localStorage.setItem(USER_LS, name);
}

function handleSubmit(event){
  event.preventDefault(); // prevent blank form when submit
  const currentValue = input.value;
  paintGreetings(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN); // shows form
  form.addEventListener('submit', handleSubmit);
}

function paintGreetings(text){
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerHTML = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null){
    // user isn't exist
    askForName();
    console.log('No one is here');
  } else {
    // user is exist
    paintGreetings(currentUser);
  }
}

function init(){
  loadName();
}

init();