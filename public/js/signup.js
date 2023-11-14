async function newFormHandler(event) {
  event.preventDefault();
  const first_name = document.querySelector('#validationCustom01').value;
  const last_name = document.querySelector('#validationCustom02').value;
  const username = document.querySelector('#validationCustomUsername').value;
  const password = document.querySelector('#inputPassword5').value;

  const response = await fetch(`/api/signup`, {
    method: 'POST',
    body: JSON.stringify({
      first_name,
      last_name,
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
