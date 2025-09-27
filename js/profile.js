document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username') || 'Student';

  const profileNameSpans = document.querySelectorAll('#username-profile, #profile-name');
  profileNameSpans.forEach(span => {
    span.textContent = username;
  });
});
