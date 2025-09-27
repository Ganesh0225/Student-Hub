function loadNavbar() {
  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="navbar">
      <div class="navbar-left">
        <button id="menu-btn">&#9776;</button>
        <span class="logo">Student Hub</span>
      </div>
      <div class="navbar-right">
        <a href="index.html">Home</a>
        <a href="dashboard.html">Dashboard</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="login.html" id="login-link">Login / Sign In</a>
        <a href="#" id="profile-link">Profile</a>
      </div>
    </nav>
    <div id="side-menu" class="side-menu">
      <button class="close-btn" id="close-menu">&times;</button>
      <a href="approval.html">Faculty Approvals</a>
      <a href="#">Academics</a>
      <a href="#">Non-Academics</a>
      <a href="#">Certifications</a>
      <a href="#">Internships</a>
      <a href="#">Workshops</a>
      <a href="#">Club Activities</a>
    </div>
    <div id="login-modal" class="modal">
      <div class="modal-content">
        <span class="close" id="close-login">&times;</span>
        <h2>Login Portal</h2>
        <div class="portal-choose">
          <button id="student-login-btn">Student Portal</button>
          <button id="faculty-login-btn">Faculty Portal</button>
        </div>
        <form id="login-form" style="display:none;">
          <input type="text" id="username" placeholder="Username" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  `;

  // Navbar actions
  document.getElementById('menu-btn').onclick = () => document.getElementById('side-menu').classList.add('open');
  document.getElementById('close-menu').onclick = () => document.getElementById('side-menu').classList.remove('open');

  // Login modal
  document.getElementById('login-link').onclick = () => document.getElementById('login-modal').style.display = 'flex';
  document.getElementById('close-login').onclick = () => document.getElementById('login-modal').style.display = 'none';

  // Portal selection
  document.getElementById('student-login-btn').onclick = document.getElementById('faculty-login-btn').onclick = function() {
    document.getElementById('login-form').style.display = 'block';
  };

  // Simple login
  document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    window.location.href = "dashboard.html";
    document.getElementById('login-modal').style.display = 'none';
  };

  // // Profile link (future)
  // document.getElementById('profile-link').onclick = function() {
  //   alert('Profile page coming soon.');
  // };
  const profileLink = document.getElementById('profile-link');
if (profileLink) {
  profileLink.href = 'profile.html';
  // Optionally: update text as described previously
}

}

window.onload = loadNavbar;
document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username') || 'Guest';
  const welcomeSpans = document.querySelectorAll('#username-welcome, #profile-username');

  welcomeSpans.forEach(span => {
    span.textContent = username;
  });

  // For example, if you have a profile section
  const profileName = document.getElementById('profile-username');
  if(profileName) {
    profileName.textContent = username;
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username') || 'Student';
  const userSpan = document.getElementById('username-portfolio');
  if (userSpan) {
    userSpan.textContent = username;
  }
});
// comments
// After navbar HTML injected

const username = localStorage.getItem('username');
const loginLink = document.getElementById('login-link');
const profileLink = document.getElementById('profile-link');

// if (username) {
//   // Hide login/sign-in button
//   if(loginLink) loginLink.style.display = 'none';

//   // Show username with profile link
//   if(profileLink) {
//     profileLink.textContent = username + " | Profile";
//     profileLink.style.cursor = 'pointer';
//     profileLink.style.fontWeight = '600';

//     // Optional: Link to profile page or add click handler
//     profileLink.href = "profile.html"; // or desired profile page URL
//   }
// } else {
//   // Show login link, reset profile text
//   if(loginLink) loginLink.style.display = 'inline-block';
//   if(profileLink) profileLink.textContent = 'Profile';
//   if(profileLink) profileLink.removeAttribute('href');
// }
document.addEventListener('DOMContentLoaded', () => {
  const formContainer = document.getElementById('form-container');

  // Define form HTML for each category
  const formTemplates = {
    academics: `<form>...</form>`, // your academics form markup here
    'non-academics': `<form>...</form>`,
    certifications: `<form>...</form>`,
    internships: `<form>...</form>`,
    workshops: `<form>...</form>`,
    'club-activities': `<form>...</form>`,
  };

  // Attach click handlers for menu items to load forms
  Object.keys(formTemplates).forEach(key => {
    const menuItem = document.getElementById(`menu-${key}`);
    if (menuItem) {
      menuItem.addEventListener('click', e => {
        e.preventDefault();
        formContainer.innerHTML = formTemplates[key];
        // Add submit listeners to new forms if needed here
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const sideMenu = document.getElementById('side-menu');
  const closeMenu = document.getElementById('close-menu');
  const formContainer = document.getElementById('form-container');
  const usernameSpan = document.getElementById('username-welcome');

  // Show logged-in username if saved
  let username = localStorage.getItem('username') || 'Guest';
  if(usernameSpan) usernameSpan.textContent = username;

  // Toggle sidebar
  menuBtn.addEventListener('click', () => sideMenu.classList.add('open'));
  closeMenu.addEventListener('click', () => sideMenu.classList.remove('open'));

  // Forms for different menu items
  const formTemplates = {
    'menu-faculty-approvals': `<p>Faculty approval panel loading soon...</p>`,
    'menu-academics': `
      <h2>Upload Academic Data</h2>
      <form id="form-academics">
        <label>Marks/Grades</label>
        <input type="text" name="marks" required />
        <label>Seminar/Conference Name</label>
        <input type="text" name="seminar" />
        <label>Upload Document (PDF/Image)</label>
        <input type="file" name="document" accept=".pdf,image/*" required />
        <button type="submit">Submit</button>
      </form>`,

    'menu-non-academics': `
      <h2>Upload Non-Academic Activity</h2>
      <form id="form-nonacademics">
        <label>Activity Name</label>
        <input type="text" name="activity" required />
        <label>Position/Role</label>
        <input type="text" name="role" />
        <label>Upload Evidence</label>
        <input type="file" name="document" accept=".pdf,image/*" required />
        <button type="submit">Submit</button>
      </form>`,

    'menu-certifications': `
      <h2>Upload Certification</h2>
      <form id="form-certifications">
        <label>Certification Name</label>
        <input type="text" name="certname" required />
        <label>Certification Issuer</label>
        <input type="text" name="issuer" />
        <label>Upload Certificate (PDF/Image)</label>
        <input type="file" name="certificate" accept=".pdf,image/*" required />
        <button type="submit">Submit</button>
      </form>`,

    'menu-internships': `
      <h2>Upload Internship Details</h2>
      <form id="form-internships">
        <label>Company Name</label>
        <input type="text" name="company" required />
        <label>Duration</label>
        <input type="text" name="duration" />
        <label>Upload Internship Letter (PDF/Image)</label>
        <input type="file" name="letter" accept=".pdf,image/*" required />
        <button type="submit">Submit</button>
      </form>`,

    'menu-workshops': `
      <h2>Upload Workshop Details</h2>
      <form id="form-workshops">
        <label>Workshop Name</label>
        <input type="text" name="workshop" required />
        <label>Date</label>
        <input type="date" name="date" required />
        <label>Upload Proof</label>
        <input type="file" name="proof" accept=".pdf,image/*" required />
        <button type="submit">Submit</button>
      </form>`,

    'menu-club-activities': `
      <h2>Upload Club Activity</h2>
      <form id="form-club-activities">
        <label>Club Name</label>
        <input type="text" name="club" required />
        <label>Activity Description</label>
        <textarea name="description" rows="4" required></textarea>
        <label>Upload Supporting Doc</label>
        <input type="file" name="support" accept=".pdf,image/*" required />
        <button type="submit">Submit</button>
      </form>`,
  };

  // Attach click listeners to menu items and load forms
  Object.entries(formTemplates).forEach(([menuId, formHtml]) => {
    const menuItem = document.getElementById(menuId);
    if(menuItem) {
      menuItem.addEventListener('click', e => {
        e.preventDefault();
        formContainer.innerHTML = formHtml;
        sideMenu.classList.remove('open');

        // Add submit handler for form
        const form = formContainer.querySelector('form');
        if(form) {
          form.addEventListener('submit', evt => {
            evt.preventDefault();
            alert(`Form '${form.id}' submitted! Backend integration pending.`);
            form.reset();
          });
        }
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.getElementById('open-menu-btn');
  const sideMenu = document.getElementById('side-menu');

  if (openMenuBtn) {
    openMenuBtn.addEventListener('click', () => {
      sideMenu.classList.add('open');  // Open the sidebar menu
    });
  }
});
function loadNavbar() {
  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="navbar">
      <div class="navbar-left">
        <button id="menu-btn">&#9776;</button>
        <span class="logo">Student Hub</span>
      </div>
      <div class="navbar-right">
        <a href="index.html">Home</a>
        <a href="dashboard.html">Dashboard</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="#" id="login-link">Login / Sign In</a>
        <a href="#" id="profile-link">Profile</a>
      </div>
    </nav>
    <div id="side-menu" class="side-menu">
      <button class="close-btn" id="close-menu">&times;</button>
      <a href="approval.html" id="menu-faculty-approvals">Faculty Approvals</a>
      <a href="#" id="menu-academics">Academics</a>
      <a href="#" id="menu-non-academics">Non-Academics</a>
      <a href="#" id="menu-certifications">Certifications</a>
      <a href="#" id="menu-internships">Internships</a>
      <a href="#" id="menu-workshops">Workshops</a>
      <a href="#" id="menu-club-activities">Club Activities</a>
    </div>
    <div id="login-modal" class="modal">
      <div class="modal-content">
        <span class="close" id="close-login">&times;</span>
        <h2>Login Portal</h2>
        <div class="portal-choose">
          <button id="student-login-btn">Student Portal</button>
          <button id="faculty-login-btn">Faculty Portal</button>
        </div>
        <form id="login-form" style="display:none;">
          <input type="text" id="username" placeholder="Username" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  `;

  document.getElementById('menu-btn').onclick = () => document.getElementById('side-menu').classList.add('open');
  document.getElementById('close-menu').onclick = () => document.getElementById('side-menu').classList.remove('open');

  document.getElementById('login-link').onclick = () => document.getElementById('login-modal').style.display = 'flex';
  document.getElementById('close-login').onclick = () => document.getElementById('login-modal').style.display = 'none';

  document.getElementById('student-login-btn').onclick = document.getElementById('faculty-login-btn').onclick = function() {
    document.getElementById('login-form').style.display = 'block';
  };

  document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    window.location.href = "dashboard.html";
    document.getElementById('login-modal').style.display = 'none';
  };

  const profileLink = document.getElementById('profile-link');
  if (profileLink) {
    profileLink.href = 'profile.html';
  }

  updateNavLoginLogout();
}

