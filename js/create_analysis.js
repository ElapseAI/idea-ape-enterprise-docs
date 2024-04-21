const apiKey = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
const enterpriseSecurityKey = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';

async function createAnalysis() {
    fetch('https://idea-validation-backend-production.up.railway.app/enterprise/analysis/create', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'enterprise-security-key': enterpriseSecurityKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            search_query: 'pineapple pizza',
            country: 'us',
            date_filter: 'all',
            api_key: apiKey,
        })
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

createAnalysis();