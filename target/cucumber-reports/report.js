$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/DocSoftCopyAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Receive DB Docs soft-copies from INS",
  "description": "\nDescription: When I call API to upload documents\nI want system responses correct response code  and returnMsg -- \n\ntokenUrl\u003dhttps://manulife-operations-preprod-ext.apigee.net/v1/mg/oauth2/token\nbaseUrl\u003dhttps://mesh.preprod.api.manulife.com/claim/healthcare/vn/V1/UploadDBDocument",
  "id": "receive-db-docs-soft-copies-from-ins",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Negative TC01 - Send request with invalid file type",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc01---send-request-with-invalid-file-type",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I call API with invalid file type \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc01---send-request-with-invalid-file-type;",
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
      "line": 16,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc01---send-request-with-invalid-file-type;;1"
    },
    {
      "cells": [
        "I20210202204",
        "3816092975",
        "TC01",
        "INS21072400003",
        "1",
        "1",
        "406",
        "file not accept"
      ],
      "line": 17,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc01---send-request-with-invalid-file-type;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Negative TC01 - Send request with invalid file type",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc01---send-request-with-invalid-file-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I call API with invalid file type \"I20210202204\", \"3816092975\", \"TC01\", \"INS21072400003\", \"1\", \"1\"",
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
  "line": 12,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I get returnMsg \"file not accept\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 3302456200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I20210202204",
      "offset": 35
    },
    {
      "val": "3816092975",
      "offset": 51
    },
    {
      "val": "TC01",
      "offset": 65
    },
    {
      "val": "INS21072400003",
      "offset": 73
    },
    {
      "val": "1",
      "offset": 91
    },
    {
      "val": "1",
      "offset": 96
    }
  ],
  "location": "ValidationSteps.iCallAPIWithInvalidFileType(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1184275100,
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
  "duration": 2564300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file not accept",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 11072000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Negative TC02 - Send request with invalid Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc02---send-request-with-invalid-claim-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc02---send-request-with-invalid-claim-id;",
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
      "line": 26,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc02---send-request-with-invalid-claim-id;;1"
    },
    {
      "cells": [
        "20210305725tyy",
        "3810588879",
        "TC02",
        "1",
        "1",
        "1",
        "406",
        "claimID does not exist"
      ],
      "line": 27,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc02---send-request-with-invalid-claim-id;;2"
    },
    {
      "cells": [
        "%20210305725%",
        "3810588879",
        "TC02",
        "1",
        "1",
        "1",
        "406",
        "claimID does not exist"
      ],
      "line": 28,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc02---send-request-with-invalid-claim-id;;3"
    },
    {
      "cells": [
        ".",
        "3810588879",
        "TC02",
        "1",
        "1",
        "1",
        "406",
        "claimID does not exist"
      ],
      "line": 29,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc02---send-request-with-invalid-claim-id;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Negative TC02 - Send request with invalid Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc02---send-request-with-invalid-claim-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I call API \"20210305725tyy\", \"3810588879\", \"TC02\", \"1\", \"1\", \"1\"",
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
  "line": 22,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I get returnMsg \"claimID does not exist\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 373213500,
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
      "val": "TC02",
      "offset": 44
    },
    {
      "val": "1",
      "offset": 52
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
  "duration": 1529352200,
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
  "duration": 160500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "claimID does not exist",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 10823100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Negative TC02 - Send request with invalid Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc02---send-request-with-invalid-claim-id;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I call API \"%20210305725%\", \"3810588879\", \"TC02\", \"1\", \"1\", \"1\"",
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
  "line": 22,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I get returnMsg \"claimID does not exist\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 434533000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%20210305725%",
      "offset": 12
    },
    {
      "val": "3810588879",
      "offset": 29
    },
    {
      "val": "TC02",
      "offset": 43
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
  "duration": 1512111800,
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
  "duration": 327200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "claimID does not exist",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 15671200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Negative TC02 - Send request with invalid Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc02---send-request-with-invalid-claim-id;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I call API \".\", \"3810588879\", \"TC02\", \"1\", \"1\", \"1\"",
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
  "line": 22,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I get returnMsg \"claimID does not exist\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 468857600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".",
      "offset": 12
    },
    {
      "val": "3810588879",
      "offset": 17
    },
    {
      "val": "TC02",
      "offset": 31
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
  "duration": 1590186800,
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
  "duration": 169500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "claimID does not exist",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 9611200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Negative TC03 - Send request with Empty Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc03---send-request-with-empty-claim-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc03---send-request-with-empty-claim-id;",
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
      "line": 38,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc03---send-request-with-empty-claim-id;;1"
    },
    {
      "cells": [
        "",
        "2855718084",
        "TC03",
        "1",
        "1",
        "1",
        "406",
        "missing claimID"
      ],
      "line": 39,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc03---send-request-with-empty-claim-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Negative TC03 - Send request with Empty Claim Id",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc03---send-request-with-empty-claim-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I call API \"\", \"2855718084\", \"TC03\", \"1\", \"1\", \"1\"",
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
  "line": 34,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I get returnMsg \"missing claimID\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 354700100,
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
      "val": "TC03",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 43
    },
    {
      "val": "1",
      "offset": 48
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1174230400,
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
  "duration": 194100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "missing claimID",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 8826900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Negative TC04 - Send request with Claim Status not Pending",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc04---send-request-with-claim-status-not-pending",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc04---send-request-with-claim-status-not-pending;",
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
      "line": 48,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc04---send-request-with-claim-status-not-pending;;1"
    },
    {
      "cells": [
        "I20210202019",
        "2930711410",
        "TC04",
        "INS21082000004",
        "1",
        "1",
        "406",
        "claim status is no longer pending"
      ],
      "line": 49,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc04---send-request-with-claim-status-not-pending;;2"
    },
    {
      "cells": [
        "I20210202023",
        "2814762009",
        "TC04",
        "INS21082000004",
        "2",
        "1",
        "406",
        "claim status is no longer pending"
      ],
      "line": 50,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc04---send-request-with-claim-status-not-pending;;3"
    },
    {
      "cells": [
        "I20210202201",
        "3817094202",
        "TC04",
        "INS21082000004",
        "3",
        "1",
        "406",
        "claim status is no longer pending"
      ],
      "line": 51,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc04---send-request-with-claim-status-not-pending;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Negative TC04 - Send request with Claim Status not Pending",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc04---send-request-with-claim-status-not-pending;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I call API \"I20210202019\", \"2930711410\", \"TC04\", \"INS21082000004\", \"1\", \"1\"",
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
  "line": 44,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I get returnMsg \"claim status is no longer pending\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 379566400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I20210202019",
      "offset": 12
    },
    {
      "val": "2930711410",
      "offset": 28
    },
    {
      "val": "TC04",
      "offset": 42
    },
    {
      "val": "INS21082000004",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 68
    },
    {
      "val": "1",
      "offset": 73
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1466360400,
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
  "duration": 88400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "claim status is no longer pending",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 6993800,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Negative TC04 - Send request with Claim Status not Pending",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc04---send-request-with-claim-status-not-pending;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I call API \"I20210202023\", \"2814762009\", \"TC04\", \"INS21082000004\", \"2\", \"1\"",
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
  "line": 44,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I get returnMsg \"claim status is no longer pending\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 413818200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I20210202023",
      "offset": 12
    },
    {
      "val": "2814762009",
      "offset": 28
    },
    {
      "val": "TC04",
      "offset": 42
    },
    {
      "val": "INS21082000004",
      "offset": 50
    },
    {
      "val": "2",
      "offset": 68
    },
    {
      "val": "1",
      "offset": 73
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1250515100,
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
  "duration": 101500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "claim status is no longer pending",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 7132100,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Negative TC04 - Send request with Claim Status not Pending",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc04---send-request-with-claim-status-not-pending;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I call API \"I20210202201\", \"3817094202\", \"TC04\", \"INS21082000004\", \"3\", \"1\"",
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
  "line": 44,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I get returnMsg \"claim status is no longer pending\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 326323100,
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
      "val": "TC04",
      "offset": 42
    },
    {
      "val": "INS21082000004",
      "offset": 50
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "1",
      "offset": 73
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1615335200,
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
  "duration": 281100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "claim status is no longer pending",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 18092600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "Negative TC05 - Send request with Claim has no Approved Date",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc05---send-request-with-claim-has-no-approved-date",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc05---send-request-with-claim-has-no-approved-date;",
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
      "line": 60,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc05---send-request-with-claim-has-no-approved-date;;1"
    },
    {
      "cells": [
        "202103080101",
        "2855720841",
        "TC05_123456",
        "1",
        "1",
        "1",
        "406",
        "Invalid call. Claim has no Approved Date"
      ],
      "line": 61,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc05---send-request-with-claim-has-no-approved-date;;2"
    },
    {
      "cells": [
        "202103057652",
        "3812955464",
        "TC05_123457",
        "1",
        "1",
        "1",
        "406",
        "Invalid call. Claim has no Approved Date"
      ],
      "line": 62,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc05---send-request-with-claim-has-no-approved-date;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 61,
  "name": "Negative TC05 - Send request with Claim has no Approved Date",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc05---send-request-with-claim-has-no-approved-date;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I call API \"202103080101\", \"2855720841\", \"TC05_123456\", \"1\", \"1\", \"1\"",
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
  "line": 56,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I get returnMsg \"Invalid call. Claim has no Approved Date\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 481376300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103080101",
      "offset": 12
    },
    {
      "val": "2855720841",
      "offset": 28
    },
    {
      "val": "TC05_123456",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 67
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1395081600,
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
  "duration": 84000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid call. Claim has no Approved Date",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 7075700,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Negative TC05 - Send request with Claim has no Approved Date",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc05---send-request-with-claim-has-no-approved-date;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I call API \"202103057652\", \"3812955464\", \"TC05_123457\", \"1\", \"1\", \"1\"",
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
  "line": 56,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I get returnMsg \"Invalid call. Claim has no Approved Date\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 296314300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202103057652",
      "offset": 12
    },
    {
      "val": "3812955464",
      "offset": 28
    },
    {
      "val": "TC05_123457",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 67
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1127908200,
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
  "duration": 134900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid call. Claim has no Approved Date",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 7486300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "Positive TC06 - Send request with Claim has Approved Date",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc06---send-request-with-claim-has-approved-date",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc06---send-request-with-claim-has-approved-date;",
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
      "line": 71,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc06---send-request-with-claim-has-approved-date;;1"
    },
    {
      "cells": [
        "I20210202202",
        "2814793251",
        "TC06",
        "1",
        "1",
        "1",
        "200",
        "Success"
      ],
      "line": 72,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc06---send-request-with-claim-has-approved-date;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 72,
  "name": "Positive TC06 - Send request with Claim has Approved Date",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc06---send-request-with-claim-has-approved-date;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I call API \"I20210202202\", \"2814793251\", \"TC06\", \"1\", \"1\", \"1\"",
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
  "line": 67,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
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
  "duration": 349620600,
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
      "val": "TC06",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 50
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
  "duration": 3543419400,
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
  "duration": 87900,
  "status": "passed"
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
  "duration": 7349300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Negative TC07 - Send request with duplicated doc id for same claim",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc07---send-request-with-duplicated-doc-id-for-same-claim",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I call API duplicated doc id \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc07---send-request-with-duplicated-doc-id-for-same-claim;",
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
      "line": 81,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc07---send-request-with-duplicated-doc-id-for-same-claim;;1"
    },
    {
      "cells": [
        "I20210202203",
        "3812507620",
        "TC07_12345821082021020718",
        "1",
        "1",
        "1",
        "406",
        "Import fail. Duplicated Doc ID for same claim."
      ],
      "line": 82,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc07---send-request-with-duplicated-doc-id-for-same-claim;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 82,
  "name": "Negative TC07 - Send request with duplicated doc id for same claim",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc07---send-request-with-duplicated-doc-id-for-same-claim;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I call API duplicated doc id \"I20210202203\", \"3812507620\", \"TC07_12345821082021020718\", \"1\", \"1\", \"1\"",
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
  "line": 77,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "I get returnMsg \"Import fail. Duplicated Doc ID for same claim.\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 309678200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I20210202203",
      "offset": 30
    },
    {
      "val": "3812507620",
      "offset": 46
    },
    {
      "val": "TC07_12345821082021020718",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 89
    },
    {
      "val": "1",
      "offset": 94
    },
    {
      "val": "1",
      "offset": 99
    }
  ],
  "location": "ValidationSteps.iCallAPIDuplicatedDocId(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1110215500,
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
  "duration": 108100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Import fail. Duplicated Doc ID for same claim.",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 9180200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 84,
  "name": "Positive TC08 - Send request with duplicated doc id for different claim",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc08---send-request-with-duplicated-doc-id-for-different-claim",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I call API duplicated doc id \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 90,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc08---send-request-with-duplicated-doc-id-for-different-claim;",
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
      "line": 91,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc08---send-request-with-duplicated-doc-id-for-different-claim;;1"
    },
    {
      "cells": [
        "I20210202207",
        "3810437705",
        "TC07_12345821082021020718",
        "1",
        "1",
        "1",
        "200",
        "Success"
      ],
      "line": 92,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc08---send-request-with-duplicated-doc-id-for-different-claim;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 92,
  "name": "Positive TC08 - Send request with duplicated doc id for different claim",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc08---send-request-with-duplicated-doc-id-for-different-claim;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I call API duplicated doc id \"I20210202207\", \"3810437705\", \"TC07_12345821082021020718\", \"1\", \"1\", \"1\"",
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
  "line": 87,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 88,
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
  "duration": 340106100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I20210202207",
      "offset": 30
    },
    {
      "val": "3810437705",
      "offset": 46
    },
    {
      "val": "TC07_12345821082021020718",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 89
    },
    {
      "val": "1",
      "offset": 94
    },
    {
      "val": "1",
      "offset": 99
    }
  ],
  "location": "ValidationSteps.iCallAPIDuplicatedDocId(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3431718400,
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
  "duration": 84000,
  "status": "passed"
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
  "duration": 8241700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 94,
  "name": "Negative TC09 - Send request with invalid policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc09---send-request-with-invalid-policynumber",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 95,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 100,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc09---send-request-with-invalid-policynumber;",
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
      "line": 101,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc09---send-request-with-invalid-policynumber;;1"
    },
    {
      "cells": [
        "20210803262I",
        "1",
        "TC09",
        "1",
        "1",
        "1",
        "406",
        "policy number does not exist"
      ],
      "line": 102,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc09---send-request-with-invalid-policynumber;;2"
    },
    {
      "cells": [
        "20210803262I",
        "38105888aa",
        "TC09",
        "1",
        "1",
        "1",
        "406",
        "policy number does not exist"
      ],
      "line": 103,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc09---send-request-with-invalid-policynumber;;3"
    },
    {
      "cells": [
        "20210803262I",
        "381058888888",
        "TC09",
        "1",
        "1",
        "1",
        "406",
        "policy number does not exist"
      ],
      "line": 104,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc09---send-request-with-invalid-policynumber;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 102,
  "name": "Negative TC09 - Send request with invalid policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc09---send-request-with-invalid-policynumber;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 95,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "I call API \"20210803262I\", \"1\", \"TC09\", \"1\", \"1\", \"1\"",
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
  "line": 97,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "I get returnMsg \"policy number does not exist\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 346837200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803262I",
      "offset": 12
    },
    {
      "val": "1",
      "offset": 28
    },
    {
      "val": "TC09",
      "offset": 33
    },
    {
      "val": "1",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 46
    },
    {
      "val": "1",
      "offset": 51
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1108349300,
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
  "duration": 115800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "policy number does not exist",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 7587400,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Negative TC09 - Send request with invalid policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc09---send-request-with-invalid-policynumber;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 95,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "I call API \"20210803262I\", \"38105888aa\", \"TC09\", \"1\", \"1\", \"1\"",
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
  "line": 97,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "I get returnMsg \"policy number does not exist\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 340689900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803262I",
      "offset": 12
    },
    {
      "val": "38105888aa",
      "offset": 28
    },
    {
      "val": "TC09",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 50
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
  "duration": 2050608800,
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
  "duration": 157900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "policy number does not exist",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 9576500,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Negative TC09 - Send request with invalid policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc09---send-request-with-invalid-policynumber;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 95,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "I call API \"20210803262I\", \"381058888888\", \"TC09\", \"1\", \"1\", \"1\"",
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
  "line": 97,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "I get returnMsg \"policy number does not exist\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 353594900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803262I",
      "offset": 12
    },
    {
      "val": "381058888888",
      "offset": 28
    },
    {
      "val": "TC09",
      "offset": 44
    },
    {
      "val": "1",
      "offset": 52
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
  "duration": 1100095200,
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
  "duration": 444600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "policy number does not exist",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 7663900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 106,
  "name": "Negative TC10 - Send request with empty policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc10---send-request-with-empty-policynumber",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 107,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc10---send-request-with-empty-policynumber;",
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
      "line": 113,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc10---send-request-with-empty-policynumber;;1"
    },
    {
      "cells": [
        "202103081236",
        "",
        "TC10",
        "1",
        "1",
        "1",
        "406",
        "missing policy number"
      ],
      "line": 114,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc10---send-request-with-empty-policynumber;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 114,
  "name": "Negative TC10 - Send request with empty policyNumber",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc10---send-request-with-empty-policynumber;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 107,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "I call API \"202103081236\", \"\", \"TC10\", \"1\", \"1\", \"1\"",
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
  "line": 109,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "I get returnMsg \"missing policy number\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 322631100,
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
      "val": "TC10",
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
  "duration": 892391800,
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
  "duration": 104200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "missing policy number",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 17271000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 116,
  "name": "Negative TC11 - Send request with empty docId",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc11---send-request-with-empty-docid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "I call API empty DocId \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 122,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc11---send-request-with-empty-docid;",
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
      "line": 123,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc11---send-request-with-empty-docid;;1"
    },
    {
      "cells": [
        "I20210202206",
        "2951720316",
        "",
        "1",
        "1",
        "1",
        "406",
        "missing docID"
      ],
      "line": 124,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc11---send-request-with-empty-docid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 124,
  "name": "Negative TC11 - Send request with empty docId",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc11---send-request-with-empty-docid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "I call API empty DocId \"I20210202206\", \"2951720316\", \"\", \"1\", \"1\", \"1\"",
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
  "line": 119,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "I get returnMsg \"missing docID\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 333250700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I20210202206",
      "offset": 24
    },
    {
      "val": "2951720316",
      "offset": 40
    },
    {
      "val": "",
      "offset": 54
    },
    {
      "val": "1",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "ValidationSteps.iCallAPIEmpatyDocId(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1737278300,
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
  "duration": 78800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "missing docID",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 5878400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 126,
  "name": "Negative TC12 - Send request with docId exceeds max length 100 characters",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc12---send-request-with-docid-exceeds-max-length-100-characters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 127,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 132,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc12---send-request-with-docid-exceeds-max-length-100-characters;",
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
      "line": 133,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc12---send-request-with-docid-exceeds-max-length-100-characters;;1"
    },
    {
      "cells": [
        "202103081236",
        "2855718084",
        "TC12_312321321312345555123125555555gxcgsgfsgsgsdgsf4fsdfdsfsdfsddsadsadasdasdsadasdsadasdsdsdasdasdasaasdfa",
        "1",
        "1",
        "1",
        "406",
        "docID exceeds max length 100 characters"
      ],
      "line": 134,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc12---send-request-with-docid-exceeds-max-length-100-characters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 134,
  "name": "Negative TC12 - Send request with docId exceeds max length 100 characters",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc12---send-request-with-docid-exceeds-max-length-100-characters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 127,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "I call API \"202103081236\", \"2855718084\", \"TC12_312321321312345555123125555555gxcgsgfsgsgsdgsf4fsdfdsfsdfsddsadsadasdasdsadasdsadasdsdsdasdasdasaasdfa\", \"1\", \"1\", \"1\"",
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
  "line": 129,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "I get returnMsg \"docID exceeds max length 100 characters\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 356048800,
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
      "val": "TC12_312321321312345555123125555555gxcgsgfsgsgsdgsf4fsdfdsfsdfsddsadsadasdasdsadasdsadasdsdsdasdasdasaasdfa",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 153
    },
    {
      "val": "1",
      "offset": 158
    },
    {
      "val": "1",
      "offset": 163
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 810691000,
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
  "duration": 72400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "docID exceeds max length 100 characters",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 6995000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 136,
  "name": "Negative TC13 - Send request with empty boxNo",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc13---send-request-with-empty-boxno",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 137,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 139,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 142,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc13---send-request-with-empty-boxno;",
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
      "line": 143,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc13---send-request-with-empty-boxno;;1"
    },
    {
      "cells": [
        "202103081236",
        "2855718084",
        "TC13",
        "",
        "1",
        "1",
        "406",
        "missing box no"
      ],
      "line": 144,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc13---send-request-with-empty-boxno;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 144,
  "name": "Negative TC13 - Send request with empty boxNo",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc13---send-request-with-empty-boxno;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 137,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "I call API \"202103081236\", \"2855718084\", \"TC13\", \"\", \"1\", \"1\"",
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
  "line": 139,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "I get returnMsg \"missing box no\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 334332700,
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
      "val": "TC13",
      "offset": 42
    },
    {
      "val": "",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 54
    },
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 890942000,
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
  "duration": 92500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "missing box no",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 6867100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 146,
  "name": "Negative TC14 - Send request with invalid boxNo",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc14---send-request-with-invalid-boxno",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 147,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 152,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc14---send-request-with-invalid-boxno;",
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
      "line": 153,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc14---send-request-with-invalid-boxno;;1"
    },
    {
      "cells": [
        "202103081236",
        "2855718084",
        "TC14",
        "INS21072400003_12",
        "1",
        "1",
        "406",
        "boxID invalid"
      ],
      "line": 154,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc14---send-request-with-invalid-boxno;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 154,
  "name": "Negative TC14 - Send request with invalid boxNo",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc14---send-request-with-invalid-boxno;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 147,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "I call API \"202103081236\", \"2855718084\", \"TC14\", \"INS21072400003_12\", \"1\", \"1\"",
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
  "line": 149,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "I get returnMsg \"boxID invalid\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 352864800,
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
      "val": "TC14",
      "offset": 42
    },
    {
      "val": "INS21072400003_12",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 71
    },
    {
      "val": "1",
      "offset": 76
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1064505900,
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
  "duration": 69900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "boxID invalid",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 5741400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 156,
  "name": "Negative TC15 - Send request with empty posision",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc15---send-request-with-empty-posision",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 157,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 158,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 162,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc15---send-request-with-empty-posision;",
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
      "line": 163,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc15---send-request-with-empty-posision;;1"
    },
    {
      "cells": [
        "202103081236",
        "2855718084",
        "TC15_12345",
        "1",
        "",
        "1",
        "406",
        "missing position value"
      ],
      "line": 164,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc15---send-request-with-empty-posision;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 164,
  "name": "Negative TC15 - Send request with empty posision",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc15---send-request-with-empty-posision;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 157,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 158,
  "name": "I call API \"202103081236\", \"2855718084\", \"TC15_12345\", \"1\", \"\", \"1\"",
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
  "line": 159,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "I get returnMsg \"missing position value\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 395587200,
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
      "val": "TC15_12345",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 56
    },
    {
      "val": "",
      "offset": 61
    },
    {
      "val": "1",
      "offset": 65
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 886047500,
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
  "duration": 99300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "missing position value",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 6789300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 166,
  "name": "Negative TC16 - Send request with invalid position value",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc16---send-request-with-invalid-position-value",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 167,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 168,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 169,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 170,
  "name": "I get error \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 172,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc16---send-request-with-invalid-position-value;",
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
      "line": 173,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc16---send-request-with-invalid-position-value;;1"
    },
    {
      "cells": [
        "202103081236",
        "2855718084",
        "TC16",
        "1",
        "str",
        "1",
        "400",
        "Bad Request"
      ],
      "line": 174,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc16---send-request-with-invalid-position-value;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 174,
  "name": "Negative TC16 - Send request with invalid position value",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc16---send-request-with-invalid-position-value;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 167,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 168,
  "name": "I call API \"202103081236\", \"2855718084\", \"TC16\", \"1\", \"str\", \"1\"",
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
  "line": 169,
  "name": "I get response code 400",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 170,
  "name": "I get error \"Bad Request\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 339616000,
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
      "val": "TC16",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 50
    },
    {
      "val": "str",
      "offset": 55
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 972570400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 94000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bad Request",
      "offset": 13
    }
  ],
  "location": "ValidationSteps.iGetError(String)"
});
formatter.result({
  "duration": 10733900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 176,
  "name": "Negative TC17 - Send request with empty totalFiles",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc17---send-request-with-empty-totalfiles",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 177,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 178,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 182,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc17---send-request-with-empty-totalfiles;",
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
      "line": 183,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc17---send-request-with-empty-totalfiles;;1"
    },
    {
      "cells": [
        "20210803264I",
        "2902413193",
        "TC17",
        "1",
        "1",
        "",
        "406",
        "missing files count"
      ],
      "line": 184,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc17---send-request-with-empty-totalfiles;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 184,
  "name": "Negative TC17 - Send request with empty totalFiles",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc17---send-request-with-empty-totalfiles;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 177,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 178,
  "name": "I call API \"20210803264I\", \"2902413193\", \"TC17\", \"1\", \"1\", \"\"",
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
  "line": 179,
  "name": "I get response code 406",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "I get returnMsg \"missing files count\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 301372500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803264I",
      "offset": 12
    },
    {
      "val": "2902413193",
      "offset": 28
    },
    {
      "val": "TC17",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 55
    },
    {
      "val": "",
      "offset": 60
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 706582000,
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
  "duration": 185100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "missing files count",
      "offset": 17
    }
  ],
  "location": "ValidationSteps.iGetReturnMsg(String)"
});
formatter.result({
  "duration": 7710300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 186,
  "name": "Negative TC18 - Send request with invalid totalFiles",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc18---send-request-with-invalid-totalfiles",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 187,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 188,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 189,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "I get error \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 192,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc18---send-request-with-invalid-totalfiles;",
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
      "line": 193,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc18---send-request-with-invalid-totalfiles;;1"
    },
    {
      "cells": [
        "20210803262I",
        "2803494481",
        "TC18",
        "1",
        "1",
        "str",
        "400",
        "Bad Request"
      ],
      "line": 194,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc18---send-request-with-invalid-totalfiles;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 194,
  "name": "Negative TC18 - Send request with invalid totalFiles",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc18---send-request-with-invalid-totalfiles;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 187,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 188,
  "name": "I call API \"20210803262I\", \"2803494481\", \"TC18\", \"1\", \"1\", \"str\"",
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
  "line": 189,
  "name": "I get response code 400",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "I get error \"Bad Request\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 281175600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803262I",
      "offset": 12
    },
    {
      "val": "2803494481",
      "offset": 28
    },
    {
      "val": "TC18",
      "offset": 42
    },
    {
      "val": "1",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 55
    },
    {
      "val": "str",
      "offset": 60
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 797819100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 20
    }
  ],
  "location": "ValidationSteps.iGetResponseCode(int)"
});
formatter.result({
  "duration": 89600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bad Request",
      "offset": 13
    }
  ],
  "location": "ValidationSteps.iGetError(String)"
});
formatter.result({
  "duration": 8104100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 196,
  "name": "Negative TC19 - Send request with files more than Six MB",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc19---send-request-with-files-more-than-six-mb",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 197,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 198,
  "name": "I call API with files more than Six MB \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "response code should not 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 201,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc19---send-request-with-files-more-than-six-mb;",
  "rows": [
    {
      "cells": [
        "clmId",
        "policyNumber",
        "docId",
        "boxNo",
        "posision",
        "totalFiles"
      ],
      "line": 202,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc19---send-request-with-files-more-than-six-mb;;1"
    },
    {
      "cells": [
        "20210803262I",
        "2803494481",
        "TC19",
        "INS21082000019",
        "1",
        "9"
      ],
      "line": 203,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc19---send-request-with-files-more-than-six-mb;;2"
    },
    {
      "cells": [
        "20210803263I",
        "2902734747",
        "TC19",
        "INS21082000019",
        "2",
        "9"
      ],
      "line": 204,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc19---send-request-with-files-more-than-six-mb;;3"
    },
    {
      "cells": [
        "20210803264I",
        "2902413193",
        "TC19",
        "INS21082000019",
        "3",
        "9"
      ],
      "line": 205,
      "id": "receive-db-docs-soft-copies-from-ins;negative-tc19---send-request-with-files-more-than-six-mb;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 203,
  "name": "Negative TC19 - Send request with files more than Six MB",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc19---send-request-with-files-more-than-six-mb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 197,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 198,
  "name": "I call API with files more than Six MB \"20210803262I\", \"2803494481\", \"TC19\", \"INS21082000019\", \"1\", \"9\"",
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
  "line": 199,
  "name": "response code should not 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 293751600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803262I",
      "offset": 40
    },
    {
      "val": "2803494481",
      "offset": 56
    },
    {
      "val": "TC19",
      "offset": 70
    },
    {
      "val": "INS21082000019",
      "offset": 78
    },
    {
      "val": "1",
      "offset": 96
    },
    {
      "val": "9",
      "offset": 101
    }
  ],
  "location": "ValidationSteps.iCallAPIWithFilesMoreThanSixMB(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1357085500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "ValidationSteps.responseCodeShouldNot(int)"
});
formatter.result({
  "duration": 210300,
  "status": "passed"
});
formatter.scenario({
  "line": 204,
  "name": "Negative TC19 - Send request with files more than Six MB",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc19---send-request-with-files-more-than-six-mb;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 197,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 198,
  "name": "I call API with files more than Six MB \"20210803263I\", \"2902734747\", \"TC19\", \"INS21082000019\", \"2\", \"9\"",
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
  "line": 199,
  "name": "response code should not 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 334838400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803263I",
      "offset": 40
    },
    {
      "val": "2902734747",
      "offset": 56
    },
    {
      "val": "TC19",
      "offset": 70
    },
    {
      "val": "INS21082000019",
      "offset": 78
    },
    {
      "val": "2",
      "offset": 96
    },
    {
      "val": "9",
      "offset": 101
    }
  ],
  "location": "ValidationSteps.iCallAPIWithFilesMoreThanSixMB(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2352029400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "ValidationSteps.responseCodeShouldNot(int)"
});
formatter.result({
  "duration": 143400,
  "status": "passed"
});
formatter.scenario({
  "line": 205,
  "name": "Negative TC19 - Send request with files more than Six MB",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;negative-tc19---send-request-with-files-more-than-six-mb;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 197,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 198,
  "name": "I call API with files more than Six MB \"20210803264I\", \"2902413193\", \"TC19\", \"INS21082000019\", \"3\", \"9\"",
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
  "line": 199,
  "name": "response code should not 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.iAlreadyAuthorozied()"
});
formatter.result({
  "duration": 291767100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803264I",
      "offset": 40
    },
    {
      "val": "2902413193",
      "offset": 56
    },
    {
      "val": "TC19",
      "offset": 70
    },
    {
      "val": "INS21082000019",
      "offset": 78
    },
    {
      "val": "3",
      "offset": 96
    },
    {
      "val": "9",
      "offset": 101
    }
  ],
  "location": "ValidationSteps.iCallAPIWithFilesMoreThanSixMB(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1749275100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "ValidationSteps.responseCodeShouldNot(int)"
});
formatter.result({
  "duration": 193200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 207,
  "name": "Positive TC20 - Send request with valid Parameters and 1 file",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc20---send-request-with-valid-parameters-and-1-file",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 208,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 209,
  "name": "I call API \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 210,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 211,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 213,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc20---send-request-with-valid-parameters-and-1-file;",
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
      "line": 214,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc20---send-request-with-valid-parameters-and-1-file;;1"
    },
    {
      "cells": [
        "20210803262I",
        "2803494481",
        "TC20",
        "INS21082000011",
        "1",
        "1",
        "200",
        "Success"
      ],
      "line": 215,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc20---send-request-with-valid-parameters-and-1-file;;2"
    },
    {
      "cells": [
        "20210803263I",
        "2902734747",
        "TC20",
        "INS21082000012",
        "2",
        "1",
        "200",
        "Success"
      ],
      "line": 216,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc20---send-request-with-valid-parameters-and-1-file;;3"
    },
    {
      "cells": [
        "20210803264I",
        "2902413193",
        "TC20",
        "INS21082000013",
        "3",
        "1",
        "200",
        "Success"
      ],
      "line": 217,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc20---send-request-with-valid-parameters-and-1-file;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 215,
  "name": "Positive TC20 - Send request with valid Parameters and 1 file",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc20---send-request-with-valid-parameters-and-1-file;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 208,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 209,
  "name": "I call API \"20210803262I\", \"2803494481\", \"TC20\", \"INS21082000011\", \"1\", \"1\"",
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
  "line": 210,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 211,
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
  "duration": 293270800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803262I",
      "offset": 12
    },
    {
      "val": "2803494481",
      "offset": 28
    },
    {
      "val": "TC20",
      "offset": 42
    },
    {
      "val": "INS21082000011",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 68
    },
    {
      "val": "1",
      "offset": 73
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2390208400,
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
  "duration": 88000,
  "status": "passed"
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
  "duration": 6805100,
  "status": "passed"
});
formatter.scenario({
  "line": 216,
  "name": "Positive TC20 - Send request with valid Parameters and 1 file",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc20---send-request-with-valid-parameters-and-1-file;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 208,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 209,
  "name": "I call API \"20210803263I\", \"2902734747\", \"TC20\", \"INS21082000012\", \"2\", \"1\"",
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
  "line": 210,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 211,
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
  "duration": 348451100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803263I",
      "offset": 12
    },
    {
      "val": "2902734747",
      "offset": 28
    },
    {
      "val": "TC20",
      "offset": 42
    },
    {
      "val": "INS21082000012",
      "offset": 50
    },
    {
      "val": "2",
      "offset": 68
    },
    {
      "val": "1",
      "offset": 73
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2911342000,
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
  "duration": 189800,
  "status": "passed"
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
  "duration": 15830000,
  "status": "passed"
});
formatter.scenario({
  "line": 217,
  "name": "Positive TC20 - Send request with valid Parameters and 1 file",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc20---send-request-with-valid-parameters-and-1-file;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 208,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 209,
  "name": "I call API \"20210803264I\", \"2902413193\", \"TC20\", \"INS21082000013\", \"3\", \"1\"",
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
  "line": 210,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 211,
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
  "duration": 288514600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803264I",
      "offset": 12
    },
    {
      "val": "2902413193",
      "offset": 28
    },
    {
      "val": "TC20",
      "offset": 42
    },
    {
      "val": "INS21082000013",
      "offset": 50
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "1",
      "offset": 73
    }
  ],
  "location": "ValidationSteps.iCallAPI(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2349763100,
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
  "duration": 82000,
  "status": "passed"
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
  "duration": 7469700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 219,
  "name": "Positive TC21 - Send request with  Eight files less than Six MB",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc21---send-request-with--eight-files-less-than-six-mb",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 220,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "I call API with  multiple files \"\u003cclmId\u003e\", \"\u003cpolicyNumber\u003e\", \"\u003cdocId\u003e\", \"\u003cboxNo\u003e\", \"\u003cposision\u003e\", \"\u003ctotalFiles\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 222,
  "name": "I get response code \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "I get returnMsg \"\u003creturnMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 225,
  "name": "",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc21---send-request-with--eight-files-less-than-six-mb;",
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
      "line": 226,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc21---send-request-with--eight-files-less-than-six-mb;;1"
    },
    {
      "cells": [
        "20210803261I",
        "2804249504",
        "TC21",
        "INS21082000004",
        "4",
        "8",
        "200",
        "Success"
      ],
      "line": 227,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc21---send-request-with--eight-files-less-than-six-mb;;2"
    },
    {
      "cells": [
        "20210803266I",
        "2902734747",
        "TC21",
        "INS21082000005",
        "5",
        "8",
        "200",
        "Success"
      ],
      "line": 228,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc21---send-request-with--eight-files-less-than-six-mb;;3"
    },
    {
      "cells": [
        "20210803260I",
        "2803494481",
        "TC21",
        "INS21082000006",
        "6",
        "8",
        "200",
        "Success"
      ],
      "line": 229,
      "id": "receive-db-docs-soft-copies-from-ins;positive-tc21---send-request-with--eight-files-less-than-six-mb;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 227,
  "name": "Positive TC21 - Send request with  Eight files less than Six MB",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc21---send-request-with--eight-files-less-than-six-mb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 220,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "I call API with  multiple files \"20210803261I\", \"2804249504\", \"TC21\", \"INS21082000004\", \"4\", \"8\"",
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
  "line": 222,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 223,
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
  "duration": 323453800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803261I",
      "offset": 33
    },
    {
      "val": "2804249504",
      "offset": 49
    },
    {
      "val": "TC21",
      "offset": 63
    },
    {
      "val": "INS21082000004",
      "offset": 71
    },
    {
      "val": "4",
      "offset": 89
    },
    {
      "val": "8",
      "offset": 94
    }
  ],
  "location": "ValidationSteps.iCallAPIWithMultipleFiles(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3085157200,
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
  "duration": 89200,
  "status": "passed"
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
  "duration": 6923100,
  "status": "passed"
});
formatter.scenario({
  "line": 228,
  "name": "Positive TC21 - Send request with  Eight files less than Six MB",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc21---send-request-with--eight-files-less-than-six-mb;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 220,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "I call API with  multiple files \"20210803266I\", \"2902734747\", \"TC21\", \"INS21082000005\", \"5\", \"8\"",
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
  "line": 222,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 223,
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
  "duration": 395632800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803266I",
      "offset": 33
    },
    {
      "val": "2902734747",
      "offset": 49
    },
    {
      "val": "TC21",
      "offset": 63
    },
    {
      "val": "INS21082000005",
      "offset": 71
    },
    {
      "val": "5",
      "offset": 89
    },
    {
      "val": "8",
      "offset": 94
    }
  ],
  "location": "ValidationSteps.iCallAPIWithMultipleFiles(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3096839700,
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
  "duration": 133400,
  "status": "passed"
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
  "duration": 14184100,
  "status": "passed"
});
formatter.scenario({
  "line": 229,
  "name": "Positive TC21 - Send request with  Eight files less than Six MB",
  "description": "",
  "id": "receive-db-docs-soft-copies-from-ins;positive-tc21---send-request-with--eight-files-less-than-six-mb;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 220,
  "name": "I already authorozied",
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "I call API with  multiple files \"20210803260I\", \"2803494481\", \"TC21\", \"INS21082000006\", \"6\", \"8\"",
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
  "line": 222,
  "name": "I get response code 200",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 223,
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
  "duration": 436570700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20210803260I",
      "offset": 33
    },
    {
      "val": "2803494481",
      "offset": 49
    },
    {
      "val": "TC21",
      "offset": 63
    },
    {
      "val": "INS21082000006",
      "offset": 71
    },
    {
      "val": "6",
      "offset": 89
    },
    {
      "val": "8",
      "offset": 94
    }
  ],
  "location": "ValidationSteps.iCallAPIWithMultipleFiles(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10440075500,
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
  "duration": 131000,
  "status": "passed"
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
  "duration": 8408100,
  "status": "passed"
});
});