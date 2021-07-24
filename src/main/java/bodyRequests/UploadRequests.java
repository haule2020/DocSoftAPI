package bodyRequests;

import java.util.HashMap;
import java.util.Map;

public class UploadRequests {
		
	public Map<String,String>  Params( String claimId, String policyNumber, String docId, String boxNo, String posision, String totalFiles) {	
		
		Map<String, String> params= new HashMap<String, String> ();
		params.put("claimId", claimId);
		params.put("policyNumber", policyNumber);
		params.put("docId", docId);
		params.put("boxNo", boxNo);
		params.put("posision", posision);
		params.put("totalFiles", totalFiles);
		
		return params; 
		}
}