function updateNavLoginLogout() {
  const username = localStorage.getItem('username');
  const loginLink = document.getElementById('login-link');
  const profileLink = document.getElementById('profile-link');

  if (username) {
    if (loginLink) loginLink.style.display = 'none';

    if (profileLink) {
      profileLink.textContent = username + " | Profile";
      profileLink.href = 'profile.html';
      profileLink.style.display = 'inline-block';
      profileLink.style.cursor = 'pointer';
      profileLink.style.fontWeight = '600';
    }
  } else {
    if (loginLink) loginLink.style.display = 'inline-block';
    if (profileLink) {
      profileLink.textContent = 'Profile';
      profileLink.removeAttribute('href');
      profileLink.style.cursor = 'default';
    }
  }
}

window.onload = loadNavbar;
function loadNavbar() {
  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="navbar">
      <div class="navbar-left">
        <button id="menu-btn">&#9776;</button>
        <span class="logo">Student Hub</span>
      </div>
      <div class="navbar-right">
        <a href="index.html">Home</a>
        <a href="dashboard.html">Dashboard</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="#" id="login-link">Login / Sign In</a>
        <a href="#" id="profile-link">Profile</a>
      </div>
    </nav>
    <div id="side-menu" class="side-menu">
      <button class="close-btn" id="close-menu">&times;</button>
      <a href="approval.html" id="menu-faculty-approvals">Faculty Approvals</a>
      <a href="#" id="menu-academics">Academics</a>
      <a href="#" id="menu-non-academics">Non-Academics</a>
      <a href="#" id="menu-certifications">Certifications</a>
      <a href="#" id="menu-internships">Internships</a>
      <a href="#" id="menu-workshops">Workshops</a>
      <a href="#" id="menu-club-activities">Club Activities</a>
      <a href="#" id="logout-link">Logout</a>
    </div>
  `;

  document.getElementById('menu-btn').onclick = () => document.getElementById('side-menu').classList.add('open');
  document.getElementById('close-menu').onclick = () => document.getElementById('side-menu').classList.remove('open');

  document.getElementById('login-link').onclick = () => document.getElementById('login-modal').style.display = 'flex';
  document.getElementById('close-login').onclick = () => document.getElementById('login-modal').style.display = 'none';

  // Logout logic
  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.onclick = function(e) {
      e.preventDefault();
      localStorage.removeItem('username');
      location.href = 'index.html'; // Redirect to home
    };
  }

  updateNavLoginLogout(); // Updates login/profile/logout buttons visibility based on login state
}

function updateNavLoginLogout() {
  const username = localStorage.getItem('username');
  const loginLink = document.getElementById('login-link');
  const profileLink = document.getElementById('profile-link');
  const logoutLink = document.getElementById('logout-link');

  if (username) {
    if (loginLink) loginLink.style.display = 'none';
    if (profileLink) {
      profileLink.textContent = username + " | Profile";
      profileLink.href = 'profile.html';
      profileLink.style.display = 'inline-block';
      profileLink.style.cursor = 'pointer';
      profileLink.style.fontWeight = '600';
    }
    if (logoutLink) logoutLink.style.display = 'inline-block';
  } else {
    if (loginLink) loginLink.style.display = 'inline-block';
    if (profileLink) {
      profileLink.textContent = 'Profile';
      profileLink.removeAttribute('href');
    }
    if (logoutLink) logoutLink.style.display = 'none';
  }
}

window.onload = loadNavbar;
const logoutLink = document.getElementById('logout-link');
if (logoutLink) {
  logoutLink.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('username');
    window.location.href = 'index.html'; // Or wherever you want to redirect
  });
}
document.getElementById('login-link').onclick = () => {
  document.getElementById('login-modal').style.display = 'flex';
};

document.getElementById('close-login').onclick = () => {
  document.getElementById('login-modal').style.display = 'none';
};

document.getElementById('student-login-btn').onclick = document.getElementById('faculty-login-btn').onclick = function() {
  document.getElementById('login-form').style.display = 'block';
};

document.getElementById('login-form').onsubmit = function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  localStorage.setItem('username', username);
  window.location.href = "dashboard.html";
  document.getElementById('login-modal').style.display = 'none';
};
function loadNavbar() {
  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="navbar">
      <div class="navbar-left">
        <button id="menu-btn">&#9776;</button>
        <span class="logo">Student Hub</span>
      </div>
      <div class="navbar-right">
        <a href="index.html">Home</a>
        <a href="dashboard.html">Dashboard</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="#" id="login-link">Login / Sign In</a>
        <a href="#" id="profile-link">Profile</a>
      </div>
    </nav>
    <div id="side-menu" class="side-menu">
      <button class="close-btn" id="close-menu">&times;</button>
      <a href="approval.html" id="menu-faculty-approvals">Faculty Approvals</a>
      <a href="#" id="menu-academics">Academics</a>
      <a href="#" id="menu-non-academics">Non-Academics</a>
      <a href="#" id="menu-certifications">Certifications</a>
      <a href="#" id="menu-internships">Internships</a>
      <a href="#" id="menu-workshops">Workshops</a>
      <a href="#" id="menu-club-activities">Club Activities</a>
      <a href="#" id="logout-link">Logout</a>
    </div>
    <div id="login-modal" class="modal" style="display:none;">
      <div class="modal-content">
        <span class="close" id="close-login">&times;</span>
        <h2>Login Portal</h2>
        <div class="portal-choose">
          <button id="student-login-btn">Student Portal</button>
          <button id="faculty-login-btn">Faculty Portal</button>
        </div>
        <form id="login-form" style="display:none;">
          <input type="text" id="username" placeholder="Username" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  `;

  // Navbar actions
  document.getElementById('menu-btn').onclick = () => document.getElementById('side-menu').classList.add('open');
  document.getElementById('close-menu').onclick = () => document.getElementById('side-menu').classList.remove('open');

  // Login modal show/hide
  document.getElementById('login-link').onclick = () => {
    document.getElementById('login-modal').style.display = 'flex';
  };
  document.getElementById('close-login').onclick = () => {
    document.getElementById('login-modal').style.display = 'none';
  };

  // Portal selection shows the form
  document.getElementById('student-login-btn').onclick = document.getElementById('faculty-login-btn').onclick = () => {
    document.getElementById('login-form').style.display = 'block';
  };

  // Login form submit handler
  document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    if (username.length === 0) return alert('Username cannot be empty');
    localStorage.setItem('username', username);
    // You may also store user role if needed
    window.location.href = 'dashboard.html';
    document.getElementById('login-modal').style.display = 'none';
  };

  // Logout handling
  const logoutLink = document.getElementById('logout-link');
  logoutLink.onclick = (e) => {
    e.preventDefault();
    localStorage.removeItem('username');
    updateNavLoginLogout();
    document.getElementById('side-menu').classList.remove('open');
    window.location.href = 'index.html';
  };

  // Profile link setup
  const profileLink = document.getElementById('profile-link');
  if (profileLink) {
    profileLink.href = 'profile.html';
  }

  updateNavLoginLogout();
}

