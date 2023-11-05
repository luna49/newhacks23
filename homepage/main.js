const { Auth0Client } = require('auth0');

const auth0 = new Auth0Client({
    domain: 'your-auth0-domain',
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret',
});

// for login form
function showLoginPopup() {
    const popup = document.getElementById('login-popup');
    if (popup) {
        popup.style.display = 'block';
    }
}

// for login popup
function showUniversalLoginPopup() {
    const universalLoginURL = 'https://circuitanalysis-pocketguide/authorize?client_id=lYgf6iHhD1N8KBHR0YCU7XB3FxfJWNp2&redirect_uri=your-redirect-uri&response_type=token&scope=openid profile email';

    // Adjust the pop-up window size and other settings as needed
    const width = 500;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(universalLoginURL, 'auth0Popup', `width=${width}, height=${height}, left=${left}, top=${top}`);
}