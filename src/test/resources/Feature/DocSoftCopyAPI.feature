Feature: Receive DB Docs soft-copies from INS
  
  Description: When I call API to upload documents
  I want system responding proply

#tokenUrl=https://manulife-operations-preprod-ext.apigee.net/v1/mg/oauth2/token
#baseUrl=https://mesh.preprod.api.manulife.com/claim/healthcare/vn/V1/UploadDBDocument

#---------------------------------------------------------------------------------------------
  Scenario Outline: Check if POST request with invalid Claim Id
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId 				    | policyNumber |docId	|  boxNo  |posision| totalFiles | statusCode  |returnMsg					|
      | 20210305725tyy    | 3810588879   |12345	|  1 			|1			 | 1 				  | 406 			  |invalid Claim Id		|

#---------------------------------------------------------------------------------------------

Scenario Outline: Check if POST request with Empty Claim Id
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"
    Examples: 
      | clmId 	| policyNumber |docId	|  boxNo  |posision| totalFiles | statusCode  |returnMsg					|
      | 				| 2855718084   |12345	|  1 			|1			 | 1 				  | 406 				|empty Claim Id			|

  
 #--------------------------------------------------------------------------------------------- 
  
  Scenario Outline: Check if POST request with Claim Status not Pending
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId 				  | policyNumber |docId	|  boxNo  |posision| totalFiles | statusCode  |returnMsg										|
      | I20210202201    | 3817094202   |12345	|  1 			|1			 | 1 				  | 406 			  |claim status is not pending	| 
      | I20210202202    | 2814793251   |12345	|  1 			|1			 | 1 				  | 406 			  |claim status is not pending	| 
  
    
 #--------------------------------------------------------------------------------------------- 
      
 Scenario Outline: Check if POST request with invalid policyNumber
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId 				    | policyNumber |docId	|  boxNo  |posision| totalFiles | statusCode  |returnMsg					  |
      | 202103057250      | 1					   |12345	|  1 			|1			 | 1 				  | 406 				|invalid policyNumber	|
      | 202103057250      | 38105888aa   |12345	|  1 			|1			 | 1 				  | 406 			  |invalid policyNumber	|
      | 202103057250      | 381058888888 |12345	|  1 			|1			 | 1 				  | 406 			  |invalid policyNumber	|
 
 
#--------------------------------------------------------------------------------------------- 
      
  Scenario Outline: Check if send request with empty policyNumber
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId 				    | policyNumber |docId	|  boxNo  |posision| totalFiles | statusCode  |returnMsg					|
      | 202103081236      | 	            |3345	|  1 			|1			 | 1 				  | 406 				|	empty docId|
  
#---------------------------------------------------------------------------------------------

 
 Scenario Outline: Check if send request with empty docId
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId 				    | policyNumber  |docId		|  boxNo  |posision| totalFiles | statusCode  |returnMsg					|
      | 202103081236      | 	2855718084  |	      |  1 			|1			 | 1 				  | 406 				|	empty policy number|
      
 
 #---------------------------------------------------------------------------------------------
      
 Scenario Outline: Check if send request with empty boxNo
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId 				    | policyNumber |docId	|  boxNo  |posision| totalFiles | statusCode  |returnMsg					|
      | 202103081236      | 2855718084	 |12345	|  			  |1			 | 1 				  | 406 				|	empty boxNo	|
 
 #---------------------------------------------------------------------------------------------
 
 Scenario Outline: Check if send request with empty posision
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId 				    | policyNumber |docId	|  boxNo  |posision| totalFiles | statusCode  |returnMsg	      |
      | 202103081236      | 2855718084	 |12345	|  		1	  | 			 | 1 				  | 406 				|	empty posision 	|
 
 
 #---------------------------------------------------------------------------------------------
 
 
 Scenario Outline: Check if send request with empty totalFiles
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId 				    | policyNumber   |docId	|  boxNo  |posision| totalFiles | statusCode    |returnMsg					|
      | 202103080110      | 		2819774058 |12345	|  1 			|1			 |  				  | 406 				  |	empty totalFiles  |
 
 #--------------------------------------------------------------------------------------------- 
 
 
 Scenario Outline: Check if POST request with valid Parameters
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId 				    | policyNumber |docId	|  boxNo  			|posision| totalFiles | statusCode  |returnMsg			|
      | I20210304543    | 3810588879   |12345	|  INS21072400001 |1			 | 1 				  | 200 			  |Success				|
      | 202103057250    | 3810588879   |12346	|  INS21072400002 |1			 | 1 				  | 200 			  |Success				|
      | 202103080470    | 2815539950   |12347	|  INS21072400003	|1			 | 1 				  | 200 			  |Success				|
      | 202103081236    | 2855718084   |12348	|  INS21072400004	|1			 | 1 				  | 200 			  |Success				|
 
    
    
   #CLM_ID	POL_NUM
#202103016981	2952678224
#202103080110	2819774058
#202103057171	2814256754
#202103057944	2952309739
#202103080470	2815539950
#202103081236	2855718084
#202103081293	2818110155
#202103081296	2855671408
#202103080045	2818549451
#202103057250	3810588879
#202103080066	3810638161
#202103080101	2855720841
#202103057652	3812955464
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    