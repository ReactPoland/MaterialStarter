/*Here need to create some objects that are necessary to build this application 
at the start data need to be populated , before there will be possibility to enter it dynamically

 */

{

  clients: [
    { 
      id: "1", 
      name: "first client",
      faceAmount: 50000,
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
      quotesId: ["firstClient123456"],
      underwritingOptions: 
	  [
	  	{
			underwritingId: 1,
			underwritingName:"Super Preferred"
		},
		{
			underwritingId: 2,
			underwritingName: "Preferred"
		},
		{
			underwritingId: 3,
			underwritingName: "Standard Plus"
		},
		{
			underwritingId: 4,
			underwritingName: "Standard"
		}
	  ],
	  	clientAgeData: { 
		  	actualAge: 30, 
		  	nearestAge: 31
	  		},
	  	policyOptions: 
	  	[
		  	{
				policyId: 1,
				policyName:"Term 10"
			},
			{
				policyId: 2,
				policyName: "Term 20"
			},
			{
				policyId: 3,
				policyName: "Term 30"
			},
			{
				policyId: 4,
				policyName: "Term 40"
			}
		],
		provinceList: 
	  	[
		  	{
				provinceId: 1,
				provinceName:"Ontario"
			},
			{
				provinceId: 2,
				provinceName: "Quebec"
			},
			{
				provinceId: 3,
				provinceName: "New Scotland"
			},
			{
				provinceId: 4,
				provinceName: "Alberta"
			}
		]
    },
    { 
      id: "2",
     name: "second client",
     faceAmount: 50000,
     secondClientChildrens: [
        {
          age: 11,
          sex: "male"
        }
      ],
      quotesId: ["secondClient123456"],
      underwritingOptions: 
	  [
	  	{
			underwritingId: 1,
			underwritingName:"Super Preferred"
		},
		{
			underwritingId: 2,
			underwritingName: "Preferred"
		},
		{
			underwritingId: 3,
			underwritingName: "Standard Plus"
		},
		{
			underwritingId: 4,
			underwritingName: "Standard"
		}
	  ],
	  clientAgeData: { 
		  	actualAge: 50, 
		  	nearestAge: 51
	  },
	  policyOptions: 
	[
		  {
			policyId: 1,
			policyName:"Term 10"
		},
		{
			policyId: 2,
			policyName: "Term 20"
		},
		{
			policyId: 3,
			policyName: "Term 30"
		},
		{
			policyId: 4,
			policyName: "Term 40"
		}
	],
	provinceList: 
  	[
	  	{
			provinceId: 1,
			provinceName:"Ontario"
		},
		{
			provinceId: 2,
			provinceName: "Quebec"
		},
		{
			provinceId: 3,
			provinceName: "New Scotland"
		},
		{
			provinceId: 4,
			provinceName: "Alberta"
		}
	]
      }
  ]
	

}

//END OF THE WHOLE JSON tempModel object




//HERE ENDS CLIENTS ARRAY

  //License infor object

  /*"licenseInfo": {
    licenseKey: "unique license key",
    clientName: "my client LTD",
    description: "licensed to someone , someone under some conditions"
  },

  //quoteResult object

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