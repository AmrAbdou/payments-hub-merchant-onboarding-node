const axios = require('axios');
const {authHelper} = require('./helper');

const API_SANDBOX_URL = "https://enrollment-api-sandbox.paymentshub.com"; // The Sandbox Enrollment API URL


// Create a new application
async function createApplication(requestBody) {
        const accessToken = await authHelper.getAuthToken(); // Get Access Token
        
        // Authorization Header
        let config = {
            headers: { Authorization: `Bearer ${accessToken.data.access_token}` }
        };

        // HTTP Request
        axios.post(API_SANDBOX_URL + '/enroll/application', requestBody, config).then((response) => {
        console.log(JSON.stringify(response.data.data));
        return;
    }).catch((error) => {
        console.log(JSON.stringify(error.response.data));
    });
}


// Generate an application External Key
let applicationKey = await authHelper.generateRandomString(20); // Generate a random key
let requestBody = {};

// Example Request body for an application that passes validation
/*
let requestBody = {
   agent: 48408,
   applicationName: "Sample Application Name",
   externalKey: `${applicationKey}`,
   plan: {
     planId: 864
    },
    principals: [{
        street: "790 Selah Drive",
        street2: "Suite 125",
        city: "South Burlington",
        state: "VT",
        zipCode: "12345",
        firstName: "Joseph Jr.",
        lastName: "Jameson",
        socialSecurityNumber: "458478624",
        driverLicenseNumber: "ABC1234567891",
        driverLicenseIssuedState: "GA",
        dateOfBirth: "1955-12-25",
        phoneNumber: "1234567890",
        email: "user@example.com",
        equityOwnershipPercentage: 100,
        title: "owner",
        isPersonalGuarantor: true
    }],
    business: {
        dbaName: "Sample Business",
        corporateName: "Sample Business Inc.",
        businessType: "C",
        federalTaxIdNumber: "145468465",
        federalTaxIdType: "SSN",
        mcc: "5812",
        phone: "2365489723",
        email: "example@business.com",
        averageTicketAmount: 1001,
        averageMonthlyVolume: 1001,
        highTicketAmount: 1001,
        merchandiseServicesSold: "Sample Services",
        percentOfBusinessTransactions: {
            cardSwiped: 65,
            keyedCardPresentNotImprinted: 35,
            mailOrPhoneOrder: 0,
            internet: 0
        },
        businessContact: {
            firstName: "Roy",
            lastName: "Martin",
            socialSecurityNumber: "123456789",
            dateOfBirth: "1947-11-05",
            street: "828 Late Avenue",
            street2: "",
            zipCode: "12345",
            city: "South Burington",
            state: "VT",
            phoneNumber: "1234567890",
            email: "user@example.com"
        },
        businessAddress: {
            dba: {
                street: "1072 Clinton St",
                city: "South Burlington",
                state: "VT",
                zipCode: "12345"
            },
            corporate: {
                street: "1447 Sun Valley Rd",
                city: "South Burlington",
                state: "VT",
                zipCode: "12345"
            },
            shipTo: {
                street: "4735 Saint James Drive",
                city: "South Burlington",
                state: "VT",
                zipCode: "12345"
            }
        },
    },
    bankAccount: {
        abaRouting: "026009593",
        demandDepositAccount: "1234567890",
        accountType: "checking"
    }
};
*/

// Example of a basic request body
/*
let requestBody = {
    "agent": 12345,
    "applicationName": "Sample App",
    "externalKey": `${applicationKey}`,
    "plan": {
      "planId": 12345
    }
}
*/

createApplication(requestBody);