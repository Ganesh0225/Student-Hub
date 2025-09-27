document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username') || 'Student';
  const userSpan = document.getElementById('username-portfolio');
  const welcomeSpan = document.getElementById('username-welcome');
  if (userSpan) userSpan.textContent = username;
  if (welcomeSpan) welcomeSpan.textContent = username;
});
document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username') || 'Student';
  const userSpan = document.getElementById('username-portfolio');
  const welcomeSpan = document.getElementById('username-welcome');
  if(userSpan) userSpan.textContent = username;
  if(welcomeSpan) welcomeSpan.textContent = username;
});
document.getElementById('download-portfolio-btn').addEventListener('click', function() {
  html2pdf().set({
    margin: 0.5,
    filename: 'portfolio.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }).from(document.getElementById('portfolio-content')).save();
});
