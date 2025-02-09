// Get elements
const loginForm = document.getElementById('loginForm');
const signupLink = document.getElementById('signupLink');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const signupModal = document.getElementById('signupModal');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeButtons = document.querySelectorAll('.close');

// Open Signup Modal
signupLink.addEventListener('click', () => {
  signupModal.style.display = 'flex';
});

// Open Forgot Password Modal
forgotPasswordLink.addEventListener('click', () => {
  forgotPasswordModal.style.display = 'flex';
});

// Close Modals
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    signupModal.style.display = 'none';
    forgotPasswordModal.style.display = 'none';
  });
});

// Handle Signup
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  // Save user to localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.username === newUsername);

  if (userExists) {
    alert('Username already exists. Please choose another.');
  } else {
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! Please login.');
    signupModal.style.display = 'none';
  }
});

// Handle Forgot Password
document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const forgotUsername = document.getElementById('forgotUsername').value;

  // Retrieve user from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.username === forgotUsername);

  if (user) {
    alert(`Your password is: ${user.password}`);
  } else {
    alert('Username not found.');
  }
  forgotPasswordModal.style.display = 'none';
});

// Handle Login
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Retrieve user from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert('Login successful!');
    window.location.href = 'todo.html'; // Redirect to To-Do List page
  } else {
    alert('Invalid username or password.');
  }
});