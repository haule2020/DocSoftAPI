//package apiEngine;
//
//import org.junit.Assert;
//
//import bodyRequests.TokenRequests;
//import bodyRequests.UploadRequests;
//import io.restassured.response.Response;
//import managers.ConfigFileReader;
//
//public class UploadDoc {
//	
//	private EndPoints endPoints = new EndPoints(ConfigFileReader.getInstance().getBaseUrl());
//	private GenerateToken tokens = new GenerateToken(ConfigFileReader.getInstance().getTokenUrl());
//	
//	public Response uploadDocument(String token) {	
//
//		UploadRequests upload = new UploadRequests(claimId, policyNumber, docId, boxNo, posision, totalFiles);
//	
//	}	
//}
