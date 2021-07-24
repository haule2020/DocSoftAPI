package bodyResponseFields;

import java.util.List;

//POJO class to store fields and values converted from  body response JSON file
public class PolicyInsured {
	public String clientNumber;	
	public String clientName;
	public String birthdate;
	public String sexCode;
	public String idNumber;
	public String mcIndicator;
	public List<Coverages> coverages;
}
