document.addEventListener("DOMContentLoaded", function () {
    // Switch between login and signup tabs
    document.getElementById("login-tab").addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("signup-tab").classList.remove("active");
      document.getElementById("login-tab").classList.add("active");
      document.getElementById("signup").classList.remove("show", "active");
      document.getElementById("login").classList.add("show", "active");
    });
  
    document.getElementById("signup-tab").addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("login-tab").classList.remove("active");
      document.getElementById("signup-tab").classList.add("active");
      document.getElementById("login").classList.remove("show", "active");
      document.getElementById("signup").classList.add("show", "active");
    });
  
    // Form submission and validation
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      // Add your login logic here
      alert("Login submitted!");
    });
  
    document.getElementById("signupForm").addEventListener("submit", function (e) {
      e.preventDefault();
      // Add your signup logic here
      alert("Signup submitted!");
    });
  });
  