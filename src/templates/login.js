// file login finished
function login(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonReturn = document.createElement('button');
    const form = document.createElement('form');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLogin = document.createElement('input');
  
    inputEmail.placeholder = 'Write email';
    inputPass.placeholder = 'pass';
    inputPass.type = 'password';
  
    title.textContent = 'Login';
    buttonLogin.value = 'go';
    buttonLogin.type = 'submit'; 

    buttonReturn.textContent = 'Return to home';
    buttonReturn.addEventListener('click', () => {
      navigateTo('/');
    });
  
    form.append(inputEmail, inputPass, buttonLogin);
    section.append(title, form, buttonReturn);
  
    return section;
  }
  
  export default login;