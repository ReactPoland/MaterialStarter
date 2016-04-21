/*Here need to create some objects that are necessary to build this application 
at the start data need to be populated , before there will be possibility to enter it dynamically

 */

{

  clients: [
    { 
      id: "1", 
      name: "first client",
      firstClientChildrens: [
        {
          age: 8,
          sex: "male"
        },
        {
          age: 14,
          sex: "female"
        },
        {
          age: 15,
          sex: "female"
        }
      ],
      quotesId: ["firstClient123456"]
    },
    { 
      id: "2",
     name: "second client",
     secondClientChildrens: [
        {
          age: 11,
          sex: "male"
        }
      ],
      quotesId: ["secondClient123456"]
      }
  ],
  licenseInfo: {
    "key": "unique license key",
    "clientName": "my client LTD",
    "description": "licensed to someone , someone under some conditions"
  },
  quotesResults: {
    "tableQouteId": {
      quoteTableData: [
        {
          companyName: "first insurance company",
          companyProduct: "first insurance company product",
          productPrice: "15000"
        },
        {
          companyName: "second insurance company",
          companyProduct: "second insurance company product",
          productPrice: "35000"
        },
        {
          companyName: "third insurance company",
          companyProduct: "third insurance company product",
          productPrice: "75000"
        }
      ]
    }
  }

}