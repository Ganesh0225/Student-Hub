window.onload = function() {
  if (typeof loadNavbar === "function") loadNavbar();
  const username = localStorage.getItem('username') || "Student";
  document.getElementById('dashboard-welcome').innerText = `Welcome to Student Board, ${username}!`;
};
