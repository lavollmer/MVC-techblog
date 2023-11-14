async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#validationCustomUsername').value.trim();
  const password = document.querySelector('#inputPassword5').value.trim();

  //if both email and password have been selected
  if (email && password) {
    const response = await fetch(`/api/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //if response is successful, will replace with new info
    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Failed to login - Please try again')
    }
  }
};

//event listener for submit button 
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);