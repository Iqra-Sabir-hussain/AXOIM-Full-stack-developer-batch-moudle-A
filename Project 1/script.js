//Retriving element from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error

   formControl.className = 'form-control error';
   //samll button
    const small = formControl.querySelector ('small');
    //mesage appear
    small.innerText=message;
};
//sucess call
function showSucess(input)
{
    const formControl =input.parentElement;
    formControl.className ='form-control success';
};

//creat evnt listener on submit button 
form.addEventListener('submit',function (e)
{
    //stop reloading on submit button 
    e.preventDefault();
    if( username.value === '')
       {
    showError(username,'username is not requried ');
       }
    else
       {
        showSucess(username);
       }
//email
    if( username.value === '')
      {
    showError(email,'email is not requried ');
       }
    else
      {
        showSucess(email);
       }

  // password
       if( username.value === '')
      {
    showError(password,'Passwird is not requried ');
       }
    else
      {
        showSucess(password);
       }

       // password2
       if( username.value === '')
      {
    showError(password2,'confirm email is not requried ');
       }
    else
      {
        showSucess(password2);
       }


});
