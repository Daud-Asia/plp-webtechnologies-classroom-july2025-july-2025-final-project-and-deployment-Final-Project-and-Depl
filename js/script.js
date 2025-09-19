document.getElementById('signupForm')
.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for signing up! We will get back to you soon.');
  this.reset();
});


function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

document.getElementById("loginForm")
.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login successful!");
  closeLogin();
});



document.querySelectorAll('.view-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('More details coming soon...');
  });
});

document.getElementById('filterBtn').addEventListener('click', () => {
  alert('Filter functionality will be added soon.');
});
