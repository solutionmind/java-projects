package collection.hashset.test;

public class Person {
	private String name;
	private int id;
	
	public Person(String name,int id){
		this.name = name;
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public boolean equals(Object obj) {
		Person other = (Person) obj;
		boolean isEqual = false;

		if (this.id == other.getId()) {
			isEqual = true;
		}
		return isEqual;

	}
	
	public int hashCode(){
		return new Integer(this.id).hashCode();
	}

}
