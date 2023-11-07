// disclaimer.js

// Function to check if the disclaimer cookie exists
function checkDisclaimerCookie() {
  return document.cookie.split(';').some((item) => item.trim().startsWith('disclaimerAccepted='));
}

// Function to show the disclaimer modal
function showDisclaimer() {
  if (!checkDisclaimerCookie()) {
    document.getElementById('disclaimerModal').style.display = 'block';
  }
}

// Function to set the disclaimer cookie
function acceptDisclaimer() {
  // Set the cookie to expire in 365 days
  const d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = "disclaimerAccepted=true;" + expires + ";path=/";
  document.getElementById('disclaimerModal').style.display = 'none';
}

// Event listener for DOMContentLoaded to check the cookie and show the disclaimer if necessary
document.addEventListener('DOMContentLoaded', (event) => {
  showDisclaimer();
});

// You would need to call acceptDisclaimer() when the user clicks the accept button.
// Make sure your accept button has an onclick event that calls acceptDisclaimer(), like this:
// <button onclick="acceptDisclaimer()">Accept</button>
