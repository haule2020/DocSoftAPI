//API engine pachge
package apiEngine;

import java.io.File;
import java.util.Map;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import managers.ConfigFileReader;

//API request methods used in the test
public class EndPoints {

	private RequestSpecification request;
	public Response response;
	private final String searchPath = ConfigFileReader.getInstance().searchPath();
	
	public EndPoints(String url) {
		RestAssured.baseURI = url;	
		request =RestAssured.given();
	}

	public Response uploadDoc( String token,File pdf, Map<String, String> params) {
	request.header("Authorization", "Bearer " + token);	
	request.multiPart("file",pdf,"application/pdf");
	request.params(params);
	//request.log().all();	
	return	response = request.post(searchPath);		 
	}
}
