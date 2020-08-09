package stepDefination;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculateBMITestDefination {
	
	WebDriver driver;
	String currentTitle;
	
	@Given("^user is on the homepage$")
	public void user_is_on_the_homepage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

		System.setProperty("webdriver.chrome.driver","/Users/prajakta/Downloads/chromedriver");
		
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		
		driver.get("https://www.calculator.net/");
		
		
	    
	}

	@Then("^validate a title$")
	public void validate_a_title() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		currentTitle = driver.getTitle();
		
		System.out.print(currentTitle);
		
		if(currentTitle.equalsIgnoreCase("Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science")) {
			System.out.print("Matched");
		}else {
			System.out.print("Invalid Title");
		}
	
	}

	@Given("^navigate to the BMI Calculator page$")
	public void navigate_to_the_BMI_Calculator_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.linkText("BMI Calculator")).click();
	}

	@When("^user enter age ,height,weight to calculate BMI$")
	public void user_enter_age_height_weight_to_calculate_BMI(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		
		driver.findElement(By.id("cage")).clear();
		driver.findElement(By.id("cheightmeter")).clear();
		driver.findElement(By.id("ckg")).clear();
		
		List<List<String>> list = arg1.asLists(String.class);
		for(int i=0; i<list.size(); i++) { //i starts from 1 because i=0 represents the header
			driver.findElement(By.id("cage")).sendKeys(list.get(i).get(0)); 
			driver.findElement(By.id("cheightmeter")).sendKeys(list.get(i).get(1)); 
			driver.findElement(By.id("ckg")).sendKeys(list.get(i).get(2)); 
			driver.findElement(By.xpath("//div//input[@value='Calculate']")).click();
			System.out.println(driver.findElement(By.className("bigtext")).getText());
			driver.findElement(By.id("cage")).clear();
			driver.findElement(By.id("cheightmeter")).clear();
			driver.findElement(By.id("ckg")).clear();
		}
	  
	}


	@Then("^Close Browser$")
	public void close_Browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.close();
	}


}
