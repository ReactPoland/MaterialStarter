/*Here need to create some objects that are necessary to build this application 
at the start data need to be populated , before there will be possibility to enter it dynamically

 */

{

    clients: [{
        "id": "1",
        "name": "first client",
        "faceAmount": 50000,
        "clientChildrens": [{
            "age": 8,
            "sex": "male"
        }, {
            "age": 14,
            "sex": "female"
        }, {
            "age": 15,
            "sex": "female"
        }],
        "selectedUnderwriting": "Super preferred",
        "generatedQuotes": [{
            "companyName": "FaithLife Financial",
            "companyProduct": "Term 20",
            "productPrice": "15000",
            "productPremium": "$142.65",
            "productConv": "70"
        }, {
            "companyName": "Sun Life",
            "companyProduct": "Term 40",
            "productPrice": "35000",
            "productPremium": "$162.65",
            "productConv": "69"
        }],

        "clientAgeData": {
            "actualAge": 30,
            "nearestAge": 31
        }

    }, {
        "id": "2",
        "name": "second client",
        "faceAmount": 50000,
        "secondClientChildrens": [{
            "age": 11,
            "sex": "male"
        }],
        "selectedUnderwriting": "Super",
        "generatedQuotes": [{
            "companyName": "Sun Life",
            "companyProduct": "Term 40",
            "productPrice": "35000",
            "productPremium": "$162.65",
            "productConv": "69"
        }, {
            "companyName": "Manufacturers Life Insurance Company",
            "companyProduct": "Term 60",
            "productPrice": "75000",
            "productPremium": "$182.65",
            "productConv": "60"
        }],
        "licenseInfo": {
            "licenseKey": "unique license key",
            "clientName": "my client LTD",
            "description": "licensed to someone , someone under some conditions"
        },

        "clientAgeData": {
            "actualAge": 50,
            "nearestAge": 51
        }
    }]

};

//END OF THE WHOLE JSON tempModel object




//HERE ENDS CLIENTS ARRAY


  /*"licenseInfo": {
    licenseKey: "unique license key",
    clientName: "my client LTD",
    description: "licensed to someone , someone under some conditions"
  },


  "quotesResults": {
    "tableQouteId": {
      quoteTableData: [
        {
          companyName: "FaithLife Financial",
          companyProduct: "Term 20",
          productPrice: "15000",
          productPremium: "$142.65",
          productConv: "70"
        },
        {
          companyName: "Sun Life",
          companyProduct: "Term 40",
          productPrice: "35000",
          productPremium: "$162.65",
          productConv: "69"
        },
        {
          companyName: "Manufacturers Life Insurance Company",
          companyProduct: "Term 60",
          productPrice: "75000",
          productPremium: "$182.65",
          productConv: "60"
        }
      ]
    }
  }*/