package stepDefinitions;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;
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
	File pdf1 = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo1.pdf");
	File pdf2 = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo2.pdf");
	File pdf3 = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo3.pdf");
	File pdf4 = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo4.pdf");
	File pdf5 = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo5.pdf");
	File pdf6 = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo6.pdf");
	File pdf7 = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo7.pdf");
	File pdf8 = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo8.pdf");
	File pdf9 = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\demo9.pdf");
	File pdfInvalid = new File("C:\\Automation\\WorkSpace\\cxtDocAPI\\src\\test\\resources\\Files\\hosts.txt");
	
	UploadRequests requestParams = new UploadRequests();

	@Given("^I already authorozied$")
	public void iAlreadyAuthorozied() throws Throwable {
		token = getTokens().genToken();
	}

	@When("^I call API \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void iCallAPI(String claimId, String policyNumber, String docId, String boxNo, String posision, String totalFiles) throws Throwable {	
		String timestamp = new SimpleDateFormat("ddMMyyyyhhmmss").format(Calendar.getInstance().getTime());
		System.out.println(timestamp);
		Map<String, String> params = requestParams.Params(claimId, policyNumber, docId+timestamp, boxNo, posision, totalFiles);
		response = getEndPoints().uploadDoc(token, pdf1, params);
		System.out.println(response.asString());
	}
	@When("^I call API empty DocId \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void iCallAPIEmpatyDocId(String claimId, String policyNumber, String docId, String boxNo, String posision, String totalFiles) throws Throwable {
		Map<String, String> params = requestParams.Params(claimId, policyNumber, docId, boxNo, posision, totalFiles);
		response = getEndPoints().uploadDoc(token, pdf1, params);
		System.out.println(response.asString());
	}

	@When("^I call API with invalid file type \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void iCallAPIWithInvalidFileType(String claimId, String policyNumber, String docId, String boxNo, String posision, String totalFiles)  throws Throwable {	   
		String timestamp = new SimpleDateFormat("ddMMyyyyhhmmss").format(Calendar.getInstance().getTime());
		System.out.println(timestamp);
		Map<String, String> params = requestParams.Params(claimId, policyNumber, docId+timestamp, boxNo, posision, totalFiles);
		response = getEndPoints().uploadDoc(token, pdfInvalid, params);
		System.out.println(response.asString());
	}
	@When("^I call API duplicated doc id \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void iCallAPIDuplicatedDocId(String claimId, String policyNumber, String docId, String boxNo, String posision, String totalFiles) throws Throwable {
		Map<String, String> params = requestParams.Params(claimId, policyNumber, docId, boxNo, posision, totalFiles);
		response = getEndPoints().uploadDoc(token, pdf1, params);
		System.out.println(response.asString());
	}
	
	@When("^I call API with  multiple files \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void iCallAPIWithMultipleFiles(String claimId, String policyNumber, String docId, String boxNo, String posision, String totalFiles) throws Throwable {
		String timestamp = new SimpleDateFormat("ddMMyyyyhhmmss").format(Calendar.getInstance().getTime());
		System.out.println(timestamp);
		Map<String, String> params = requestParams.Params(claimId, policyNumber, docId+timestamp, boxNo, posision, totalFiles);		
		response = getEndPoints().uploadMultiDoc(token, pdf1,pdf2,pdf3,pdf4,pdf5,pdf6,pdf7,pdf8, params);
		System.out.println(response.asString());	    
	}
	
		
	@When("^I call API with files more than Six MB \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void iCallAPIWithFilesMoreThanSixMB(String claimId, String policyNumber, String docId, String boxNo, String posision, String totalFiles) throws Throwable {
		String timestamp = new SimpleDateFormat("ddMMyyyyhhmmss").format(Calendar.getInstance().getTime());
		System.out.println(timestamp);
		
		Map<String, String> params = requestParams.Params(claimId, policyNumber, docId+timestamp, boxNo, posision, totalFiles);
		response = getEndPoints().uploadMultiDocs(token, pdf1,pdf2,pdf3,pdf4,pdf5,pdf6,pdf7,pdf8,pdf9, params);
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
	
	@Then("^I get error \"([^\"]*)\"$")
	public void iGetError(String expectedError) throws Throwable {
		String error = JsonPath.from(response.asString()).get("error");
		System.out.println("error: " + error);
		System.out.println("expected Msg: " + expectedError);
		System.out.println("===========================");
		Assert.assertEquals( expectedError.toLowerCase(),error.toLowerCase());
		
	}

	@Then("^response code should not (\\d+)$")
	public void responseCodeShouldNot(int arg1) throws Throwable {
		int code = response.statusCode();
		System.out.println("response status code: " + code);
		System.out.println("");
		Assert.assertNotEquals(arg1, code);
	}


}