function updateNavLoginLogout() {
  const username = localStorage.getItem('username');
  const loginLink = document.getElementById('login-link');
  const profileLink = document.getElementById('profile-link');
  const logoutLink = document.getElementById('logout-link');

  if (username) {
    if(loginLink) loginLink.style.display = 'none';
    if(profileLink) {
      profileLink.textContent = username + ' | Profile';
      profileLink.style.display = 'inline-block';
      profileLink.style.cursor = 'pointer';
      profileLink.href = 'profile.html';
      profileLink.style.fontWeight = '600';
    }
    if(logoutLink) logoutLink.style.display = 'inline-block';
  } else {
    if(loginLink) loginLink.style.display = 'inline-block';
    if(profileLink) {
      profileLink.textContent = 'Profile';
      profileLink.removeAttribute('href');
      profileLink.style.cursor = 'default';
    }
    if(logoutLink) logoutLink.style.display = 'none';
  }
}

window.onload = loadNavbar;

document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username') || 'Guest';
  const welcomeSpans = document.querySelectorAll('#username-welcome, #profile-username');
  welcomeSpans.forEach(span => {
    span.textContent = username;
  });
});
function loadNavbar() {
  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="navbar">
      <div class="navbar-left">
        <button id="menu-btn">&#9776;</button>
        <span class="logo">Student Hub</span>
      </div>
      <div class="navbar-right">
        <a href="index.html">Home</a>
        <a href="dashboard.html">Dashboard</a>
        <a href="portfolio.html" class="active">Portfolio</a>
        <a href="#" id="login-link">Login / Sign In</a>
        <a href="profile.html" id="profile-link">Profile</a>
      </div>
    </nav>
  `;
  // attach navbar event listeners here or in main.js
}

window.onload = loadNavbar;
function loadNavbar() {
  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="navbar">
      <div class="navbar-left">
        <button id="menu-btn">&#9776;</button>
        <span class="logo">Student Hub</span>
      </div>
      <div class="navbar-right">
        <a href="index.html">Home</a>
        <a href="dashboard.html">Dashboard</a>
        <a href="portfolio.html" class="active">Portfolio</a>
        <a href="#" id="login-link">Login / Sign In</a>
        <a href="#" id="profile-link">Profile</a>
      </div>
    </nav>
  `;
  // attach listeners or other navbar logic
}
function loadNavbar() {
  const page = window.location.pathname.split('/').pop();

  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="navbar">
      
      <div class="navbar-right">
        <a href="index.html" ${page === 'index.html' ? 'class="active"' : ''}>Home</a>
        <a href="dashboard.html" ${page === 'dashboard.html' ? 'class="active"' : ''}>Dashboard</a>
        <a href="portfolio.html" ${page === 'portfolio.html' ? 'class="active"' : ''}>Portfolio</a>
       <a href="login.html" ${page === 'login.html' ? 'class="active"' : ''} id="login-link">Login / Sign In</a>
<a href="profile.html" ${page === 'profile.html' ? 'class="active"' : ''} id="profile-link">Profile</a>
      </div>
    </nav>
  `;
}
window.onload = loadNavbar;
document.getElementById("menu-btn").addEventListener("click", function() {
  document.getElementById("side-menu").classList.toggle("open");
});
document.getElementById('menu-btn').onclick = function() {
  document.getElementById('side-menu').classList.add('open');
};
document.getElementById('close-menu').onclick = function() {
  document.getElementById('side-menu').classList.remove('open');
};
