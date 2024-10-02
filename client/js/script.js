// client/js/script.js
const BASE_URL = '/api/auth'; // Use relative URL since frontend and backend are served from the same origin

async function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    document.getElementById('message').innerText = data.message;
}

async function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('message').innerText = 'Login successful! Token: ' + data.token;
    } else {
        document.getElementById('message').innerText = data.message;
    }
}
