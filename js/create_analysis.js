const ENTERPRISE_SECURITY_KEY = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';

async function createAnalysis() {
    fetch('https://idea-validation-backend-production.up.railway.app/enterprise/analysis/create', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'enterprise-security-key': ENTERPRISE_SECURITY_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            search_query: 'pineapple pizza',
            country: 'us',
            date_filter: 'all',
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