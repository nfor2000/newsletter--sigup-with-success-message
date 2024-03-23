const form = document.getElementById('form');
const formInput = document.getElementById('email');
const main = document.querySelector('main');
const emailEl = document.querySelector('.email-el');

form.onsubmit = handleSubmit;

formInput.onfocus = (e) => {
     const parent = e.target.parentElement;
     if(parent.classList.contains('error'))
     {
          parent.classList.remove('error')
     }

}

const dismissBtn = document.getElementById('dismiss-btn');

dismissBtn.onclick = () => {
     main.classList.remove('success')
}

function handleSubmit(e) {
     e.preventDefault();

     if (checkInput()) {
          if(checkEmail()){
               main.classList.add('success');
               emailEl.innerHTML = formInput.value;
               formInput.value = '';
          }
     }
}

function checkInput ()
{
     let value = formInput.value;

     if(value === ""){
          displayError(formInput, 'required')
          return false;
     }

     return true;
}


function checkEmail () {
     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     let value = formInput.value;
     
     if(!re.test(value.trim()))
     {
          displayError(formInput, 'not valid')
          return false;
     }

     return true;
}

function getId(input)
{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1, input.id.length)
}

function displayError(input, msg)
{
     const parent = input.parentElement;
          parent.classList.add('error');
          const error = parent.querySelector('span');
          error.innerHTML = `${getId(input)} ${msg}`;
}