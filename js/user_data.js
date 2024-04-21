const apiKey = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
const enterpriseSecurityKey = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';

async function fetchUserData() {
    fetch('https://idea-validation-backend-production.up.railway.app/enterprise/user_data?api_key=' + apiKey, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'enterprise-security-key': enterpriseSecurityKey,
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