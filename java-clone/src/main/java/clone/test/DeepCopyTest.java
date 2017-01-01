package clone.test;

import java.util.ArrayList;
import java.util.List;

import clone.pojo.Person;

public class DeepCopyTest {

	public static void main(String[] args) throws CloneNotSupportedException {
		List<String> certs = new ArrayList<String>();
		certs.add("java");
		certs.add("hadoop");
	
		
		Person original = new Person();
		original.setId(1); //immutable
		original.setName("rajesh"); //immutable
		original.setCertificates(certs); //mutable
		
		Person copy = original.clone();
		
		if(original != copy){
			System.out.println("Original and Copy are never same object in heap");
		}
		
		System.out.println("original before modification - " + original );
		System.out.println("copy before modification - " + copy );
		
		//modifying certificates list object in original
		original.getCertificates().add("scala");
		
		/*original and copy will refer to same certificates list object in heap 
		though it was modified only in original - This is example of Shallow Copy 
		java clone method gives shallow copy by default*/
		System.out.println("original after modification - " + original );
		System.out.println("copy after modification - " + copy );

	}

}
