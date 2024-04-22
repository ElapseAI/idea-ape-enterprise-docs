const ENTERPRISE_SECURITY_KEY = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';

async function readAnalysis() {
    fetch('https://idea-validation-backend-production.up.railway.app/enterprise/historical_searches', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'enterprise-security-key': ENTERPRISE_SECURITY_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            start_date: "2023-01-01T00:00:00Z",
            end_date: "2024-12-31T23:59:59Z"
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

readAnalysis();