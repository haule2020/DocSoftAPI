$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/DocSoftCopyAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Receive DB Docs soft-copies from INS",
  "description": "\nDescription: When I call API to upload documents\nI want system responding proply",
  "id": "receive-db-docs-soft-copies-from-ins",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#tokenUrl\u003dhttps://manulife-operations-preprod-ext.apigee.net/v1/mg/oauth2/token"
    },
    {
      "line": 7,
      "value": "#baseUrl\u003dhttps://mesh.preprod.api.manulife.com/claim/healthcare/vn/V1/UploadDBDocument"
    },
    {
      "line": 9,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 10,
  "name": "Check if POST request with invalid Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-claim-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-claim-id;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 17,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-claim-id;;1"
    },
    {
      "cells": [
        "20210305725tyy",
        "3810588879",
        "12345",
        "1",
        "1",
        "1",
        "406",
        "invalid Claim Id"
      ],
      "line": 18,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-claim-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Check if POST request with invalid Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-claim-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I call API \"20210305725tyy\", \"3810588879\", \"12345\", \"1\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I get returnMsg \"invalid Claim Id\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 3622421600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210305725tyy",
      "offset": 12
    },
    {
      "val": "3810588879",
      "offset": 30
    },
    {
      "val": "12345",
      "offset": 44
    },
    {
      "val": "1",
      "offset": 53
    },
    {
      "val": "1",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 63
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1299449400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 2442900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid Claim Id",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 8371100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[invalid claim ]id\u003e but was:\u003c[data inval]id\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ValidationSteps.iGetReturnMsg(ValidationSteps.java:55)\r\n\tat ✽.Then I get returnMsg \"invalid Claim Id\"(src/test/resources/Feature/DocSoftCopyAPI.feature:14)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 20,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 22,
  "name": "Check if POST request with Empty Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-empty-claim-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-empty-claim-id;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 28,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-empty-claim-id;;1"
    },
    {
      "cells": [
        "",
        "2855718084",
        "12345",
        "1",
        "1",
        "1",
        "406",
        "empty Claim Id"
      ],
      "line": 29,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-empty-claim-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Check if POST request with Empty Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-empty-claim-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I call API \"\", \"2855718084\", \"12345\", \"1\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I get returnMsg \"empty Claim Id\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 314957800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "2855718084",
      "offset": 16
    },
    {
      "val": "12345",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 39
    },
    {
      "val": "1",
      "offset": 44
    },
    {
      "val": "1",
      "offset": 49
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1037504800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 103300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "empty Claim Id",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 10240800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[empty claim ]id\u003e but was:\u003c[data inval]id\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ValidationSteps.iGetReturnMsg(ValidationSteps.java:55)\r\n\tat ✽.Then I get returnMsg \"empty Claim Id\"(src/test/resources/Feature/DocSoftCopyAPI.feature:26)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 32,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 34,
  "name": "Check if POST request with Claim Status not Pending",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-claim-status-not-pending",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-claim-status-not-pending;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 41,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-claim-status-not-pending;;1"
    },
    {
      "cells": [
        "I20210202201",
        "3817094202",
        "12345",
        "1",
        "1",
        "1",
        "406",
        "claim status is not pending"
      ],
      "line": 42,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-claim-status-not-pending;;2"
    },
    {
      "cells": [
        "I20210202202",
        "2814793251",
        "12345",
        "1",
        "1",
        "1",
        "406",
        "claim status is not pending"
      ],
      "line": 43,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-claim-status-not-pending;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "Check if POST request with Claim Status not Pending",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-claim-status-not-pending;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I call API \"I20210202201\", \"3817094202\", \"12345\", \"1\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I get returnMsg \"claim status is not pending\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 310251800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I20210202201",
      "offset": 12
    },
    {
      "val": "3817094202",
      "offset": 28
    },
    {
      "val": "12345",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 56
    },
    {
      "val": "1",
      "offset": 61
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1092991200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 1471700,
  "error_message": "java.lang.AssertionError: expected:\u003c406\u003e but was:\u003c503\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.ValidationSteps.iGetResponseCode(ValidationSteps.java:46)\r\n\tat ✽.Then I get response code 406(src/test/resources/Feature/DocSoftCopyAPI.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "claim status is not pending",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 43,
  "name": "Check if POST request with Claim Status not Pending",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-claim-status-not-pending;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I call API \"I20210202202\", \"2814793251\", \"12345\", \"1\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I get returnMsg \"claim status is not pending\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 317800800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I20210202202",
      "offset": 12
    },
    {
      "val": "2814793251",
      "offset": 28
    },
    {
      "val": "12345",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 56
    },
    {
      "val": "1",
      "offset": 61
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1063759800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 290700,
  "error_message": "java.lang.AssertionError: expected:\u003c406\u003e but was:\u003c503\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.ValidationSteps.iGetResponseCode(ValidationSteps.java:46)\r\n\tat ✽.Then I get response code 406(src/test/resources/Feature/DocSoftCopyAPI.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "claim status is not pending",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 46,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 48,
  "name": "Check if POST request with invalid policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-policynumber",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-policynumber;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 55,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-policynumber;;1"
    },
    {
      "cells": [
        "202103057250",
        "1",
        "12345",
        "1",
        "1",
        "1",
        "406",
        "invalid policyNumber"
      ],
      "line": 56,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-policynumber;;2"
    },
    {
      "cells": [
        "202103057250",
        "38105888aa",
        "12345",
        "1",
        "1",
        "1",
        "406",
        "invalid policyNumber"
      ],
      "line": 57,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-policynumber;;3"
    },
    {
      "cells": [
        "202103057250",
        "381058888888",
        "12345",
        "1",
        "1",
        "1",
        "406",
        "invalid policyNumber"
      ],
      "line": 58,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-policynumber;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 56,
  "name": "Check if POST request with invalid policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-policynumber;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I call API \"202103057250\", \"1\", \"12345\", \"1\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I get returnMsg \"invalid policyNumber\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 293150300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103057250",
      "offset": 12
    },
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "12345",
      "offset": 33
    },
    {
      "val": "1",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1125232700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 259300,
  "error_message": "java.lang.AssertionError: expected:\u003c406\u003e but was:\u003c503\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.ValidationSteps.iGetResponseCode(ValidationSteps.java:46)\r\n\tat ✽.Then I get response code 406(src/test/resources/Feature/DocSoftCopyAPI.feature:51)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid policyNumber",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 57,
  "name": "Check if POST request with invalid policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-policynumber;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I call API \"202103057250\", \"38105888aa\", \"12345\", \"1\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I get returnMsg \"invalid policyNumber\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 292523800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103057250",
      "offset": 12
    },
    {
      "val": "38105888aa",
      "offset": 28
    },
    {
      "val": "12345",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 56
    },
    {
      "val": "1",
      "offset": 61
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1038665400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 214600,
  "error_message": "java.lang.AssertionError: expected:\u003c406\u003e but was:\u003c503\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.ValidationSteps.iGetResponseCode(ValidationSteps.java:46)\r\n\tat ✽.Then I get response code 406(src/test/resources/Feature/DocSoftCopyAPI.feature:51)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid policyNumber",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 58,
  "name": "Check if POST request with invalid policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-invalid-policynumber;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I call API \"202103057250\", \"381058888888\", \"12345\", \"1\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I get returnMsg \"invalid policyNumber\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 292646400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103057250",
      "offset": 12
    },
    {
      "val": "381058888888",
      "offset": 28
    },
    {
      "val": "12345",
      "offset": 44
    },
    {
      "val": "1",
      "offset": 53
    },
    {
      "val": "1",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 63
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 982856200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 104600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid policyNumber",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 8236400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[invalid policynumber]\u003e but was:\u003c[data invalid]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ValidationSteps.iGetReturnMsg(ValidationSteps.java:55)\r\n\tat ✽.Then I get returnMsg \"invalid policyNumber\"(src/test/resources/Feature/DocSoftCopyAPI.feature:52)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 61,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 63,
  "name": "Check if send request with empty policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-policynumber",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-policynumber;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 70,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-policynumber;;1"
    },
    {
      "cells": [
        "202103081236",
        "",
        "3345",
        "1",
        "1",
        "1",
        "406",
        "empty docId"
      ],
      "line": 71,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-policynumber;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 71,
  "name": "Check if send request with empty policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-policynumber;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I call API \"202103081236\", \"\", \"3345\", \"1\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I get returnMsg \"empty docId\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 296839000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103081236",
      "offset": 12
    },
    {
      "val": "",
      "offset": 28
    },
    {
      "val": "3345",
      "offset": 32
    },
    {
      "val": "1",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 45
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1053172000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 92000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "empty docId",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 7202600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[empty doc]id\u003e but was:\u003c[data inval]id\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ValidationSteps.iGetReturnMsg(ValidationSteps.java:55)\r\n\tat ✽.Then I get returnMsg \"empty docId\"(src/test/resources/Feature/DocSoftCopyAPI.feature:67)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 73,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 76,
  "name": "Check if send request with empty docId",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-docid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 82,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-docid;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 83,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-docid;;1"
    },
    {
      "cells": [
        "202103081236",
        "2855718084",
        "",
        "1",
        "1",
        "1",
        "406",
        "empty policy number"
      ],
      "line": 84,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-docid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 84,
  "name": "Check if send request with empty docId",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-docid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I call API \"202103081236\", \"2855718084\", \"\", \"1\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "I get returnMsg \"empty policy number\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 315596700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103081236",
      "offset": 12
    },
    {
      "val": "2855718084",
      "offset": 28
    },
    {
      "val": "",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 46
    },
    {
      "val": "1",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 56
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 973292200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 311100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "empty policy number",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 17835500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[empty policy number]\u003e but was:\u003c[data invalid]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ValidationSteps.iGetReturnMsg(ValidationSteps.java:55)\r\n\tat ✽.Then I get returnMsg \"empty policy number\"(src/test/resources/Feature/DocSoftCopyAPI.feature:80)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 87,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 89,
  "name": "Check if send request with empty boxNo",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-boxno",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 95,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-boxno;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 96,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-boxno;;1"
    },
    {
      "cells": [
        "202103081236",
        "2855718084",
        "12345",
        "",
        "1",
        "1",
        "406",
        "empty boxNo"
      ],
      "line": 97,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-boxno;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 97,
  "name": "Check if send request with empty boxNo",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-boxno;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "I call API \"202103081236\", \"2855718084\", \"12345\", \"\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "I get returnMsg \"empty boxNo\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 289053000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103081236",
      "offset": 12
    },
    {
      "val": "2855718084",
      "offset": 28
    },
    {
      "val": "12345",
      "offset": 42
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 55
    },
    {
      "val": "1",
      "offset": 60
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 942045900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 95100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "empty boxNo",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 9160900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[empty boxno]\u003e but was:\u003c[data invalid]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ValidationSteps.iGetReturnMsg(ValidationSteps.java:55)\r\n\tat ✽.Then I get returnMsg \"empty boxNo\"(src/test/resources/Feature/DocSoftCopyAPI.feature:93)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 99,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 101,
  "name": "Check if send request with empty posision",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-posision",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 107,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-posision;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 108,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-posision;;1"
    },
    {
      "cells": [
        "202103081236",
        "2855718084",
        "12345",
        "1",
        "",
        "1",
        "406",
        "empty posision"
      ],
      "line": 109,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-posision;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 109,
  "name": "Check if send request with empty posision",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-posision;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I call API \"202103081236\", \"2855718084\", \"12345\", \"1\", \"\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I get returnMsg \"empty posision\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 285800800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103081236",
      "offset": 12
    },
    {
      "val": "2855718084",
      "offset": 28
    },
    {
      "val": "12345",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 51
    },
    {
      "val": "",
      "offset": 56
    },
    {
      "val": "1",
      "offset": 60
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 977238400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 144600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "empty posision",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 8162100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[empty posision]\u003e but was:\u003c[data invalid]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ValidationSteps.iGetReturnMsg(ValidationSteps.java:55)\r\n\tat ✽.Then I get returnMsg \"empty posision\"(src/test/resources/Feature/DocSoftCopyAPI.feature:105)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 112,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 115,
  "name": "Check if send request with empty totalFiles",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-totalfiles",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 116,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 121,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-totalfiles;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 122,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-totalfiles;;1"
    },
    {
      "cells": [
        "202103080110",
        "2819774058",
        "12345",
        "1",
        "1",
        "",
        "406",
        "empty totalFiles"
      ],
      "line": 123,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-totalfiles;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 123,
  "name": "Check if send request with empty totalFiles",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-send-request-with-empty-totalfiles;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 116,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "I call API \"202103080110\", \"2819774058\", \"12345\", \"1\", \"1\", \"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "I get returnMsg \"empty totalFiles\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 290094200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103080110",
      "offset": 12
    },
    {
      "val": "2819774058",
      "offset": 28
    },
    {
      "val": "12345",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 56
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 952479900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "empty totalFiles",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 6875100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[empty totalfiles]\u003e but was:\u003c[data invalid]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ValidationSteps.iGetReturnMsg(ValidationSteps.java:55)\r\n\tat ✽.Then I get returnMsg \"empty totalFiles\"(src/test/resources/Feature/DocSoftCopyAPI.feature:119)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 125,
      "value": "#---------------------------------------------------------------------------------------------"
    }
  ],
  "line": 128,
  "name": "Check if POST request with valid Parameters",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 134,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles",
        "statusCode",
        "returnMsg"
      ],
      "line": 135,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;;1"
    },
    {
      "cells": [
        "202103057171",
        "2814256754",
        "12345",
        "11",
        "1",
        "1",
        "200",
        "Success"
      ],
      "line": 136,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;;2"
    },
    {
      "cells": [
        "202103057944",
        "2952309739",
        "12346",
        "12",
        "1",
        "1",
        "200",
        "Success"
      ],
      "line": 137,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;;3"
    },
    {
      "cells": [
        "202103080470",
        "2815539950",
        "12347",
        "13",
        "1",
        "1",
        "200",
        "Success"
      ],
      "line": 138,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;;4"
    },
    {
      "cells": [
        "202103081236",
        "2855718084",
        "12348",
        "14",
        "1",
        "1",
        "200",
        "Success"
      ],
      "line": 139,
      "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 136,
  "name": "Check if POST request with valid Parameters",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "I call API \"202103057171\", \"2814256754\", \"12345\", \"11\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "I get returnMsg \"Success\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 319634900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103057171",
      "offset": 12
    },
    {
      "val": "2814256754",
      "offset": 28
    },
    {
      "val": "12345",
      "offset": 42
    },
    {
      "val": "11",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1064428500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 225800,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c503\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.ValidationSteps.iGetResponseCode(ValidationSteps.java:46)\r\n\tat ✽.Then I get response code 200(src/test/resources/Feature/DocSoftCopyAPI.feature:131)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 137,
  "name": "Check if POST request with valid Parameters",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "I call API \"202103057944\", \"2952309739\", \"12346\", \"12\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "I get returnMsg \"Success\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 296487700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103057944",
      "offset": 12
    },
    {
      "val": "2952309739",
      "offset": 28
    },
    {
      "val": "12346",
      "offset": 42
    },
    {
      "val": "12",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1046676400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 221000,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c503\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.ValidationSteps.iGetResponseCode(ValidationSteps.java:46)\r\n\tat ✽.Then I get response code 200(src/test/resources/Feature/DocSoftCopyAPI.feature:131)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 138,
  "name": "Check if POST request with valid Parameters",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "I call API \"202103080470\", \"2815539950\", \"12347\", \"13\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "I get returnMsg \"Success\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 293302900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103080470",
      "offset": 12
    },
    {
      "val": "2815539950",
      "offset": 28
    },
    {
      "val": "12347",
      "offset": 42
    },
    {
      "val": "13",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1071087600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 818800,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c503\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.ValidationSteps.iGetResponseCode(ValidationSteps.java:46)\r\n\tat ✽.Then I get response code 200(src/test/resources/Feature/DocSoftCopyAPI.feature:131)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 139,
  "name": "Check if POST request with valid Parameters",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;check-if-post-request-with-valid-parameters;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "I call API \"202103081236\", \"2855718084\", \"12348\", \"14\", \"1\", \"1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "I get returnMsg \"Success\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 297362200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103081236",
      "offset": 12
    },
    {
      "val": "2855718084",
      "offset": 28
    },
    {
      "val": "12348",
      "offset": 42
    },
    {
      "val": "14",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1038928400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 468100,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c503\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinitions.ValidationSteps.iGetResponseCode(ValidationSteps.java:46)\r\n\tat ✽.Then I get response code 200(src/test/resources/Feature/DocSoftCopyAPI.feature:131)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "status": "skipped"
});
});