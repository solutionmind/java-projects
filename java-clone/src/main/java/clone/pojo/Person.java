package clone.pojo;

import java.util.ArrayList;
import java.util.List;

public class Person implements Cloneable {
	private int id; //immutable
	private String name; //immutable
	private List<String> certificates; //mutable
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<String> getCertificates() {
		return certificates;
	}
	public void setCertificates(List<String> certificates) {
		this.certificates = certificates;
	}
	
	/*This is example of Deep Copy. java clone method gives shallow copy by default.
	 * In order to give Deep Copy, As a programmer you need to set mutable object manually one by one*/
	public Person clone() throws CloneNotSupportedException{
		Person copy =  (Person)super.clone();
		List<String> copyCertificates = new ArrayList<String>();
		
		for(String cert : this.getCertificates()){
			copyCertificates.add(cert);
		}
		copy.setCertificates(copyCertificates);
		return copy;
	}
	
	public String toString(){
		return "id : " + id +  "," + "name : " + name + "," + "certificates : " + certificates;
	}
}
