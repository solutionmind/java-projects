package clone.pojo;

import java.util.List;

public class Employee implements Cloneable {
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
	
	/*This is example of Shallow Copy. java clone method gives shallow copy by default*/
	public Employee clone() throws CloneNotSupportedException{
		return (Employee)super.clone();
	}
	
	public String toString(){
		return "id : " + id +  "," + "name : " + name + "," + "certificates : " + certificates;
	}
}
