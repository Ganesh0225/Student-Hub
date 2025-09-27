// js/login.js
const portalButtons = document.querySelectorAll('.portal-button');
const loginForm = document.getElementById('login-form');
const welcomeMsg = document.getElementById('welcome-msg');
let selectedRole = null;
localStorage.setItem('username', username);  // saves username
portalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedRole = btn.getAttribute('data-role');
    // Show form when a role is selected
    loginForm.classList.add('active');
    welcomeMsg.textContent = `Login as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`;
    clearErrors();
  });
});

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  clearErrors();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  let hasError = false;

  if (!username) {
    showError('username-error');
    hasError = true;
  }
  if (!password) {
    showError('password-error');
    hasError = true;
  }
  if (!selectedRole) {
    alert('Please select Student or Faculty portal.');
    hasError = true;
  }

  if (!hasError) {
    // For demo: Simulate successful login, redirect to respective dashboard
    alert(`Logged in as ${selectedRole} - ${username}`);
    let redirectUrl = selectedRole === 'student' ? 'dashboard.html' : 'approval.html';
    // Save user info for session (could be JWT, etc.)
    localStorage.setItem('username', username);
    localStorage.setItem('role', selectedRole);
    window.location.href = redirectUrl;
  }
});

function showError(id) {
  document.getElementById(id).style.display = 'block';
}

function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
}
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  
  // Example check for new user (replace with your actual check)
  const isNewUser = !localStorage.getItem(`user_${username}`);

  if (isNewUser) {
    document.getElementById('new-user-prompt').style.display = 'block';
  } else {
    // Proceed with regular login
    loginUser(username);
  }
});

document.getElementById('btn-create-account').addEventListener('click', function() {
  const username = document.getElementById('username').value.trim();
  createUserAccount(username);
  document.getElementById('new-user-prompt').style.display = 'none';
});

document.getElementById('btn-cancel-account').addEventListener('click', function() {
  document.getElementById('new-user-prompt').style.display = 'none';
  document.getElementById('login-form').reset();
});

function loginUser(username) {
  alert(`Welcome back, ${username}! Logging you in...`);
  // Your login logic here (redirect or session etc)
}

function createUserAccount(username) {
  alert(`Account created for ${username}! You can now log in.`);
  localStorage.setItem(`user_${username}`, 'registered');
  // Additional account creation logic here
}
document.getElementById('btn-create-account').addEventListener('click', function() {
  alert('Redirecting to account creation page or showing signup form...');
  // Your account creation logic here or redirect
});

document.getElementById('btn-cancel').addEventListener('click', function() {
  alert('Cancelled new account creation');
  // You might reset form or hide signup UI here
});

loginForm.addEventListener('submit', function(e) {
  // login validation and redirect logic
});

document.getElementById('login-form').addEventListener('submit', function(e) {
  // check for new user, show new user prompt
});
document.getElementById('btn-create-account').addEventListener('click', function() {
  alert('Redirecting to account creation page or showing signup form...');
  // Your account creation logic goes here
});
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Form submitted');

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Selected Role:', selectedRole);

  // validation and rest of logic...
});
