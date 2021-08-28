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
	
	public Response uploadMultiDoc( String token,File pdf1,File pdf2,File pdf3,File pdf4,File pdf5,File pdf6,File pdf7,File pdf8, Map<String, String> params) {
	request.header("Authorization", "Bearer " + token);	
	request.multiPart("file",pdf1,"application/pdf");
	request.multiPart("file",pdf2,"application/pdf");
	request.multiPart("file",pdf3,"application/pdf");
	request.multiPart("file",pdf4,"application/pdf");
	request.multiPart("file",pdf5,"application/pdf");
	request.multiPart("file",pdf6,"application/pdf");
	request.multiPart("file",pdf7,"application/pdf");
	request.multiPart("file",pdf8,"application/pdf");
	request.params(params);
	//request.log().all();	
	return	response = request.post(searchPath);		 
	}
	
	public Response uploadMultiDocs( String token,File pdf1,File pdf2,File pdf3,File pdf4,File pdf5,File pdf6,File pdf7,File pdf8,File pdf9, Map<String, String> params) {
	request.header("Authorization", "Bearer " + token);	
	request.multiPart("file",pdf1,"application/pdf");
	request.multiPart("file",pdf2,"application/pdf");
	request.multiPart("file",pdf3,"application/pdf");
	request.multiPart("file",pdf4,"application/pdf");
	request.multiPart("file",pdf5,"application/pdf");
	request.multiPart("file",pdf6,"application/pdf");
	request.multiPart("file",pdf7,"application/pdf");
	request.multiPart("file",pdf8,"application/pdf");
	request.multiPart("file",pdf9,"application/pdf");
	request.params(params);
	//request.log().all();	
	return	response = request.post(searchPath);		 
	}
	
}
