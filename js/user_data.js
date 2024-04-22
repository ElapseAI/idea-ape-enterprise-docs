const ENTERPRISE_SECURITY_KEY = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';

async function fetchUserData() {
    fetch('https://idea-validation-backend-production.up.railway.app/enterprise/user_data', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'enterprise-security-key': ENTERPRISE_SECURITY_KEY,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
}

fetchUserData();