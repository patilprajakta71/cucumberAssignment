Feature: Calculate BMI
  

  @Regression
  Scenario: Validate title 
    Given user is on the homepage
    Then validate a title
    And Close Browser
    
    
   @Regression
   Scenario: Calculate BMI
   	Given user is on the homepage
		And navigate to the BMI Calculator page
		When user enter age ,height,weight to calculate BMI
			|10|127|40|
			|30|156|70|
			|25|152|55|
			|20|160|45|
			|35|160|70|
		Then Close Browser
 