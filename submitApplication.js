const axios = require('axios');
const {authHelper} = require('./helper');

const API_SANDBOX_URL = "https://enrollment-api-sandbox.paymentshub.com"; // The Sandbox Enrollment API URL


// Submit application
async function submitApplication(applicationKey) {
        const accessToken = await authHelper.getAuthToken(); // Get Access Token
        
        // Authorization Header
        let config = {
            headers: { Authorization: `Bearer ${accessToken.data.access_token}` }
        };
        
        // HTTP Request
        axios.put(API_SANDBOX_URL + '/enroll/application/submit/' + applicationKey, {}, config).then((response) => {
            console.log(JSON.stringify(response.data.data));
            return;
        }).catch((error) => {
            console.log(JSON.stringify(error.response.data));
        });
}

submitApplication("APPLICATION_KEY_HERE");