package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

//Runner class to execute the test
@RunWith(Cucumber.class)
@CucumberOptions(snippets = SnippetType.CAMELCASE, features = "src/test/resources/Feature/DocSoftCopyAPI.feature", glue = "stepDefinitions", format = {
		"json:target/cucumber-reports/cucumber.json" }, plugin = { "junit:target/cucumber-reports/Cucumber.xml",
				"html:target/cucumber-reports" })

public class ApiRunnerTest {
}
