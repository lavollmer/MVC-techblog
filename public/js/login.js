async function newFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#validationCustomUsername').value;
  const password = document.querySelector('#inputPassword5').value;

  const response = await fetch(`/api/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  },
  );
  if (response.ok) {
    document.location.replace('/')
  } else {
    alert('Failed to signup - Please try again')
  }
}

document.querySelector('.signup-form').addEventListener('submit', newFormHandler);