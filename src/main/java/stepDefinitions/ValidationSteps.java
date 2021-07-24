package stepDefinitions;

import java.io.File;
import java.util.Map;

import org.junit.Assert;

import bodyRequests.UploadRequests;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import shareContext.TestContext;

public class ValidationSteps extends BaseSteps {

	public ValidationSteps(TestContext testContext) {
		super(testContext);
	}

	Response response;
	RequestSpecification request;
	String token;
	File pdf = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo.pdf");
	UploadRequests requestParams = new UploadRequests();

	@Given("^I already authorozied$")
	public void iAlreadyAuthorozied() throws Throwable {
		token = getTokens().genToken();
	}

	@When("^I call API \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void iCallAPI(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {			
		Map<String, String> params = requestParams.Params(arg1, arg2, arg3, arg4, arg5, arg6);
		response = getEndPoints().uploadDoc(token, pdf, params);
		System.out.println(response.asString());
	}

	@Then("^I get response code (\\d+)$")
	public void iGetResponseCode(int arg1) throws Throwable {
		int code = response.statusCode();
		System.out.println("response status code: " + code);
		System.out.println("");
		Assert.assertEquals(arg1, code);
	}

	@Then("^I get returnMsg \"([^\"]*)\"$")
	public void iGetReturnMsg(String expectedReturnMsg) throws Throwable {
		String returnMsg = JsonPath.from(response.asString()).get("returnMsg");
		System.out.println("returnMsg: " + returnMsg);
		System.out.println("expected Msg: " + expectedReturnMsg);
		System.out.println("===========================");
		Assert.assertEquals( expectedReturnMsg.toLowerCase(),returnMsg.toLowerCase());
		
	}
}
