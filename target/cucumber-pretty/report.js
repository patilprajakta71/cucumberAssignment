$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calculateBMI.feature");
formatter.feature({
  "line": 1,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculate-bmi",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Validate title",
  "description": "",
  "id": "calculate-bmi;validate-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "validate a title",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "CalculateBMITestDefination.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 5163187996,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMITestDefination.validate_a_title()"
});
formatter.result({
  "duration": 8111231,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMITestDefination.close_Browser()"
});
formatter.result({
  "duration": 186846347,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculate-bmi;calculate-bmi",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "navigate to the BMI Calculator page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter age ,height,weight to calculate BMI",
  "rows": [
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 16
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 17
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 18
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 19
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBMITestDefination.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 3761107040,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMITestDefination.navigate_to_the_BMI_Calculator_page()"
});
formatter.result({
  "duration": 1324618680,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMITestDefination.user_enter_age_height_weight_to_calculate_BMI(DataTable)"
});
formatter.result({
  "duration": 9324911586,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBMITestDefination.close_Browser()"
});
formatter.result({
  "duration": 243421795,
  "status": "passed"
});
});