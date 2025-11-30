// Tab Navigation Logic
const tabs = ['Songkran', 'loykathong', 'บวช', 'รำไทย'];
let currentTabIndex = 0;

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("culture-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    const tab = document.getElementById(cityName);
    if (tab) {
        tab.style.display = "block";
        currentTabIndex = tabs.indexOf(cityName);
    }
}

function changeTab(direction) {
    currentTabIndex += direction;

    if (currentTabIndex >= tabs.length) {
        currentTabIndex = 0;
    } else if (currentTabIndex < 0) {
        currentTabIndex = tabs.length - 1;
    }

    openCity(tabs[currentTabIndex]);
}

// Mobile Navigation (if needed later, keeping structure)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Form Validation Helpers
function showError(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

function hideError(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Contact Form Validation
function validateContactForm(e) {
    e.preventDefault();
    alert('Message Sent!');
    return false;
}

// Login Validation
function validateLogin(e) {
    e.preventDefault();
    let isValid = true;
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username) { showError('usernameError'); isValid = false; } else hideError('usernameError');
    if (!password) { showError('passwordError'); isValid = false; } else hideError('passwordError');

    if (isValid) {
        alert('Login Successful!');
        window.location.href = 'index.html';
    }
    return false;
}

// Signup Validation
function validateSignup(e) {
    e.preventDefault();
    alert('Account Created!');
    window.location.href = 'login.html';
    return false;
}

