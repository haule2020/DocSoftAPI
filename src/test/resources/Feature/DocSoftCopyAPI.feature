Feature: Receive DB Docs soft-copies from INS
  
  Description: When I call API to upload documents
  I want system responses correct response code  and returnMsg -- 
  
  tokenUrl=https://manulife-operations-preprod-ext.apigee.net/v1/mg/oauth2/token
  baseUrl=https://mesh.preprod.api.manulife.com/claim/healthcare/vn/V1/UploadDBDocument

  Scenario Outline: Negative TC01 - Send request with invalid file type
    Given I already authorozied
    When I call API with invalid file type "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo          | posision | totalFiles | statusCode | returnMsg       |
      | I20210202204 |   3816092975 | TC01  | INS21072400003 |        1 |          1 |        406 | file not accept |

  Scenario Outline: Negative TC02 - Send request with invalid Claim Id
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId          | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg              |
      | 20210305725tyy |   3810588879 | TC02  |     1 |        1 |          1 |        406 | claimID does not exist |
      | %20210305725%  |   3810588879 | TC02  |     1 |        1 |          1 |        406 | claimID does not exist |
      | .              |   3810588879 | TC02  |     1 |        1 |          1 |        406 | claimID does not exist |

  Scenario Outline: Negative TC03 - Send request with Empty Claim Id
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg       |
      |       |   2855718084 | TC03  |     1 |        1 |          1 |        406 | missing claimID |

  Scenario Outline: Negative TC04 - Send request with Claim Status not Pending
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo          | posision | totalFiles | statusCode | returnMsg                         |
      | I20210202019 |   2930711410 | TC04  | INS21082000004 |        1 |          1 |        406 | claim status is no longer pending |
      | I20210202023 |   2814762009 | TC04  | INS21082000004 |        2 |          1 |        406 | claim status is no longer pending |
      | I20210202201 |   3817094202 | TC04  | INS21082000004 |        3 |          1 |        406 | claim status is no longer pending |

  Scenario Outline: Negative TC05 - Send request with Claim has no Approved Date
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId       | boxNo | posision | totalFiles | statusCode | returnMsg                                |
      | 202103080101 |   2855720841 | TC05_123456 |     1 |        1 |          1 |        406 | Invalid call. Claim has no Approved Date |
      | 202103057652 |   3812955464 | TC05_123457 |     1 |        1 |          1 |        406 | Invalid call. Claim has no Approved Date |

  Scenario Outline: Positive TC06 - Send request with Claim has Approved Date
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg |
      | I20210202202 |   2814793251 | TC06  |     1 |        1 |          1 |        200 | Success   |

  Scenario Outline: Negative TC07 - Send request with duplicated doc id for same claim
    Given I already authorozied
    When I call API duplicated doc id "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId                     | boxNo | posision | totalFiles | statusCode | returnMsg                                      |
      | I20210202203 |   3812507620 | TC07_12345821082021020718 |     1 |        1 |          1 |        406 | Import fail. Duplicated Doc ID for same claim. |

  Scenario Outline: Positive TC08 - Send request with duplicated doc id for different claim
    Given I already authorozied
    When I call API duplicated doc id "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId                     | boxNo | posision | totalFiles | statusCode | returnMsg |
      | I20210202207 |   3810437705 | TC07_12345821082021020718 |     1 |        1 |          1 |        200 | Success   |

  Scenario Outline: Negative TC09 - Send request with invalid policyNumber
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg                    |
      | 20210803262I |            1 | TC09  |     1 |        1 |          1 |        406 | policy number does not exist |
      | 20210803262I | 38105888aa   | TC09  |     1 |        1 |          1 |        406 | policy number does not exist |
      | 20210803262I | 381058888888 | TC09  |     1 |        1 |          1 |        406 | policy number does not exist |

  Scenario Outline: Negative TC10 - Send request with empty policyNumber
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg             |
      | 202103081236 |              | TC10  |     1 |        1 |          1 |        406 | missing policy number |

  Scenario Outline: Negative TC11 - Send request with empty docId
    Given I already authorozied
    When I call API empty DocId "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg     |
      | I20210202206 |   2951720316 |       |     1 |        1 |          1 |        406 | missing docID |

  Scenario Outline: Negative TC12 - Send request with docId exceeds max length 100 characters
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId                                                                                                       | boxNo | posision | totalFiles | statusCode | returnMsg                               |
      | 202103081236 |   2855718084 | TC12_312321321312345555123125555555gxcgsgfsgsgsdgsf4fsdfdsfsdfsddsadsadasdasdsadasdsadasdsdsdasdasdasaasdfa |     1 |        1 |          1 |        406 | docID exceeds max length 100 characters |

  Scenario Outline: Negative TC13 - Send request with empty boxNo
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg      |
      | 202103081236 |   2855718084 | TC13  |       |        1 |          1 |        406 | missing box no |

  Scenario Outline: Negative TC14 - Send request with invalid boxNo
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo             | posision | totalFiles | statusCode | returnMsg     |
      | 202103081236 |   2855718084 | TC14  | INS21072400003_12 |        1 |          1 |        406 | boxID invalid |

  Scenario Outline: Negative TC15 - Send request with empty posision
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId      | boxNo | posision | totalFiles | statusCode | returnMsg              |
      | 202103081236 |   2855718084 | TC15_12345 |     1 |          |          1 |        406 | missing position value |

  Scenario Outline: Negative TC16 - Send request with invalid position value
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get error "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg   |
      | 202103081236 |   2855718084 | TC16  |     1 | str      |          1 |        400 | Bad Request |

  Scenario Outline: Negative TC17 - Send request with empty totalFiles
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg           |
      | 20210803264I |   2902413193 | TC17  |     1 |        1 |            |        406 | missing files count |

  Scenario Outline: Negative TC18 - Send request with invalid totalFiles
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get error "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo | posision | totalFiles | statusCode | returnMsg   |
      | 20210803262I |   2803494481 | TC18  |     1 |        1 | str        |        400 | Bad Request |

  Scenario Outline: Negative TC19 - Send request with files more than Six MB
    Given I already authorozied
    When I call API with files more than Six MB "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then response code should not 200

    Examples: 
      | clmId        | policyNumber | docId | boxNo          | posision | totalFiles |
      | 20210803262I |   2803494481 | TC19  | INS21082000019 |        1 |          9 |
      | 20210803263I |   2902734747 | TC19  | INS21082000019 |        2 |          9 |
      | 20210803264I |   2902413193 | TC19  | INS21082000019 |        3 |          9 |

  Scenario Outline: Positive TC20 - Send request with valid Parameters and 1 file
    Given I already authorozied
    When I call API "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo          | posision | totalFiles | statusCode | returnMsg |
      | 20210803262I |   2803494481 | TC20  | INS21082000011 |        1 |          1 |        200 | Success   |
      | 20210803263I |   2902734747 | TC20  | INS21082000012 |        2 |          1 |        200 | Success   |
      | 20210803264I |   2902413193 | TC20  | INS21082000013 |        3 |          1 |        200 | Success   |

  Scenario Outline: Positive TC21 - Send request with  Eight files less than Six MB
    Given I already authorozied
    When I call API with  multiple files "<clmId>", "<policyNumber>", "<docId>", "<boxNo>", "<posision>", "<totalFiles>"
    Then I get response code <statusCode>
    Then I get returnMsg "<returnMsg>"

    Examples: 
      | clmId        | policyNumber | docId | boxNo          | posision | totalFiles | statusCode | returnMsg |
      | 20210803261I |   2804249504 | TC21  | INS21082000004 |        4 |          8 |        200 | Success   |
      | 20210803266I |   2902734747 | TC21  | INS21082000005 |        5 |          8 |        200 | Success   |
      | 20210803260I |   2803494481 | TC21  | INS21082000006 |        6 |          8 |        200 | Success   |
